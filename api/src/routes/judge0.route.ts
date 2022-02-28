import { validateRequestMiddleware } from './../middlewares/validation.middleware';

import { Router } from "express";
import { body } from "express-validator";
import { Judge0RunController } from '../controllers/judge0.controller';
const router = Router();

router.post(
  "/",
  [
    body("language_id").not().isEmpty().withMessage("Language is required"),
    body("source_code").not().isEmpty().withMessage("Code is required"),
  ],
  validateRequestMiddleware,
  Judge0RunController
);

export { router as Judge0Router };
