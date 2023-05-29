import { Repository } from "typeorm";

import { AppDataSource } from "../../data-source";

import { Client, Contact } from "../../entities";
import { TContact, TContactReturn } from "../../interfaces";

export const postContactService = async (
  contactData: any
): Promise<TContactReturn> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const client = await clientRepository.findOne({
    where: {
      id: contactData.clientId,
    },
  });

  const newContact = contactRepository.create({
    ...contactData,
    client: client!,
  });
  await contactRepository.save(newContact);

  return newContact;
};
