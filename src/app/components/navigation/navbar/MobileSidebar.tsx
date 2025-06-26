export const MobileSidebar = ({
  isOpen,
  children,
  onClose,
}: {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}) => {
  return (
    <>
      {/* Overlay scuro */}
      <div
        className={`fixed inset-0 bg-[var(--background)] bg-opacity-40 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      {/* Sidebar da destra */}
      <aside
        className={`fixed top-0 right-0 w-64 h-full bg-[var(--color-primary)] text-white shadow-lg z-50 p-6
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <nav className="space-y-4">{children}</nav>
      </aside>
    </>
  );
};
