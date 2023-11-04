import { NextResponse } from 'next/server';
import { RevokeApiData } from '@/app/types/api/key';
import { prisma } from '@/lib/prismadb';
import { z } from 'zod';
import { currentUser } from '@clerk/nextjs';

export async function POST(): Promise<NextResponse<RevokeApiData>> {
  try {
    const user = await currentUser();
    if (!user) {
      return NextResponse.json(
        {
          error: 'Unauthorized to perform this action.',
          success: false
        },
        {
          status: 401
        }
      );
    }

    const validApiKey = await prisma.apiKey.findFirst({
      where: {
        userId: user.id,
        enabled: true
      }
    });

    if (!validApiKey) {
      return NextResponse.json(
        {
          error: 'No valid API key found.',
          success: false
        },
        {
          status: 500
        }
      );
    }

    //invalidate API Key
    await prisma.apiKey.update({
      where: {
        id: validApiKey.id
      },
      data: {
        enabled: false
      }
    });

    return NextResponse.json(
      {
        error: null,
        success: true
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
          success: false
        },
        {
          status: 400
        }
      );
    }
    return NextResponse.json(
      {
        error: 'Internal server error.',
        success: false
      },
      {
        status: 500
      }
    );
  }
}
