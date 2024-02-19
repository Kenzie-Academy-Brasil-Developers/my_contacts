import { Router } from "express";
import { validateBody, verifyPermissions, verifyToken } from "../middlewares/globals.middlewares";
import { verifyUniqueEmailUser, verifyUniqueTelephoneUser, verifyUserExists } from "../middlewares/user.middleware";
import { createUserController, deleteUserController, readIdUserController, updateUserController } from "../controllers/user.controller";
import { createUserSchema, updateUserSchema } from "../schemas/user.schema";

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
    verifyPermissions,
    readIdUserController
)

userRouter.patch('/:id',
    validateBody(updateUserSchema),
    verifyToken,
    verifyUserExists,
    verifyPermissions,
    updateUserController
)

userRouter.delete('/:id',
    verifyUserExists,
    verifyToken,
    verifyPermissions,
    deleteUserController
)
