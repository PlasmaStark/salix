import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "About me",
};

export default function About() {
  return (
    <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-6">About</h1>
        <p className="text-lg text-center mb-10">
            This is a test page. Various info will be here.
        </p>
    </main>
  );
}
