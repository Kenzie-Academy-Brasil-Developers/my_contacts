import { z } from "zod";

export const userSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(120),
    email: z.string().email().max(120),
    telephone: z.string().max(30),
    createdAt: z.string(),
    password: z.string().max(120)
})

export const createUserSchema = userSchema.pick({
    name: true,
    email:true,
    telephone:true,
    password:true,
})

export const updateUserSchema = createUserSchema.partial()

export const userReturnSchema = userSchema.omit({password:true})

export const userLoginSchema = userSchema.pick({
    emaiil:true,
    password:true
})