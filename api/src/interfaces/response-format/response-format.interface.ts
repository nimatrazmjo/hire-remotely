import { IResult } from '../test/answer.interface';

export interface ResponseFomat {
    testType: string;
    totalScore: number;
    takenScore: number;
    results: IResult[];
}