import { body, ValidationError } from "express-validator";

export class RequestValidatnError extends Error {
  constructor(public errors: ValidationError[]) {
    super();

    // 
    Object.setPrototypeOf(this,RequestValidatnError.prototype);

  }
}
