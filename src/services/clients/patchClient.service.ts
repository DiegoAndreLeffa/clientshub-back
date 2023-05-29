import { Repository } from "typeorm";

import { AppDataSource } from "../../data-source";

import { Client } from "../../entities";
import { TClientUpdate } from "../../interfaces";
import { postClientSchema } from "../../schemas";

export const patchClientService = async (
  clientUpdate: TClientUpdate,
  idClient: string
) => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const oldclientUpdate = await clientRepository.findOne({
    where: {
      id: idClient,
    },
  });

  const client = clientRepository.create({
    ...oldclientUpdate,
    ...clientUpdate,
  });

  await clientRepository.save(client);

  const update = postClientSchema.parse(client);

  console.log(update);

  return update;
};
