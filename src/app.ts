import "express-async-errors";
import cors from "cors";
import express, { Application } from "express";

import { handleErrors } from "./errors";

import { clientRouter, contactRouter } from "./routes";
import { userRouter } from "./routes/user/user.routes";
import { loginRouter } from "./routes/login/user.routes";

export const app: Application = express();

app.use(express.json());
app.use(cors());
app.use("/register", userRouter);
app.use("/login", loginRouter);

app.use("/clients", clientRouter);
app.use("/contacts", contactRouter);

app.use(handleErrors);
