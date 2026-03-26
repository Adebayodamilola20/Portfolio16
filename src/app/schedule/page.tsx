'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

function startOfDay(d: Date) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

function addDays(d: Date, days: number) {
  const x = new Date(d);
  x.setDate(x.getDate() + days);
  return x;
}

function formatDayLabel(d: Date) {
  return d.toLocaleDateString(undefined, { weekday: 'short' }).toUpperCase();
}

function formatMonthDay(d: Date) {
  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

function formatTime24(d: Date) {
  return d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: false });
}

function formatDateLong(d: Date) {
  return d.toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

import { useRouter } from 'next/navigation';

export default function SchedulePage() {
  const router = useRouter();
  const [now, setNow] = useState(() => new Date());
  const today = startOfDay(now);
  const next7Days = Array.from({ length: 7 }, (_, i) => addDays(today, i));

  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [confirmedSlot, setConfirmedSlot] = useState<{ day: Date; time: string } | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectDetails: '',
    timeline: '',
    canAttend: '',
    budget: ''
  });

  const isFormValid = useMemo(() => {
    return (
      formData.firstName.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.projectDetails.trim() !== '' &&
      formData.timeline !== '' &&
      formData.canAttend === 'Yes' &&
      formData.budget !== ''
    );
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          date: confirmedSlot ? formatDateLong(confirmedSlot.day) : '',
          time: confirmedSlot?.time || '',
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        const params = new URLSearchParams({
          name: `${formData.firstName} ${formData.lastName}`,
          date: confirmedSlot ? formatDateLong(confirmedSlot.day) : '',
          time: confirmedSlot?.time || '',
          email: formData.email,
          meetLink: data.meetLink || '',
          subject: data.subject || '',
          code: data.confirmationCode || ''
        });
        router.push(`/schedule/success?${params.toString()}`);
      } else {
        alert('Error scheduling event: ' + data.error);
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };


// ... (rest of the component structure remains similar, focusing on the changes)

  const selectedDay = next7Days[selectedDayIndex] ?? today;

  // Static slot template. If you want these to be dynamic (API-driven), tell me.
  const timeSlots = useMemo(() => {
    // Date portion doesn't affect the formatting we use below; only time-of-day matters.
    const base = startOfDay(new Date(2020, 0, 1));
    const slots: string[] = [];
    const startMinutes = 17 * 60; // 17:00
    const endMinutes = 21 * 60 + 30; // 21:30
    const step = 30; // minutes

    for (let m = startMinutes; m <= endMinutes; m += step) {
      const t = new Date(base);
      t.setMinutes(m);
      slots.push(formatTime24(t));
    }

    return slots;
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  const pageFade = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  } as const;

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 px-6">
      <motion.div initial="hidden" animate="visible" variants={pageFade} className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between gap-6 mb-10">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-bold uppercase tracking-widest text-[10px]">
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to home
          </Link>
          <div className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-500">
            Strategy Call Scheduling
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 leading-[1.05]">
          Book Your Strategy Call
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed mb-10">
          Pick a time that works for you. We will confirm details and share a clear timeline.
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-500 text-[11px] font-bold uppercase tracking-[0.25em] mb-10">
          <span>Free 30-minute call</span>
          <span className="opacity-40">/</span>
          <span>No commitment required</span>
          <span className="opacity-40">/</span>
          <span>Instant confirmation</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-16">
          {/* Date picker */}
          <motion.div
            className="md:col-span-6 rounded-3xl border border-gray-200 bg-white text-black p-6 md:p-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-black font-bold text-sm tracking-widest uppercase">Next 7 Days</div>
              <div className="text-gray-500 text-[12px] font-medium">
                Based on your local date
              </div>
            </div>

            <div className="flex overflow-x-auto sm:grid sm:grid-cols-7 gap-2 pb-2 -mx-2 px-2 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {next7Days.map((d, idx) => {
                const isSelected = idx === selectedDayIndex;
                return (
                  <button
                    key={d.toISOString()}
                    type="button"
                    onClick={() => {
                      setSelectedDayIndex(idx);
                      setSelectedTime(null);
                      setConfirmedSlot(null);
                      setShowForm(false);
                    }}
                    className={[
                      'rounded-2xl border transition-all duration-300 shrink-0 min-w-[72px] sm:min-w-0',
                      'px-2 py-3 text-center sm:text-left',
                      isSelected
                        ? 'bg-[#0A66FF] border-[#0A66FF] shadow-[0_0_20px_rgba(10,102,255,0.35)]'
                        : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                    ].join(' ')}
                  >
                    <div className={isSelected ? 'text-white' : 'text-gray-600'} style={{ fontSize: 11, fontWeight: 700 }}>
                      {formatDayLabel(d)}
                    </div>
                    <div className={isSelected ? 'text-white' : 'text-gray-500'} style={{ fontSize: 18, fontWeight: 800, marginTop: 2 }}>
                      {d.getDate()}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 p-4 rounded-2xl border border-gray-200 bg-gray-50">
              <div className="text-gray-500 text-[12px] uppercase tracking-widest font-bold mb-1">Selected Date</div>
              <div className="text-black font-bold text-lg">{formatMonthDay(selectedDay)}</div>
            </div>

            <div className="mt-6 text-gray-500 text-[12px] leading-relaxed">
              Only the next 7 days are selectable.
            </div>
          </motion.div>

          {/* Time slots */}
          <motion.div
            className="md:col-span-6 rounded-3xl border border-gray-200 bg-white text-black p-6 md:p-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px' }}
            transition={{ duration: 0.7 }}
          >
            {!showForm ? (
              <>
                <div className="flex items-start justify-between gap-6 mb-4">
                  <div>
                    <div className="text-black font-bold text-sm tracking-widest uppercase">Available Times</div>
                    <div className="text-gray-500 text-[13px] font-medium mt-1">
                      {formatMonthDay(selectedDay)}
                    </div>
                  </div>
                  <div className="text-gray-500 text-[12px] font-medium">
                    Local time
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedDay.toISOString()}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {timeSlots.map((t) => {
                        const isSelected = t === selectedTime;
                        return (
                          <button
                            key={t}
                            type="button"
                            onClick={() => {
                              setSelectedTime(t);
                              setConfirmedSlot(null);
                              setShowForm(false);
                            }}
                            className={[
                              'rounded-2xl border px-4 py-3 text-left transition-all duration-300',
                              isSelected
                                ? 'bg-[#0A66FF] border-[#0A66FF] text-white shadow-[0_0_20px_rgba(10,102,255,0.35)]'
                                : 'bg-white border-gray-200 text-gray-800 hover:bg-gray-50 hover:border-gray-300'
                            ].join(' ')}
                          >
                            <div className={isSelected ? 'text-white' : 'text-gray-800'} style={{ fontSize: 14, fontWeight: 800 }}>
                              {t}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-6">
                      <motion.button
                        whileHover={{ scale: selectedTime ? 1.02 : 1 }}
                        whileTap={{ scale: selectedTime ? 0.99 : 1 }}
                        transition={{ duration: 0.15 }}
                        disabled={!selectedTime}
                        className={[
                          'w-full rounded-full px-6 py-4 text-[11px] font-bold tracking-[0.25em] uppercase transition-all border',
                          selectedTime
                            ? 'bg-[#0A66FF] text-white border-transparent hover:bg-[#0758CC]'
                            : 'bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed'
                        ].join(' ')}
                        onClick={() => {
                          if (!selectedTime) return;
                          setConfirmedSlot({ day: selectedDay, time: selectedTime });
                          setShowForm(true);
                        }}
                      >
                        Confirm Time
                        <span className="inline-flex items-center ml-3">
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </motion.button>
                    </div>

                  </motion.div>
                </AnimatePresence>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="w-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <h2 className="text-2xl font-bold text-[#050505]">Enter Details</h2>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-[#050505] mb-2">First Name *</label>
                      <input 
                        required 
                        type="text" 
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-black focus:outline-none focus:border-[#0A66FF] focus:ring-1 focus:ring-[#0A66FF] transition-colors" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#050505] mb-2">Last Name *</label>
                      <input 
                        required 
                        type="text" 
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-black focus:outline-none focus:border-[#0A66FF] focus:ring-1 focus:ring-[#0A66FF] transition-colors" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#050505] mb-2">Email *</label>
                    <input 
                      required 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-black focus:outline-none focus:border-[#0A66FF] focus:ring-1 focus:ring-[#0A66FF] transition-colors" 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#050505] mb-2">Phone number</label>
                    <div className="flex items-center w-full rounded-xl border border-gray-300 overflow-hidden focus-within:border-[#0A66FF] focus-within:ring-1 focus-within:ring-[#0A66FF] transition-colors bg-white">
                      <div className="flex items-center justify-center gap-2 px-4 py-3 border-r border-gray-300 bg-gray-50/50">
                        <span role="img" aria-label="Nigeria">🇳🇬</span>
                      </div>
                      <input 
                        type="tel" 
                        placeholder="+234" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 text-black border-none focus:outline-none" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#050505] mb-2">
                      What is the project you are interested in meeting about? *
                    </label>
                    <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                      Please provide details that we can use to help prepare our meeting in line with your vision.
                    </p>
                    <textarea 
                      required 
                      rows={4} 
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-black focus:outline-none focus:border-[#0A66FF] focus:ring-1 focus:ring-[#0A66FF] transition-colors resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#050505] mb-2">What is your proposed starting timeline? *</label>
                    <div className="relative">
                      <select 
                        required 
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-black focus:outline-none focus:border-[#0A66FF] focus:ring-1 focus:ring-[#0A66FF] transition-colors bg-white appearance-none pr-10"
                      >
                        <option value="" disabled>Select...</option>
                        <option value="Immediately">Immediately</option>
                        <option value="1-2 months">1-2 months</option>
                        <option value="3+ months">3+ months</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-[#0A66FF]">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#050505] mb-2 leading-relaxed">
                      This time is set aside exclusively for your project. Kindly book only if you&apos;re able to attend. Are you able to attend this meeting at the scheduled time? *
                    </label>
                    <div className="relative">
                      <select 
                        required 
                        value={formData.canAttend}
                        onChange={(e) => setFormData({ ...formData, canAttend: e.target.value })}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-black focus:outline-none focus:border-[#0A66FF] focus:ring-1 focus:ring-[#0A66FF] transition-colors bg-white appearance-none pr-10"
                      >
                        <option value="" disabled>Select...</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-[#0A66FF]">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#050505] mb-2">Project Budget? *</label>
                    <div className="relative">
                      <select 
                        required 
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-black focus:outline-none focus:border-[#0A66FF] focus:ring-1 focus:ring-[#0A66FF] transition-colors bg-white appearance-none pr-10"
                      >
                        <option value="" disabled>Select...</option>
                        <option value="500k - 1m">500k - 1m</option>
                        <option value="1m - 1.5m">1m - 1.5m</option>
                        <option value="1.5m - 2m">1.5m - 2m</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-[#0A66FF]">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed pt-2">
                    By proceeding, you confirm that you have read and agree to <br/>
                    <a href="#" className="font-bold text-[#0A66FF] hover:underline">Calendly&apos;s Terms of Use</a> and <a href="#" className="font-bold text-[#0A66FF] hover:underline">Privacy Notice</a>.
                  </p>

                  <div className="pt-4 pb-2">
                    <button
                      type="submit"
                      disabled={!isFormValid || isSubmitting}
                      className={`rounded-full font-bold py-3.5 px-8 transition-all text-sm flex items-center gap-3 ${
                        isFormValid && !isSubmitting
                          ? 'bg-[#0A66FF] hover:bg-[#0758CC] text-white shadow-[0_5px_15px_rgba(10,102,255,0.2)]'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Scheduling...
                        </>
                      ) : (
                        'Schedule Event'
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* What to expect */}
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-20 bg-white text-black rounded-3xl border border-gray-200 p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-gray-500 font-mono text-[10px] tracking-[0.3em] uppercase font-bold">
              What to expect
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-gray-200 p-7">
              <div className="text-gray-500 text-[11px] font-bold mb-3">01</div>
              <h3 className="text-[18px] font-bold mb-3">Tell Us About Your Project</h3>
              <p className="text-gray-600 text-[13px] leading-relaxed">
                Share your vision, goals, and timeline. We&apos;ll ask questions to understand exactly what you need.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-7">
              <div className="text-gray-500 text-[11px] font-bold mb-3">02</div>
              <h3 className="text-[18px] font-bold mb-3">Get Honest Advice</h3>
              <p className="text-gray-600 text-[13px] leading-relaxed">
                We&apos;ll outline the best approach, recommended tech stack, and realistic timeline for your build.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-7">
              <div className="text-gray-500 text-[11px] font-bold mb-3">03</div>
              <h3 className="text-[18px] font-bold mb-3">Receive Clear Pricing</h3>
              <p className="text-gray-600 text-[13px] leading-relaxed">
                No surprises. You&apos;ll get a transparent quote based on scope, with flexible payment options.
              </p>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}

