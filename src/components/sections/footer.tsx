"use client";

import { IconBrandGithub } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";
import { siteConfig } from "@/config";
import { getTranslations } from "@/lib/i18n";
import type { Locale } from "@/types";

interface FooterProps {
  lang: Locale;
}

export function Footer({ lang }: FooterProps) {
  const t = getTranslations(lang);
  const [showTooltip, setShowTooltip] = useState(false);
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const animationFrameRef = useRef<number | null>(null);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget;
    if (!target) return;

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const halfWidth = target.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };

  return (
    <footer className="py-8 md:pb-16 pb-12 text-center">
      {/* biome-ignore lint/a11y/noStaticElementInteractions: Wrapper for tooltip hover detection */}
      <div
        className="relative inline-block"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <a
          href={siteConfig.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          onMouseMove={handleMouseMove}
        >
          <span>{t.footer.copyright}</span>
        </a>

        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              style={{
                translateX: translateX,
                rotate: rotate,
                whiteSpace: "nowrap",
              }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 z-50"
            >
              <div className="relative rounded-lg bg-neutral-900 dark:bg-neutral-800 px-3 py-2 text-xs text-white shadow-xl border border-neutral-700 dark:border-neutral-600 flex items-center gap-2">
                <div className="absolute inset-x-0 -bottom-px h-px w-3/4 mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                {t.footer.viewSource}
                {/* Triangle pointer */}
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 rotate-45 bg-neutral-900 dark:bg-neutral-800 border-r border-b border-neutral-700 dark:border-neutral-600" />
                <IconBrandGithub size={16} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </footer>
  );
}
