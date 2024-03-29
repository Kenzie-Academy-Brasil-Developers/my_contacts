import User from "../entities/User.entity";
import { UserCreate, UserCreateReturn, UserReturn, UserUpdate } from "../interfaces/user.interface";
import { userRepo } from "../repositiry";
import { userReturnCreateSchema, userReturnSchema } from "../schemas/user.schema";

export const createUserService = async (data:UserCreate): Promise<UserCreateReturn> => {
    const user: User = userRepo.create(data)

    await userRepo.save(user)

    return userReturnCreateSchema.parse(user)
}

export const readUserIdService =  async (data: User): Promise<UserReturn> => {
    const user: UserReturn = userReturnSchema.parse(data)
    return user
}

export const updateUserService =  async (data: UserUpdate, user: User): Promise<UserReturn> => {
    const UserUpdate: User = userRepo.create({...user, ...data})

    await userRepo.save(UserUpdate)

    return userReturnSchema.parse(UserUpdate)
}

export const deleteUserService = async (user: User): Promise<void> => {
    await userRepo.delete(user.id)
}