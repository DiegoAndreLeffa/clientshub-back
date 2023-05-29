import { Repository } from "typeorm";

import { AppDataSource } from "../../data-source";

import { Client, User } from "../../entities";
import { AppError } from "../../errors";

export const getClientService = async (userId: string): Promise<any> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const findClient = await clientRepository.find({
    where: {
      user: { id: user.id },
    },
  });

  return findClient;
};
