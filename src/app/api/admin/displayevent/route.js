import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const bookings = await prisma.eventBooking.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(bookings, { status: 200 });
  } catch (error) {
    console.error('[GET BOOKINGS ERROR]', error);
    return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 });
  }
}
