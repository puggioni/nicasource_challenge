import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm";
import { User } from "./User";
@Entity("task")
export class Task extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    default: "PENDING",
  })
  status: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  //RELATION WITH USER
  @ManyToOne((type) => User, (user) => user.tasks)
  user: User;
}
