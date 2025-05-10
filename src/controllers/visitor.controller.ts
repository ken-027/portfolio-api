import PushoverNotificationUtil from "@/utils/pushover-notification.util";
import { Request, Response } from "express";

export async function visitorSend(
    request: Request<never, unknown>,
    response: Response,
) {
    const ip =
        request.headers["x-forwarded-for"]?.toString().split(",")[0].trim() ||
        request.socket.remoteAddress ||
        "anonymous";

    const agent = request.get("User-Agent") || "unknown";

    await PushoverNotificationUtil.visitor(ip || "anonymous", agent);

    response.json({ message: "Notification sent successfully" });
}
