import type { Route } from "./+types/resources";
import { pageMeta } from "~/lib/meta";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Resources | Johnny Cornyn",
    description:
      "Workshop resources — reference links and Claude Code agent/skill downloads.",
    path: "/resources",
  });
}

const links = [
  {
    title: "Why AI Agents are either the best or worst thing we've ever built",
    url: "https://www.youtube.com/watch?v=WnzR5aOElvw",
    description: "Hannah Fry on the promise and peril of AI agents.",
  },
];

const downloads = [
  {
    title: "Build Your Website — Agent",
    file: "/downloads/build-your-website-agent.md",
    description:
      "A Claude Code command that walks you through the entire workshop interactively. Place in your project's .claude/commands/ directory.",
  },
  {
    title: "Scaffold Site — Skill",
    file: "/downloads/scaffold-site.md",
    description:
      "Scaffolds a new React Router project with the Netlify template. Place in your project's .claude/commands/ directory.",
  },
  {
    title: "Setup Git — Skill",
    file: "/downloads/setup-git.md",
    description:
      "Initializes a git repo, creates a GitHub remote, and pushes. Place in your project's .claude/commands/ directory.",
  },
  {
    title: "Test and Audit — Skill",
    file: "/downloads/test-and-audit.md",
    description:
      "Installs Playwright, writes tests, and runs an accessibility audit. Place in your project's .claude/commands/ directory.",
  },
  {
    title: "Deploy to Netlify — Skill",
    file: "/downloads/deploy-netlify.md",
    description:
      "Commits, pushes, and walks you through connecting to Netlify. Place in your project's .claude/commands/ directory.",
  },
];

export default function Resources() {
  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">Resources</h1>
      <p className="text-text-secondary text-lg mb-12">
        Reference links and downloads from the Build Your Website workshop.
      </p>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">Downloads</h2>
        <p className="text-text-secondary mb-6">
          Claude Code agent and skill files for the workshop. Download them and
          place them in the directories noted below.
        </p>
        <ul className="space-y-6">
          {downloads.map((dl) => (
            <li key={dl.file}>
              <a href={dl.file} download className="font-bold">
                {dl.title}
              </a>
              <p className="text-text-secondary text-sm mt-1">
                {dl.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <hr />

      <section className="mt-12 mb-4">
        <h2 className="text-xl font-bold mb-6">Links</h2>
        <ul className="space-y-6">
          {links.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold"
              >
                {link.title}
              </a>
              <p className="text-text-secondary text-sm mt-1">
                {link.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
