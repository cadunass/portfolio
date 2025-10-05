"use client";

import { IconChevronDown, IconX } from "@tabler/icons-react";
import type { MotionValue } from "motion/react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const FloatingSocialNavbar = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      // Show button when scrolled down past 5% of page
      if (current > 0.05) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
        setIsOpen(false); // Close navbar when back at top
      }
    }
  });

  const showNavbar = !isScrolledDown || isOpen;

  return (
    <>
      {/* Navbar - shown at top or when toggled open */}
      <AnimatePresence>
        {showNavbar && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={cn(
              "fixed top-10 inset-x-0 mx-auto z-[5000] w-fit",
              className,
            )}
          >
            <FloatingDockContent items={items} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button - only shown when scrolled down */}
      <AnimatePresence>
        {isScrolledDown && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-1/2 -translate-x-1/2 z-[5001]"
          >
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="group relative flex h-8 w-10 items-center justify-center rounded-b-xl bg-white/90 backdrop-blur-sm shadow-lg transition-all hover:h-10 hover:shadow-xl dark:bg-neutral-900/90 border-x border-b border-neutral-200 dark:border-neutral-700 overflow-hidden"
              aria-label={isOpen ? "Hide social links" : "Show social links"}
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))",
                    "linear-gradient(90deg, rgba(59, 130, 246, 0.3), rgba(236, 72, 153, 0.3), rgba(59, 130, 246, 0.3))",
                    "linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3))",
                    "linear-gradient(180deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent"
                animate={{
                  x: ["-200%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: 180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -180 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10"
                  >
                    <IconX className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10"
                  >
                    <IconChevronDown className="h-4 w-4 text-neutral-600 dark:text-neutral-300 group-hover:translate-y-0.5 transition-transform" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const FloatingDockContent = ({
  items,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
}) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="flex h-16 items-end gap-4 rounded-2xl bg-gray-50 px-4 pb-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:bg-neutral-900"
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const widthTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20],
  );
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20],
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute top-24 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
