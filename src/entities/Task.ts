import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
} from "typeorm";
import { User } from "./User";

export enum Status {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}

@Entity("task")
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({})
  title: string;

  @Column()
  description: string;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.PENDING,
  })
  status: Status;

  //RELATION WITH USER
  @ManyToOne((type) => User, (user) => user.tasks)
  user: User;
}
