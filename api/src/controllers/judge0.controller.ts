import e, { Request, Response } from "express";
import "dotenv/config"
import BadRequestError from "../errors/bad-request.error";
import axios from "axios";
import http from 'http';

import Test from "../models/tests";
import { ITest } from "../interfaces/test/test.interface";
import { ITestCase } from "../interfaces/test/test-case.interface";
import { asyncHandler } from "../utils/async-handler";
import { IJudge0Result, IResult, ResultCategory, ResultMessage } from '../interfaces/test/answer.interface';
import { updateTestByIdController } from './test.controller';
import { BatchRequest } from '../services/batch-request';
import { calculateAverageScore, calculateScore } from '../services/score-calculation';
const TEST_ADVANCE = ['advanced', 'memory', 'performance', 'time'];


const getTestById = async (id: string): Promise<ITest> => {
  try {
    const tests = await Test.findById(id);
    return tests
  } catch (error) {
    throw new BadRequestError(error?.message);
  }

};

export type ResponseType = Partial<Record<ResultCategory, IResult[]>>;

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


    const result: Partial<IResult> = !TEST_ADVANCE.includes(current.testType) ? {
      text: current.text,
      input: current.input,
      stdout: current.status.id === 3 ? current.stdout.replace(/(\r\n|\n|\r)/gm, "") : current.stdout, // 3 is success status the response come from judge0 status
      output: current.expected_output,
      status: 'success',
      totalScore: +current.score,
      time:current.time
    } : {
      text: current.text,
      totalScore: +current.score,
      output: current.expected_output,
      stdout: current.status.id === 3 ? current.stdout.replace(/(\r\n|\n|\r)/gm, "") : current.stdout, // 3 is success status the response come from judge0 status
      input: current.input,
      time: current.time,
      message: current.status.description as ResultMessage,
    }

    /**
     * if given output is not equal to the output which provide by jude0 then the status will be failure
     * if the id status of judge 0 is other than 3 then which means there are some error in the code
     * if the id status of judge 0 is 3 and output given is equal to judge0 stdout then which means the code is correct
     *
     * for more information about judge0 status code please visit https://ce.judge0.com/statuses
     */
    result.status = current.expected_output !== result.stdout ? 'failure' : current.status.id !== 3 ? 'error' : 'success';

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
const runTestCases = async (testCases: ITestCase[], source_code: string, language_id: string) => {
  try {
    const result = await BatchRequest(testCases, source_code, language_id);
    return result;

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
const filterTestCases = (testCases: ITestCase[], advance = true): ITestCase[] => {
  const basicType = ['example','basic','advanced'];
  const advanceType = ['example', 'basic', 'advanced'];
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

  const formatedResponse = await formatResult(results);

  // calculate the score of the test
  let testTypeBaseScore: any  = calculateScore(formatedResponse);
  // calculate total score of all test
  const { totalScore, takenScore } = calculateAverageScore(testTypeBaseScore)
  const answer = { totalScore, takenScore, code: source_code, languageId: language_id, results:testTypeBaseScore };
  testTypeBaseScore = answer;
  if (submit) {
    testTypeBaseScore = await updateTestByIdController(test_id, answer);

  }
  res.send(testTypeBaseScore);
});

export { Judge0RunController };
