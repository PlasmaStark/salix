import Link from "next/link";
import { getContentListFromJson, getAllTagsFromContent, ContentItem } from '@/lib/getPosts';
import { STARXIVE_FILE } from "@/config";
import Breadcrumb from "@/app/components/navigation/breadcrumb";
import { getGradientBackground } from "@/lib/starxive";

export async function generateStaticParams() {
    const entries: ContentItem[] = await getContentListFromJson(STARXIVE_FILE);
    const tags = await getAllTagsFromContent(entries);
    return tags.map(tag => ({ tag }));
}

export default async function StarXiveTagPage({ params }: { params: Promise<{ tag: string }> }) {
    const { tag } = await params;
    const entries: ContentItem[] = await getContentListFromJson(STARXIVE_FILE);
    const filteredEntries = entries.filter(entry => entry.tags.includes(tag));

    const groupedByType: Record<string, ContentItem[]> = {};
    filteredEntries.forEach((entry) => {
        const typeKey = entry.type || "Unknown";
        if (!groupedByType[typeKey]) {
            groupedByType[typeKey] = [];
        }
        groupedByType[typeKey].push(entry);
    });

    const sortedTypes = Object.keys(groupedByType).sort();

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <Breadcrumb />
            <h1 className="text-4xl font-bold text-center mb-6">
                Star<span className="text-5xl text-red-500">X</span>ive
            </h1>
            <p className="text-lg text-center mb-10">
                Welcome to Leonardo's omnium archive. <br></br>
                You are viewing all results for tag <b>{tag}</b>.
            </p>
            {sortedTypes.map((type) => (
                <div key={type}>
                    <h2 className="text-2xl text-accent font-bold mb-6">{type} with #{tag}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-3 mb-6">
                        {groupedByType[type].map((entry) => {
                            const backgroundStyle = { background: getGradientBackground(entry.tags) };

                            return (
                                <Link
                                    key={entry.id}
                                    href={entry.url || "#"}
                                    target={entry.url ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    className="no-underline p-3 rounded-lg shadow-sm transition-all hover:scale-105 hover:shadow-md flex flex-col"
                                    style={backgroundStyle}
                                >
                                    <h2 className="font-bold font-mono text-white">{entry.id || entry.slug}</h2>
                                    <p className="text-xs font-semibold text-white-700">{entry.title}</p>
                                    <p className="text-xs text-white-500">({entry.authors || "Unknown author"})</p>
                                    <p className="text-xs mt-1 text-white-500 italic line-clamp-3">{entry.description}</p>
                                    <div className="mt-auto flex flex-wrap gap-1">
                                        {entry.tags.map((tag) => (
                                            <span key={tag} className="bg-white text-gray-700 text-[10px] px-2 mt-1 rounded-full">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}
