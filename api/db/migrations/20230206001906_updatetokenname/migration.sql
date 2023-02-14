/*
  Warnings:

  - You are about to drop the `ThirdPartyTokens` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ThirdPartyTokens";

-- CreateTable
CREATE TABLE "ThirdPartyToken" (
    "id" SERIAL NOT NULL,
    "profilename" TEXT NOT NULL,
    "thirdparty" TEXT NOT NULL,
    "refreshtoken" TEXT NOT NULL,
    "bearertoken" TEXT NOT NULL DEFAULT '0',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ThirdPartyToken_pkey" PRIMARY KEY ("id")
);
