import type { Metadata } from "next";
import Breadcrumb from '@components/breadcrumb';

export const metadata: Metadata = {
    title: "Prime Tales",
    description: "Mathematical shenanigans",
};

export default function PrimeTales() {
    return (
        <main className="container mx-auto px-4 py-8">
            <Breadcrumb/>
            <h1 className="text-4xl font-bold text-center mb-6">Prime Tales</h1>
            <p className="text-lg text-center mb-10">
                This is a test page. It will host <b>Prime Tales</b>.
            </p>
        </main>
    );
}
