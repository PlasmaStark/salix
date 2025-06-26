export const HamburgerButton = ({
  isOpen,
  onClick,
  className,
}: {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}) => (
  <button
    onClick={onClick}
    className={`md:hidden p-2 text-white hover:text-[var(--color-accent)] focus:outline-none transition-colors duration-300 ${className ?? ""}`}
    aria-label="Toggle menu"
  >
    <span
      className={`absolute h-[2px] w-5 bg-[var(--color-accent)] transform transition duration-300 ease-in-out ${
        isOpen ? "rotate-45 top-[11px]" : "top-[6px]"
      }`}
    />
    <span
      className={`absolute h-[2px] w-5 bg-[var(--color-accent)] transition-all duration-300 ease-in-out ${
        isOpen ? "opacity-0" : "top-[11px]"
      }`}
    />
    <span
      className={`absolute h-[2px] w-5 bg-[var(--color-accent)] transform transition duration-300 ease-in-out ${
        isOpen ? "-rotate-45 top-[11px]" : "top-[16px]"
      }`}
    />
  </button>
);
