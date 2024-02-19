import { NextFunction, Request, Response } from "express";
import User from "../entities/User.entity";
import { userRepo } from "../repositiry";
import AppError from "../error/AppError.error";

export const verifyUniqueEmailUser = async (req: Request, res: Response, next: NextFunction):
Promise<void> => {
    const { email } = req.body
    const user: User | null = await userRepo.findOneBy({email})

    if(user) throw new AppError('Email alread exists.')

    next()
}


export const verifyUniqueTelephoneUser = async (req: Request, res: Response, next: NextFunction):
Promise<void> => {
    const { telephone } = req.body
    const user: User | null = await userRepo.findOneBy({telephone})

    if(user) throw new AppError('Telephone alread registered.')
    
    return next()
}


export const verifyUserExists = async (req: Request, res: Response, next: NextFunction):
Promise<void> => {
    const { id } =  req.params
    const user: User | null = await userRepo.findOneBy({id: Number(id)})

    if(!user) throw new AppError('User not found')

    res.locals = {...res.locals, user}

    next()
}