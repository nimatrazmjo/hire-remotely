import { NextFunction, Request, Response } from "express";
import { randomBytes } from "crypto";

import BadRequestError from "../errors/bad-request.error";
import { IQuestionAttrs } from "../interfaces/question/question.interface";
import { asyncHandler } from "../services/async-handler";

import Question from "../models/question";
import Test from "../models/tests";

const findRandomQuestion = async (language: string): Promise<IQuestionAttrs> => {    
    try {
        const questionCount = await Question.estimatedDocumentCount({ "snippets.language": language });
        if (!questionCount) {
            throw new BadRequestError('Question does not exists for the selected language');
        }
        const random = Math.floor(Math.random() * questionCount);
        const question = Question.findOne({ "snippets.language": language }).skip(random);
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
    const question = await findRandomQuestion(language);
    const hash = randomBytes(30).toString('hex');
    await Test.create({ hash, questions: question.question });
    res.status(201).json({ hash });
});

const getTestByHashController = asyncHandler(async (req: Request, res: Response) => {
    const { hash } = req.params;
    const test = await Test.findOne({hash});
    if (!test) {
        throw new BadRequestError('Test not found');
    }
    //TODO check if test timer has been expired
    res.send(test);
});

export {
    createTestController,
    getTestByHashController
}