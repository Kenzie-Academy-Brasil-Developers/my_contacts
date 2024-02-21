import { Request, Response } from "express";
import { createContactService, readAllContactService, updateContactService} from "../services/contact.service";
import Contact from "../entities/Contact.entity";

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

export const updateContactController = async (req: Request, res: Response):
Promise<Response> => {
    const { user } = res.locals
    const contactsList: [] = user.contact
    const { contactId } = req.params

    const contactUpdate: Contact | undefined = contactsList.find((contact: Contact) => contact.id === Number(contactId))
    const newContact = await updateContactService(req.body, contactUpdate)

    return res.status(200).json(newContact)

}