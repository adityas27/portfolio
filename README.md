# Portfolio

A data-driven personal portfolio built with Next.js, TypeScript, React, and Tailwind CSS.

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

## Deploy

This app is ready to deploy on Vercel or any Node.js-compatible hosting provider. If you deploy on Vercel, the default Next.js setup works without extra configuration.

## Content architecture

All portfolio content lives in JSON files inside the `data/` directory. Components import data through `lib/data.ts` and render it. This keeps the site easy to update without editing component JSX.

Files:

- `data/profile.json` — name, role, bio, contact details
- `data/navigation.json` — top navigation items
- `data/projects.json` — portfolio projects and featured items
- `data/experience.json` — work history
- `data/education.json` — education entries
- `data/skills.json` — skill categories
- `data/achievements.json` — highlights
- `data/social.json` — social links and contact URLs

## Add a project

To add a project, append another object to `data/projects.json`.

Example:

```json
{
  "id": "new-project",
  "number": "05",
  "title": "New Project",
  "shortDescription": "Short summary.",
  "description": "Longer description.",
  "featured": true,
  "year": "2026",
  "role": "Full Stack Engineer",
  "technologies": ["Next.js", "TypeScript"],
  "problem": "Problem description.",
  "solution": "Solution description.",
  "results": ["Result 1", "Result 2"],
  "metrics": [
    { "value": "30%", "label": "Faster" }
  ],
  "image": "/images/projects/new-project.webp",
  "githubUrl": "https://github.com/your-name/new-project",
  "liveUrl": "https://example.com",
  "caseStudyUrl": null
}
```

The project will automatically render without editing `app/page.tsx` or creating a new component.

## Add experience

Add another object to `data/experience.json` with the company, role, period, responsibilities, and technologies.

## Add education

Add another object to `data/education.json` with institution, degree, field, and dates.

## Replace images

Place images in the `public/images/` folder and point the relevant `image` field in JSON to that path.

Suggested structure:

```bash
public/
  images/
    projects/
    profile/
```

## Replace the resume

Update `data/profile.json` to point `resumeUrl` to your file and place the resume in `public/`.

Example:

```json
"resumeUrl": "/resume.pdf"
```

Then save the file at `public/resume.pdf`.

## Update social links

Edit `data/social.json` to change your GitHub, LinkedIn, email, and other channels.

## Project structure

- `components/` — reusable UI and page sections
- `data/` — all structured portfolio content
- `lib/data.ts` — typed data access layer
- `types/` — TypeScript models for JSON data
- `app/` — app routing and page assembly
