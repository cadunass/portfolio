"use client";
import { motion } from "motion/react";

export const RocketLoader = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-20 w-20 stroke-neutral-500 [--fill-final:var(--color-red-400)] [--fill-initial:var(--color-neutral-50)] dark:stroke-neutral-100 dark:[--fill-final:var(--color-red-500)] dark:[--fill-initial:var(--color-neutral-800)]"
      aria-label="Loading animation"
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 1.5,
        ease: "easeInOut" as const,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop" as const,
      }}
    >
      <title>Loading</title>
      <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" />
      {/* Main rocket body */}
      <motion.path
        initial={{ pathLength: 0, fill: "var(--fill-initial)" }}
        animate={{ pathLength: 1, fill: "var(--fill-final)" }}
        transition={{
          duration: 2,
          ease: "easeInOut" as const,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse" as const,
        }}
        d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"
      />
      {/* Rocket flame/trail */}
      <motion.path
        initial={{ pathLength: 0, fill: "var(--fill-initial)" }}
        animate={{ pathLength: 1, fill: "var(--fill-final)" }}
        transition={{
          duration: 2,
          ease: "easeInOut" as const,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse" as const,
          delay: 0.3,
        }}
        d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"
      />
      {/* Rocket window */}
      <motion.circle
        initial={{ pathLength: 0, fill: "var(--fill-initial)" }}
        animate={{ pathLength: 1, fill: "var(--fill-final)" }}
        transition={{
          duration: 2,
          ease: "easeInOut" as const,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse" as const,
          delay: 0.5,
        }}
        cx="15"
        cy="9"
        r="1"
      />
    </motion.svg>
  );
};
