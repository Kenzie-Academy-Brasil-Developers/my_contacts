import { z } from "zod";
import { createUserSchema, userLoginSchema, userReturnSchema } from "../schemas/user.schema";
import { DeepPartial, Repository } from "typeorm";
import User from "../entities/User.entity";

export type UserCreate =  z.infer<typeof createUserSchema>
export type UserBodyUpdate = UserCreate
export type UserUpdate = DeepPartial<UserBodyUpdate>
export type UserReturn = z.infer<typeof userReturnSchema>
export type UserLogin = z.infer<typeof userLoginSchema>
export type LoginReturn = {token: string}

export type UserRepo = Repository<User>