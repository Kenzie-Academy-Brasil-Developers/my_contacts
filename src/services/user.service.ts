import User from "../entities/User.entity";
import { UserCreate, UserReturn } from "../interfaces/user.interface";
import { userRepo } from "../repositiry";
import { userReturnSchema } from "../schemas/user.schema";

export const createUserService = async (data:UserCreate): Promise<UserReturn> => {
    const user: User = userRepo.create(data)

    await userRepo.save(user)

    return userReturnSchema.parse(user)
}