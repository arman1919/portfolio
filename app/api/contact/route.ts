import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Collect attachments
    const attachments: { filename: string; content: Buffer }[] = []
    for (const [key, value] of formData.entries()) {
      if (key.startsWith('attachment_') && value instanceof File) {
        const buffer = Buffer.from(await value.arrayBuffer())
        attachments.push({
          filename: value.name,
          content: buffer
        })
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.log('Contact form submission (Resend not configured):', {
        name,
        email,
        message,
        attachments: attachments.map(a => ({ filename: a.filename, size: a.content.length })),
        timestamp: new Date().toISOString()
      })
      
      return NextResponse.json(
        { message: 'Message received (email service not configured)' },
        { status: 200 }
      )
    }

    // Prepare email data
    const emailData: any = {
      from: 'portfolio@resend.dev', // Use verified domain or resend.dev for testing
      to: 'arman.raf2001@gmail.com',
      subject: `Portfolio Contact: ${name}${attachments.length > 0 ? ` (${attachments.length} attachment${attachments.length > 1 ? 's' : ''})` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
            New Portfolio Contact Message
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            ${attachments.length > 0 ? `<p><strong>Attachments:</strong> ${attachments.length} file${attachments.length > 1 ? 's' : ''}</p>` : ''}
          </div>
          
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #334155; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #475569;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          ${attachments.length > 0 ? `
          <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Attached Files:</h3>
            <ul style="margin: 0; padding-left: 20px;">
              ${attachments.map(att => `<li style="color: #475569;">${att.filename} (${(att.content.length / 1024 / 1024).toFixed(2)} MB)</li>`).join('')}
            </ul>
          </div>
          ` : ''}
          
          <div style="margin-top: 20px; padding: 15px; background: #1e40af; color: white; border-radius: 8px; text-align: center;">
            <p style="margin: 0;">Reply directly to: <strong>${email}</strong></p>
          </div>
        </div>
      `,
    }

    // Add attachments if any
    if (attachments.length > 0) {
      emailData.attachments = attachments
    }

    // Send email using Resend
    await resend.emails.send(emailData)

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
