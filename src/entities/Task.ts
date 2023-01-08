import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { User } from './User'
@Entity('task')
export class Task {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  status: string

  @Column()
  createdAt: Date

  @Column()
  updatedAt: Date

  //RELATION WITH USER
  @ManyToOne((type) => User, (user) => user.tasks)
  user: User
}
