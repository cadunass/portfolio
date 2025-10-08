import Link from "next/link";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-neutral-950">
      <ShootingStars />
      <StarsBackground />

      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 text-9xl font-bold text-white">404</h1>
        <h2 className="mb-6 text-3xl font-semibold text-neutral-300 md:text-4xl">
          Page Not Found
        </h2>
        <p className="mb-8 max-w-md text-lg text-neutral-400">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-3 font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/20"
        >
          <span className="relative z-10">Back to Home</span>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" />
        </Link>
      </div>
    </div>
  );
}
