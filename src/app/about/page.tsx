import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "About me",
};

export default function About() {
  return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          Test test
      </div>
  );
}
