import { z } from "zod";

import { DeepPartial } from "typeorm";

import {
  postClientSchema,
  returnClientSchema,
  returnAllClientSchema,
  createUserSchema,
  returnCreateUserSchema,
  returnCreateSchemaNotPassword,
} from "../../schemas";
import {
  createLoginSchema,
  returnClientSchema2,
} from "../../schemas/clients/client.schema";

export type TClient = z.infer<typeof postClientSchema>;

export type TClientReturn = z.infer<typeof returnClientSchema>;
export type TClientReturn2 = z.infer<typeof returnClientSchema2>;

export type TClientReturnAll = z.infer<typeof returnAllClientSchema>;

export type TClientUpdate = DeepPartial<TClient>;

export type TUser = z.infer<typeof createUserSchema>;
export type TUserReturn = z.infer<typeof returnCreateUserSchema>;
export type TUserReturnNotPassword = Omit<TUserReturn, "password">;

export type Login = z.infer<typeof createLoginSchema>;
