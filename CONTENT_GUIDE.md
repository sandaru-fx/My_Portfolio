# How to Edit Your Portfolio Content 📝

This guide explains how to update every part of your website manually.

## 1. Blogs & Projects (MDX Files)
Your blog posts and project case studies are simple text files.

- **Location**:
  - Blogs: `src/content/` (e.g., `hello-world.mdx`)
  - Projects: `src/content/projects/` (e.g., `ecommerce-dashboard.mdx`)

- **How to Edit**:
  1. Open the file in VS Code.
  2. **Top Part (Frontmatter)**: Edit title, date, description between the `---` lines.
  3. **Bottom Part (Content)**: Write your article using standard Markdown.

  ```markdown
  ---
  title: "My New Post"
  date: "2026-01-16"
  description: "Short summary..."
  ---
  
  # Hello World
  This is my content. I can use **bold**, *italics*, and lists.
  ```

## 2. Homepage & Static Text
Text that doesn't change often (like your Bio or Timeline) is inside "Components".

- **Homepage Hero Text**:
  - File: `src/app/page.tsx`
  - Look for: `<h1>`, `<p>` tags with the text.

- **Experience Timeline**:
  - File: `src/components/about/Timeline.tsx`
  - Look for: `const items = [...]`. Change the strings inside.

- **Tech Stack**:
  - File: `src/components/about/TechStack.tsx`
  - Look for: `items` array.

## 3. Database Data (Guestbook)
Comments and Guestbook entries live in a database file (`dev.db`).

- **How to Edit**:
  1. Open your terminal in VS Code.
  2. Run: `npx prisma studio`
  3. A browser window will open (like a spreadsheet).
  4. You can Add/Edit/Delete rows there.
  5. Close the terminal when done.

## 4. Images
- Add new images to the `public/` folder.
- Use them in code: `src="/my-image.jpg"` (No need to type `public`).
