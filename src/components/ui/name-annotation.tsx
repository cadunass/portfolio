"use client";

import { motion } from "motion/react";

interface NameAnnotationProps {
  triggerAnimation: boolean;
  target: "carlosEduardo" | "nass";
}

export function NameAnnotation({
  triggerAnimation,
  target,
}: NameAnnotationProps) {
  // Hand-drawn curved bracket above the text (organic curly brace style)
  // Inspired by SVG underline doodles - natural curves with slight imperfections
  const selectionPaths = {
    // Elegant curved bracket above "Carlos Eduardo" with natural hand-drawn wobbles
    carlosEduardo:
      "M 10 18 C 12 16 15 14 20 12 C 30 9 45 7 65 6 C 85 5.5 115 5.5 135 6 C 155 7 170 9 180 12 C 185 14 188 16 190 18",
    // Elegant curved bracket above "Nass" with natural hand-drawn wobbles
    nass: "M 10 18 C 15 15 25 11 45 8 C 70 6 130 6 155 8 C 175 11 185 15 190 18",
  };

  const labels = {
    carlosEduardo: "CADU",
    nass: "NASS",
  };

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 0.7,
    },
  };

  const labelVariants = {
    hidden: {
      opacity: 0,
      y: 5,
      scale: 0.9,
    },
    visible: {
      opacity: 0.95,
      y: 0,
      scale: 1,
    },
  };

  const delays = {
    carlosEduardo: 0.3,
    nass: 1.1,
  };

  const labelDelays = {
    carlosEduardo: 1.0,
    nass: 1.8,
  };

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      {/* Curved bracket SVG - positioned above the text */}
      <svg
        className="absolute left-0 right-0 w-full"
        style={{
          top: "-25px",
          height: "25px",
        }}
        viewBox="0 0 200 20"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={`gradient-${target}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="50%" stopColor="#818CF8" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
        </defs>

        <motion.path
          d={selectionPaths[target]}
          stroke={`url(#gradient-${target})`}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
          initial="hidden"
          animate={triggerAnimation ? "visible" : "hidden"}
          transition={{
            duration: 1,
            delay: delays[target],
            ease: [0.22, 1, 0.36, 1], // Custom ease for smooth drawing
          }}
        />
      </svg>

      {/* Label text that appears above the curved bracket */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase"
        style={{
          top: "-42px",
          background:
            "linear-gradient(90deg, #A78BFA 0%, #818CF8 50%, #6366F1 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textShadow: "0 0 20px rgba(129, 140, 248, 0.3)",
        }}
        variants={labelVariants}
        initial="hidden"
        animate={triggerAnimation ? "visible" : "hidden"}
        transition={{
          duration: 0.6,
          delay: labelDelays[target],
          ease: [0.16, 1, 0.3, 1], // Smooth ease out
        }}
      >
        {labels[target]}
      </motion.div>
    </div>
  );
}
