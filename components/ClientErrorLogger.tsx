"use client";

import { useEffect } from "react";

export default function ClientErrorLogger() {
  useEffect(() => {

    // Logs ALL runtime client errors
    window.addEventListener("error", (event) => {
      console.error("❌ Client Error:", event.error || event.message);
    });

    // Logs all unhandled promises
    window.addEventListener("unhandledrejection", (event) => {
      console.error("❌ Unhandled Promise Rejection:", event.reason);
    });

    // Logs hydration mismatches
    window.addEventListener("react-hydration-error", (event) => {
  const customEvent = event as CustomEvent;
  console.error("❌ Hydration Error:", customEvent.detail);
});


  }, []);

  return null; // renders nothing, just listens
}
