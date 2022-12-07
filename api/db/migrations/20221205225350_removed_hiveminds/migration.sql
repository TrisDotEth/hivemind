/*
  Warnings:

  - You are about to drop the column `hivemindId` on the `Action` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Action` table. All the data in the column will be lost.
  - You are about to drop the `Hivemind` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `anyoneDisplayName` to the `Action` table without a default value. This is not possible if the table is not empty.
  - Added the required column `anyoneId` to the `Action` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contentType` to the `Action` table without a default value. This is not possible if the table is not empty.
  - Added the required column `succeeded` to the `Action` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Action" DROP CONSTRAINT "Action_hivemindId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_profileId_fkey";

-- AlterTable
ALTER TABLE "Action" DROP COLUMN "hivemindId",
DROP COLUMN "name",
ADD COLUMN     "anyoneDisplayName" TEXT NOT NULL,
ADD COLUMN     "anyoneId" INTEGER NOT NULL,
ADD COLUMN     "contentType" TEXT NOT NULL,
ADD COLUMN     "succeeded" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "Hivemind";

-- CreateTable
CREATE TABLE "Anyone" (
    "id" SERIAL NOT NULL,
    "officialName" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,

    CONSTRAINT "Anyone_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Anyone_officialName_key" ON "Anyone"("officialName");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Anyone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_anyoneId_fkey" FOREIGN KEY ("anyoneId") REFERENCES "Anyone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
