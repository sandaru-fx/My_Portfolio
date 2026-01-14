"use client";

import Link from "next/link";
import { Project } from "@/lib/mdx";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
    project: Project;
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link href={`/projects/${project.slug}`} className="group relative block h-full">
                <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 transition-all duration-500 hover:border-indigo-500/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-indigo-500/20">
                    <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-900">
                        {/* Using a gradient placeholder if no image, or the actual image */}
                        {project.frontmatter.image ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={project.frontmatter.image}
                                alt={project.frontmatter.title}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        ) : (
                            <div className="h-full w-full bg-gradient-to-br from-indigo-900 to-black" />
                        )}

                        <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black">
                                View Case Study
                            </span>
                        </div>
                    </div>

                    <div className="p-4">
                        <h3 className="mb-2 text-xl font-bold text-white group-hover:text-indigo-400">
                            {project.frontmatter.title}
                        </h3>
                        <p className="mb-4 line-clamp-2 text-sm text-neutral-400">
                            {project.frontmatter.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.frontmatter.technologies?.slice(0, 3).map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full bg-white/5 px-2 py-1 text-xs text-neutral-300"
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.frontmatter.technologies && project.frontmatter.technologies.length > 3 && (
                                <span className="rounded-full bg-white/5 px-2 py-1 text-xs text-neutral-300">
                                    +{project.frontmatter.technologies.length - 3}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
