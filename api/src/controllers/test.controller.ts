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

const createTestController = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { language } = req.body;
    if (!language || typeof language !== 'string') {
        throw new BadRequestError('please send language id');
    }
    const question = await findRandomQuestion(language);
    const hash = randomBytes(30).toString('hex');
    await Test.create({hash, questions: question.question});
    res.status(201).json({hash});
})

export {
    createTestController
}