-- CreateTable
CREATE TABLE "SessionStorage" (
    "id" TEXT NOT NULL,
    "twitterState" TEXT NOT NULL DEFAULT '',
    "twitterCodeVerifier" TEXT NOT NULL DEFAULT '',
    "twitterURLRedirect" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "SessionStorage_pkey" PRIMARY KEY ("id")
);
