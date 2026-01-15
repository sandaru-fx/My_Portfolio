'use client'

import { motion } from 'framer-motion'

const technologies = [
    { name: 'TypeScript', category: 'Language' },
    { name: 'JavaScript', category: 'Language' },
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Framer Motion', category: 'Styling' },
    { name: 'Three.js', category: '3D' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Prisma', category: 'Backend' },
    { name: 'SQLite', category: 'Database' },
    { name: 'Git', category: 'Tool' },
    { name: 'VS Code', category: 'Tool' },
]

export function TechStack() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
                <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-lg bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors"
                >
                    <div className="font-medium text-neutral-200">{tech.name}</div>
                    <div className="text-xs text-neutral-500 mt-1">{tech.category}</div>
                </motion.div>
            ))}
        </div>
    )
}
