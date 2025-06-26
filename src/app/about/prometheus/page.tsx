import type { Metadata } from "next";
import Breadcrumb from "@components/breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Project Prometheus",
    description: "The 'Project Prometheus' initiative",
};

export default function Prometheus() {
    return (
        <main className="container mx-auto px-2 py-2">
            {/* Breadcrumb */}
            <Breadcrumb />

            {/* Content */}
            <div className="mb-10">
                <h1 className="text-4xl font-bold text-center mb-6">
                    The 'Project Prometheus' initiative
                </h1>
                <h3 className="text-2xl font-semibold">
                    High school
                </h3>
                <p className="text-lg leading-relaxed py-5">
                    In high school, I often wrote some synthesis of the content while studying.
                    It was magic: ten to fifteen pages of an author's life condensed into half a page, directly from the book to Microsoft Word. It took a while, but it was well worth it.
                    I then passed them around, hoping they could be useful to others.
                    <br></br>
                    I still have a 200-pages binder for the high school diploma exam, which I call <i>Summa Absoluta</i>.
                    <br></br>
                    I will never confess that it was crucial in reviewing two years worth of philosophy from 3AM to 4AM on my oral examination day — to be held at 9AM sharp.
                </p>
                <h3 className="text-2xl font-semibold">
                    The catalyst
                </h3>
                <p className="text-lg leading-relaxed py-5">
                    I tried carrying that over to mathematics, but even with LaTeX it was impossible during live lectures. For some courses I still wrote some notes, but only while studying.
                    <br></br>
                    During the pandemic, Giorgio, a friend of mine, discussed doing the same for Complex Analysis. An idea naturally came: why not join forces and create free notes for everyone?
                </p>
                <h3 className="text-2xl font-semibold">
                    The project
                </h3>
                <p className="text-lg leading-relaxed py-5">
                    We founded the (informal) project and organisation <i>Progetto Prometeo</i> (Project Prometheus), with the goal of providing clear and organized LaTeX notes to other students. We certainly didn’t cover every course, as we were few but we’re proud of the work we accomplished! With another friend, Giacomo, we concluded this experience by creating <Link href="https://github.com/giacomoborin/Beamer-Theme">the semi-official LaTeX Beamer theme for the Department of Mathematics</Link>, which, for some arcane reason, is hosted on his profile rather than the organization’s. In the future, we’d like to add the ability to easily customize the theme’s colors and the department’s logo, making it adaptable for the entire University of Trento.
                    <br></br>
                    The project went on indefinite hiatus when all members completed their bachelor’s degrees. When I became student representative during my MsC, we merged Prometheus into the new structure of the student's drive for mathematics, and that was the end of it.
                </p>
            </div>
        </main >
    );
}
