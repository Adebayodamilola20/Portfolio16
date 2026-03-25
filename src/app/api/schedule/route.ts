import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { createCalendarEvent } from '@/lib/google-calendar';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, projectDetails, timeline, budget, date, time } = body;

    // 1. Save to Firestore
    const leadRef = await addDoc(collection(db, 'leads'), {
      firstName,
      lastName,
      email,
      phone,
      projectDetails,
      timeline,
      budget,
      scheduledDate: date,
      scheduledTime: time,
      createdAt: serverTimestamp(),
    });

    // 2. Create Google Calendar Event
    // We'll parse the date/time string. 
    // Expecting date as "Thursday, March 26, 2026" and time as "20:00"
    const startDateTime = new Date(`${date} ${time}`);
    const endDateTime = new Date(startDateTime.getTime() + 45 * 60000); // 45 mins later

    const calendarEvent = await createCalendarEvent({
      summary: `Project Discovery Call: ${firstName} ${lastName}`,
      description: `Project Details: ${projectDetails}\nTimeline: ${timeline}\nBudget: ${budget}`,
      startDateTime: startDateTime.toISOString(),
      endDateTime: endDateTime.toISOString(),
      attendeeEmail: email,
    });

    const meetLink = calendarEvent.hangoutLink || 'Web conferencing details to follow.';

    // 3. Send Confirmation Email via Resend
    await resend.emails.send({
      from: 'Zera Software Studio <onboarding@resend.dev>', // Default Resend test domain
      to: email,
      subject: `Confirmed: Project Discovery Call with Zera`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #0D3C3C;">You are scheduled!</h2>
          <p>Hi ${firstName},</p>
          <p>Your Project Discovery Call has been confirmed. Here are the details:</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>What:</strong> Project Discovery Call</p>
            <p><strong>When:</strong> ${date} at ${time} (West Africa Time)</p>
            <p><strong>Where:</strong> <a href="${meetLink}">${meetLink}</a></p>
          </div>
          <p>We've also sent a calendar invitation to this email address. Please make sure to add it to your calendar.</p>
          <p>Looking forward to speaking with you!</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #666;">Zera Software Studio</p>
        </div>
      `,
    });

    // Also send a notification to the admin (optional but good)
    await resend.emails.send({
      from: 'Zera Portal <onboarding@resend.dev>',
      to: 'adebayodamilola2007@gmail.com', // User's email
      subject: `New Strategy Call: ${firstName} ${lastName}`,
      html: `
        <h2>New Lead Scheduled!</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Project:</strong> ${projectDetails}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Scheduled:</strong> ${date} at ${time}</p>
      `,
    });

    return NextResponse.json({ 
      success: true, 
      leadId: leadRef.id,
      meetLink 
    });

  } catch (error) {
    console.error('Scheduling error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}
