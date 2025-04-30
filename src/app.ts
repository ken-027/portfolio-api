import express from "express";

import "express-async-errors";
import userRoutes from "@/routes/email.route";
import errorHandler from "@/middlewares/error-handler.middleware";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import NotFound from "@/middlewares/not-found.middleware";
import cors from "cors";
import { ALLOWED_ORIGINS } from "@/config/env";
import helmet from "helmet";
// import morgan from "morgan";
// import logger from "@/middlewares/logger.middleware";
import passport from "passport";
import rateLimit from "@/config/rate-limiter";

const prefixRoute = "/api/v1";

export const app = express();

app.set("trust proxy", true);
app.use(helmet());
app.use(cors({ origin: ALLOWED_ORIGINS }));
app.use(rateLimit);

// app.use(
//     morgan(NODE_ENV === "production" ? "combined" : "dev", {
//         stream: logger(),
//     }),
// );

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(cookieParser());

app.use(prefixRoute, userRoutes);
app.all("*", NotFound);
app.use(errorHandler);

export default app;
