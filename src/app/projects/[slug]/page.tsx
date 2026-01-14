import { getProject, getProjects } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export async function generateStaticParams() {
    const projects = getProjects();
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getProject(slug);
    if (!project) return;
    return {
        title: project.frontmatter.title,
        description: project.frontmatter.description,
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getProject(slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <Link
                href="/projects"
                className="mb-8 inline-flex items-center text-sm text-neutral-400 hover:text-white transition-colors"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
            </Link>

            <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
                {/* Main Content */}
                <div>
                    <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
                        {project.frontmatter.title}
                    </h1>
                    <p className="mb-8 text-xl text-neutral-400">
                        {project.frontmatter.description}
                    </p>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <MDXRemote source={project.content} />
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                        <h3 className="mb-4 font-semibold text-white">Project Info</h3>

                        <div className="mb-6 space-y-4">
                            <div>
                                <div className="text-xs text-neutral-500 uppercase tracking-widest">Date</div>
                                <div className="text-neutral-300">{project.frontmatter.date}</div>
                            </div>

                            <div>
                                <div className="text-xs text-neutral-500 uppercase tracking-widest mb-2">Tech Stack</div>
                                <div className="flex flex-wrap gap-2">
                                    {project.frontmatter.technologies?.map((tech) => (
                                        <span key={tech} className="rounded-full bg-white/10 px-2 py-1 text-xs text-neutral-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            {project.frontmatter.demoUrl && (
                                <a
                                    href={project.frontmatter.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition"
                                >
                                    <ExternalLink className="h-4 w-4" />
                                    Live Demo
                                </a>
                            )}
                            {project.frontmatter.repoUrl && (
                                <a
                                    href={project.frontmatter.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition"
                                >
                                    <Github className="h-4 w-4" />
                                    Source Code
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
