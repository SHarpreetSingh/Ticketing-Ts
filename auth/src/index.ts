import express from "express";
import { json } from "body-parser";

import { signupRouter } from "./routes/signup";
import { errHandle } from "./middlewares/error-handlers";

const app = express();
app.use(json());

app.use(signupRouter);
app.use(errHandle);

const port = 3000;
app.listen(port, () => {
  console.log(`🎉 listening on port ${port}`);
});
