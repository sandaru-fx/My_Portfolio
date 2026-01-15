import { TechStack } from '@/components/about/TechStack'
import { Timeline } from '@/components/about/Timeline'

export const metadata = {
    title: 'About Me',
    description: 'Learn more about my background, experience, and what I do.',
}

export default function AboutPage() {
    return (
        <section className="max-w-2xl mx-auto px-6 py-12">
            <div className="mb-12">
                <h1 className="font-bold text-3xl mb-4 tracking-tighter">About Me</h1>
                <p className="text-neutral-400 leading-relaxed mb-6">
                    I'm a passionate Full Stack Developer based in Sri Lanka. I love building things for the web,
                    from simple landing pages to complex web applications.
                    My journey started with curiosity and has grown into a career of solving problems with code.
                </p>
                <p className="text-neutral-400 leading-relaxed">
                    When I'm not coding, you can find me exploring new technologies, contributing to open source,
                    or sharing what I learn through my blog.
                </p>
            </div>

            <div className="mb-12">
                <h2 className="font-semibold text-2xl mb-6 tracking-tight">Timeline</h2>
                <Timeline />
            </div>

            <div className="mb-12">
                <h2 className="font-semibold text-2xl mb-6 tracking-tight">Tech Stack</h2>
                <TechStack />
            </div>

            <div>
                <h2 className="font-semibold text-2xl mb-6 tracking-tight">Connect</h2>
                <p className="text-neutral-400 mb-4">
                    I'm always open to new opportunities and interesting projects.
                </p>
                <ul className="flex flex-col space-y-2 text-neutral-400">
                    <li>
                        <a href="https://github.com/sandaru-fx" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-200 transition-colors flex items-center gap-2">
                            GitHub <span className="text-xs">↗</span>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:hello@example.com" className="hover:text-neutral-200 transition-colors flex items-center gap-2">
                            Email <span className="text-xs">↗</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-200 transition-colors flex items-center gap-2">
                            LinkedIn <span className="text-xs">↗</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}
