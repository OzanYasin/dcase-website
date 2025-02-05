"use client";

import { useState, useEffect } from "react";

export function useIsMobile(breakpoint: number = 768) {
  const mediaQuery = `(max-width: ${breakpoint - 1}px)`;
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia(mediaQuery).matches
      : false,
  );

  useEffect(() => {
    const mql = window.matchMedia(mediaQuery);
    const listener = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    mql.addEventListener("change", listener);
    return () => mql.removeEventListener("change", listener);
  }, [mediaQuery]);

  return isMobile;
}
