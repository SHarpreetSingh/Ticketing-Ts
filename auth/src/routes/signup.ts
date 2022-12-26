import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { RequestValidatnError } from "../errors/req-validation-error";
import { DatabaseConnectnError } from "../errors/db-conn-err";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 8, max: 15 })
      .withMessage("Password must be valid"),
  ],
  (req: Request, res: Response) => {
    const err = validationResult(req);

    if (!err.isEmpty()) {
      throw new RequestValidatnError(err.array());
    }
    const { email, password } = req.body;

    console.log("creatin a user ..");
    throw new DatabaseConnectnError(err.array());

    res.send({});
  }
);

export { router as signupRouter };
