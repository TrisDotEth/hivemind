-- CreateTable
CREATE TABLE "ThirdPartyTokens" (
    "id" SERIAL NOT NULL,
    "profilename" TEXT NOT NULL,
    "thirdparty" TEXT NOT NULL,
    "refreshtoken" TEXT NOT NULL,
    "bearertoken" TEXT NOT NULL DEFAULT '0',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ThirdPartyTokens_pkey" PRIMARY KEY ("id")
);
