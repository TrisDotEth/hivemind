/*
  Warnings:

  - You are about to drop the column `aboutInformation` on the `Hivemind` table. All the data in the column will be lost.
  - You are about to drop the column `farcasterName` on the `Hivemind` table. All the data in the column will be lost.
  - You are about to drop the column `profileImageURL` on the `Hivemind` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Hivemind" DROP COLUMN "aboutInformation",
DROP COLUMN "farcasterName",
DROP COLUMN "profileImageURL";

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "profileType" TEXT NOT NULL DEFAULT '',
    "importedData" JSONB NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Hivemind"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
