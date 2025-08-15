"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const prefersDark =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [mode, setMode] = useState<"light" | "dark">(
    prefersDark ? "dark" : "light"
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", mode);
  }, [mode]);

  return (
    <button
      onClick={() => setMode((m) => (m === "dark" ? "light" : "dark"))}
      className="rounded-full border px-3 py-1 text-sm hover:opacity-90"
      style={{
        borderColor: "var(--color-border)",
        backgroundColor: "var(--color-surface)",
        color: "var(--color-text)",
      }}
    >
      {mode === "dark" ? "L" : "D"}
    </button>
  );
}
