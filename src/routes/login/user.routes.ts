import { Router } from "express";

import { loginController } from "../../controllers/login/login.controller";
import { createLoginSchema } from "../../schemas/clients/client.schema";
import { validatedData } from "../../middlewares/validatedData.middlewares";

export const loginRouter: Router = Router();

loginRouter.post("", validatedData(createLoginSchema), loginController);
