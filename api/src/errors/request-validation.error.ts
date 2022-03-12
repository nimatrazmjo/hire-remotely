import { ErrorResponse } from '../interfaces/error/error-response.interface';
import  { ValidationError as ValidationErrorMessage } from 'express-validator';
import { CustomError } from "./custom.error";

class ValidationError extends CustomError {
  statusCode = 422;
  constructor(public errors: ValidationErrorMessage[]) {
    super();

    Object.setPrototypeOf(this, ValidationError.prototype);
  }

  serializeError(): ErrorResponse[] {
    return this.errors.map(err=>({message: err.msg,field:err.param}))
  }
}

export { ValidationError };
