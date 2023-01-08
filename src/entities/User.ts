import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Task } from './Task'
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  lastname: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  createdAt: Date

  @Column()
  updatedAt: Date

  //RELATION WITH TASKS
  @OneToMany((type) => Task, (task) => task.user)
  tasks: Task[]
}
