/** biome-ignore-all lint/suspicious/noArrayIndexKey: we need to use the index as the key */
"use client";

import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { NameAnnotation } from "./name-annotation";

interface AnnotatedTypewriterProps {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  onComplete?: () => void;
  showAnnotations: boolean;
}

export function AnnotatedTypewriter({
  words,
  className,
  onComplete,
  showAnnotations,
}: AnnotatedTypewriterProps) {
  // Split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      // Calculate total animation duration
      const totalChars = wordsArray.reduce(
        (acc, word) => acc + word.text.length,
        0,
      );
      const totalDuration = totalChars * 0.1 + 0.3; // stagger delay + last char duration

      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        },
      );

      // Trigger onComplete callback after animation finishes
      if (onComplete) {
        const timer = setTimeout(() => {
          onComplete();
        }, totalDuration * 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [isInView, animate, onComplete, wordsArray]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, wordIdx) => {
          const isCarlos = wordIdx === 0;
          const isEduardo = wordIdx === 1;
          const isNass = wordIdx === 2;

          // Wrap "Carlos Eduardo" together
          if (isCarlos) {
            return (
              <span key="carlos-eduardo-wrap" className="relative inline-block">
                {/* Carlos */}
                <div className="inline-block">
                  {word.text.map((char, charIndex) => (
                    <motion.span
                      initial={{}}
                      key={`char-${charIndex}`}
                      className={cn(
                        `dark:text-white text-black opacity-0 hidden`,
                        word.className,
                      )}
                    >
                      {char}
                    </motion.span>
                  ))}
                  &nbsp;
                </div>
                {/* Eduardo */}
                {wordsArray[1] && (
                  <div className="inline-block">
                    {wordsArray[1].text.map((char, charIndex) => (
                      <motion.span
                        initial={{}}
                        key={`eduardo-char-${charIndex}`}
                        className={cn(
                          `dark:text-white text-black opacity-0 hidden`,
                          wordsArray[1].className,
                        )}
                      >
                        {char}
                      </motion.span>
                    ))}
                    &nbsp;
                  </div>
                )}
                <NameAnnotation
                  triggerAnimation={showAnnotations}
                  target="carlosEduardo"
                />
              </span>
            );
          }

          // Skip Eduardo since it's rendered with Carlos
          if (isEduardo) {
            return null;
          }

          // Wrap "Nass" separately
          if (isNass) {
            return (
              <span key="nass-wrap" className="relative inline-block">
                <div className="inline-block">
                  {word.text.map((char, charIndex) => (
                    <motion.span
                      initial={{}}
                      key={`char-${charIndex}`}
                      className={cn(
                        `dark:text-white text-black opacity-0 hidden`,
                        word.className,
                      )}
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
                <NameAnnotation
                  triggerAnimation={showAnnotations}
                  target="nass"
                />
              </span>
            );
          }

          return null;
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold text-center", className)}>
      {renderWords()}
    </div>
  );
}
