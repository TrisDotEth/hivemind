/*
  Warnings:

  - You are about to drop the `Actionq` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Anyoneq` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Commentwww` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Commentzzz` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Postwww` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Postzzz` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profileq` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Actionq" DROP CONSTRAINT "Actionq_anyoneId_fkey";

-- DropForeignKey
ALTER TABLE "Commentwww" DROP CONSTRAINT "Commentwww_postId_fkey";

-- DropForeignKey
ALTER TABLE "Commentzzz" DROP CONSTRAINT "Commentzzz_postId_fkey";

-- DropForeignKey
ALTER TABLE "Profileq" DROP CONSTRAINT "Profileq_anyoneId_fkey";

-- DropTable
DROP TABLE "Actionq";

-- DropTable
DROP TABLE "Anyoneq";

-- DropTable
DROP TABLE "Commentwww";

-- DropTable
DROP TABLE "Commentzzz";

-- DropTable
DROP TABLE "Postwww";

-- DropTable
DROP TABLE "Postzzz";

-- DropTable
DROP TABLE "Profileq";
