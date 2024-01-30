import { Router } from "express";
import { userRouter } from "./user.router";
import { sessionRouter } from "./session.router";
import { contactRouter } from "./contact.router";

export const routes: Router = Router()

routes.use('/users', userRouter)
routes.use('/login', sessionRouter)
routes.use('/contact', contactRouter)