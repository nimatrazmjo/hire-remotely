import express from "express";
import { QuestionsRouter } from "./question.routes";

import  { Judge0Router } from "./judge0.route";

const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/questions", QuestionsRouter)
app.use("/run", Judge0Router)

export { app as routers };
