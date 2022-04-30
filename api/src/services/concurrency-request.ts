import axios from 'axios';
import http from 'http';
import async from 'async';
import { ITestCase } from '../interfaces/test/test-case.interface';
import { ITestBody } from '../interfaces/test/test-body.interface';

const ParallelRequest = async (testCases: ITestCase[], source_code: string, language_id: string) => {
    const body = await arrangeRequestBody(testCases, source_code, language_id);
    const { data } = await axios.post(`${process.env.JUDGE0_HOST}/submissions/batch?base64_encoded=false&wait=true`, { submissions: body });
    const tokens = data.map(token => `${process.env.JUDGE0_HOST}/submissions/batch?tokens=${token.token}&base64_encoded=false&fields=stdout,stderr,status_id,language_id,stdin,expected_output,message,status`)
    const results = await getResults(tokens);
    console.log('arrange');

    const arrangedOutput = arrangeOutput(results,testCases);
    return arrangedOutput;
};


const arrangeOutput = (results: any[],testCases: ITestCase[]) => {
    const arrangedOutput = results.map((result) => ({
        ...result,
        testType: testCases.find(tc => tc.input === result.stdin)?.testType,
        text: testCases.find(tc => tc.input === result.stdin)?.text
    }));
    return arrangedOutput;
};

const arrangeRequestBody = async (testCases: ITestCase[], source_code: string, language_id: string): Promise<ITestBody[]> => {
    const requests = testCases.map((tc) => ({
        redirect_stderr_to_stdout: true,
        source_code: source_code,
        language_id: language_id,
        stdin: tc.input,
        expected_output: tc.output
    }));
    return requests;
};
const fetchURL = (url) => axios.get(url);

const getResults = async (urls: string[]) => {
    const promiseArray = urls.map(url => fetchURL(url));
    const results = await (await Promise.all(promiseArray).then(res => res.map(res => res.data).map(res => res.submissions))).flat(Infinity);
    return results;
}

export { ParallelRequest }