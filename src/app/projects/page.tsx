import { getProjects } from "@/lib/mdx";
import { ProjectList } from "@/components/projects/project-list";

export const metadata = {
    title: "Projects - My Portfolio",
    description: "A showcase of my recent work and case studies.",
};

export default function ProjectsPage() {
    const projects = getProjects();

    return (
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    Featured Projects
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-neutral-400">
                    A selection of projects I've worked on, from web applications to 3D experiments.
                </p>
            </div>

            <ProjectList projects={projects} />
        </div>
    );
}
