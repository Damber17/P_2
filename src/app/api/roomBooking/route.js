import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET all bookings
export async function GET() {
  try {
    const bookings = await prisma.roomBooking.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// POST new booking with validation and date parsing
export async function POST(request) {
  try {
    const body = await request.json();

    // Required fields list
    const requiredFields = ['fullName', 'cid', 'roomType', 'checkInDate', 'guests'];

    // Check for missing required fields
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { message: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Parse and validate checkInDate
    const checkInDate = new Date(body.checkInDate);
    if (isNaN(checkInDate)) {
      return NextResponse.json(
        { message: 'Invalid checkInDate format' },
        { status: 400 }
      );
    }

    // Create new booking
    const newBooking = await prisma.roomBooking.create({
      data: {
        fullName: body.fullName,
        cid: body.cid,
        roomType: body.roomType,
        checkInDate: checkInDate,
        guests: body.guests,
        special: body.special || null,
      },
    });

    return NextResponse.json(newBooking, { status: 201 });
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// DELETE a booking
export async function DELETE(request) {
  try {
    const { id } = await request.json();
    await prisma.roomBooking.delete({
      where: { id: parseInt(id) },
    });
    return NextResponse.json(
      { message: 'Booking deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting booking:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
