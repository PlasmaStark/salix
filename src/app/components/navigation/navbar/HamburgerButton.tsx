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
    className={`relative md:hidden w-10 h-10 flex items-center justify-center text-white hover:text-[var(--color-accent)] focus:outline-none transition-colors duration-300 ${
      className ?? ""
    }`}
    aria-label="Toggle menu"
  >
    <div className="relative w-5 h-4">
      <span
        className={`absolute h-[2.5px] w-full bg-[var(--color-accent)] transition duration-300 ease-in-out ${
          isOpen
            ? "rotate-45 top-1/2 -translate-y-1/2"
            : "top-[1px] translate-y-0"
        }`}
      />
      <span
        className={`absolute h-[2.5px] w-full bg-[var(--color-accent)] transition duration-300 ease-in-out top-1/2 -translate-y-1/2 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute h-[2.5px] w-full bg-[var(--color-accent)] transition duration-300 ease-in-out ${
          isOpen
            ? "-rotate-45 top-1/2 -translate-y-1/2"
            : "bottom-[1px] translate-y-0"
        }`}
      />
    </div>
  </button>
);
