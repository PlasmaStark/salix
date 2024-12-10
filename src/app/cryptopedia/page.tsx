import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cryptopedia",
    description: "A cryptographic encyclopedia redux",
};

export default function Cryptopedia() {
    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-6">Cryptopedia</h1>
            <p className="text-lg text-center mb-10">
                This is a test page. <b>Cryptopedia</b> will be hosted here.
            </p>
        </main>
    );
}
