import { Request, Response } from "express";
import db from "@/config/db.connection";
import { NewUser, user } from "@/db/user/user.schema";
// import HTTPCodes from "@/constant/http-codes";
import { sendEmail } from "@/validations/email.validation";
import { devLog } from "@/utils/logger.util";
import EmailJS from "@/utils/email-js";

export async function getUsers(request: Request, response: Response) {
    const users = await db.select().from(user);
    devLog(request.user);

    response.json(users);
}

export async function send(
    request: Request<never, unknown, NewUser>,
    response: Response,
) {
    const { email, message, name, subject } = sendEmail.parse(request.body);

    const ejs = new EmailJS(email);

    ejs.setName(name);
    ejs.setSubject(subject);
    ejs.setMessage(message);

    const result = await ejs.send();

    response.json(result);
}
