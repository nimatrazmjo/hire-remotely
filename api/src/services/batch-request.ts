import axios from 'axios';
import { ITestCase } from '../interfaces/test/test-case.interface';
import { ITestBody } from '../interfaces/test/test-body.interface';
import BadRequestError from '../errors/bad-request.error';
import { Judge0Output } from '../interfaces/judge0/judge0-output';

const options = {
    method: 'GET',
    url: 'https://judge0-ce.p.rapidapi.com/submissions/batch?base64_encoded=false&wait=true',
    headers: {
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
        'X-RapidAPI-Key': '7afdf2c5eamshf417da207f1ebb4p18e859jsne31b15c5c7ab'
    },
    json: true
};

const BatchRequest = async (testCases: ITestCase[], source_code: string, language_id: string) => {
    try {

        const start = performance.now();

        const body = await arrangeRequestBody(testCases, source_code, language_id);
        const { data } = await axios.request({
            method: 'POST',
            url: `http://35.231.250.3:2358/submissions/batch`,
            headers: {
                'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
                'X-RapidAPI-Key': '7afdf2c5eamshf417da207f1ebb4p18e859jsne31b15c5c7ab'
            },
            data: { submissions: body }
        });
        const tokens = data.map(({ token }) => token).toString();
        const results = await getResults(tokens);
        const arrangedOutput = await arrangeOutput(results, testCases);
        const end = performance.now() - start;
        console.log(`Execution time: ${end}ms`);
        return arrangedOutput.filter(Boolean);
    } catch (error: any) {
        console.log(error, 'errror');
        throw new BadRequestError(error?.message)
    }
};


const arrangeOutput = async (results: any[], testCases: ITestCase[]) => {
    const pendingTestCasesToken = [];
    const pendingTasksStatus = [1, 2]; //1: In Queue, 2: Processing
    let pendingOutPut = []
    const arrangedOutput = results.map((result) => {
        if (pendingTasksStatus.includes(result.status_id)) {  // check if test case status is pending or queue
            pendingTestCasesToken.push(result.token);
        } else {
            return ({
                ...result,
                testType: testCases.find(tc => tc.input === result.stdin)?.testType,
                text: testCases.find(tc => tc.input === result.stdin)?.text,
                input: result.stdin,
                score: testCases.find(tc => tc.input === result.stdin)?.score,
                stdout: result.stdout ? result.stdout.replace(/(\r\n|\n|\r)/gm, "") : null
            })
        }
    });
    if (pendingTestCasesToken.length > 0) { // Call again if there are pending test cases
        const pendingResults = await getResults(pendingTestCasesToken.toString());
        pendingOutPut.push(...await arrangeOutput(pendingResults, testCases));
    }
    return [...arrangedOutput, ...pendingOutPut];
};

const arrangeRequestBody = async (testCases: ITestCase[], source_code: string, language_id: string): Promise<ITestBody[]> => {
    const requests = testCases.map((tc) => ({
        redirect_stderr_to_stdout: true,
        source_code: source_code,
        language_id: language_id,
        stdin: tc.input,
        expected_output: tc.output,
        time: tc.time
    }));
    return requests;
};
const fetchURL = async (tokens) => await axios.request({
    method: 'GET',
    url: `http://35.231.250.3:2358/submissions/batch?tokens=${tokens}&base64_encoded=false&fields=stdout,stderr,status_id,language_id,stdin,expected_output,message,status,token,time`,
    headers: {
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
        'X-RapidAPI-Key': '7afdf2c5eamshf417da207f1ebb4p18e859jsne31b15c5c7ab'
    }
});

const getResults = async (tokens: string): Promise<Judge0Output[]> => {
    const { data: { submissions } } = await fetchURL(tokens);
    return submissions;
}

export { BatchRequest, arrangeRequestBody, fetchURL, arrangeOutput }