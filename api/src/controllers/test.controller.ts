import { NextFunction, Request, Response } from "express";
import { randomBytes } from "crypto";

import BadRequestError from "../errors/bad-request.error";
import { IQuestionAttrs } from "../interfaces/question/question.interface";
import { asyncHandler } from "../utils/async-handler";

import Question from "../models/question";
import Test from "../models/tests";
import { IResult } from '../interfaces/test/answer.interface';

const findRandomQuestion = async (language: string[]): Promise<IQuestionAttrs[]> => {    
    try {
        const questionCount = await Question.countDocuments({"snippets":{$elemMatch:{"language":{ $in: [...language]}}}});
        if (!questionCount) {
            throw new BadRequestError('Question does not exists for the selected language');
        }
        const random = Math.floor(Math.random() * questionCount);
        const question = Question.find({"snippets":{$elemMatch:{"language":{ $in: [...language]}}}}).sort({"snippets.language":1}).limit(3);
        return question;
    } catch (error) {

        throw new BadRequestError(error?.message);
    }
}

const createTestController = asyncHandler(async (req: Request, res: Response) => {
    const { language } = req.body;
    if (!language) {
        throw new BadRequestError('please send language id');
    }
    const questions = await findRandomQuestion(language);
    
    const hash = randomBytes(30).toString('hex');
    const tests = questions.map(q => ({hash, question: q.question, snippets: q.snippets,testCases: q.tests}))
    await Test.insertMany(tests);
    res.status(201).json({ hash });
});

const getTestByHashController = asyncHandler(async (req: Request, res: Response) => {
    const { hash } = req.params;
    const test = await Test.paginate({hash, "answer.code": {$exists: false}},{page:1, limit:1});
    if (!test) {
        throw new BadRequestError('Test not found');
    }
    //TODO check if test timer has been expired
    res.send(test);
});

const updateTestByIdController =  async (id: string, code: string, resut: IResult[]): Promise<{message: string}> => { 
    try {
        
        await Test.updateOne({_id: id}, { $set: { answer:{code, testResult: resut }} });
        return { message: 'ok' };   
    } catch (error) {
        throw new BadRequestError(error?.message);
    }
};

export {
    createTestController,
    getTestByHashController,
    updateTestByIdController
}