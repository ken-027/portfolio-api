import { Router } from "express";
import { visitorSend } from "@/controllers/visitor.controller";

const visitorRoutes = Router();

visitorRoutes.route("/visitor").post(visitorSend);

export default visitorRoutes;
