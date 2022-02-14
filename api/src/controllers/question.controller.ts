import Question from '../models/question'
import { Request, Response } from "express";

const QuestionInsertController = async (req: Request, res: Response) => {
  const result = Question.build(req.body)
  await result.save();
  res.status(201).json(result);
}

export {
  QuestionInsertController
}