import { NextRequest, NextResponse } from 'next/server';
import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID!;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET!;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'No authorization code provided' }, { status: 400 });
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        client_id: GITHUB_CLIENT_ID,
        client_secret: GITHUB_CLIENT_SECRET,
        code: code,
      }),
    });

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Get user data from GitHub
    const userResponse = await fetch('https://api.github.com/user', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json',
      },
    });

    const userData = await userResponse.json();

    // Get user email (since it might be private)
    const emailResponse = await fetch('https://api.github.com/user/emails', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json',
      },
    });

    const emails = await emailResponse.json();
    const primaryEmail = emails.find((email: any) => email.primary)?.email || emails[0]?.email;

    // Connect to MongoDB
    await connect();

    // Check if user already exists
    const existingUser = await User.findOne({ email: primaryEmail });
    let savedUser = null;

    if (!existingUser) {
      // Generate a random password for GitHub users
      const randomPassword = crypto.randomBytes(32).toString('hex');

      // Create new user if doesn't exist
      const newUser = new User({
        username: userData.login,
        email: primaryEmail,
        password: randomPassword,
        githubId: userData.id,
        picture: userData.avatar_url,
        isVerified: true
      });

      savedUser = await newUser.save();
    }

    const user = existingUser || savedUser;
    if (!user) {
      throw new Error('Failed to create or find user');
    }

    // Generate token
    const tokenPayload = {
      id: user._id,
      username: user.username,
      email: user.email
    };

    const token = jwt.sign(tokenPayload, process.env.TOKEN_SECRET!, { expiresIn: "1d" });

    // Create the response with redirect
    const successUrl = new URL('/profile', request.url);
    const response = NextResponse.redirect(successUrl);

    // Set the token cookie
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 86400 // 1 day in seconds
    });

    return response;

  } catch (error) {
    console.error('Error in GitHub OAuth callback:', error);
    
    // Redirect to error page
    const errorUrl = new URL('/uploader', request.url);
    errorUrl.searchParams.set('status', 'error');
    errorUrl.searchParams.set('platform', 'github');
    errorUrl.searchParams.set('message', 'Failed to authenticate with GitHub');
    
    return NextResponse.redirect(errorUrl);
  }
}