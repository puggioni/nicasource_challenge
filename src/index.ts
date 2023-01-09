import { App } from "./app";
import "reflect-metadata";
import { AppDataSource } from "./db";

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("Database connected");
    const app = new App(5000);
    await app.listen();
  } catch (error) {
    console.error(error);
  }
}

main();
