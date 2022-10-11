/*
  Warnings:

  - You are about to drop the `UserExample` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "UserExample";

-- CreateTable
CREATE TABLE "Hivemind" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Hivemind_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Actions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "hivemindId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "networkLocation" TEXT NOT NULL,

    CONSTRAINT "Actions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Hivemind_name_key" ON "Hivemind"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Actions_name_key" ON "Actions"("name");

-- AddForeignKey
ALTER TABLE "Actions" ADD CONSTRAINT "Actions_hivemindId_fkey" FOREIGN KEY ("hivemindId") REFERENCES "Hivemind"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
