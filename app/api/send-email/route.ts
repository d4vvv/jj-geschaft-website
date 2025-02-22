import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kacper.godula99@gmail.com',
      pass: process.env.NODEMAILER_KEY,
    },
  })

  const mailOptions = {
    from: email, // The user's email
    to: 'kacper.godula99@gmail.com', // Your email
    subject: subject,
    text: `From: ${name} (${email})\n\n${message}`,
    replyTo: email,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: 'Error sending email' },
        { status: 500 }
      )
    }
  }
}
