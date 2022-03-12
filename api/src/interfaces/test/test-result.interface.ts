import { ITestCase } from "./test-case.interface";

export interface ITestResult {
    language_id: number; // the language which the user has solved
    answer: string; // code which he has written
    testCase: [ITestCase]
}