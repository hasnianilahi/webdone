import { MongoClient, ObjectId } from 'mongodb'
import { NextResponse } from 'next/server'
import crypto from 'crypto'

const client = new MongoClient(process.env.MONGODB_URL!)

export async function POST(request: Request) {
  let isConnected = false;
  
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ 
        error: 'Missing required fields' 
      }, { status: 400 })
    }

    await client.connect()
    isConnected = true;
    const database = client.db('contact_database')
    const messagesCollection = database.collection('messages')
    
    const messageData = {
      ...body,
      messageId: crypto.randomUUID(),
      createdAt: new Date()
    }
    
    const result = await messagesCollection.insertOne(messageData)
    
    if (!result.insertedId) {
      throw new Error('Failed to insert message')
    }

    return NextResponse.json({ 
      success: true,
      message: 'Message stored successfully',
      messageId: messageData.messageId 
    }, { status: 200 })
    
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({ 
      success: false,
      error: 'Server error while storing message' 
    }, { status: 500 })
    
  } finally {
    if (isConnected) {
      await client.close()
    }
  }
}
