import { Repository } from "typeorm";

import { AppDataSource } from "../../data-source";

import { Client } from "../../entities";

export const getClientIdService = async (idClient: string) => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const findClient = await clientRepository.findOne({
    where: {
      id: idClient,
    },
    relations: {
      contacts: true,
    },
  });

  return findClient;
};
