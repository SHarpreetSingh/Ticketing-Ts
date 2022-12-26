import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";

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
      throw new Error("email is nt vali");
    }
    const { email, password } = req.body;

    console.log("creatin a user ..");

    res.send({});
  }
);

export { router as signupRouter };
