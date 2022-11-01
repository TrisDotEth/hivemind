-- AlterTable
ALTER TABLE "Action" ADD COLUMN     "signedTransaction" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "walletAddress" TEXT NOT NULL DEFAULT '';
