import { Request, Response } from "express";
import BadRequestError from "../errors/bad-request.error";
import { Buffer } from "buffer";
import axios from "axios";

import Test from "../models/tests";
import { ITest } from "../interfaces/test/test.interface";
import { ITestCase } from "../interfaces/test/test-case.interface";
import { asyncHandler } from "../utils/async-handler";

interface IResult {
  text: string;
  input: string;
  output: string;
  testType: string;
  stdout: string;
  time: string;
  memory: string;
  stderr: string | null;
  message: string;
  status: {
    id: number,
    description: string
  }
}

enum ResultCategory {
  example,
  basic,
  advanced,
  memory,
  performance
}


const getTestById = async (id: string): Promise<ITest> => {
  try {
    const tests = await Test.findById(id);
    return tests
  } catch (error) {
    throw new BadRequestError(error?.message);
  }

};

const formatResult = (result:IResult[]):Partial<Record<ResultCategory, IResult[]>> => {
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
  const { language_id, source_code, test_id } = req.body;
  const test = await getTestById(test_id);
  const results = await runTestCases(test.testCases, source_code, language_id);
  const formatedResponse = await formatResult(results);
  res.send(formatedResponse);
});

export { Judge0RunController };
