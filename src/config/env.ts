import dotenv from "dotenv";

dotenv.config();

const env = process.env;

export const PORT = env.PORT;
export const NODE_ENV = env.NODE_ENV?.replace(" ", "") as
    | "production"
    | "development";

export const DB_URL = env.DB_URL as string;
export const TIMEZONE = env.TIMEZONE as string;

// emailjs
export const EJS_SERVICE_ID = env.EJS_SERVICE_ID as string;
export const EJS_TEMPLATE_ID = env.EJS_TEMPLATE_ID as string;
export const EJS_PUBLIC_KEY = env.EJS_PUBLIC_KEY as string;
export const EJS_PRIVATE_KEY = env.EJS_PRIVATE_KEY as string;

export const ALLOWED_ORIGINS = env.ALLOWED_ORIGINS?.replace(/\s+/g, "")?.split(
    ",",
);
