import e, { Request, Response } from "express";
import BadRequestError from "../errors/bad-request.error";
import axios from "axios";

import Test from "../models/tests";
import { ITest } from "../interfaces/test/test.interface";
import { ITestCase } from "../interfaces/test/test-case.interface";
import { asyncHandler } from "../utils/async-handler";
import { IResult, ResultCategory } from '../interfaces/test/answer.interface';
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
const formatResult = (result: IResult[]): ResponseType => {
  const finalResult: ResponseType = result.reduce((acc, current) => {
    if (acc[current.testType] === undefined) {
      acc[current.testType] = [];
    }
    acc[current.testType].push(current);
    return acc;
  }, {});
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
 *  Once the user submited the code the advance result will be returned withs some customization of the result
 * @param response 
 * @returns 
 */
const advanceResult = (response: ResponseType): ResponseType => {
  return {
    basic: response.basic,
    advanced: response.advanced,
    memory: response.memory,
    performance: response.performance,
  } as ResponseType;
}

/**
 * If the user click on compile button then only the example test cases will be run
 * @param response 
 * @returns 
 */
const basicResult = (response: ResponseType): ResponseType => {
  return {exmaple: response.example!} as ResponseType;
}


/**
 * 
 * @param response send the response to the user based on submission
 * @param submit 
 * @returns 
 */
const formatResponse = (response: ResponseType, submit = false): ResponseType => {
  if (submit === true) {
    return advanceResult(response);
  } else {
    return basicResult(response);
  }
}

/**
 * Main controller to handle the judge0 request and responses
 */
const Judge0RunController = asyncHandler(async (req: Request, res: Response) => {
  const { language_id, source_code, test_id, submit } = req.body;
  const test = await getTestById(test_id);
  const results = await runTestCases(test.testCases, source_code, language_id);
  if (submit) {
    await updateTestByIdController(test_id, source_code, results);

  }
  const formatedResponse = await formatResult(results);

  res.send(formatResponse(formatedResponse, submit));
});

export { Judge0RunController, ResultCategory };
