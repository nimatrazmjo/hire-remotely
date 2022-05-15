import axios from 'axios';
import { ITestCase } from '../interfaces/test/test-case.interface';
import { ITestBody } from '../interfaces/test/test-body.interface';
import BadRequestError from '../errors/bad-request.error';

const ParallelRequest = async (testCases: ITestCase[], source_code: string, language_id: string) => {
    console.log('Promise all');
    try {

        const start = performance.now();
        const body = await arrangeRequestBody(testCases, source_code, language_id);
        const { data } = await axios.post(`${process.env.JUDGE0_HOST}/submissions/batch?base64_encoded=false&wait=true`, { submissions: body });
        const tokens = data.map(token => `${process.env.JUDGE0_HOST}/submissions/batch?tokens=${token.token}&base64_encoded=false&fields=stdout,stderr,status_id,language_id,stdin,expected_output,message,status`)
        const results = await getResults(tokens);
        const arrangedOutput = arrangeOutput(results, testCases);
        const end = performance.now() - start;
        console.log(`Execution time: ${end}ms`);
        return arrangedOutput;
    } catch (error: any) {
        console.log(error?.message, 'errror');
        throw new BadRequestError(error?.message)
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

export { ParallelRequest, arrangeRequestBody, fetchURL, arrangeOutput }