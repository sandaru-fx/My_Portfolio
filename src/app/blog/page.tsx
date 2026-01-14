import Link from "next/link";
import { getBlogPosts } from "@/lib/mdx";

export const metadata = {
    title: "Blog - My Portfolio",
    description: "Read my latest thoughts on web development and tech.",
};

export default async function BlogPage() {
    const posts = getBlogPosts();

    return (
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
                <h1 className="mb-8 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    Blog
                </h1>
                <div className="space-y-8">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="block group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10"
                        >
                            <article>
                                <div className="mb-2 text-sm text-neutral-400">
                                    {post.frontmatter.date}
                                </div>
                                <h2 className="mb-2 text-2xl font-semibold text-white group-hover:text-indigo-400 transition-colors">
                                    {post.frontmatter.title}
                                </h2>
                                <p className="text-neutral-300">
                                    {post.frontmatter.description}
                                </p>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
