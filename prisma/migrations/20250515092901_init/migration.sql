-- CreateEnum
CREATE TYPE "BookingType" AS ENUM ('ROOM', 'EVENT', 'DINING');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "cidNumber" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "type" "BookingType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoomBooking" (
    "id" SERIAL NOT NULL,
    "bookingId" INTEGER NOT NULL,
    "roomType" TEXT NOT NULL,
    "checkInDate" TIMESTAMP(3) NOT NULL,
    "guestCount" INTEGER NOT NULL,
    "specialNote" TEXT,

    CONSTRAINT "RoomBooking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventBooking" (
    "id" SERIAL NOT NULL,
    "bookingId" INTEGER NOT NULL,
    "eventType" TEXT NOT NULL,
    "eventDate" TIMESTAMP(3) NOT NULL,
    "guestCount" INTEGER NOT NULL,
    "specialNote" TEXT,

    CONSTRAINT "EventBooking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiningBooking" (
    "id" SERIAL NOT NULL,
    "bookingId" INTEGER NOT NULL,
    "diningType" TEXT NOT NULL,
    "diningDate" TIMESTAMP(3) NOT NULL,
    "diningTime" TEXT NOT NULL,
    "guestCount" INTEGER NOT NULL,
    "specialNote" TEXT,

    CONSTRAINT "DiningBooking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RoomBooking_bookingId_key" ON "RoomBooking"("bookingId");

-- CreateIndex
CREATE UNIQUE INDEX "EventBooking_bookingId_key" ON "EventBooking"("bookingId");

-- CreateIndex
CREATE UNIQUE INDEX "DiningBooking_bookingId_key" ON "DiningBooking"("bookingId");

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomBooking" ADD CONSTRAINT "RoomBooking_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventBooking" ADD CONSTRAINT "EventBooking_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiningBooking" ADD CONSTRAINT "DiningBooking_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
