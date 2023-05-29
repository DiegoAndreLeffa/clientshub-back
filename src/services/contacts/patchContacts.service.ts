import { Repository } from "typeorm";

import { AppDataSource } from "../../data-source";

import { Contact } from "../../entities";
import { TContactUpdate } from "../../interfaces";
import { postContactSchema } from "../../schemas";

export const patchContactService = async (
  contactUpdate: TContactUpdate,
  idContact: string
) => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const oldContactUpdate = await contactRepository.findOne({
    where: {
      id: idContact,
    },
  });

  const contact = contactRepository.create({
    ...oldContactUpdate,
    ...contactUpdate,
  });

  await contactRepository.save(contact);

  return contact;
};
