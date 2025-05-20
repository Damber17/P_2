import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, cid, eventType, eventDate, guests, special } = body;

    // ✅ Safely parse and validate the date
    const parsedDate = new Date(eventDate);
    if (isNaN(parsedDate.getTime())) {
      return new Response(JSON.stringify({ error: 'Invalid eventDate format' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const event = await prisma.eventBooking.create({
      data: {
        fullName,
        cid,
        eventType,
        eventDate: parsedDate,
        guests: parseInt(guests),
        special,
      },
    });

    return new Response(JSON.stringify(event), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Booking error:', error);
    return new Response(JSON.stringify({ error: 'Failed to book event' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export async function GET() {
  try {
    const events = await prisma.eventBooking.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return new Response(JSON.stringify(events), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching events:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch events' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
