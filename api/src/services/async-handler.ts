import { NextFunction, Request, Response } from "express";
import BadRequestError from "src/errors/bad-request.error";

const asyncHandler = (fn: Function) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await fn(req, res, next);
  } catch (e: any) {
    throw new BadRequestError(e.message);
  }
};

export { asyncHandler };