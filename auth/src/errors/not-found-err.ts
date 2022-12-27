import { CustomError } from "./custom-err";

export class NotFoundError extends CustomError {
    reason = "Database connection error";
    statusCode = 404;
  
    constructor() {
      super('Route not found');
  
      // Only because we are extending a built in class
      Object.setPrototypeOf(this, NotFoundError.prototype);
    }
  
    serializeErrors() {
      return [{ message: 'Not found route!!'}];
    }
  }
  