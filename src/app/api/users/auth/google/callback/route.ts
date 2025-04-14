//api/users /auth/google/callback/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { createAccountAndAuthorize } from '@/app/api/users/google/platformAuth';
import { google } from 'googleapis';
import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import jwt from 'jsonwebtoken';

import crypto from 'crypto';

const GOOGLE_REDIRECT_URI = 'https://webd.on/api/users/auth/google/callback';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  if (error) {
    console.error('Google OAuth error:', error);
    return NextResponse.redirect(new URL('/uploader?error=google_auth_failed', request.url));
  }

  if (!code) {
    return NextResponse.json({ error: 'No authorization code provided' }, { status: 400 });
  }

  try {
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      GOOGLE_REDIRECT_URI
    );

    // Exchange code for tokens
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    // Get user info using the access token
    const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client });
    const userInfo = await oauth2.userinfo.get();
    const userData = userInfo.data;

    // Connect to MongoDB
    await connect();

    // Check if user already exists
    const existingUser = await User.findOne({ email: userData.email });
    let savedUser = null; // Declare savedUser variable
    
    if (!existingUser) {
      // Generate a random password for Google users
      const randomPassword = crypto.randomBytes(32).toString('hex');
      
      // Create new user if doesn't exist
      const newUser = new User({
        username: userData.name,
        email: userData.email,
        password: randomPassword,
        googleId: userData.id,
        picture: userData.picture,
        isVerified: true
      });

      savedUser = await newUser.save();
    }

    const user = existingUser || savedUser;
    if (!user) {
      throw new Error('Failed to create or find user');
    }

    // Generate tokens
    const persistentToken = jwt.sign(
      { id: user._id },
      process.env.TOKEN_SECRET!
      // No expiresIn - token will never expire
    );

    const sessionToken = jwt.sign(
      { id: user._id },
      process.env.TOKEN_SECRET!,
      { expiresIn: "1h" } // Profile session still expires in 1 hour
    );

    const response = NextResponse.redirect(new URL('/profile', request.url));

    // Set permanent login cookie
    response.cookies.set("token", persistentToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax"
    });

    // Profile session cookie
    response.cookies.set("profile_session", sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 3600 // 1 hour
    });

    return response;

  } catch (error) {
    console.error('Error in Google OAuth callback:', error);
    
    // Redirect to error page
    const errorUrl = new URL('/uploader', request.url);
    errorUrl.searchParams.set('status', 'error');
    errorUrl.searchParams.set('platform', 'google');
    errorUrl.searchParams.set('message', 'Failed to authenticate with Google');
    
    return NextResponse.redirect(errorUrl);
  }
}