import { ResponseType } from '../controllers/judge0.controller';
import { ResponseFomat } from '../interfaces/response-format/response-format.interface';
import { IResult } from '../interfaces/test/answer.interface';

/**
 * Calculate test score base on testType
 * @param testCases
 * @returns
 */
const testCasePercentage = (testCases: IResult[]): {totalScore: number, takenScore: number}=> {
    const score = testCases.reduce((acc, curr) => {
        if (curr.status !== 'success') {
            return acc;
        }
        return acc + curr.score;
    }, 0) as number;
    const total = testCases.reduce((acc, curr) => acc + +curr.score, 0);
    console.log(score, total);

    return {totalScore: total, takenScore: score};
}


const calculateScore = (testCases: ResponseType): ResponseFomat[] => {
    const formatedResponse = Object.keys(testCases).map(testType => {
        const {totalScore, takenScore} = testCasePercentage(testCases[testType]);
        return {
            testType,
            totalScore,
            takenScore,
            results: testCases[testType]
        }
    });
    console.log(formatedResponse, 'formatedResponse');

    return formatedResponse;
}
export { calculateScore };