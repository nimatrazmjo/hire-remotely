import express from "express";
import { QuestionsRouter } from "./question.routes";

import  { Judge0Router } from "./judge0.route";
import { TestRouter } from "./test.route";
import { ReportRouter } from './report.route';

const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/questions", QuestionsRouter)
app.use("/tests", TestRouter);
app.use("/run", Judge0Router);
app.use("/report", ReportRouter);

export { app as routers };
