import e, { Request, Response } from "express";
import BadRequestError from "../errors/bad-request.error";
import axios from "axios";

import Test from "../models/tests";
import { ITest } from "../interfaces/test/test.interface";
import { ITestCase } from "../interfaces/test/test-case.interface";
import { asyncHandler } from "../utils/async-handler";
import { IJudge0Result, IResult, ResultCategory, ResultType } from '../interfaces/test/answer.interface';
import { updateTestByIdController } from './test.controller';


const getTestById = async (id: string): Promise<ITest> => {
  try {
    const tests = await Test.findById(id);
    return tests
  } catch (error) {
    throw new BadRequestError(error?.message);
  }

};

type ResponseType = Partial<Record<ResultCategory, IResult[]>>;

/**
 * Format the result of test cases to the format of the judge0
 * @param result 
 * @returns 
 */
const formatResult = (result: IJudge0Result[]): ResponseType => {
  const finalResult = result.reduce((acc, current) => {
    if (acc[current.testType] === undefined) {
      acc[current.testType] = [];
    }
    const result: IResult = {
      text: current.text,
      input: current.input,
      output: current.output,
      stdout: current.status.id ===3 ? current.stdout.replace(/(\r\n|\n|\r)/gm, ""): current.stdout, // 3 is success status the response come from judge0 status 
    }
    acc[current.testType].push(result);
    return acc;
  }, {}) as ResponseType;
  return finalResult;
}


/**
 * Loop each test cases and run it in judge0
 * @param testCases 
 * @param source_code 
 * @param language_id 
 * @returns 
 */
const runTestCases = async (testCases: ITestCase[], source_code, language_id) => {
  try {
    const results = [];
    for await (let tc of testCases) {
      const { data } = await axios.post("http://104.154.92.155/submissions?base64_encoded=false&wait=true",
        {
          command_line_arguments: "",
          compiler_options: "",
          redirect_stderr_to_stdout: true,
          source_code: source_code,
          language_id,
          stdin: tc.input,
          expected_output: tc.output,
        }
      );
      results.push({ text: tc.text, input: tc.input, output: tc.output, testType: tc.testType, ...data });
    }

    return results;
  } catch (error) {
    throw new BadRequestError(error?.message);
  }
};
/**
 * If the user run compile then only the example test cases will be run
 * else all the test cases will be run
 * @param testCases 
 * @param advance 
 * @returns 
 */
const filterTestCases = (testCases:ITestCase[], advance = true):ITestCase[] => {
  const basicType = ['example', 'basic'];
  const advanceType = ['advanced', 'example', 'basic'];
  if (!advance) {
    return testCases.filter((testCase) => basicType.includes(testCase.testType));
  } else {
    return testCases.filter((testCase) => advanceType.includes(testCase.testType));
  }
}

/**
 * Main controller to handle the judge0 request and responses
 */
const Judge0RunController = asyncHandler(async (req: Request, res: Response) => {
  const { language_id, source_code, test_id, submit } = req.body;
  const test = await getTestById(test_id);
  const results = await runTestCases(filterTestCases(test.testCases, submit), source_code, language_id);
  if (submit) {
    await updateTestByIdController(test_id, source_code, results);

  }
  const formatedResponse = await formatResult(results);

  res.send(formatedResponse);
});

export { Judge0RunController };
