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

export default function SchedulePage() {
  const [now, setNow] = useState(() => new Date());
  const today = startOfDay(now);
  const next7Days = Array.from({ length: 7 }, (_, i) => addDays(today, i));

  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Date picker */}
          <motion.div
            className="md:col-span-6 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-white font-bold text-sm tracking-widest uppercase">Next 7 Days</div>
              <div className="text-gray-500 text-[12px] font-medium">
                Based on your local date
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {next7Days.map((d, idx) => {
                const isSelected = idx === selectedDayIndex;
                return (
                  <button
                    key={d.toISOString()}
                    type="button"
                    onClick={() => {
                      setSelectedDayIndex(idx);
                      setSelectedTime(null);
                    }}
                    className={[
                      'rounded-2xl border transition-all duration-300',
                      'px-2 py-3 text-left',
                      isSelected
                        ? 'bg-[#0A66FF] border-[#0A66FF] shadow-[0_0_20px_rgba(10,102,255,0.35)]'
                        : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/20'
                    ].join(' ')}
                  >
                    <div className={isSelected ? 'text-white' : 'text-gray-400'} style={{ fontSize: 11, fontWeight: 700 }}>
                      {formatDayLabel(d)}
                    </div>
                    <div className={isSelected ? 'text-white' : 'text-gray-200'} style={{ fontSize: 18, fontWeight: 800, marginTop: 2 }}>
                      {d.getDate()}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 p-4 rounded-2xl border border-white/5 bg-white/[0.02]">
              <div className="text-gray-500 text-[12px] uppercase tracking-widest font-bold mb-1">Selected Date</div>
              <div className="text-white font-bold text-lg">{formatMonthDay(selectedDay)}</div>
            </div>

            <div className="mt-6 text-gray-500 text-[12px] leading-relaxed">
              Only the next 7 days are selectable.
            </div>
          </motion.div>

          {/* Time slots */}
          <motion.div
            className="md:col-span-6 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-start justify-between gap-6 mb-4">
              <div>
                <div className="text-white font-bold text-sm tracking-widest uppercase">Available Times</div>
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
                        onClick={() => setSelectedTime(t)}
                        className={[
                          'rounded-2xl border px-4 py-3 text-left transition-all duration-300',
                          isSelected
                            ? 'bg-[#0A66FF] border-[#0A66FF] text-white shadow-[0_0_20px_rgba(10,102,255,0.35)]'
                            : 'bg-white/[0.02] border-white/10 text-white/90 hover:bg-white/[0.05] hover:border-white/20'
                        ].join(' ')}
                      >
                        <div className="text-[14px] font-bold tracking-tight">{t}</div>
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
                        ? 'bg-white text-black border-transparent hover:bg-gray-200'
                        : 'bg-white/5 text-white/30 border-white/10 cursor-not-allowed'
                    ].join(' ')}
                    onClick={() => {
                      if (!selectedTime) return;
                      // Placeholder action: wire this to your backend or scheduling provider.
                      alert(`Booked request: ${formatMonthDay(selectedDay)} at ${selectedTime}`);
                    }}
                  >
                    Confirm Time
                    <span className="inline-flex items-center ml-3">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </motion.button>
                </div>

                {selectedTime && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="mt-4 text-gray-500 text-[13px] leading-relaxed"
                  >
                    You picked <span className="text-white font-bold">{selectedTime}</span>. Click “Confirm Time” to continue.
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

