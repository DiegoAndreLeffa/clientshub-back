import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

const emailAlreadyExistisMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userEmail: string = request.body.email;

  const findEmail = await userRepository.findOne({
    where: {
      email: userEmail,
    },
  });

  if (findEmail?.email === userEmail) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};

export { emailAlreadyExistisMiddleware };
