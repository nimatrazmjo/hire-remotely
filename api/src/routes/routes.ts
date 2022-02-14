import express, { Router } from "express";
import { generateFileController } from "../controllers/generate-files";
import { QuestionsRouter } from "./question.routes";

const app = express();

app.use("/questions", QuestionsRouter)

export { app as routers };
