/** Decorative gold flourish used as a section divider. */
const Ornament = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-4 ${className}`}>
    <span className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-primary/60 to-primary/60" />
    <svg viewBox="0 0 40 20" className="w-10 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M2 10 Q10 2 20 10 Q30 18 38 10" />
      <circle cx="20" cy="10" r="2.2" fill="currentColor" />
      <circle cx="6" cy="10" r="0.8" fill="currentColor" />
      <circle cx="34" cy="10" r="0.8" fill="currentColor" />
    </svg>
    <span className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent via-primary/60 to-primary/60" />
  </div>
);

export default Ornament;
