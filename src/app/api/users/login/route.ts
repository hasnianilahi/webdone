import { connect } from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient(process.env.MONGODB_URL!);

connect()

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json()
        const {email, password} = reqBody
        console.log(reqBody)

        //Check if user exists
        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({error: "User not found"}, {status: 400})
        }

        //Check if password is correct
        const validPassword = await bcryptjs.compare(password, user.password)
        if(!validPassword){
            return NextResponse.json({error: "Invalid Password"}, {status: 400})
        }

        // Check subscription status
        await client.connect();
        const database = client.db('your_database_name');
        const usersCollection = database.collection('users');

        const objectId = new ObjectId(user._id);
        const userWithSubscription = await usersCollection.findOne({ _id: objectId });
        
        const hasSubscription = userWithSubscription?.subscription?.status === 'active';
        console.log('Subscription status:', hasSubscription);

        //Create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
        }

        //Create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"})

        //Send response with subscription info
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
            hasSubscription,
            userId: user._id.toString(),
            redirectUrl: hasSubscription ? '/weblike/builder' : '/price'
        })
        
        response.cookies.set("token", token, {
            httpOnly: true,
        })

        await client.close();
        return response

    } catch (error: any) {
        if (client) {
            await client.close();
        }
        return NextResponse.json({error: error.message}, {status: 500})
    }
}
