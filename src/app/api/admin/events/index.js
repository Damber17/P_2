import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const events = await prisma.event.findMany({
      orderBy: { date: 'desc' },
    });
    res.status(200).json(events);
  } else if (req.method === 'POST') {
    const { title, date, description, imageUrl } = req.body;
    const event = await prisma.event.create({
      data: {
        title,
        date: new Date(date),
        description,
        imageUrl,
      },
    });
    res.status(201).json(event);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
