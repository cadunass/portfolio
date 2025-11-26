"use client";

import { motion } from "motion/react";

export function NameAnnotation() {
  return (
    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-5xl pointer-events-none">
      {/** biome-ignore lint/a11y/noSvgWithoutTitle: Name Annotation SVG */}
      <svg
        viewBox="0 0 1000 120"
        className="w-full h-auto opacity-0 animate-[fadeIn_0.8s_ease-in_2s_forwards]"
        style={{
          filter: "drop-shadow(0 0 8px rgba(99, 102, 241, 0.2))",
        }}
        aria-label="Visual annotation showing how Carlos Eduardo Nass becomes cadunass"
      >
        {/* Hand-drawn style filter */}
        <defs>
          <filter id="roughen">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05"
              numOctaves="2"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="1.5"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>

        {/* "cadu" label (above left brace) */}
        <motion.text
          x="260"
          y="25"
          className="fill-indigo-500 dark:fill-indigo-400 text-2xl font-semibold"
          style={{ fontFamily: "var(--font-caveat)" }}
          textAnchor="middle"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 3.2 }}
        >
          cadu
        </motion.text>

        {/* Left horizontal overbrace (above "Carlos Eduardo") - WIDER */}
        <motion.path
          d="M 80 55 L 80 50 Q 80 45 85 45 L 255 45 Q 260 45 260 40 Q 260 45 265 45 L 435 45 Q 440 45 440 50 L 440 55"
          className="stroke-indigo-400 dark:stroke-indigo-400"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          filter="url(#roughen)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.9 }}
          transition={{ duration: 1, delay: 2.2, ease: "easeInOut" }}
        />

        {/* Plus sign */}
        <motion.text
          x="500"
          y="75"
          className="fill-indigo-500 dark:fill-indigo-400 text-3xl font-bold"
          style={{ fontFamily: "var(--font-caveat)" }}
          textAnchor="middle"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 3.8 }}
        >
          +
        </motion.text>

        {/* "nass" label (above right brace) */}
        <motion.text
          x="635"
          y="25"
          className="fill-indigo-500 dark:fill-indigo-400 text-2xl font-semibold"
          style={{ fontFamily: "var(--font-caveat)" }}
          textAnchor="middle"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 3.4 }}
        >
          nass
        </motion.text>

        {/* Right horizontal overbrace (above "Nass") */}
        <motion.path
          d="M 570 55 L 570 50 Q 570 45 575 45 L 630 45 Q 635 45 635 40 Q 635 45 640 45 L 695 45 Q 700 45 700 50 L 700 55"
          className="stroke-indigo-400 dark:stroke-indigo-400"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          filter="url(#roughen)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.9 }}
          transition={{ duration: 0.8, delay: 2.6, ease: "easeInOut" }}
        />

        {/* Equals sign and result */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 4.2, ease: "backOut" }}
        >
          <text
            x="760"
            y="75"
            className="fill-indigo-500 dark:fill-indigo-400 text-3xl font-bold"
            style={{ fontFamily: "var(--font-caveat)" }}
            textAnchor="middle"
          >
            =
          </text>

          <text
            x="860"
            y="78"
            className="fill-indigo-600 dark:fill-indigo-300 text-3xl font-bold"
            style={{ fontFamily: "var(--font-caveat)" }}
            textAnchor="middle"
          >
            cadunass
          </text>

          {/* Underline for emphasis */}
          <motion.path
            d="M 805 82 Q 860 85 915 82"
            className="stroke-indigo-600 dark:stroke-indigo-300"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            filter="url(#roughen)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 4.5 }}
          />
        </motion.g>
      </svg>
    </div>
  );
}
