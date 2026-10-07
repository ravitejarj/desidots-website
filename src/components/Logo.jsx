export default function Logo({ size = 24, className = '' }) {
  return (
    <a href="#top" className={`flex items-center gap-2.5 font-display font-bold tracking-tight ${className}`}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C12 2 5 11 5 15.5C5 19.09 8.13 22 12 22C15.87 22 19 19.09 19 15.5C19 11 12 2 12 2Z"
          fill="#C8273E"
        />
      </svg>
      <span className="text-ink text-xl">DesiDots</span>
    </a>
  );
}
