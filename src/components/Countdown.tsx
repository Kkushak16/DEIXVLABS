import { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
  label?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(target: string): TimeLeft | null {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown({ targetDate, label = 'Registration closes in' }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(() => getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      const tl = getTimeLeft(targetDate);
      setTimeLeft(tl);
      if (!tl) clearInterval(timer);
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return (
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-danger" />
        <span className="text-sm font-display font-semibold uppercase tracking-wider text-secondary">
          Deadline Passed
        </span>
      </div>
    );
  }

  const units = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hrs' },
    { value: timeLeft.minutes, label: 'Min' },
    { value: timeLeft.seconds, label: 'Sec' },
  ];

  return (
    <div className="text-center" aria-live="polite" aria-atomic="true">
      <p className="text-xs font-display uppercase tracking-widest text-text-secondary mb-3">
        {label}
      </p>
      <div className="flex gap-3 justify-center">
        {units.map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center">
            <span
              className="font-display font-bold text-2xl md:text-3xl text-text-primary tabular-nums"
              style={{ fontVariantNumeric: 'tabular-nums' }}
            >
              {String(value).padStart(2, '0')}
            </span>
            <span className="text-[10px] font-display font-bold uppercase tracking-widest text-text-secondary mt-1">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
