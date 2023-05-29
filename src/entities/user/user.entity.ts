import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { getRounds, hashSync } from "bcryptjs";

import { Client } from "../index";

@Entity("User")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 30 })
  name: string;

  @Column({ length: 30, unique: true })
  email: string;

  @Column({ length: 150 })
  password: string;

  @OneToMany(() => Client, (client) => client.user)
  clients: Client[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassoword() {
    const isEncrypted = getRounds(this.password);
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}
