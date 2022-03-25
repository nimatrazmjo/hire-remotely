import { ITestCase } from "./test-case.interface";

export interface ITest {
    hash: string; 
    question: string;
    testCases: ITestCase[]
}