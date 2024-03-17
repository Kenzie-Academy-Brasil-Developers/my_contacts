import { Router } from "express";
import { validateBody, verifyPermissions, verifyToken } from "../middlewares/globals.middlewares";
import { verifyContactExists, verifyUniqueContactEmaiil, verifyUniqueTelephoneContac } from "../middlewares/contacts.middlewares";
import { verifyUserExists } from "../middlewares/user.middleware";
import { createContactSchema, updateContactSchema } from "../schemas/contact.schema";
import { createContactController, deleteContactController, readContactController, readContactIdController, updateContactController } from "../controllers/contact.controller";

export const contactRouter: Router = Router()

contactRouter.post('/:id',
    verifyUserExists,
    validateBody(createContactSchema),
    verifyToken,
    verifyPermissions,
    verifyUniqueContactEmaiil,
    verifyUniqueTelephoneContac,
    createContactController
)

contactRouter.get('/:id',
    verifyUserExists,
    verifyToken,
    verifyPermissions,
    readContactController

)

contactRouter.get('/:id/:contactId',
    verifyUserExists,
    verifyToken,
    verifyPermissions,
    verifyContactExists,
    readContactIdController
)

contactRouter.patch('/:id/:contactId',
    verifyUserExists,
    verifyToken,
    verifyPermissions,
    validateBody(updateContactSchema),
    updateContactController
)

contactRouter.delete('/:id/:contactId',
    verifyUserExists,
    verifyToken,
    verifyPermissions,
    verifyContactExists,
    deleteContactController
)