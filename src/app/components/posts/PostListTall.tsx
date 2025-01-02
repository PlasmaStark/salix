import PostCard, { Post } from './PostCardTall';

type PostListProps = {
    posts: Post[];
};

export default function PostListTall({ posts }: PostListProps) {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts
                .sort(
                    (a: Post, b: Post) =>
                        new Date(b.date).getTime() - new Date(a.date).getTime()
                )
                .map((post) => (
                    <PostCard key={post.slug} post={post} />
                ))}
        </ul>
    );
}
