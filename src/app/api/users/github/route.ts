import { NextRequest, NextResponse } from 'next/server';

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_REDIRECT_URI = 'http://localhost:3000/api/users/auth/github';

export async function POST(request: NextRequest) {
  try {
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${GITHUB_REDIRECT_URI}&scope=user:email`;
    
    return NextResponse.json({ redirectUrl: githubAuthUrl });
  } catch (error) {
    console.error('Error creating GitHub auth URL:', error);
    return NextResponse.json(
      { error: 'Failed to create authorization URL' },
      { status: 500 }
    );
  }
}