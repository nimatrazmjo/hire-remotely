import { validateRequestMiddleware } from "./../middlewares/validation.middleware";
import express, { Router } from "express";
import { body, check } from "express-validator";
import { questionByIdController, questionInsertController, questionUpdateByIdController } from "../controllers/question.controller";
const router = Router();
router.get('/:id', questionByIdController)
router.put('/:id', questionUpdateByIdController)
router.post(
  "/",
  [
    body("question").not().isEmpty().withMessage("Question is required"),
    body("snippets.*.language").not().isEmpty().withMessage("lanaguage is required"),
    body("snippets.*.snippet").not().isEmpty().withMessage("snippet is required"),
    body("tests.*.text").not().isEmpty().withMessage("Test message is required"),
    body("tests.*.input").not().isEmpty().withMessage("Test input is required"),
    body("tests.*.output").not().isEmpty().withMessage("Test output is required")
  ],
  validateRequestMiddleware,
  questionInsertController
);

export { router as QuestionsRouter };
