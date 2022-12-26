import {  ValidationError } from "express-validator";
import { CustomError } from "./custom-err";

export class RequestValidatnError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super('Invalid req parameters');

    Object.setPrototypeOf(this, RequestValidatnError.prototype);
  }

  serializeErrors() {
    return this.errors.map((err) => {
      return { message: err.msg, field: err.param };
    });
  }
}
