-- CreateTable
CREATE TABLE "Postzzz" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Postzzz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Commentzzz" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Commentzzz_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Commentzzz" ADD CONSTRAINT "Commentzzz_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Postzzz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
