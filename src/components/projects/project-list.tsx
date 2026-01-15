'use client'

import { useState } from 'react'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { motion, AnimatePresence } from 'framer-motion'
import { Project } from '@/lib/mdx'
import { cn } from '@/lib/utils'

interface ProjectListProps {
    projects: Project[]
}

export function ProjectList({ projects }: ProjectListProps) {
    const [activeFilter, setActiveFilter] = useState('All')

    // Extract unique technologies from all projects
    const allTags = Array.from(
        new Set(projects.flatMap((project) => project.frontmatter.technologies || []))
    )
    const filters = ['All', ...allTags].sort()

    const filteredProjects = projects.filter((project) => {
        if (activeFilter === 'All') return true
        return project.frontmatter.technologies?.includes(activeFilter)
    })

    return (
        <div className="space-y-12">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={cn(
                            'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                            activeFilter === filter
                                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 ring-2 ring-indigo-400 ring-offset-2 ring-offset-black'
                                : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                        )}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <motion.div
                layout
                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            layout
                            key={project.slug}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ProjectCard project={project} index={index} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredProjects.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                >
                    <p className="text-neutral-500 text-lg">No projects found for this filter.</p>
                </motion.div>
            )}
        </div>
    )
}
