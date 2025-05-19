// src/app/api/login/route.js
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

// Initialize Prisma client
const prisma = new PrismaClient()

// Admin seed data
const ADMIN_DATA = {
  email: 'admin@example.com',
  name: 'Admin User',
  password: 'admin123', // Will be hashed
  role: 'ADMIN',
  contact: '0000000000'
}

// Seed admin if not exists
async function seedAdminUser() {
  try {
    const existingAdmin = await prisma.user.findUnique({
      where: { email: ADMIN_DATA.email },
    })

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash(ADMIN_DATA.password, 10)
      await prisma.user.create({
        data: {
          ...ADMIN_DATA,
          password: hashedPassword
        },
      })
      console.log('✅ Admin user seeded')
    }
  } catch (error) {
    console.error('Error seeding admin:', error)
    throw error
  }
}

export async function POST(req) {
  try {
    // Ensure admin exists
    await seedAdminUser()

    // Parse request body
    const { email, password } = await req.json()

    // Validate input
    if (!email || !password) {
      return Response.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Find user
    const user = await prisma.user.findUnique({ 
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        role: true,
      }
    })

    // Verify user exists
    if (!user) {
      return Response.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Verify password
    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
      return Response.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Return success response (excluding password)
    const { password: _, ...userData } = user
    return Response.json({
      message: user.role === 'ADMIN' 
        ? `Welcome back, admin ${user.name}!` 
        : `Welcome back, ${user.name}!`,
      ...userData
    })

  } catch (error) {
    console.error('Login error:', error)
    return Response.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  } finally {
    // Disconnect Prisma client
    await prisma.$disconnect()
  }
}