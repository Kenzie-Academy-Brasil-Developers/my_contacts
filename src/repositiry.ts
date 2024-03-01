import Contact from "./entities/Contact.entity";
import { AppDataSource } from "./data-source";
import User from "./entities/User.entity";
import { ContactRepo } from "./interfaces/contact.interface";
import { UserRepo } from "./interfaces/user.interface";

export const contactRepo: ContactRepo = AppDataSource.getRepository(Contact)
export const userRepo: UserRepo = AppDataSource.getRepository(User)