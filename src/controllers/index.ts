import {
  postClientController,
  getClientController,
  getClientIdController,
  patchClientController,
  deleteClientController,
} from "./clients/clients.controllers";

import {
  postContactsController,
  getContactsController,
  patchContactsController,
  deleteContactsController,
} from "./contacts/contacts.controllers";

import { createUserController } from "./user/user.controller";

import { loginController } from "./login/login.controller";
export {
  postClientController,
  getClientController,
  getClientIdController,
  patchClientController,
  deleteClientController,
  postContactsController,
  getContactsController,
  patchContactsController,
  deleteContactsController,
  createUserController,
  loginController,
};
