import { z } from "zod";
import { createContactSchema } from "../schemas/contact.schema";
import Contact from "../entities/Contact.entity";
import { Repository } from "typeorm";

export type CreateContact = z.infer<typeof createContactSchema>

export type ContactRepo = Repository<Contact>