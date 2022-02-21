import express from "express";
import { QuestionsRouter } from "./question.routes";

import  { Judge0Router } from "./judge0.route";

const app = express();

app.use("/questions", QuestionsRouter)
app.use("/run", Judge0Router)

export { app as routers };
