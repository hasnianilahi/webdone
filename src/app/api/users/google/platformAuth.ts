import { google } from 'googleapis';

const GOOGLE_REDIRECT_URI = 'https://weblike.ai/api/users/auth/google/callback';

export async function createGoogleAuthUrl(): Promise<{ redirectUrl: string }> {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URI
  );

  const scopes = [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email'
  ];

  const authorizationUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
    include_granted_scopes: true
  });

  return { redirectUrl: authorizationUrl };
}

export async function createAccountAndAuthorize(platform: string): Promise<{ redirectUrl: string }> {
  switch (platform) {
    case "google":
      return createGoogleAuthUrl();
    default:
      throw new Error("Unsupported platform");
  }
}