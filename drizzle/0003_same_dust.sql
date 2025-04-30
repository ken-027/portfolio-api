CREATE TABLE IF NOT EXISTS "users" (
	"id" serial NOT NULL,
	"username" text,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
DROP TABLE "order"."users";--> statement-breakpoint
DROP SCHEMA "order";
