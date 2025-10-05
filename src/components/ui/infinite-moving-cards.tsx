"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "./glowing-effect";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name?: string;
    title?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      // Set animation direction
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }

      // Set animation speed
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }

      setStart(true);
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {/* Render items twice for infinite scroll - React maintains proper event handlers */}
        {[...items, ...items].map((item, idx) => (
          <li
            className="relative w-[100px] max-w-full shrink-0 rounded-2xl md:w-[200px]"
            key={`${item.name ?? item.quote}-${idx}`}
          >
            <div className="relative h-24 rounded-2xl border p-2 md:rounded-3xl md:p-3">
              <GlowingEffect
                blur={0}
                borderWidth={2}
                spread={60}
                glow={false}
                disabled={false}
                proximity={80}
                inactiveZone={0.1}
                movementDuration={1.0}
              />
              <div className="relative flex h-full flex-col justify-center gap-3 overflow-hidden rounded-xl border border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-4 py-8 dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]">
                <blockquote className="text-center">
                  <span className="relative z-20 text-sm md:text-base leading-snug font-medium text-neutral-800 dark:text-gray-100 break-words">
                    {item.quote}
                  </span>
                  {item.name && item.title && (
                    <div className="relative z-20 mt-4 flex flex-col items-center">
                      <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                        {item.name}
                      </span>
                      <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                        {item.title}
                      </span>
                    </div>
                  )}
                </blockquote>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
