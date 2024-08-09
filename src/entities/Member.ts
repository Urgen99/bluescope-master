import "reflect-metadata";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

export enum Sector {
  agriculture = "agriculture",
  education = "education",
  logistics = "logistics",
}
@Entity("members")
export class Members {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  phone!: string;

  @Column()
  country!: string;

  @Column()
  state!: string;

  @Column()
  city!: string;

  @Column()
  street!: string;

  @Column()
  postal_code!: string;

  @Column({ type: "enum", enum: Sector })
  sector!: Sector;

  @Column({ type: "text" })
  message!: string;

  @CreateDateColumn()
  created_at!: Date;
}
