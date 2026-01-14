import { getBlogPost, getBlogPosts } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
    const posts = getBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getBlogPost(slug);
    if (!post) return;
    return {
        title: post.frontmatter.title,
        description: post.frontmatter.description,
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
                <Link
                    href="/blog"
                    className="mb-8 inline-flex items-center text-sm text-neutral-400 hover:text-white transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                </Link>
                <article className="prose prose-invert prose-lg max-w-none">
                    <h1 className="mb-2">{post.frontmatter.title}</h1>
                    <div className="mb-8 text-neutral-400">{post.frontmatter.date}</div>
                    <MDXRemote source={post.content} />
                </article>
            </div>
        </div>
    );
}
