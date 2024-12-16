import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { bindleId: string } }
) {
  try {
    const bindleId = parseInt(params.bindleId, 10);
    if (isNaN(bindleId)) {
      return NextResponse.json({ success: false, message: 'Invalid bindle ID' }, { status: 400 });
    }

    const llmData = await prisma.lLMData.findUnique({
      where: { bindleId },
      select: {
        bindleId: true,
        processedData: true,
        createdAt: true,
      },
    });

    if (!llmData) {
      return NextResponse.json({ success: false, message: 'LLM data not found for the given bindle' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: 'LLM data fetched successfully',
      data: {
        bindleId: llmData.bindleId,
        processedData: llmData.processedData,
        createdAt: llmData.createdAt.toISOString(),
      },
    }, { status: 200 });

  } catch (error: any) {
    console.error('Error fetching LLM data:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}