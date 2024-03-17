import 'dotenv/config'
import { compare } from "bcryptjs";
import User from "../entities/User.entity";
import AppError from "../error/AppError.error";
import { LoginReturn, UserLogin, UserReturn } from "../interfaces/user.interface";
import { userRepo } from "../repositiry";
import { sign } from "jsonwebtoken";
import { userReturnSchema } from '../schemas/user.schema';

export const loginService = async (data: UserLogin):
Promise<LoginReturn> => {
    const { email } = data
    const user: User | null =  await userRepo.findOne({
        where: {
            email: email
        },
        relations: {
            contact:true
        }
    })

    if(!user) throw new AppError('Invalid credentials', 401)

    const comparePass =  await compare(data.password, user.password)

    if(!comparePass) throw new AppError('Invalid credentials', 401)


    const token: string = sign(
        {email:user.email},
        process.env.SECRET_KEY!,
        { subject: user.id.toString(), expiresIn: process.env.EXPIRES_IN!}
    )
    const userReturn: UserReturn = userReturnSchema.parse(user)
    return { token, userReturn }
}