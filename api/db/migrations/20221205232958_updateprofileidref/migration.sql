/*
  Warnings:

  - You are about to drop the column `profileId` on the `Profile` table. All the data in the column will be lost.
  - Added the required column `anyoneId` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_profileId_fkey";

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "profileId",
ADD COLUMN     "anyoneId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_anyoneId_fkey" FOREIGN KEY ("anyoneId") REFERENCES "Anyone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
