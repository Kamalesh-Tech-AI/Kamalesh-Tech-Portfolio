
import { Variants } from 'framer-motion';

// FIX: Added 'Variants' as the return type to ensure the returned object conforms to framer-motion's strict variant types.
export const textVariant = (delay: number): Variants => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

// FIX: Changed 'type' parameter from 'string' to a more specific union type to satisfy framer-motion's stricter types for variants.
// FIX: Added 'Variants' as the return type to ensure the returned object conforms to framer-motion's strict variant types.
export const fadeIn = (direction: string, type: "spring" | "tween", delay: number, duration: number): Variants => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

// FIX: Changed 'type' parameter from 'string' to a more specific union type to satisfy framer-motion's stricter types for variants.
// FIX: Added 'Variants' as the return type to ensure the returned object conforms to framer-motion's strict variant types.
export const slideIn = (direction: string, type: "spring" | "tween", delay: number, duration: number): Variants => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

// FIX: Added 'Variants' as the return type to ensure the returned object conforms to framer-motion's strict variant types.
export const staggerContainer = (staggerChildren: number, delayChildren: number): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
