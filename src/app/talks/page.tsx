import { getContentList } from "@/lib/getPosts";
import { TALKS_DIR } from "../../../config";
import Breadcrumb from "@components/breadcrumb";
import ContentList from "@/lib/ContentList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talks",
  description: "Some public talks",
};

export default async function TalksPage() {
  const posts = await getContentList(TALKS_DIR);

  return (
    <main className="container mx-auto px-2 py-2">
      <Breadcrumb />
    <h1 className="text-center font-serif text-4xl sm:text-5xl font-medium text-foreground">
      Talks
    </h1>
      <p className="text-sm text-center tracking-widest text-gray-500  mb-10">
      A selection of public talks.
    </p>
      <ContentList contents={posts} baseRoute="talks" variant="conference" />
    </main>
  );
}
