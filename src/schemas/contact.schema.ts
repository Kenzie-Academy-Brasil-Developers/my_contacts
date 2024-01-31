import { z } from "zod";

export const contactSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(120),
    email: z.string().email().max(120),
    telephone: z.string().max(30),
    createdAt: z.string(),
    userId: z.number().positive().int()
})


export const createContactSchema = contactSchema.omit({
    id:true,
    userId:true
})