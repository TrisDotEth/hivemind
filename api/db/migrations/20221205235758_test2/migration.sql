/*
  Warnings:

  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_postId_fkey";

-- DropTable
DROP TABLE "Comment";

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "Anyonex" (
    "id" SERIAL NOT NULL,
    "officialName" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Anyonex_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profilex" (
    "id" SERIAL NOT NULL,
    "anyoneId" INTEGER NOT NULL,
    "profileType" TEXT NOT NULL DEFAULT '',
    "importedData" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Profilex_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Actionx" (
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

    CONSTRAINT "Actionx_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Anyonex_officialName_key" ON "Anyonex"("officialName");

-- AddForeignKey
ALTER TABLE "Profilex" ADD CONSTRAINT "Profilex_anyoneId_fkey" FOREIGN KEY ("anyoneId") REFERENCES "Anyonex"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Actionx" ADD CONSTRAINT "Actionx_anyoneId_fkey" FOREIGN KEY ("anyoneId") REFERENCES "Anyonex"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
