/*
  Warnings:

  - Made the column `profileImageURL` on table `Hivemind` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Hivemind" ADD COLUMN     "aboutInformation" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "profileImageURL" SET NOT NULL,
ALTER COLUMN "profileImageURL" SET DEFAULT 'none';
