import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Contact from "./Contact.entity";
import { getRounds, hashSync } from "bcryptjs";

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

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const hasRounds: number = getRounds(this.password)

        if(!hasRounds){
            this.password = hashSync(this.password, 10  )
        }
    }
}