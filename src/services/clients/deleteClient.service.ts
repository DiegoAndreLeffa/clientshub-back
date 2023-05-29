import { Repository } from "typeorm";

import { AppDataSource } from "../../data-source";

import { Client } from "../../entities";

export const deleteClientService = async (idClient: string): Promise<void> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const client = await clientRepository.findOne({
    where: {
      id: idClient,
    },
  });

  await clientRepository.remove(client!);
};
