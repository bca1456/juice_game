/*
PostgreSQL Backup
Database: juice_game/public
Backup Time: 2020-01-20 16:07:22
*/

DROP SEQUENCE IF EXISTS "public"."book_id_seq";
DROP SEQUENCE IF EXISTS "public"."hero_id_seq";
DROP SEQUENCE IF EXISTS "public"."hibernate_sequence";
DROP SEQUENCE IF EXISTS "public"."increment_id";
DROP TABLE IF EXISTS "public"."books";
DROP TABLE IF EXISTS "public"."heroes";
DROP TABLE IF EXISTS "public"."test";
DROP TABLE IF EXISTS "public"."users";
CREATE SEQUENCE "book_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;
CREATE SEQUENCE "hero_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;
CREATE SEQUENCE "hibernate_sequence" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;
CREATE SEQUENCE "increment_id" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;
CREATE TABLE "books" (
  "id" int4 NOT NULL DEFAULT nextval('book_id_seq'::regclass),
  "author" varchar(255) COLLATE "pg_catalog"."default",
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "quantity_of_pages" int4 NOT NULL
)
;
ALTER TABLE "books" OWNER TO "postgres";
CREATE TABLE "heroes" (
  "id" int4 NOT NULL DEFAULT nextval('hero_id_seq'::regclass),
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "hp" int4 NOT NULL,
  "mana" int4 NOT NULL,
  "baseDamage" int4 NOT NULL
)
;
ALTER TABLE "heroes" OWNER TO "postgres";
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
INSERT INTO "public"."books" ("id","author","name","quantity_of_pages") VALUES (4, 'asd', '234', 3),(5, 'asd', 'asdasas', 11231),(6, 'asd', 'asdathtrhyasasas', 1),(8, 's', 's', 666),(9, 'цук', '4535ert666777', 2),(10, 'u', 'u', 5),(16, 'qw', 'qw2', 22);
COMMIT;
BEGIN;
LOCK TABLE "public"."heroes" IN SHARE MODE;
DELETE FROM "public"."heroes";
INSERT INTO "public"."heroes" ("id","name","hp","mana","baseDamage") VALUES (1, 'bakshtay', 100, 100, 1);
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
ALTER TABLE "heroes" ADD CONSTRAINT "heroes_pkey" PRIMARY KEY ("id");
ALTER TABLE "test" ADD CONSTRAINT "qwe_pkey" PRIMARY KEY ("id");
ALTER TABLE "users" ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");
ALTER SEQUENCE "book_id_seq"
OWNED BY "books"."id";
SELECT setval('"book_id_seq"', 6, true);
ALTER SEQUENCE "book_id_seq" OWNER TO "postgres";
ALTER SEQUENCE "hero_id_seq"
OWNED BY "heroes"."id";
SELECT setval('"hero_id_seq"', 2, true);
ALTER SEQUENCE "hero_id_seq" OWNER TO "postgres";
SELECT setval('"hibernate_sequence"', 17, true);
ALTER SEQUENCE "hibernate_sequence" OWNER TO "postgres";
ALTER SEQUENCE "increment_id"
OWNED BY "users"."id";
SELECT setval('"increment_id"', 3, true);
ALTER SEQUENCE "increment_id" OWNER TO "postgres";
