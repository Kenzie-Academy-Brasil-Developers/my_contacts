import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User.entity";


@Entity('contact')
export default class Contact {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({length: 120})
    name: string
    
    @Column({length: 80})
    email: string

    @Column({length: 11})
    telephone: string

    @CreateDateColumn({type: 'date'})
    createdAt: string

    @ManyToOne(() => User, (user) => user.contact, {
        onDelete: 'CASCADE'
    })
    user: User
}