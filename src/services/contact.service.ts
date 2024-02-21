import Contact from "../entities/Contact.entity";
import User from "../entities/User.entity";
import { ContactReturn, ContactUpdate, CreateContact } from "../interfaces/contact.interface";
import { contactRepo } from "../repositiry";
import { returnContactSchema } from "../schemas/contact.schema";

export const createContactService = async (data: CreateContact, user: User): Promise<ContactReturn> => {
    const newContact: Contact = contactRepo.create({
        ...data, user
    })

    await contactRepo.save(newContact)
    return returnContactSchema.parse(newContact)
}

export const readAllContactService = (data: User): Contact[] => {
    const contactList:Contact[] = data.contact

    return contactList
}

export const updateContactService = async (data: ContactUpdate, contact: Contact | undefined): Promise<ContactReturn> => {
    const newContact = contactRepo.create({...contact, ...data})

    await contactRepo.save(newContact)

    return returnContactSchema.parse(newContact)
}