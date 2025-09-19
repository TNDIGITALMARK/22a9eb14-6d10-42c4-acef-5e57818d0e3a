"use client";

import { useEffect } from "react";

export function PhoenixTracker() {
  useEffect(() => {
    // Load phoenix tracking script if needed
    if (typeof window !== "undefined" && window.phoenixTracking) {
      window.phoenixTracking.init();
    }
  }, []);

  return null;
}

declare global {
  interface Window {
    phoenixTracking?: {
      init: () => void;
    };
  }
}