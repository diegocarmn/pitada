import { useEffect } from "react";
import type { useAutoDismissProps } from "../types/types";

export default function useAutoDismiss({
  setIsVisible,
  timeout,
}: useAutoDismissProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, timeout);

    return () => clearTimeout(timer);
  }, [timeout]);
}
