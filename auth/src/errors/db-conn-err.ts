import { body, ValidationError } from "express-validator";
import { CustomError } from "./custom-err";

export class DatabaseConnectnError extends CustomError {
  reason = "Database connection error";
  statusCode = 500;

  constructor(public errors: ValidationError[]) {
    super('Invalid Database connection');

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, DatabaseConnectnError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
