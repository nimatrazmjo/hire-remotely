import { ITestResult } from "./test-result.interface";

export interface ITest {
    hash: string; // hash_Id
    question: string; // Question message
    result: ITestResult
}