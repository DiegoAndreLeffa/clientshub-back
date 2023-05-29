import { Request, Response } from "express";

import { TUser } from "../../interfaces";

import { createUserService } from "../../services/register/createUser.service";

export const createUserController = async (
  request: Request,
  response: Response
) => {
  const userDate: TUser = request.body;

  const newUser = await createUserService(userDate);

  return response.status(201).json(newUser);
};
