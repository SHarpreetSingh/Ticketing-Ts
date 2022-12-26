import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-err";

export const errHandle = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    console.log("ddd");

    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  console.log("Some thing wrong");
  res.status(400).send({
    errors: [{ message: "Some thng went wrong" }],
  });
};
