import { Router } from "express";
import {
  deleteContactsController,
  getContactsController,
  patchContactsController,
  postContactsController,
} from "../../controllers";
import { validatedTokenMiddleware } from "../../middlewares/validatedToken.middleware";

export const contactRouter: Router = Router();

contactRouter.post("", validatedTokenMiddleware, postContactsController);

contactRouter.get("", validatedTokenMiddleware, getContactsController);

contactRouter.patch("/:id", validatedTokenMiddleware, patchContactsController);

contactRouter.delete(
  "/:id",
  validatedTokenMiddleware,
  deleteContactsController
);
