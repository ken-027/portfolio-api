import { serial, text, timestamp, pgEnum, pgSchema } from "drizzle-orm/pg-core";
export const mySchema = pgSchema("order");

export const popularityEnum = pgEnum("popularity", [
    "unknown",
    "known",
    "popular",
]);

export const user = mySchema.table("users", {
    id: serial("id"),
    name: text("username"),
    createdAt: timestamp("created_at").default(new Date()),
    updatedAt: timestamp("updated_at"),
});

export type User = typeof user.$inferInsert;
export type NewUser = Pick<User, "name">;
