import { Router } from "express";
import { body, query } from "express-validator";
import { createTestController } from "../controllers/test.controller";
import { validateRequestMiddleware } from "../middlewares/validation.middleware";

const router = Router();

router.post("/",[
    body('language').notEmpty().withMessage("lanaguage is required")
],
validateRequestMiddleware
, createTestController);

export { router as TestRouter };
