import { Request, Response } from "express";
import BadRequestError from "../errors/bad-request.error";
import { Buffer } from "buffer";
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

type ResponseType = Partial<Record<ResultCategory, IResult[]>> | {message: string};

const formatResult = (result:IResult[]):ResponseType => {
   return result.reduce((acc, current)=> {
    if(acc[current.testType] === undefined) {
      acc[current.testType] = [];
    }
    acc[current.testType].push(current);
    return acc;
},{});
}

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

const Judge0RunController = asyncHandler(async (req: Request, res: Response) => {
  const { language_id, source_code, test_id, submit } = req.body;
  const test = await getTestById(test_id);
  const results = await runTestCases(test.testCases, source_code, language_id);
  let formatedResponse:ResponseType  = {message : 'ok'};
  if (submit) {
    await updateTestByIdController(test_id, source_code, results);
    formatedResponse = {message: "ok"}
  } else {
    formatedResponse = await formatResult(results);
  }
  res.send(formatedResponse);
});

export { Judge0RunController,ResultCategory };
