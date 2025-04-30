CREATE SCHEMA "order";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "order"."users" (
	"id" serial NOT NULL,
	"username" text,
	"created_at" timestamp DEFAULT '2024-09-20 13:32:53.076',
	"updated_at" timestamp
);
--> statement-breakpoint
DROP TABLE "users";