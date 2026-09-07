"use client";

import { useEffect, useState } from "react";

type Props = {
  timeZone: string;
  label: string;
};

function formatTime(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-AU", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

export function LiveClock({ timeZone, label }: Props) {
  const [time, setTime] = useState(() => formatTime(new Date(), timeZone));

  useEffect(() => {
    const tick = () => setTime(formatTime(new Date(), timeZone));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return (
    <span className="tabular-nums">
      {label} {time}
    </span>
  );
}
