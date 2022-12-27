import express from "express";
import "express-async-errors";
import { json } from "body-parser";

import { signupRouter } from "./routes/signup";
import { errHandle } from "./middlewares/error-handlers";
import { NotFoundError } from "./errors/not-found-err";
import mongoose from "mongoose";

const app = express();

app.use(json());
app.use(signupRouter);

// app.post("*", async () => {
//   throw new NotFoundError();
// });

app.use(errHandle);

const port = 3000;

const start = async () => {
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");

    console.log('Connected to mongo db');

  } catch (err) {
    console.error(err);
  }
};

app.listen(port, () => {
  console.log(`🎉 listening on port ${port}`);
});

start()
