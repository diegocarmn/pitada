"use client";
import { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { AnimatePresence, easeOut, motion } from "motion/react";
import { fadeIn } from "../motion/animations";

export default function ThemeToggle() {
  const [mode, setMode] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "dark" || current === "light") {
      setMode(current);
    }
  }, []);

  useEffect(() => {
    if (!mode) return;
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem("theme", mode);
  }, [mode]);

  if (!mode) return null;

  return (
    <AnimatePresence>
      <motion.button
      {...fadeIn}
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}
        onClick={() => {
          const next = mode === "dark" ? "light" : "dark";
          setMode(next);
        }}
        className="rounded-full px-2 py-2 text-text-light cursor-pointer"
        title={mode === "dark" ? "Modo claro" : "Modo escuro"}
        aria-label={
          mode === "dark"
            ? "Alternar para modo claro"
            : "Alternar para modo escuro"
        }
        aria-pressed={mode === "dark"}
        type="button"
      >
        {mode === "dark" ? (
          <IoSunny className="h-6 w-6" />
        ) : (
          <IoMoon className="h-6 w-6" />
        )}
      </motion.button>
    </AnimatePresence>
  );
}
