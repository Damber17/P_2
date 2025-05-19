import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, cid, roomType, checkIn, guests, special } = body;

    if (!fullName || !cid || !roomType || !checkIn || !guests) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newBooking = await prisma.roomBooking.create({
      data: {
        fullName,
        cid,
        roomType,
        checkInDate: new Date(checkIn),
        guests: parseInt(guests),
        special: special || null,
      },
    });

    return NextResponse.json(newBooking, { status: 201 });
  } catch (error) {
    console.error('Room booking failed:', error);
    return NextResponse.json({ error: 'Server error while booking room' }, { status: 500 });
  }
}
