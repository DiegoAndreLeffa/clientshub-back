import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";

import { Client } from "../index";

@Entity("Contact")
export class Contact {
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

  @ManyToOne(() => Client, (client) => client.contacts, {
    cascade: true,
    onDelete: "CASCADE",
  })
  client: Client;
}
