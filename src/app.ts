import cookieParser from "cookie-parser";
import express, { Application } from "express";
import morgan from "morgan";
import routes from "./routes/index";

export class App {
  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
  }
  settings() {
    this.app.set("port", this.port || process.env.PORT || 5000);
  }
  middlewares() {
    this.app.use(morgan(`dev`));
    this.app.use(cookieParser());
    this.app.use(express.json());
    this.app.use(routes);
  }
  async listen() {
    await this.app.listen(this.app.get("port"));
    console.log("Server on port ", this.app.get("port"));
  }
}
