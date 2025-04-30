import { Router } from "express";
import { send } from "@/controllers/email.controller";
import { validateRequest } from "@/middlewares/validation.middleware";
import { sendEmail } from "@/validations/email.validation";
import { emailResourceLimit } from "@/config/rate-limiter";

const userRoutes = Router();

userRoutes
    .route("/send-email")
    .post(validateRequest(sendEmail, "body"), emailResourceLimit, send);

export default userRoutes;
