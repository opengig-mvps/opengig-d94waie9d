import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

type UserSettingsRequestBody = {
  realTimeUpdates: boolean;
};

export async function POST(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const userId = parseInt(params.userId, 10);
    if (isNaN(userId)) {
      return NextResponse.json({ success: false, message: 'Invalid user ID' }, { status: 400 });
    }

    const body: UserSettingsRequestBody = await request.json();
    const { realTimeUpdates } = body;

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
    }

    const updatedSettings = await prisma.userSettings.update({
      where: { userId: userId },
      data: { realTimeUpdates },
    });

    const updatedAt = new Date().toISOString();

    return NextResponse.json({
      success: true,
      message: 'User settings updated successfully',
      data: {
        userId: userId,
        realTimeUpdates: realTimeUpdates,
        updatedAt: updatedAt,
      },
    }, { status: 200 });

  } catch (error: any) {
    console.error('Error updating user settings:', error);
    return NextResponse.json({ success: false, message: 'Internal server error', data: error }, { status: 500 });
  }
}