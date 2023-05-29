import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";

import { Contact } from "../index";
import { User } from "../index";

@Entity("Client")
export class Client {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column()
  telephone: string;

  @CreateDateColumn({ type: "date" })
  registerDate: Date | string;

  @OneToMany(() => Contact, (contact) => contact.client)
  contacts: Contact[];

  @ManyToOne(() => User, (user) => user.clients, {
    cascade: true,
    onDelete: "CASCADE",
  })
  user: User;
}
