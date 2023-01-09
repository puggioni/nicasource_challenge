import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  username: "root",
  password: "agustin",
  port: 3306,
  database: "nicasource",
  entities: ["src/entities/*.ts"],
  logging: true,
  synchronize: true,
});
