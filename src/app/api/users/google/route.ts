import { NextRequest, NextResponse } from 'next/server';
import { createAccountAndAuthorize } from '@/app/api/users/google/platformAuth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { platform } = body;

    if (platform !== 'google') {
      return NextResponse.json({ error: 'Invalid platform' }, { status: 400 });
    }

    const { redirectUrl } = await createAccountAndAuthorize(platform);
    
    return NextResponse.json({ redirectUrl });
  } catch (error) {
    console.error('Error creating auth URL:', error);
    return NextResponse.json(
      { error: 'Failed to create authorization URL' },
      { status: 500 }
    );
  }
}