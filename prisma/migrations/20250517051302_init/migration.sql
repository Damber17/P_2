-- CreateTable
CREATE TABLE "EventBooking" (
    "id" SERIAL NOT NULL,
    "eventName" TEXT NOT NULL,
    "cid" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "eventDate" TIMESTAMP(3) NOT NULL,
    "guests" INTEGER NOT NULL,
    "special" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EventBooking_pkey" PRIMARY KEY ("id")
);
