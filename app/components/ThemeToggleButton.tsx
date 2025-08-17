"use client";
import { useEffect, useState } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

export default function ThemeToggle() {
  const prefersDark =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: light)").matches;
  const [mode, setMode] = useState<"light" | "dark">(
    prefersDark ? "dark" : "light"
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", mode);
  }, [mode]);

  return (
    <button
      onClick={() => setMode((m) => (m === "dark" ? "light" : "dark"))}
      className="rounded-full px-2 py-2 text-text-light cursor-pointer hover:scale-115 active:scale-95 transition-transform duration-200 ease-in-out"
      title={mode === "dark" ? "Modo claro" : "Modo escuro"}
    >
      {mode === "dark" ? (
        <IoSunny className="h-6 w-6" />
      ) : (
        <IoMoon className="h-6 w-6" />
      )}
    </button>
  );
}
