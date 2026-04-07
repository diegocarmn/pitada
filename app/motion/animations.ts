import type { Transition } from "framer-motion";

const TRANSITION_DURATION = 0.25;
const EXIT_DURATION = 0.15;

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    duration: TRANSITION_DURATION,
    ease: "easeOut",
  } satisfies Transition,
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: {
    duration: TRANSITION_DURATION,
    ease: "easeOut",
  } satisfies Transition,
};

export const slideUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: {
    duration: TRANSITION_DURATION,
    ease: "easeOut",
  } satisfies Transition,
};

export const slideDown = {
  initial: { opacity: 0, y: -10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TRANSITION_DURATION,
      ease: "easeOut",
    } satisfies Transition,
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: EXIT_DURATION,
      ease: "easeOut",
    } satisfies Transition,
  },
};

export const ToastAnimation = {
  initial: { opacity: 0, y: -8, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -8, scale: 0.95 },
  transition: {
    duration: TRANSITION_DURATION,
    ease: [0.16, 1, 0.3, 1],
  } satisfies Transition,
};
