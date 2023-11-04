import { nanoid } from 'nanoid';
import { z } from 'zod';
import { prisma } from '@/lib/prismadb';
import { NextResponse } from 'next/server';
import { CreateApiData } from '@/app/types/api/key';
import { currentUser } from '@clerk/nextjs';

export async function GET(): Promise<NextResponse<CreateApiData>> {
  try {
    const user = await currentUser();

    if (!user) {
      return NextResponse.json(
        {
          error: 'Unauthorized to perform this action.',
          createdApiKey: null
        },
        {
          status: 404
        }
      );
    }

    const existingApiKey = await prisma.apiKey.findFirst({
      where: {
        userId: user.id,
        enabled: true
      }
    });

    if (existingApiKey) {
      return NextResponse.json(
        {
          error: 'An API key already exists for this user.',
          createdApiKey: null
        },
        {
          status: 400
        }
      );
    }

    const createdApiKey = await prisma.apiKey.create({
      data: {
        userId: user.id, // Ensure userId is a valid ObjectId-compatible string
        key: nanoid()
      }
    });
    return NextResponse.json(
      {
        error: null,
        createdApiKey
      },
      {
        status: 200
      }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: error.issues,
          createdApiKey: null
        },
        {
          status: 400
        }
      );
    }
    return NextResponse.json(
      {
        error: 'Internal server error.',
        createdApiKey: null
      },
      {
        status: 500
      }
    );
  }
}
