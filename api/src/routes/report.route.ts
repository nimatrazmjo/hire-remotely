
import express, { Router } from "express";
import { getReportByHashController } from '../controllers/report.controller';
const router = Router();

router.get("/:hash", getReportByHashController);
export { router as ReportRouter };
