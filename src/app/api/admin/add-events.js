// pages/api/events.js

let events = [] // This should be replaced with a DB like PostgreSQL via Prisma

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { title, date, desc, img } = req.body;
    if (!title || !date || !desc || !img) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    events.push({ title, date, desc, img });
    return res.status(200).json({ message: 'Event added', events });
  }

  if (req.method === 'GET') {
    return res.status(200).json(events);
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
