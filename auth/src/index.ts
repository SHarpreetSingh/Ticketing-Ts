import express from "express";
import 'express-async-errors';
import { json } from "body-parser";

import { signupRouter } from "./routes/signup";
import { errHandle } from "./middlewares/error-handlers";
import { NotFoundError } from "./errors/not-found-err";
import mongoose  from "mongoose";


const app = express();
app.use(json());

app.use(signupRouter);

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errHandle);

const port = 3000;
app.listen(port, () => {
  console.log(`🎉 listening on port ${port}!!!`);
});
