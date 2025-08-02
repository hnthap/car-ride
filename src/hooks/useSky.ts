import { useEffect, useState } from "react";

const A = (3 * Math.PI - 6) * 60;
const MINUTES_LIMIT = 24 * 60;
const NOON_MINUTES = 12 * 60;
const SUNRISE_MINUTES = 6 * 60;
const SUNSET_MINUTES = 18 * 60;

export function useSky(realMilliSecondsPer10Minutes = 50) {
  const [changing, setChanging] = useState(true);
  const [minutes, setMinutes] = useState(NOON_MINUTES);

  useEffect(() => {
    const timer = setTimeout(
      () => changing && setMinutes((minutes) => (minutes + 10) % MINUTES_LIMIT),
      realMilliSecondsPer10Minutes
    );
    return () => clearTimeout(timer);
  }, [changing, minutes]);

  function getSkyColor() {
    const luminance = isDaytime(minutes)
      ? Math.floor((minutes - SUNRISE_MINUTES) / 6) + 40
      : 5;
    return `hsl(186, 100%, ${luminance}%)`;
  }

  function getLightIntensity() {
    if (isDaytime(minutes)) {
      return Math.sin((minutes + A) / 1080) * 6 + 11;
    }
    return 2;
  }

  return { setChanging, minutes, getSkyColor, getLightIntensity };
}

function isDaytime(minutes: number): boolean {
  return minutes >= SUNRISE_MINUTES && minutes < SUNSET_MINUTES;
}
