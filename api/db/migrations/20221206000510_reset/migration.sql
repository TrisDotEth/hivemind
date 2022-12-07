/*
  Warnings:

  - You are about to drop the `Action` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Actionx` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Anyone` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Anyonex` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profilex` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Action" DROP CONSTRAINT "Action_anyoneId_fkey";

-- DropForeignKey
ALTER TABLE "Actionx" DROP CONSTRAINT "Actionx_anyoneId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_anyoneId_fkey";

-- DropForeignKey
ALTER TABLE "Profilex" DROP CONSTRAINT "Profilex_anyoneId_fkey";

-- DropTable
DROP TABLE "Action";

-- DropTable
DROP TABLE "Actionx";

-- DropTable
DROP TABLE "Anyone";

-- DropTable
DROP TABLE "Anyonex";

-- DropTable
DROP TABLE "Profile";

-- DropTable
DROP TABLE "Profilex";

-- CreateTable
CREATE TABLE "foo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "foo_pkey" PRIMARY KEY ("id")
);
