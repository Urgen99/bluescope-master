import "reflect-metadata";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("reviews")
export class Reviews {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  reviews!: string;

  @Column({ type: "text", nullable: true })
  avatar!: string;

  @CreateDateColumn()
  created_at!: Date;
}
