import { Router } from "express";
import { body, query } from "express-validator";
import { createTestController, getTestByHashController } from "../controllers/test.controller";
import { validateRequestMiddleware } from "../middlewares/validation.middleware";

const router = Router();

router.post("/",[
    body('language').notEmpty().withMessage("lanaguage is required")
],
validateRequestMiddleware
, createTestController);

router.get('/:hash', getTestByHashController);

export { router as TestRouter };
