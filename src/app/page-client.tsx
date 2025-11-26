"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { RocketLoader } from "@/components/ui/loader";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { detectLocale } from "@/lib/detect-locale";

/**
 * Client component that handles locale detection and redirect
 * Separated from page.tsx to allow metadata export in the parent
 */
export function RootPageClient() {
  const router = useRouter();

  useEffect(() => {
    const locale = detectLocale();
    // Add a small delay to show the loading animation
    const timeoutId = setTimeout(() => {
      router.replace(`/${locale}`);
    }, 2500); // 2.5 seconds delay

    return () => clearTimeout(timeoutId);
  }, [router]);

  // Show minimal loading state during redirect
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-foreground">
      <ShootingStars minDelay={300} maxDelay={1000} />
      <StarsBackground />
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        <RocketLoader />
      </div>
    </div>
  );
}
