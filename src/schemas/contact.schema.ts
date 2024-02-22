import { z } from "zod";
import { userReturnSchema, userSchema } from "./user.schema";

export const contactSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(120),
    email: z.string().email().max(120),
    telephone: z.string().max(30),
    createdAt: z.string(),
    userId: z.number().positive().int(),
    user: userReturnSchema
})


export const createContactSchema = contactSchema.pick({
    name: true,
    email: true,
    telephone: true,
    
})

export const updateContactSchema = createContactSchema.partial()

export const returnContactSchema = contactSchema.omit({
    id: true,
    userId: true,
    user:true
})

export const readAllContactSchema = contactSchema.array()