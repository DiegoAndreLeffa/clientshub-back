import { z } from "zod";

import { returnAllContactSchema, returnContactSchema } from "../index";

export const createUserSchema = z.object({
  name: z.string().min(1).max(30),
  email: z.string().email().min(1).max(30),
  password: z.string().min(1).max(30),
});

export const returnCreateUserSchema = createUserSchema.extend({
  id: z.string(),
});

export const returnCreateSchemaNotPassword = returnCreateUserSchema.omit({
  password: true,
});

export const createLoginSchema = z.object({
  email: z.string().email().max(45),
  password: z.string().max(120),
});

export const postClientSchema = z.object({
  fullName: z.string(),
  email: z.string().email().max(150),
  telephone: z.string(),
});

export const returnClientSchema = postClientSchema.extend({
  id: z.string(),
  registerDate: z.date().or(z.string()),
  contacts: z
    .array(returnContactSchema)
    .default([])
    .transform((value) => (value.length === 0 ? [] : value)),
});

export const returnClientSchema2 = postClientSchema.extend({
  id: z.string(),
  registerDate: z.date().or(z.string()),
  contacts: returnAllContactSchema,
});

export const returnAllClientSchema = z.array(returnClientSchema2);

export const returnCreateClientUser = z.object({
  id: z.string(),
  fullName: z.string(),
  email: z.string(),
  telephone: z.string(),
  registerDate: z.date().or(z.string()),
  user: returnCreateSchemaNotPassword,
});
