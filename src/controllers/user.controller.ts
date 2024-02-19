import { Request, Response } from "express";
import { UserReturn } from "../interfaces/user.interface";
import { createUserService, deleteUserService, readUserIdService, updateUserService } from "../services/user.service";

export const createUserController = async (req: Request, res: Response):
 Promise<Response> => {
    const user: UserReturn =  await createUserService(req.body)

    return res.status(201).json(user)
}

export const readIdUserController =  async (req: Request, res: Response):
Promise<Response> => {
    const { user } =  res.locals
    const readUserId = await readUserIdService(user)

    return res.status(200).json(readUserId)
}

export const updateUserController =  async (req: Request, res: Response):
Promise<Response> => {
    const { user } = res.locals
    const newUser = await updateUserService(req.body, user)

    return res.status(200).json(newUser)
}

export const deleteUserController =  async (req: Request, res: Response):
Promise<Response> => {
    const { user } =  res.locals
    await deleteUserService(user)

    return res.status(204).json()
}