import { Request, Response } from "express";
import { TClient } from "../../interfaces";
import {
  deleteClientService,
  getClientIdService,
  getClientService,
  patchClientService,
  postClientService,
} from "../../services";

export const postClientController = async (
  request: Request,
  response: Response
) => {
  const clientData: TClient = request.body;
  const userId = response.locals.userid;
  const newClient = await postClientService(clientData, userId);

  return response.status(201).json(newClient);
};

export const getClientController = async (
  request: Request,
  response: Response
) => {
  const userId = response.locals.userid;

  const allClient = await getClientService(userId);

  return response.status(200).json(allClient);
};

export const getClientIdController = async (
  request: Request,
  response: Response
) => {
  const idClient = request.params.id;
  const allClient = await getClientIdService(idClient);

  return response.status(200).json(allClient);
};

export const patchClientController = async (
  request: Request,
  response: Response
) => {
  const idClient: string = request.params.id;
  const clientUpdate = request.body;

  const updateClient = await patchClientService(clientUpdate, idClient);

  return response.status(200).json(updateClient);
};

export const deleteClientController = async (
  request: Request,
  response: Response
) => {
  const idClient: string = request.params.id;

  await deleteClientService(idClient);

  return response.status(204).send();
};
