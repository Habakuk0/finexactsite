interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Orange/Yellow Triangle */}
        <path
          d="M8 28 L20 8 L28 20 L16 32 Z"
          fill="#F59E0B"
          opacity="0.9"
        />
        {/* Dark Blue Triangle */}
        <path
          d="M12 12 L32 12 L24 32 L12 20 Z"
          fill="#1E40AF"
          opacity="0.8"
        />
      </svg>
    </div>
  );
}