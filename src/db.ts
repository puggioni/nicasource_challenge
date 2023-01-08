import { DataSource } from 'typeorm'
import { User } from './entities/User'
import { Task } from './entities/Task'
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'agustin',
  port: 3306,
  database: 'nicasource',
  entities: [User, Task],
  logging: true,
  synchronize: true,
})
