/*
  Warnings:

  - You are about to drop the `foo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "foo";

-- CreateTable
CREATE TABLE "Anyone" (
    "id" SERIAL NOT NULL,
    "officialName" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Anyone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "anyoneId" INTEGER NOT NULL,
    "profileType" TEXT NOT NULL DEFAULT '',
    "importedData" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Action" (
    "id" SERIAL NOT NULL,
    "anyoneDisplayName" TEXT NOT NULL,
    "anyoneId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "contentType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "networkLocation" TEXT NOT NULL,
    "walletAddress" TEXT NOT NULL DEFAULT '',
    "signedTransaction" TEXT NOT NULL DEFAULT '',
    "succeeded" BOOLEAN NOT NULL,

    CONSTRAINT "Action_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Anyone_officialName_key" ON "Anyone"("officialName");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_anyoneId_fkey" FOREIGN KEY ("anyoneId") REFERENCES "Anyone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_anyoneId_fkey" FOREIGN KEY ("anyoneId") REFERENCES "Anyone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
