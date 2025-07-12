export default function InlineButtonLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-block px-3 py-1 bg-gray-800 text-white rounded-full text-sm no-underline hover:bg-accent transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
