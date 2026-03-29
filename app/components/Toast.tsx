import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosAlert } from "react-icons/io";
import useAutoDismiss from "../hooks/useAutoDismiss";
import { slideDown, ToastAnimation } from "../motion/animations";

type ToastProps = {
  errorMessage?: string;
};

export default function Toast({ errorMessage }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);
  const TIMEOUT_DURATION = 4000;

  useAutoDismiss({
    setIsVisible,
    timeout: TIMEOUT_DURATION,
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.span
          {...ToastAnimation}
          className="fixed top-10 left-1/2 -translate-x-1/2 z-[1000] pt-2 pb-3 px-2 rounded-2xl bg-danger text-white drop-shadow-md drop-shadow-black/30 max-w-[95vw] lg:max-w-[60vw] w-max overflow-clip"
        >
          <div className="flex items-start gap-2">
            <IoIosAlert className="h-10 w-10 shrink-0 self-center" />

            <div className="font-ui text-left">
              <p className="font-extrabold text-lg">Ops!</p>
              <p className="font-medium">{errorMessage}</p>
            </div>

            <button
              className="cursor-pointer"
              onClick={() => setIsVisible(false)}
              title="Fechar"
            >
              <IoClose className="h-5 w-5 shrink-0" />
            </button>
          </div>

          <motion.div
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: TIMEOUT_DURATION / 1000, ease: "linear" }}
            className="absolute bottom-0 left-0 h-1 bg-white/60 rounded-4xl"
          />
        </motion.span>
      )}
    </AnimatePresence>
  );
}
