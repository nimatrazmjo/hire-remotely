import express, { json } from "express";
import 'express-async-errors';
import cors from 'cors';

import { routers } from "./routes/routes";
import errorHandlerMiddleware from "./middlewares/error-handler.middleware";
import notFoundMiddleware from "./middlewares/not-found.middleware";


const app = express();


// initial configuration
app.use(cors({}))
app.use(json());

// Routes
app.use('/api',routers);

//not found
app.all("*", notFoundMiddleware)

//error handler middleware
app.use(errorHandlerMiddleware);

export { app }
