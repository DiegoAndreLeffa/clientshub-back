import { Router } from "express";
import {
  deleteClientController,
  getClientController,
  getClientIdController,
  patchClientController,
  postClientController,
} from "../../controllers";
import { validatedTokenMiddleware } from "../../middlewares/validatedToken.middleware";

export const clientRouter: Router = Router();

clientRouter.post("", validatedTokenMiddleware, postClientController);

clientRouter.get("", validatedTokenMiddleware, getClientController);

clientRouter.get("/:id", validatedTokenMiddleware, getClientIdController);

clientRouter.patch("/:id", validatedTokenMiddleware, patchClientController);

clientRouter.delete("/:id", validatedTokenMiddleware, deleteClientController);
