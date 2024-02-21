import { NextFunction, Request, Response } from "express";
import Contact from "../entities/Contact.entity";
import { contactRepo } from "../repositiry";
import AppError from "../error/AppError.error";

export const verifyUniqueContactEmaiil =  async (req: Request, res: Response, next: NextFunction):
Promise<void> => {
    const { email } = req.body
    const contact: Contact | null = await contactRepo.findOneBy({email})
    
    if(contact) throw new AppError('Email alread exists.', 409)

    return next()
}


export const verifyUniqueTelephoneContac =  async (req: Request, res: Response, next: NextFunction):
Promise<void> => {
    const { telephone } = req.body
    const contact: Contact | null = await contactRepo.findOneBy({telephone})

    if(contact) throw  new AppError('Telephone already registered.', 409)

    return next()
}

export const verifyContactExists =  async (req: Request, res: Response, next: NextFunction):
Promise<void> => {
    const { id } =  req.params
    const contact: Contact | null = await contactRepo.findOneBy({id: Number(id)})

    if(!contact) throw new AppError('Contact not found.', 404)

    return next()
}