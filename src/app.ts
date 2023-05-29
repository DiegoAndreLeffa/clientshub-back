import "express-async-errors";
import cors from "cors";
import express, { Application } from "express";
import swaggerUi from "swagger-ui-express";

import swaggerDocs from "./swagger.json";

import { handleErrors } from "./errors";

import { clientRouter, contactRouter } from "./routes";
import { userRouter } from "./routes/user/user.routes";
import { loginRouter } from "./routes/login/user.routes";

export const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/register", userRouter);
app.use("/login", loginRouter);

app.use("/clients", clientRouter);
app.use("/contacts", contactRouter);

app.use(handleErrors);
