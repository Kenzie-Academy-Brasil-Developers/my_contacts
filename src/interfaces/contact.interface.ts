import { z } from "zod";
import { createContactSchema, returnContactSchema } from "../schemas/contact.schema";
import Contact from "../entities/Contact.entity";
import { DeepPartial, Repository } from "typeorm";

export type CreateContact = z.infer<typeof createContactSchema>

export type ContactRepo = Repository<Contact>

export type ContactReturn = z.infer<typeof returnContactSchema>

export type ContactBodyYpdate = DeepPartial<CreateContact>

export type ContactRead = ContactReturn[]