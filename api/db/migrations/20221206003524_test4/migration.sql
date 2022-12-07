-- CreateTable
CREATE TABLE "Anyoneq" (
    "id" SERIAL NOT NULL,
    "officialName" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Anyoneq_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profileq" (
    "id" SERIAL NOT NULL,
    "anyoneId" INTEGER NOT NULL,
    "profileType" TEXT NOT NULL DEFAULT '',
    "importedData" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Profileq_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Actionq" (
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

    CONSTRAINT "Actionq_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Anyoneq_officialName_key" ON "Anyoneq"("officialName");

-- AddForeignKey
ALTER TABLE "Profileq" ADD CONSTRAINT "Profileq_anyoneId_fkey" FOREIGN KEY ("anyoneId") REFERENCES "Anyoneq"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Actionq" ADD CONSTRAINT "Actionq_anyoneId_fkey" FOREIGN KEY ("anyoneId") REFERENCES "Anyoneq"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
