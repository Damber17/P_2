import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    const { title, date, description, imageUrl } = req.body;
    const event = await prisma.event.update({
      where: { id: parseInt(id) },
      data: {
        title,
        date: new Date(date),
        description,
        imageUrl,
      },
    });
    res.status(200).json(event);
  } else if (req.method === 'DELETE') {
    await prisma.event.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).end();
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
