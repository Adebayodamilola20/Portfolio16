import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/calendar'];

const auth = new google.auth.JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/^"|"$/g, '').replace(/\\n/g, '\n'),
  scopes: SCOPES,
});

const calendar = google.calendar({ version: 'v3', auth });

export async function createCalendarEvent(eventData: {
  summary: string;
  description: string;
  startDateTime: string;
  endDateTime: string;
  calendarId?: string;
}) {
  try {
    const event = {
      summary: eventData.summary,
      description: `${eventData.description}\n\nJoin Meeting: https://meet.google.com/qjx-jppu-bhj`,
      location: 'https://meet.google.com/qjx-jppu-bhj',
      start: {
        dateTime: eventData.startDateTime,
        timeZone: 'Africa/Lagos',
      },
      end: {
        dateTime: eventData.endDateTime,
        timeZone: 'Africa/Lagos',
      },
    };

    const response = await calendar.events.insert({
      calendarId: eventData.calendarId || 'primary',
      requestBody: event,
    });

    return response.data;
  } catch (error) {
    console.error('Error creating calendar event:', error);
    throw error;
  }
}
