import { Request, Response } from "express";
import { createLoginService } from "../../services/login/loginUser.service";

export const loginController = async (request: Request, response: Response) => {
  const token = await createLoginService(request.body);

  return response.json({ token: token });
};
