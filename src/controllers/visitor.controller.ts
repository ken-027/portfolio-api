import PushoverNotificationUtil from "@/utils/pushover-notification.util";
import { Request, Response } from "express";

export async function visitorSend(
    request: Request<never, unknown>,
    response: Response,
) {
    const { ip } = request;
    const agent = request.get("User-Agent") || "unknown";

    await PushoverNotificationUtil.visitor(ip || "anonymous", agent);

    response.json({ message: "Notification sent successfully" });
}
