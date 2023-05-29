import { Router } from "express";
import { createUserController } from "../../controllers/user/user.controller";
import { emailAlreadyExistisMiddleware } from "../../middlewares/emailAlreadyExistis.middleware";
import { validatedData } from "../../middlewares/validatedData.middlewares";
import { createUserSchema } from "../../schemas";

export const userRouter: Router = Router();

userRouter.post(
  "",
  validatedData(createUserSchema),
  emailAlreadyExistisMiddleware,
  createUserController
);
