import { Request, Response } from "express";
// import HTTPCodes from "@/constant/http-codes";
import { sendEmail } from "@/validations/email.validation";
import EmailJS from "@/utils/email-js";


export async function send(
    request: Request<never, unknown>,
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
