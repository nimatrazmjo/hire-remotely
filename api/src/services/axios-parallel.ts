import axiosParallel, { AxiosParallelInput, AxiosParallelResponse } from 'axios-parallel';
import axios from 'axios';
// Debug
import { performance } from 'perf_hooks';

import { ITestCase } from '../interfaces/test/test-case.interface';
import { arrangeRequestBody } from './concurrency-request';
import BadRequestError from '../errors/bad-request.error';

const AxiosRequest = async (testCases: ITestCase[], source_code: string, language_id: string) => {
    console.log('axios parallel');

    try {
        const start = performance.now();
        const body = await arrangeRequestBody(testCases, source_code, language_id);
        const { data } = await axios.post(`${process.env.JUDGE0_HOST}/submissions/batch?base64_encoded=false&wait=true`, { submissions: body });
        const requests = data.map(token => ({
            method: 'GET',
            url: `${process.env.JUDGE0_HOST}/submissions/batch?tokens=${token.token}&base64_encoded=false&fields=stdout,stderr,status_id,language_id,stdin,expected_output,message,status`
        }));
        const MAX_PARALLEL_REQUEST_PER_CPU = 4;
        const response: AxiosParallelResponse[] = await axiosParallel(requests, MAX_PARALLEL_REQUEST_PER_CPU);

        const results = response.map((res) => res.data.submissions[0]);
        const arrangedOutput = arrangeOutput(results, testCases);
        // check the performance
        const end = performance.now() - start;
        console.log(`Execution time: ${end}ms`);

        return arrangedOutput;

    } catch (error) {
        throw new BadRequestError(error?.message);
    }

};

const arrangeOutput = (results: any[], testCases: ITestCase[]) => {
    const arrangedOutput = results.map((result) => ({
        ...result,
        testType: testCases.find(tc => tc.input === result.stdin)?.testType,
        text: testCases.find(tc => tc.input === result.stdin)?.text,
        input: result.stdin
    }));
    return arrangedOutput;
};


export { AxiosRequest }