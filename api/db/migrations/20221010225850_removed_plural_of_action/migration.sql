/*
  Warnings:

  - You are about to drop the `Actions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Actions" DROP CONSTRAINT "Actions_hivemindId_fkey";

-- DropTable
DROP TABLE "Actions";

-- CreateTable
CREATE TABLE "Action" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "hivemindId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "networkLocation" TEXT NOT NULL,

    CONSTRAINT "Action_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Action_name_key" ON "Action"("name");

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_hivemindId_fkey" FOREIGN KEY ("hivemindId") REFERENCES "Hivemind"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
