import { Request, Response, NextFunction } from "express";

export const errHandle = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // ??

  console.log("Some thing wrong");
  res.status(400).send({
    mesg: err.message,
  });
};
