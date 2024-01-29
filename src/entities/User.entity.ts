import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Contact from "./Contact.entity";

@Entity('users')
export default class User {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ length:120})
    name: string

    @Column({ length: 120, unique:true})
    email: string

    @Column({ length: 30, unique:true})
    telephone: string

    @CreateDateColumn({ type:'date' })
    createdAt: string

    @Column({ length: 120})
    password: string

    @OneToMany(() => Contact, (contact) => contact.user)
    contact: Contact[]
}