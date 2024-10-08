import { useEffect, useState } from "react";

const A = 3 * Math.PI - 6;

export function useSky() {
  const [changing, setChanging] = useState(true);
  const [hours, setHours] = useState(12);

  useEffect(() => {
    const timer = setTimeout(
      () => changing && setHours((hours + 0.205) % 24),
      500
    );
    return () => clearTimeout(timer);
  }, [changing, hours]);
  
  function getSkyColor() {
    const luminance =
      isDaytime(hours) ? Math.floor((hours - 6) * 7) + 40 : 5;
    return `hsl(186, 100%, ${luminance}%)`;
  }
  
  function getLightIntensity() {
    if (isDaytime(hours)) {
      return Math.sin((hours + A) / 18) * 6 + 11;
    }
    return 2;
  }
  
  return { setChanging, hours, getSkyColor, getLightIntensity };
}

function isDaytime(delta: number): boolean {
  return delta >= 6 && delta < 18;
}
