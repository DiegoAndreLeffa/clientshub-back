import { z } from "zod";
import { postClientSchema, returnClientSchema } from "../clients/client.schema";

export const postContactSchema = z.object({
  fullName: z.string(),
  email: z.string().email().max(150),
  telephone: z.string(),
  clientId: z.string(),
});

export const returnContactSchema: any = postContactSchema.extend({
  id: z.string(),
  registerDate: z.date().or(z.string()),
  client: returnClientSchema,
});

export const returnAllContactSchema = z.array(returnContactSchema);
