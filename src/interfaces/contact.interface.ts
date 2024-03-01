import { z } from "zod";
import { createContactSchema, readAllContactSchema, returnContactSchema } from "../schemas/contact.schema";
import Contact from "../entities/Contact.entity";
import { DeepPartial, Repository } from "typeorm";

export type CreateContact = z.infer<typeof createContactSchema>


export type ContactRepo = Repository<Contact>

export type ContactReturn = z.infer<typeof returnContactSchema>

export type ContactBodyUpdate = DeepPartial<CreateContact>

export type ContactUpdate = DeepPartial<ContactBodyUpdate>

export type ContactRead = z.infer<typeof readAllContactSchema>