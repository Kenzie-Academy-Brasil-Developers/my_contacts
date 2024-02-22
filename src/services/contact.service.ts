import Contact from "../entities/Contact.entity";
import User from "../entities/User.entity";
import AppError from "../error/AppError.error";
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

export const readContactIdService = async (id: number): Promise<ContactReturn | null> => {
    const contact: Contact | null = await contactRepo.findOneBy({id})

    if(!contact) throw new AppError('Contact not found', 404)

    return contact
}

export const updateContactService = async (data: ContactUpdate, contact: Contact | undefined): Promise<ContactReturn> => {
    const newContact = contactRepo.create({...contact, ...data})

    await contactRepo.save(newContact)

    return returnContactSchema.parse(newContact)
}

export const deleteContactService = async (contactId: Number): Promise<void> => {
    await contactRepo.delete(Number(contactId))
}