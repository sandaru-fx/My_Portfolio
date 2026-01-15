'use client'

import { motion } from 'framer-motion'

const items = [
    {
        year: '2026',
        title: 'Full Stack Intern',
        company: 'Tech Solutions Inc.',
        description: 'Building modern web applications using Next.js and React.',
    },
    {
        year: '2025',
        title: 'Computer Science Student',
        company: 'University of Technology',
        description: 'Specializing in Software Engineering and Web Development.',
    },
    {
        year: '2024',
        title: 'Freelance Developer',
        company: 'Self-employed',
        description: 'Created custom websites for local businesses.',
    },
]

export function Timeline() {
    return (
        <div className="relative border-l border-neutral-800 ml-3 space-y-8 py-2">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8"
                >
                    {/* Dot */}
                    <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-neutral-700 ring-4 ring-neutral-900" />

                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                        <h3 className="text-base font-semibold text-neutral-200">{item.title}</h3>
                        <span className="text-sm text-neutral-500">{item.year}</span>
                    </div>
                    <p className="text-sm text-neutral-400 mb-1">{item.company}</p>
                    <p className="text-sm text-neutral-500">{item.description}</p>
                </motion.div>
            ))}
        </div>
    )
}
