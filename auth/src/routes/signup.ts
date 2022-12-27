import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { RequestValidatnError } from "../errors/req-validation-error";
import { DatabaseConnectnError } from "../errors/db-conn-err";
import { User } from "../model/user";

const router = express.Router();

router.get(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 8, max: 15 })
      .withMessage("Password must be valid"),
  ],
  async (req: Request, res: Response) => {
    console.log("dd uadar");
    
    const err = validationResult(req);

    if (!err.isEmpty()) {
      throw new RequestValidatnError(err.array());
    }
    const { email, password } = req.body;

    console.log("creatin a user ..");
    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      res.send({});
    }

    const user = User.build({
      email,
      password,
    });

    await user.save();
    res.status(201).send(user);

    // throw new DatabaseConnectnError(err.array());
  }
);

export { router as signupRouter };
