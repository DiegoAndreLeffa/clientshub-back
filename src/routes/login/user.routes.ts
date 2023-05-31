import { Router } from "express";

import { createLoginSchema } from "../../schemas/clients/client.schema";
import { validatedData } from "../../middlewares/validatedData.middlewares";
import { loginController } from "../../controllers";

export const loginRouter: Router = Router();

loginRouter.post("", validatedData(createLoginSchema), loginController);
