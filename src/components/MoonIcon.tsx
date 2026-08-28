export const MoonIcon = ({ size = "md" }: { size?: "sm" | "md" }) => {
  const sizeClasses = size === "sm" ? "w-8 h-8" : "w-16 h-16";
  return (
    <div className="relative inline-block">
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`drop-shadow-lg ${sizeClasses}`}
      >
        <path
          d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
          fill="url(#moon-gradient)"
        />
        <path
          d="M30 14C28.8954 14 28 13.1046 28 12C28 10.8954 28.8954 10 30 10C31.1046 10 32 10.8954 32 12C32 13.1046 31.1046 14 30 14Z"
          fill="hsl(var(--background))"
          opacity="0.3"
        />
        <path
          d="M18 26C17.4477 26 17 25.5523 17 25C17 24.4477 17.4477 24 18 24C18.5523 24 19 24.4477 19 25C19 25.5523 18.5523 26 18 26Z"
          fill="hsl(var(--background))"
          opacity="0.3"
        />
        <path
          d="M26 36C25.4477 36 25 35.5523 25 35C25 34.4477 25.4477 34 26 34C26.5523 34 27 34.4477 27 35C27 35.5523 26.5523 36 26 36Z"
          fill="hsl(var(--background))"
          opacity="0.3"
        />
        <defs>
          <linearGradient id="moon-gradient" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="hsl(var(--moon-glow))" />
            <stop offset="1" stopColor="hsl(var(--primary))" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute -top-1 -left-2 text-moon-glow text-xs">z</div>
      <div className="absolute -top-2 left-1 text-moon-glow text-xs opacity-70">z</div>
    </div>
  );
};
