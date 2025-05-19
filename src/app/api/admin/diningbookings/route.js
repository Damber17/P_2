import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const bookings = await prisma.diningBooking.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(bookings);
  } catch (error) {
    console.error('Failed to fetch dining bookings:', error);
    return NextResponse.json({ error: 'Failed to fetch dining bookings' }, { status: 500 });
  }
}
