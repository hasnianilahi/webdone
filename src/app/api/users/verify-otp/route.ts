import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email, otp } = reqBody;

        // Retrieve pending signup token from cookies
        const pendingSignupToken = request.cookies.get("pending_signup")?.value;
        if (!pendingSignupToken) {
            return NextResponse.json({ error: "No pending signup found" }, { status: 400 });
        }

        let payload;
        try {
            payload = jwt.verify(pendingSignupToken, process.env.TOKEN_SECRET!);
        } catch (err) {
            return NextResponse.json({ error: "Invalid or expired token" }, { status: 400 });
        }

        // Extract payload values
        const { username, email: tokenEmail, password, otp: tokenOtp, otpExpiry } = payload as any;

        if (email !== tokenEmail) {
            return NextResponse.json({ error: "Email mismatch" }, { status: 400 });
        }

        if (tokenOtp !== otp || otpExpiry < Date.now()) {
            return NextResponse.json({ error: "Invalid or expired OTP" }, { status: 400 });
        }

        // Create new user in the database and mark as verified
        const newUser = await User.create({
            username,
            email: tokenEmail,
            password,
            isVerified: true
        });

        // Generate session token
        const tokenData = {
            id: newUser._id,
            username: newUser.username,
            email: newUser.email
        };

        const sessionToken = jwt.sign(
            tokenData,
            process.env.TOKEN_SECRET!,
            { expiresIn: "1h" } // 1 hour expiration
        );

        // Prepare response: delete pending signup cookie, set session cookie, redirect to profile
        const response = NextResponse.json({
            message: "OTP verified successfully.",
            success: true
        });

        response.cookies.delete("pending_signup");
        response.cookies.set("profile_session", sessionToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 3600
        });

        response.headers.set("Location", "/profile");
        return response;

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}