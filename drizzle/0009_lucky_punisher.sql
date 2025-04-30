CREATE TABLE IF NOT EXISTS "order"."users" (
	"id" serial NOT NULL,
	"username" text,
	"created_at" timestamp DEFAULT '2024-09-20 13:46:52.160',
	"updated_at" timestamp
);
--> statement-breakpoint
DROP TABLE "users";