import { Router } from "express";
import { validateBody, verifyPermissions, verifyToken } from "../middlewares/globals.middlewares";
import { verifyUniqueEmailUser, verifyUniqueTelephoneUser, verifyUserExists } from "../middlewares/user.middleware";

export const userRouter: Router =  Router()

userRouter.post('/',
    validateBody,
    verifyUniqueEmailUser,
    verifyUniqueTelephoneUser
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
