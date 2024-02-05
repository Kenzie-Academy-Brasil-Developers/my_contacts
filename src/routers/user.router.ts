import { Router } from "express";
import { validateBody, verifyPermissions, verifyToken } from "../middlewares/globals.middlewares";
import { verifyUniqueEmailUser, verifyUniqueTelephoneUser, verifyUserExists } from "../middlewares/user.middleware";
import { createUserController } from "../controllers/user.controller";
import { createUserSchema } from "../schemas/user.schema";

export const userRouter: Router =  Router()

userRouter.post('/',
    validateBody(createUserSchema),
    verifyUniqueEmailUser,
    verifyUniqueTelephoneUser,
    createUserController
)

userRouter.get('/:id', 
    verifyToken,
    verifyUserExists,
    verifyPermissions
)

userRouter.patch('/:id',
    validateBody,
    verifyToken,
    verifyPermissions
)

userRouter.delete('/:id',
    verifyUserExists,
    verifyToken,
    verifyPermissions
)
