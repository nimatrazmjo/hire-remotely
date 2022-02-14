import Question from "../models/question";
import { Request, Response } from "express";
import NotFoundError from "../errors/not-found.error";
import BadRequestError from "../errors/bad-request.error";

const questionInsertController = async (req: Request, res: Response) => {
  const result = Question.build(req.body);
  await result.save();
  res.status(201).json(result);
};

const questionByIdController = async (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new BadRequestError("Invalid Id");
  }

  const question = await Question.findById(req.params.id);
  if (!question) {
    throw new NotFoundError("Question does not found");
  }
  res.status(200).json(question);
};

const questionUpdateByIdController = async (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new BadRequestError("Invalid Id");
  }

  //TODO only authorized user should update the question

  const foundQuestion = await Question.findById(req.params.id);
  if (!foundQuestion) {
    throw new NotFoundError("Question does not found");
  }

  const { question, snippets, tests } = req.body;
  await foundQuestion.set({
    question: question,
    snippets: snippets,
    tests: tests,
  });

  res.status(201).json(foundQuestion);
};

const questionListController = async (req: Request, res: Response) => {
  res.status(200).json(await Question.find({}).limit(10).sort({ _id: -1 }));
};

export {
  questionInsertController,
  questionByIdController,
  questionUpdateByIdController,
  questionListController,
};
