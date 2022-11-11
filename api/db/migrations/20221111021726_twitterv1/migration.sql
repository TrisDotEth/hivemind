/*
  Warnings:

  - Added the required column `twitterCodeVerifier` to the `UserCredential` table without a default value. This is not possible if the table is not empty.
  - Added the required column `twitterState` to the `UserCredential` table without a default value. This is not possible if the table is not empty.
  - Added the required column `twitterURLRedirect` to the `UserCredential` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserCredential" ADD COLUMN     "twitterCodeVerifier" TEXT NOT NULL,
ADD COLUMN     "twitterState" TEXT NOT NULL,
ADD COLUMN     "twitterURLRedirect" TEXT NOT NULL;
