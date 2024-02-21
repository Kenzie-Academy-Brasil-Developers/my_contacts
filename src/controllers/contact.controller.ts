import { Request, Response } from "express";
import { createContactService, deleteContactService, readContactIdService, updateContactService} from "../services/contact.service";
import Contact from "../entities/Contact.entity";
import { ContactRead, ContactReturn } from "../interfaces/contact.interface";
import AppError from "../error/AppError.error";

export const createContactController = async (req: Request, res: Response):
Promise<Response> => {
    const { user } = res.locals
    const newContact = await createContactService(req.body, user)

    return res.status(201).json(newContact)
}

export const readContactController = async (req: Request, res: Response):
Promise<Response> => {
    const { user } =  res.locals

    const allContacts: Contact[] = user.contact
    return res.status(200).json(allContacts)
}

export const readContactIdController = async (req: Request, res: Response):
Promise<Response> => {
    const { user } = res.locals
    const { contactId} = req.params

    const contactList: Contact[] = user.contact
    const contact = contactList.find((contact) => contact.id === Number(contactId))

    if(!contact) throw new AppError('Contact not found', 404)

    const contactResult: ContactReturn | null = await readContactIdService(Number(contact?.id))

    return res.status(200).json(contactResult)
}

export const updateContactController = async (req: Request, res: Response):
Promise<Response> => {
    const { user } = res.locals
    const contactsList: [] = user.contact
    const { contactId } = req.params

    const contactUpdate: Contact | undefined = contactsList.find((contact: Contact) => contact.id === Number(contactId))
    const newContact = await updateContactService(req.body, contactUpdate)

    return res.status(200).json(newContact)

}

export const deleteContactController = async (req: Request, res: Response):
Promise<Response> => {
    const { user } = res.locals
    const { contactId } = req.params
    const contactList: ContactRead = user.contact

    if(!contactList) throw new AppError('Contact not found', 404)

    const contactDeleted = contactList.find((contact) => contact.id === Number(contactId))
    await deleteContactService(Number(contactDeleted?.id))
    return res.status(204).json()
}