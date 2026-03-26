'use client';

import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, Globe, Video, ExternalLink, Mail, AlertCircle, RefreshCcw } from 'lucide-react';
import Link from 'next/link';
import { Suspense, useMemo } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();

  const dateStr = searchParams.get('date') || '';
  const timeStr = searchParams.get('time') || '';
  const email = searchParams.get('email') || '';
  const code = searchParams.get('code') || '';
  const subject = searchParams.get('subject') || 'Confirmed: Project Discovery Call with Stephen Studio';

  // Check if invitation is expired (West Africa Time / GMT+1)
  const isExpired = useMemo(() => {
    if (!dateStr || !timeStr) return false;
    try {
      // Parse "Monday, March 30, 2026" and "19:30"
      // Date.parse is robust for this format
      const scheduledStart = new Date(`${dateStr} ${timeStr}`);
      if (isNaN(scheduledStart.getTime())) return false;
      
      // Meeting lasts 45 mins. Expire 1 hour after start to be safe.
      const expiryDate = new Date(scheduledStart.getTime() + 60 * 60000);
      return new Date() > expiryDate;
    } catch {
      return false;
    }
  }, [dateStr, timeStr]);

  // Calculate end time (45 mins later)
  const [hours, minutes] = timeStr.split(':').map(Number);
  const endDate = new Date();
  if (!isNaN(hours)) {
    endDate.setHours(hours, (minutes || 0) + 45);
  }
  const endTime = isNaN(hours) ? '' : endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

  // Real Gmail search link
  const gmailLink = `https://mail.google.com/mail/u/0/#search/subject:(${encodeURIComponent(subject)})`;

  if (isExpired) {
    return (
      <div className="min-h-screen bg-white text-[#050505] flex flex-col items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full text-center space-y-6">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center justify-center text-red-500 mb-2"
          >
            <AlertCircle className="w-16 h-16" />
          </motion.div>
          <h1 className="text-3xl font-bold text-[#0D3C3C]">Invitation Expired</h1>
          <p className="text-gray-500 leading-relaxed">
            This invitation link for the scheduled call on <strong>{dateStr}</strong> has expired. 
            For security, meeting details are removed once the session has concluded.
          </p>
          <div className="pt-8 flex flex-col gap-4">
            <Link 
              href="/schedule"
              className="px-8 py-4 bg-[#0D3C3C] text-white rounded-full font-semibold hover:bg-[#1a1a1a] transition-all flex items-center justify-center gap-2"
            >
              <RefreshCcw className="w-4 h-4" /> Schedule New Meeting
            </Link>
            <Link 
              href="/"
              className="text-gray-400 hover:text-[#0D3C3C] transition-colors text-sm"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#050505] flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-2xl w-full bg-white rounded-3xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-8 md:p-12 relative overflow-hidden">
        
        <div className="flex justify-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-[#111] flex items-center justify-center border border-white/10 relative overflow-hidden">
            <span className="text-white font-bold text-2xl italic z-10">S</span>
          </div>
        </div>

        <div className="text-center mb-12">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center justify-center text-[#10b981] mb-6"
          >
            <CheckCircle2 className="w-12 h-12 fill-current" />
          </motion.div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-[#0D3C3C] mb-4">You are scheduled!</h1>
          <p className="text-gray-500 text-lg">A confirmation invitation has been sent to {email || 'your email'}.</p>
        </div>

        <div className="flex justify-center mb-12">
          <a 
            href={gmailLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-[#0D3C3C] rounded-full text-white font-semibold hover:bg-[#1a1a1a] transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            <Mail className="w-5 h-5" />
            Check Your Inbox <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-4">
            <h2 className="text-xl font-bold text-gray-800">Meeting Details</h2>
            {code && (
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Appointment Passcode</span>
                <span className="text-[#0D3C3C] font-mono font-bold text-xl">{code}</span>
              </div>
            )}
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-white p-2.5 rounded-xl shadow-sm border border-gray-100 text-gray-500">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Date & Time</p>
                <p className="text-gray-700 font-bold text-lg">{dateStr} at {timeStr}{endTime ? ` - ${endTime}` : ''}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-2.5 rounded-xl shadow-sm border border-gray-100 text-gray-500">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Timezone</p>
                <p className="text-gray-700 font-bold text-lg">West Africa Time</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-2.5 rounded-xl shadow-sm border border-gray-100 text-gray-500">
                <Video className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Location</p>
                <p className="text-gray-700 font-bold text-lg italic">Web conferencing details to follow.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-white/50 rounded-xl border border-gray-100">
            <p className="text-[12px] text-gray-500 leading-relaxed italic">
              Please keep your passcode handy. For security, we recommend joining from a private device.
            </p>
          </div>
        </motion.div>

        <div className="mt-12 text-center pb-4">
          <Link href="/" className="text-gray-400 font-semibold hover:text-[#0D3C3C] transition-colors text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <SuccessContent />
    </Suspense>
  );
}
