import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const images = await prisma.galleryImage.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return Response.json(images);
}

export async function POST(request) {
  const body = await request.json();
  const { url } = body;

  if (!url) {
    return new Response(JSON.stringify({ error: 'Image URL is required' }), {
      status: 400,
    });
  }

  const image = await prisma.galleryImage.create({
    data: { url },
  });

  return new Response(JSON.stringify(image), {
    status: 201,
  });
}
