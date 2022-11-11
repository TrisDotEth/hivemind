/*
  Warnings:

  - You are about to drop the column `twitterCodeVerifier` on the `UserCredential` table. All the data in the column will be lost.
  - You are about to drop the column `twitterState` on the `UserCredential` table. All the data in the column will be lost.
  - You are about to drop the column `twitterURLRedirect` on the `UserCredential` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "twitterAccessToken" TEXT,
ADD COLUMN     "twitterAuthCode" TEXT,
ADD COLUMN     "twitterAuthState" TEXT,
ADD COLUMN     "twitterCodeVerifier" TEXT,
ADD COLUMN     "twitterRefreshToken" TEXT,
ADD COLUMN     "twitterState" TEXT,
ADD COLUMN     "twitterURLRedirect" TEXT;

-- AlterTable
ALTER TABLE "UserCredential" DROP COLUMN "twitterCodeVerifier",
DROP COLUMN "twitterState",
DROP COLUMN "twitterURLRedirect";
