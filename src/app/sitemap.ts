import { MetadataRoute } from 'next'
import { getBlogPosts, getProjects } from '@/lib/mdx'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://portfolio-demo.com' // Replace with your actual domain

    const blogs = getBlogPosts().map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.frontmatter.date),
    }))

    const projects = getProjects().map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(project.frontmatter.date),
    }))

    const routes = [
        '',
        '/blog',
        '/projects',
        '/guestbook',
        '/about',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
    }))

    return [...routes, ...blogs, ...projects]
}
