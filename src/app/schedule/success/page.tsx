'use client';

import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Calendar, Globe, Video, ExternalLink, X, Mail, Info } from 'lucide-react';
import Link from 'next/link';
import { useState, Suspense } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'Guest';
  const date = searchParams.get('date') || 'Thursday, March 26, 2026';
  const time = searchParams.get('time') || '20:00';
  const email = searchParams.get('email') || '';
  const meetLink = searchParams.get('meetLink') || 'Web conferencing details to follow.';

  const [showInvite, setShowInvite] = useState(false);

  // Calculate end time (45 mins later)
  const [hours, minutes] = time.split(':').map(Number);
  const endDate = new Date();
  endDate.setHours(hours, minutes + 45);
  const endTime = endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

  return (
    <div className="min-h-screen bg-white text-[#050505] flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-2xl w-full bg-white rounded-3xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-8 md:p-12 relative overflow-hidden">
        
        {/* Branded Logo */}
        <div className="flex justify-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-[#111] flex items-center justify-center border border-white/10 relative overflow-hidden">
            <span className="text-white font-bold text-2xl italic z-10">S</span>
            <div className="absolute w-full h-full border-[2px] border-dashed border-[#38bdf8]/30 rounded animate-spin-slow pointer-events-none" />
          </div>
        </div>

        <div className="text-center mb-12">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center justify-center text-[#10b981] mb-6"
          >
            <CheckCircle2 className="w-12 h-12 fill-current" />
          </motion.div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-[#0D3C3C] mb-4">You are scheduled</h1>
          <p className="text-gray-500 text-lg">A calendar invitation has been sent to your email address.</p>
        </div>

        <div className="flex justify-center mb-12">
          <button 
            onClick={() => setShowInvite(true)}
            className="flex items-center gap-2 px-6 py-3 border border-[#0D3C3C] rounded-full text-[#0D3C3C] font-semibold hover:bg-gray-50 transition-colors"
          >
            Open Invitation <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        {/* Project Discovery Call Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8"
        >
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Project Discovery Call</h2>
          
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-2 rounded-lg text-gray-500">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Host</p>
                <p className="text-gray-700 font-medium text-lg">Zera</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-2 rounded-lg text-gray-500">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Date & Time</p>
                <p className="text-gray-700 font-medium text-lg">{time} - {endTime}, {date}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-2 rounded-lg text-gray-500">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Timezone</p>
                <p className="text-gray-700 font-medium text-lg">West Africa Time</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-2 rounded-lg text-gray-500">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Location</p>
                <p className="text-gray-700 font-medium text-lg truncate max-w-[300px]">
                  {meetLink.startsWith('http') ? (
                    <a href={meetLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Join Zoom/Meet
                    </a>
                  ) : (
                    meetLink
                  )}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-blue-600 font-semibold hover:underline">
            Back to Home
          </Link>
        </div>
      </div>

      {/* Mock Google Calendar Invite Overlay */}
      <AnimatePresence>
        {showInvite && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#050505]/40 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl shadow-2xl max-w-4xl w-full border border-gray-200 overflow-hidden"
            >
              {/* Fake Browser Header */}
              <div className="bg-[#f2f2f2] px-4 py-3 flex items-center justify-between border-b border-gray-300">
                 <div className="flex items-center gap-4">
                   <Mail className="w-5 h-5 text-gray-500" />
                   <span className="text-sm font-medium text-gray-600">Invitation from an unknown sender: {name} and Zera</span>
                 </div>
                 <button onClick={() => setShowInvite(false)} className="text-gray-500 hover:text-black">
                   <X className="w-5 h-5" />
                 </button>
              </div>

              {/* Fake Email Body */}
              <div className="p-8 overflow-y-auto max-h-[80vh]">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <span className="font-bold text-lg">Z</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                       <span className="font-bold text-[#202124]">Zera</span>
                       <span className="text-xs text-gray-500">&lt;zerasoftwarestudio@gmail.com&gt;</span>
                    </div>
                    <div className="text-sm text-gray-500">to me</div>
                  </div>
                  <div className="ml-auto text-xs text-gray-500">10:23 PM (0 minutes ago)</div>
                </div>

                <div className="bg-[#E8F0FE] rounded-lg p-5 mb-8 border-l-4 border-[#1A73E8]">
                   <div className="flex gap-4">
                      <div className="bg-white rounded-lg p-3 shadow-sm text-center min-w-[70px] border border-gray-200">
                         <div className="text-[#D93025] text-xs font-bold uppercase tracking-tighter">MAR</div>
                         <div className="text-3xl font-bold text-[#3C4043]">26</div>
                         <div className="text-xs font-medium text-gray-600">THU</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#202124] mb-1">{name} and Zera</h3>
                        <a href="#" className="text-sm text-blue-600 hover:underline">View on Google Calendar</a>
                        
                        <div className="mt-4 grid grid-cols-[100px_1fr] gap-y-2 text-sm">
                           <span className="text-gray-500">When</span>
                           <span className="text-[#3C4043] font-medium">{date} {time} – {endTime} (UTC)</span>
                           
                           <span className="text-gray-500">Where</span>
                           <span className="text-blue-600 font-medium truncate">
                             <a href={meetLink.startsWith('http') ? meetLink : '#'} target="_blank" rel="noopener noreferrer" className="hover:underline">
                               {meetLink}
                             </a>
                           </span>
                           
                           <span className="text-gray-500">Who</span>
                           <span className="text-[#3C4043]">zera*</span>
                        </div>

                        <div className="flex gap-2 mt-6">
                           <button className="px-6 py-1.5 border border-gray-300 rounded text-[#1A73E8] font-medium hover:bg-gray-50">Yes</button>
                           <button className="px-6 py-1.5 border border-gray-300 rounded text-[#1A73E8] font-medium hover:bg-gray-50">Maybe</button>
                           <button className="px-6 py-1.5 border border-gray-300 rounded text-[#1A73E8] font-medium hover:bg-gray-50">No</button>
                        </div>
                      </div>
                   </div>
                </div>

                <div className="bg-[#f8f9fa] border border-gray-200 rounded-lg p-5 text-sm">
                   <div className="flex items-start gap-4">
                      <Info className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="font-bold text-[#3C4043] mb-1">This event isn&apos;t in your calendar yet</p>
                        <p className="text-gray-600">You haven&apos;t interacted with zerasoftwarestudio@gmail.com before. Do you want to automatically add this and future invitations from them to your calendar?</p>
                        <div className="flex gap-4 mt-3">
                           <button className="font-bold text-blue-600 hover:underline">Add to calendar</button>
                           <button className="font-bold text-gray-600 hover:underline">Report spam</button>
                        </div>
                      </div>
                   </div>
                </div>

                <div className="mt-8 border-t border-gray-200 pt-6">
                   <p className="text-sm text-gray-600 font-medium">Event Name: Project Discovery Call</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
