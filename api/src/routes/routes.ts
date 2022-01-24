import express, { Router } from "express";
import { generateFileController } from "../controllers/generate-files";

const router = Router();


router.post("/run",generateFileController);

export { router as routers };
