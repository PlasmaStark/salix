import type { Metadata } from "next";
import Breadcrumb from "@components/breadcrumb";

export const metadata: Metadata = {
    title: "Salix",
    description: "This website! Programmed with React.",
};

export default function Salix() {
    return (
        <main className="container mx-auto px-2 py-2">
            {/* Breadcrumb */}
            <Breadcrumb />

            {/* Content */}
            <div className="mb-10">
                <h1 className="text-4xl font-bold text-center mb-6">
                    The 'Salix' project
                </h1>
                <p className="text-lg leading-relaxed py-5">
                    Being at the beginning of my career as researcher, I feel the need of somewhere to be reachable and reach, a place to put my silly stuff.
                    Maybe for (very) future lecture materials? Or scientific articles? Who knows.
                </p>
                <p className="text-lg leading-relaxed py-5">
                    My experience as webmaster for <a href="https://www.decifris.it/">DeCifris</a> taught me well, but this time I chose to learn the <i>React</i> framework, perhaps more flexible than <i>Angular</i>.
                    After visiting a botanical garden, I chose to stick with <b>Salix</b>. A Salix has strong adaptive capabilities, such as my website would need to adapt to all my crazy and ever-increasing needs.
                </p>
                <p className="text-lg leading-relaxed py-5">
                    Development of the project with id <span className="font-mono text-accent rounded">2024-SALIX</span> started as a side quest during my winter holidays in 2024, and the website was first deployed on january 17th 2025.
                    <br></br>
                    It will surely evolve with time.
                </p>
            </div>
        </main >
    );
}
