/*
  Warnings:

  - You are about to drop the column `eventName` on the `EventBooking` table. All the data in the column will be lost.
  - Added the required column `fullName` to the `EventBooking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EventBooking" DROP COLUMN "eventName",
ADD COLUMN     "fullName" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "DiningBooking" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "cid" TEXT NOT NULL,
    "diningType" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TEXT NOT NULL,
    "guests" INTEGER NOT NULL,
    "special" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DiningBooking_pkey" PRIMARY KEY ("id")
);
