import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import logger from "morgan";
import helmet from "helmet";
import cors from "cors";

import routes from "./routes/index";

const app: Application = express();

// Express middlewares
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(compression());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
// app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// app.use("/", (req: Request, res: Response): void => {
//     res.send('Hello world!');
// });

// Routes
app.use('/', routes);

export default app;
