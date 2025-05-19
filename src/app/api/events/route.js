import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const events = await prisma.event.findMany({
    orderBy: { date: 'desc' },
  });

  return Response.json(events);
}

export async function POST(request) {
  const body = await request.json();
  const { title, date, desc, imageUrl } = body;

  if (!title || !date || !desc || !imageUrl) {
    return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
  }

  const event = await prisma.event.create({
    data: { title, date: new Date(date), desc, imageUrl },
  });

  return new Response(JSON.stringify(event), { status: 201 });
}
