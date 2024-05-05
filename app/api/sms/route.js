import { NextResponse } from 'next/server';
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export async function POST(request){
  try {
    const data = await request.json();

    // Verify if all required fields are present
    if (!data.name || !data.phone || !data.address || !data.message) {
      return NextResponse.json({message:'All fields are required'}, {status:500});
    }

    const message = await client.messages.create({
      body:`\nName: ${data.name}\nAddress: ${data.address}\n\n${data.message}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.USER_PHONE_NUMBER
    });
    return NextResponse.json({message:'Message sent'})
    
  } catch (error) {
    console.error('Error sending message', error);
    return NextResponse.json({message:'Error sending message'}, {status:500})
  }

}