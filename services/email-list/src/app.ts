import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import * as mongoose from "mongoose";

import { IController } from "./interfaces";

class App {
  public app: express.Application;

  constructor(controllers: IController[]) {
    this.app = express();

    this.connect();
    this.initMiddlewares();
    this.initControllers(controllers);
    this.initErrorHandling();
  }

  public listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`App listening on port ${process.env.port}`);
    });
  }

  private connect() {
    const { USER, PASSWORD, DOMAIN, PATH } = process.env;
    try {
      mongoose.connect(`${DOMAIN}${USER}:${PASSWORD}${PATH}`);
    } catch (err) {
      console.log("error connecting to database");
      process.exit(1);
    }
  }

  private initMiddlewares() {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private initControllers(controllers: IController[]) {
    controllers.forEach(controller => {
      this.app.use("/", controller.router);
    });
  }

  private initErrorHandling() {}
}

export default App;
