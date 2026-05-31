import Breadcrumb from "@components/breadcrumb";
import { getContentList } from "@lib/getPosts";
import { BLOG_DIR } from "../../../config";
import ContentList from "@/lib/ContentList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chronicles",
  description: "Amusing tales and mathematical content",
};

export default async function ChroniclesPage() {
  const posts = await getContentList(BLOG_DIR);

  return (
    <main className="container mx-auto px-2 py-2">
      <Breadcrumb />
      {/* Masthead */}
      <div className="border-t-2 border-b-2 border-foreground py-2 mb-1 text-center">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
          Tales · Mathematics · Curiosities
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold tracking-wide text-foreground">
          Chronicles
        </h1>
        <div className="flex items-center justify-center gap-2">
          <p className="text-xs font-mono text-gray-500">
            {new Date().toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "2-digit",
            })}
          </p>
          <span className="text-gray-700">-</span>
          <p className="text-xs text-gray-500 italic">"sic semper Leonardo"</p>
          <span className="text-gray-700">-</span>
          <p className="text-xs font-mono text-gray-500">
            Vol. {new Date().getFullYear() - 2022}
          </p>
        </div>
      </div>
      <hr className="border-gray-700 mb-6" />
      <ContentList
        contents={posts}
        baseRoute="chronicles"
        variant="newspaper"
      />
    </main>
  );
}
