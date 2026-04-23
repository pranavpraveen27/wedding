import { useEffect, useState } from "react";

/** Countdown to the wedding date. */
const TARGET_DATE = new Date("2026-04-30T17:00:00");

const unitLabels = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
] as const;

const Countdown = () => {
  const [time, setTime] = useState(() => diff());

  useEffect(() => {
    const id = setInterval(() => setTime(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  function diff() {
    const d = Math.max(0, TARGET_DATE.getTime() - Date.now());
    return {
      days: Math.floor(d / 86400000),
      hours: Math.floor((d / 3600000) % 24),
      minutes: Math.floor((d / 60000) % 60),
      seconds: Math.floor((d / 1000) % 60),
    };
  }

  return (
    <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-xl mx-auto">
      {unitLabels.map(({ key, label }) => (
        <div key={key} className="relative">
          <div className="gold-border rounded-sm bg-card/70 backdrop-blur-sm py-4 md:py-6">
            <div className="font-display text-3xl md:text-5xl text-gold text-center tabular-nums">
              {String(time[key]).padStart(2, "0")}
            </div>
          </div>
          <div className="font-small-caps text-[10px] md:text-xs text-muted-foreground text-center mt-2">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
