import "reflect-metadata";
import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  Entity,
} from "typeorm";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
export enum Role {
  user = "user",
  admin = "admin",
}
@Entity("users")
export class Users {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column({ select: false })
  password!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ type: "enum", enum: Role, default: Role.user })
  role!: Role;

  @CreateDateColumn()
  created_at!: Date;

  //   hash password function
  public async hashPassword(password: string) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(password, salt);
    return this.password;
  }

  //   compare password
  public async comparePassword(password: string) {
    try {
      return await bcrypt.compare(password, this.password);
    } catch (err: any) {
      return NextResponse.json(
        { success: false, message: err.message },
        {
          status: 500,
        }
      );
    }
  }
}
