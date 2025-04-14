import { connect } from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from "bcryptjs"
import { sendEmail } from '@/helpers/mailer'
import crypto from 'crypto'
import jwt from "jsonwebtoken"

connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { username, email, password } = reqBody

        // Check if user already exists
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return NextResponse.json({ error: 'User Already Exists' }, { status: 400 })
        }

        // Hash the password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        // Generate OTP and expiry (5 minutes)
        const otp = crypto.randomInt(100000, 999999).toString()
        const otpExpiry = Date.now() + 300000

        // Create pending signup token payload
        const payload = { username, email, password: hashedPassword, otp, otpExpiry }
        const tempToken = jwt.sign(payload, process.env.TOKEN_SECRET!, { expiresIn: "5m" })

        // Prepare response and set pending signup cookie
        const response = NextResponse.json({
            message: "OTP sent. Please check your email for the OTP.",
            success: true
        })
        response.cookies.set("pending_signup", tempToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 300
        })

        // Send OTP email
        await sendEmail({
            email,
            emailType: "OTP",
            otp
        })

        return response

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
