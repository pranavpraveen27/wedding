import { useEffect, useState } from "react";

/**
 * IntroScreen
 * Shows a minimal Lord Ganesha image with blessing text.
 * Fades out smoothly after ~3s and unmounts.
 */
const IntroScreen = () => {
  const [visible, setVisible] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadingOut(true), 2400);
    const removeTimer = setTimeout(() => setVisible(false), 3200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-1000 ${
        fadingOut ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden={fadingOut}
    >
      {/* Decorative top line */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 h-px w-32 bg-gradient-gold animate-fade-in-slow" />

      {/* Ganesha SVG Icon */}
      <div className="relative mb-8 animate-fade-in-slow">
        <svg
          viewBox="0 0 100 100"
          className="w-32 h-32 md:w-40 md:h-40"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            filter: 'drop-shadow(0 0 20px hsl(var(--primary-glow) / 0.5))',
            animation: 'glow 3s ease-in-out infinite alternate'
          }}
        >
          <circle cx="50" cy="35" r="18" />
          <path d="M50 53 Q45 65 40 70 Q38 75 45 78 Q52 80 55 72" />
          <path d="M35 45 Q20 45 15 55" />
          <path d="M65 45 Q80 45 85 55" />
          <circle cx="45" cy="30" r="2" fill="hsl(var(--primary))" />
          <circle cx="55" cy="30" r="2" fill="hsl(var(--primary))" />
          <path d="M50 35 L50 42" />
          <path d="M30 60 Q50 75 70 60" />
        </svg>
      </div>

      {/* Sanskrit Text */}
      <h1 className="font-display text-2xl md:text-3xl text-primary mb-2 animate-fade-in-slow" style={{ animationDelay: '0.5s' }}>
        श्री गणेशाय नमः
      </h1>

      {/* Subtitle */}
      <p className="font-body text-sm text-muted-foreground animate-fade-in-slow" style={{ animationDelay: '1s' }}>
        With the blessings of Lord Ganesha
      </p>

      {/* Decorative bottom line */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 h-px w-32 bg-gradient-gold animate-fade-in-slow" style={{ animationDelay: '1.5s' }} />
    </div>
  );
};

export default IntroScreen;
