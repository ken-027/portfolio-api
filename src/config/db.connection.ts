import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "@/db/user/user.schema";
import { DB_URL } from "./env";

const queryClient = postgres(DB_URL);
const db = drizzle(queryClient, { schema });

export default db;
