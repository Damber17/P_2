import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, cid, diningType, date, time, guests, special } = body;

    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      return new Response(JSON.stringify({ error: 'Invalid date format' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const dining = await prisma.diningBooking.create({
      data: {
        fullName,
        cid,
        diningType,
        date: parsedDate,
        time,
        guests: parseInt(guests),
        special,
      },
    });

    return new Response(JSON.stringify(dining), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Dining booking error:', error);
    return new Response(JSON.stringify({ error: 'Failed to book dining' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
