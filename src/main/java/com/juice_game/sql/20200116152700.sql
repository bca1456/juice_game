/*
PostgreSQL Backup
Database: juice_game/public
Backup Time: 2020-01-16 15:27:01
*/

DROP SEQUENCE IF EXISTS "public"."increment_id";
DROP TABLE IF EXISTS "public"."books";
DROP TABLE IF EXISTS "public"."test";
DROP TABLE IF EXISTS "public"."users";
CREATE SEQUENCE "increment_id" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;
CREATE TABLE "books" (
  "id" int4 NOT NULL,
  "author" varchar(255) COLLATE "pg_catalog"."default",
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "quantity_of_pages" int4 NOT NULL
)
;
ALTER TABLE "books" OWNER TO "postgres";
CREATE TABLE "test" (
  "id" int4 NOT NULL,
  "text" varchar(255) COLLATE "pg_catalog"."default"
)
;
ALTER TABLE "test" OWNER TO "postgres";
CREATE TABLE "users" (
  "username" varchar(255) COLLATE "pg_catalog"."default",
  "id" int8 NOT NULL DEFAULT nextval('increment_id'::regclass),
  "password" varchar(255) COLLATE "pg_catalog"."default"
)
;
ALTER TABLE "users" OWNER TO "postgres";
BEGIN;
LOCK TABLE "public"."books" IN SHARE MODE;
DELETE FROM "public"."books";
INSERT INTO "public"."books" ("id","author","name","quantity_of_pages") VALUES (4, 'dasdas', 'asdas', 23123);
COMMIT;
BEGIN;
LOCK TABLE "public"."test" IN SHARE MODE;
DELETE FROM "public"."test";
INSERT INTO "public"."test" ("id","text") VALUES (1, 'sae'),(2, 'asdr');
COMMIT;
BEGIN;
LOCK TABLE "public"."users" IN SHARE MODE;
DELETE FROM "public"."users";
INSERT INTO "public"."users" ("username","id","password") VALUES ('sdf', 1, 'sdf'),('sdf', 2, 'sdf');
COMMIT;
ALTER TABLE "books" ADD CONSTRAINT "books_pkey" PRIMARY KEY ("id");
ALTER TABLE "test" ADD CONSTRAINT "qwe_pkey" PRIMARY KEY ("id");
ALTER TABLE "users" ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");
ALTER SEQUENCE "increment_id"
OWNED BY "users"."id";
SELECT setval('"increment_id"', 3, true);
ALTER SEQUENCE "increment_id" OWNER TO "postgres";
