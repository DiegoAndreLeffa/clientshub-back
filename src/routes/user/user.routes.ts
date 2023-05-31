import { Router } from "express";

import { emailAlreadyExistisMiddleware } from "../../middlewares/emailAlreadyExistis.middleware";
import { validatedData } from "../../middlewares/validatedData.middlewares";
import { createUserSchema } from "../../schemas";
import { createUserController } from "../../controllers";

export const userRouter: Router = Router();

userRouter.post(
  "",
  validatedData(createUserSchema),
  emailAlreadyExistisMiddleware,
  createUserController
);
