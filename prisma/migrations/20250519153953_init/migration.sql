/*
  Warnings:

  - You are about to drop the `Photo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Photo";

-- CreateTable
CREATE TABLE "GalleryImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GalleryImage_pkey" PRIMARY KEY ("id")
);
