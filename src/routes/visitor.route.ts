import { Router } from "express";
import { visitorSend } from "@/controllers/visitor.controller";
import { visitorLimit } from "@/config/rate-limiter";

const visitorRoutes = Router();

visitorRoutes.route("/visitor").post(visitorLimit, visitorSend);

export default visitorRoutes;
