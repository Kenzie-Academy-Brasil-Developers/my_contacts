import { z  } from "zod";
import Contact from "../entities/Contact.entity";
import { contactSchema } from "./contact.schema";

export const userSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(120),
    email: z.string().email().max(120),
    telephone: z.string().max(30),
    createdAt: z.string(),
    password: z.string().max(120),
    contact: z.array(z.object({
        id: z.number().positive(),
        name: z.string().max(120),
        email: z.string().email().max(120),
        telephone: z.string().max(30),
        createdAt: z.string(),
    }))
})

export const createUserSchema = userSchema.pick({
    name: true,
    email:true,
    telephone:true,
    password:true,
})

export const updateUserSchema = createUserSchema.partial()

export const userReturnSchema = userSchema.omit({password:true})

// export const userReturnLoginSchema = userSchema.omit({password:true,})


export const userReturnCreateSchema =  userSchema.omit({password: true, contact: true})

export const userLoginSchema = userSchema.pick({
    email:true,
    password:true
})