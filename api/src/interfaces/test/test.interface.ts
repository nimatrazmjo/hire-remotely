import { Types } from "mongoose";

export interface ITest {
    hash: string; 
    questions: Types.Array<string>
}