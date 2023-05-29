import { z } from "zod";

import { DeepPartial } from "typeorm";

import {
  postContactSchema,
  returnContactSchema,
  returnAllContactSchema,
} from "../../schemas";

export type TContact = z.infer<typeof postContactSchema>;

export type TContactReturn = z.infer<typeof returnContactSchema>;

export type TContactReturnAll = z.infer<typeof returnAllContactSchema>;

export type TContactUpdate = DeepPartial<TContact>;
