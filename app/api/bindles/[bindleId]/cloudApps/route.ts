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

    const bindle = await prisma.bindle.findUnique({
      where: { id: bindleId },
      include: {
        cloudApps: true,
      },
    });

    if (!bindle) {
      return NextResponse.json({ success: false, message: 'Bindle not found' }, { status: 404 });
    }

    const cloudApps = bindle.cloudApps.map((app) => ({
      id: app.id,
      name: app.name,
      apiEndpoint: app.apiEndpoint,
      dataFormat: app.dataFormat,
      createdAt: app.createdAt.toISOString(),
    }));

    return NextResponse.json({
      success: true,
      message: 'Cloud apps fetched successfully',
      data: cloudApps,
    }, { status: 200 });

  } catch (error) {
    console.error('Error fetching cloud apps:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}