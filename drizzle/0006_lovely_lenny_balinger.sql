CREATE TABLE IF NOT EXISTS "users" (
	"id" serial NOT NULL,
	"username" text,
	"created_at" timestamp DEFAULT '2024-09-20 13:30:26.188',
	"updated_at" timestamp
);
--> statement-breakpoint
DROP TABLE "order"."users";--> statement-breakpoint
DROP SCHEMA "order";
