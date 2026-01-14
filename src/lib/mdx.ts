import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "src/content");

export interface BlogPost {
    slug: string;
    frontmatter: {
        title: string;
        date: string;
        description: string;
        [key: string]: any;
    };
    content: string;
}

export function getBlogPosts(): BlogPost[] {
    if (!fs.existsSync(contentDirectory)) {
        return [];
    }

    const files = fs.readdirSync(contentDirectory);

    const posts = files
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => {
            const slug = file.replace(/\.mdx$/, "");
            const fullPath = path.join(contentDirectory, file);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                slug,
                frontmatter: data as BlogPost["frontmatter"],
                content,
            };
        })
        .sort((a, b) => {
            // Sort by date descending
            return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
        });

    return posts;
}

export function getBlogPost(slug: string): BlogPost | null {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        frontmatter: data as BlogPost["frontmatter"],
        content,
    };
}

export interface Project {
    slug: string;
    frontmatter: {
        title: string;
        description: string;
        date: string;
        image?: string;
        technologies?: string[];
        demoUrl?: string;
        repoUrl?: string;
        [key: string]: any;
    };
    content: string;
}

export function getProjects(): Project[] {
    const projectsDirectory = path.join(process.cwd(), "src/content/projects");

    if (!fs.existsSync(projectsDirectory)) {
        return [];
    }

    const files = fs.readdirSync(projectsDirectory);

    const projects = files
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => {
            const slug = file.replace(/\.mdx$/, "");
            const fullPath = path.join(projectsDirectory, file);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                slug,
                frontmatter: data as Project["frontmatter"],
                content,
            };
        })
        .sort((a, b) => {
            return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
        });

    return projects;
}

export function getProject(slug: string): Project | null {
    const fullPath = path.join(process.cwd(), "src/content/projects", `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        frontmatter: data as Project["frontmatter"],
        content,
    };
}
