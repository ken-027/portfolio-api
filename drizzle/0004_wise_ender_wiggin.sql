CREATE SCHEMA "order";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "order"."users" (
	"id" serial NOT NULL,
	"username" text,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
DROP TABLE "users";