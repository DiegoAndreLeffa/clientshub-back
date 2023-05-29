import { Repository } from "typeorm";
import { TUser, TUserReturnNotPassword } from "../../interfaces";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import {
  returnCreateSchemaNotPassword,
  returnCreateUserSchema,
} from "../../schemas";

export const createUserService = async (
  userData: TUser
): Promise<TUserReturnNotPassword> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = userRepository.create(userData);

  await userRepository.save(user);

  const newUser = returnCreateSchemaNotPassword.parse(user);

  return newUser;
};
