import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacts",
    description: "How to reach me",
};

export default function Contacts() {
    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-6">Contacts</h1>
            <p className="text-lg text-center mb-10">
                This is a test page. Contacts will be here.
            </p>
        </main>
    );
}
