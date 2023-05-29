import { Repository } from "typeorm";

import { AppDataSource } from "../../data-source";

import { Client, User } from "../../entities";
import { returnCreateClientUser } from "../../schemas/clients/client.schema";

export const postClientService = async (
  clientData: any,
  userId: any
): Promise<any> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  const newClient = clientRepository.create({
    ...clientData,
    user: user!,
  });
  await clientRepository.save(newClient);

  const returnCliente = returnCreateClientUser.parse(newClient);

  return returnCliente;
};
