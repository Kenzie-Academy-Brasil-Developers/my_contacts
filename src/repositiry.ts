import { Repository } from "typeorm";
import Contact from "./entities/Contact.entity";
import { AppDataSource } from "./data-source";
import User from "./entities/User.entity";

export const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact)
export const userRepo: Repository<User> = AppDataSource.getRepository(User)