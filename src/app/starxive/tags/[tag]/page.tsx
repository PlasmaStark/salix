import Link from "next/link";
import { getContentListFromJson, getAllTagsFromContent, ContentItem } from '@/lib/getPosts';
import { STARXIVE_FILE } from "@/config";
import Breadcrumb from "@/app/components/navigation/breadcrumb";

const tagColors: Record<string, string> = {
    security: "border-red-500",
    pkp: "border-blue-500",
    identification: "border-purple-500",
};

export async function generateStaticParams() {
    const entries: ContentItem[] = await getContentListFromJson(STARXIVE_FILE);
    const tags = await getAllTagsFromContent(entries);
    return tags.map(tag => ({ tag }));
}

export default async function StarXiveTagPage({params}: {params: Promise<{ tag: string }>}) {
    const { tag } = await params;
    const entries: ContentItem[] = await getContentListFromJson(STARXIVE_FILE);
    const filteredEntries = await entries.filter(entry => entry.tags.includes(tag));

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <Breadcrumb />
            <h1 className="text-4xl font-bold text-center mb-6">
                Star<span className="text-5xl text-red-500">X</span>ive
            </h1>
            <p className="text-lg text-center mb-10">
                Welcome to Leonardo's omnium archive.
            </p>

            {/* Articles Section */}
            <h2 className="text-2xl text-accent font-bold mb-6">Articles tagged with #{tag}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-3 mb-6">
                {filteredEntries.map((entry) => {
                    const firstTag = entry.tags[0];
                    const borderColor = tagColors[firstTag] || "border-gray-400";

                    return (
                        <Link
                            key={entry.id}
                            href={entry.url || "#"}
                            target={entry.url ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className={`no-underline p-3 rounded-lg shadow-sm border-4 transition-all ${borderColor} ${entry.url ? "bg-white hover:scale-105 hover:shadow-md" : "bg-gray-200 cursor-default"} flex flex-col`}
                        >
                            <h2 className="text-lg font-mono text-sm text-accent">{entry.id || entry.slug}</h2>
                            <p className="text-xs text-gray-700">{entry.title}</p>
                            <p className="text-xs text-gray-500">{entry.authors || "Unknown author"}</p>
                            <p className="text-xs mt-1 text-gray-500 italic line-clamp-3">{entry.description}</p>
                            <div className="mt-auto flex flex-wrap gap-1">
                                {entry.tags.map((tag) => (
                                    <span key={tag} className="text-gray-500 text-[10px] py-0.5 rounded-full">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    );
                })}
            </div>

            {/* Additional Sections */}
            <h2 className="text-2xl text-accent font-bold mb-6">Books tagged with #{tag}</h2>
            <h2 className="text-2xl text-accent font-bold mb-6">Conferences & Talks tagged with #{tag}</h2>
        </div>
    );
}
