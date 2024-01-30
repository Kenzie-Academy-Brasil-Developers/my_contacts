import { Router } from "express";
import { validateBody, verifyPermissions, verifyToken } from "../middlewares/globals.middlewares";
import { verifyContactExists, verifyUniqueContactEmaiil, verifyUniqueTelephoneContac } from "../middlewares/contacts.middlewares";

export const contactRouter: Router = Router()

contactRouter.post('/',
    verifyToken,
    verifyPermissions,
    validateBody,
    verifyUniqueContactEmaiil,
    verifyUniqueTelephoneContac,
)

contactRouter.get('/', 
    verifyToken,
    verifyPermissions,

)

contactRouter.get('/:id:',
    verifyToken,
    verifyPermissions,
    verifyContactExists
)

contactRouter.patch('/:id',
    verifyToken,
    verifyPermissions,
    validateBody,
    verifyUniqueContactEmaiil,
    verifyUniqueTelephoneContac,
)

contactRouter.delete('/:id',
    verifyToken,
    verifyPermissions,
    verifyContactExists
)