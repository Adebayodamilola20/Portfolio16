import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { createCalendarEvent } from '@/lib/google-calendar';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is missing');
    return NextResponse.json({ success: false, error: 'Mail server not configured' }, { status: 500 });
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, projectDetails, timeline, budget, date, time, canAttend } = body;

    // Generate a unique 6-digit confirmation code
    const confirmationCode = Math.floor(100000 + Math.random() * 900000).toString();

    // 1. Save to Firestore
    const leadRef = await addDoc(collection(db, 'leads'), {
      firstName,
      lastName,
      email,
      phone,
      projectDetails,
      timeline,
      budget,
      canAttend,
      scheduledDate: date,
      scheduledTime: time,
      confirmationCode,
      createdAt: serverTimestamp(),
    });

    // 2. Create Google Calendar Event
    const startDateTime = new Date(`${date} ${time}`);
    const endDateTime = new Date(startDateTime.getTime() + 45 * 60000); // 45 mins later

    await createCalendarEvent({
      summary: `Stephen Studio Discovery Call: ${firstName}`,
      description: `Discovery session regarding ${projectDetails}.\n\nClient: ${firstName} ${lastName}\nEmail: ${email}\nTimeline: ${timeline}`,
      startDateTime: startDateTime.toISOString(),
      endDateTime: endDateTime.toISOString(),
      calendarId: 'adebayodamilola2007@gmail.com', // Your calendar ID
    });

    const zoomLink = 'https://zoom.us/j/5917299557';
    const clientSubject = `Confirmed: Project Discovery Call with Stephen Studio - ${firstName} ${lastName}`;
    const adminSubject = `New Client Booking: ${firstName} ${lastName} (${confirmationCode})`;

    // Reusable details section builders
    const infoSection = `
      <div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px;">
        <h3 style="font-size: 16px; margin-bottom: 20px; color: #0D3C3C;">Project Details & Information:</h3>
        
        <p style="margin: 15px 0 5px 0; color: #666; font-size: 13px;"><strong>Phone number:</strong></p>
        <p style="margin: 0; font-size: 15px; color: #333;">${phone || 'Not provided'}</p>

        <p style="margin: 15px 0 5px 0; color: #666; font-size: 13px;"><strong>What is the project you are interested in meeting about? Please provide details that we can use to help prepare our meeting in line with your vision.:</strong></p>
        <p style="margin: 0; font-size: 15px; color: #333;">${projectDetails}</p>

        <p style="margin: 15px 0 5px 0; color: #666; font-size: 13px;"><strong>What is your proposed starting timeline?:</strong></p>
        <p style="margin: 0; font-size: 15px; color: #333;">${timeline}</p>

        <p style="margin: 15px 0 5px 0; color: #666; font-size: 13px;"><strong>This time is set aside exclusively for your project. Kindly book only if you’re able to attend. Are you able to attend this meeting at the scheduled time?:</strong></p>
        <p style="margin: 0; font-size: 15px; color: #333;">${canAttend || 'Yes'}</p>

        <p style="margin: 15px 0 5px 0; color: #666; font-size: 13px;"><strong>Project Budget?:</strong></p>
        <p style="margin: 0; font-size: 15px; color: #333;">${budget}</p>
      </div>
    `;

    // 3. Send Confirmation Email to Client
    await resend.emails.send({
      from: 'Stephen Studio <onboarding@resend.dev>',
      to: email,
      subject: clientSubject,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
          <h2 style="color: #0D3C3C;">Project Discovery Call</h2>
          <p>Hi ${firstName}, your meeting with <strong>Stephen Studio</strong> is confirmed.</p>
          
          <div style="background: #f4f7f6; padding: 20px; border-radius: 12px; margin: 20px 0; border: 1px solid #e1e8e7;">
            <p style="margin: 5px 0;"><strong>What:</strong> Project Discovery Call</p>
            <p style="margin: 5px 0;"><strong>When:</strong> ${date} at ${time} (West Africa Time)</p>
            <p style="margin: 5px 0;"><strong>Who:</strong> ${firstName} ${lastName} & Stephen Studio</p>
            <p style="margin: 5px 0;"><strong>Location:</strong> This is a Zoom web conference.<br/>
            <a href="${zoomLink}" style="color: #0A66FF; font-weight: bold;">${zoomLink}</a></p>
            <p style="margin: 10px 0 5px 0; border-top: 1px solid #e1e8e7; padding-top: 10px;">
              <strong>Appointment Passcode:</strong> <span style="font-size: 18px; font-weight: bold; color: #0D3C3C;">${confirmationCode}</span>
            </p>
          </div>

          ${infoSection}

          <div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px; font-size: 13px; color: #666;">
            <p>Looking forward to building something great together!</p>
            <p>Need to make changes?<br/>
            <span style="color: #999;">Cancel or reschedule via your calendar invitation.</span></p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="font-size: 12px; color: #999;">Sent by Stephen Studio Portfolio System</p>
        </div>
      `,
    });

    // 4. Send Notification to Admin (Stephen)
    await resend.emails.send({
      from: 'Portfolio Alert <onboarding@resend.dev>',
      to: 'adebayodamilola2007@gmail.com',
      subject: adminSubject,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
          <h2 style="color: #0D3C3C;">You Have a New Client!</h2>
          <p>Hi Stephen, <strong>${firstName} ${lastName}</strong> has just scheduled a strategy call with you.</p>
          
          <div style="background: #f4f7f6; padding: 20px; border-radius: 12px; margin: 20px 0; border: 1px solid #e1e8e7;">
            <p style="margin: 5px 0;"><strong>New Client:</strong> ${firstName} ${lastName}</p>
            <p style="margin: 5px 0;"><strong>Session Date:</strong> ${date}</p>
            <p style="margin: 5px 0;"><strong>Session Time:</strong> ${time}</p>
            <p style="margin: 5px 0;"><strong>Client Email:</strong> ${email}</p>
            <p style="margin: 10px 0 5px 0; border-top: 1px solid #e1e8e7; padding-top: 10px;">
              <strong>Session Passcode:</strong> <span style="font-size: 18px; font-weight: bold; color: #0D3C3C;">${confirmationCode}</span>
            </p>
          </div>

          ${infoSection}

          <div style="margin-top: 30px; padding-top: 20px;">
            <p style="font-size: 14px; margin-bottom: 15px;">Quick Actions:</p>
            <a href="${zoomLink}" style="display: inline-block; background: #0D3C3C; color: white; padding: 12px 25px; text-decoration: none; border-radius: 8px; font-weight: bold; margin-right: 10px;">Join Zoom Meeting</a>
            <a href="mailto:${email}" style="display: inline-block; background: #f4f7f6; color: #333; padding: 12px 25px; text-decoration: none; border-radius: 8px; font-weight: bold; border: 1px solid #eee;">Email Client</a>
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="font-size: 12px; color: #999;">This notification was generated by the Stephen Studio Lead Engine.</p>
        </div>
      `,
    });

    return NextResponse.json({ 
      success: true, 
      leadId: leadRef.id,
      meetLink: zoomLink,
      subject: clientSubject,
      confirmationCode: confirmationCode
    });

  } catch (error) {
    console.error('Scheduling error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}
