-- CreateTable
CREATE TABLE "Postwww" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Postwww_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Commentwww" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Commentwww_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Commentwww" ADD CONSTRAINT "Commentwww_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Postwww"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
