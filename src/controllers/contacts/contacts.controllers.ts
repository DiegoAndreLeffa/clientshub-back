import { Request, Response } from "express";
import { TContact } from "../../interfaces";
import {
  deleteContactService,
  getContactService,
  patchContactService,
  postContactService,
} from "../../services";

export const postContactsController = async (
  request: Request,
  response: Response
) => {
  const contactData: TContact = request.body;
  const newContact = await postContactService(contactData);

  return response.status(201).json(newContact);
};

export const getContactsController = async (
  request: Request,
  response: Response
) => {
  const allContact = await getContactService();

  return response.status(200).json(allContact);
};

export const patchContactsController = async (
  request: Request,
  response: Response
) => {
  const idContact: string = request.params.id;
  const contactUpdate = request.body;

  const updateContact = await patchContactService(contactUpdate, idContact);

  return response.status(200).json(updateContact);
};

export const deleteContactsController = async (
  request: Request,
  response: Response
) => {
  const idContact: string = request.params.id;

  await deleteContactService(idContact);

  return response.status(204).send();
};
