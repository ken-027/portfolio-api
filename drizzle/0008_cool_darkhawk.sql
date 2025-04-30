CREATE TABLE IF NOT EXISTS "users" (
	"id" serial NOT NULL,
	"username" text,
	"created_at" timestamp DEFAULT '2024-09-20 13:45:22.761',
	"updated_at" timestamp
);
--> statement-breakpoint
DROP TABLE "order"."users";