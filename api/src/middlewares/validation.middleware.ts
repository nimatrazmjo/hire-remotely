import { NextFunction, Request, Response } from "express";
import { ValidationError, validationResult } from "express-validator";
import { ValidationError as CustomValidationError } from "../errors/request-validation.error";

const formatErrors = (errors: ValidationError[]) => {
  return errors.reduce((acc, error) => {
    acc[error.param] = error.msg;
    return acc;
  }, {});
}

export const validateRequestMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction) => {
    const errors = validationResult(req);


    if(!errors.isEmpty()) {
      // const format= formatErrors(errors.array());
      console.log(formatErrors(errors.array()),'errrrrr');

      throw new CustomValidationError(errors.array());
    }
    next();
}