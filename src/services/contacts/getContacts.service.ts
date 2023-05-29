import { Repository } from "typeorm";

import { AppDataSource } from "../../data-source";

import { Contact } from "../../entities";
import { TContactReturnAll } from "../../interfaces";
import { returnAllContactSchema } from "../../schemas";

export const getContactService = async (): Promise<TContactReturnAll> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const findContact = await contactRepository.find({
    relations: { client: true },
  });

  return findContact;
};
