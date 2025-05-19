/*
  Warnings:

  - You are about to drop the column `bookingId` on the `RoomBooking` table. All the data in the column will be lost.
  - You are about to drop the column `guestCount` on the `RoomBooking` table. All the data in the column will be lost.
  - You are about to drop the column `specialNote` on the `RoomBooking` table. All the data in the column will be lost.
  - You are about to drop the `Booking` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DiningBooking` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EventBooking` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cid` to the `RoomBooking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `RoomBooking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `guests` to the `RoomBooking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_userId_fkey";

-- DropForeignKey
ALTER TABLE "DiningBooking" DROP CONSTRAINT "DiningBooking_bookingId_fkey";

-- DropForeignKey
ALTER TABLE "EventBooking" DROP CONSTRAINT "EventBooking_bookingId_fkey";

-- DropForeignKey
ALTER TABLE "RoomBooking" DROP CONSTRAINT "RoomBooking_bookingId_fkey";

-- DropIndex
DROP INDEX "RoomBooking_bookingId_key";

-- AlterTable
ALTER TABLE "RoomBooking" DROP COLUMN "bookingId",
DROP COLUMN "guestCount",
DROP COLUMN "specialNote",
ADD COLUMN     "cid" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "fullName" TEXT NOT NULL,
ADD COLUMN     "guests" INTEGER NOT NULL,
ADD COLUMN     "special" TEXT;

-- DropTable
DROP TABLE "Booking";

-- DropTable
DROP TABLE "DiningBooking";

-- DropTable
DROP TABLE "EventBooking";

-- DropTable
DROP TABLE "User";

-- DropEnum
DROP TYPE "BookingType";
