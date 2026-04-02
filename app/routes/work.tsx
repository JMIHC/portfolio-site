import type { Route } from "./+types/work";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Work | Johnny Cornyn" },
    {
      name: "description",
      content: "A selection of websites built by Johnny Cornyn.",
    },
  ];
}

const projects = [
  {
    title: "Waving Forest Qi Gong",
    url: "https://www.wavingforest.com/",
    tech: "Phoenix LiveView, Fly.io, Claude Code",
    description:
      "My Qi Gong teaching platform. I built this with Phoenix LiveView to support real-time, live classes — with the goal of moving off Zoom to a custom video experience powered by Mux.",
  },
  {
    title: "Iambic Nana",
    url: "https://iambicnana.com/",
    tech: "React Router, Netlify, TailwindCSS, Stripe, Claude Code",
    description:
      "A site for poet and author Susan Engle, featuring her Tiny Books and Biographies. Includes Stripe integration for selling her work directly.",
  },
  {
    title: "Studio 9 Inc",
    url: "https://studio9inc.com/",
    tech: "React Router, Netlify, TailwindCSS, PayPal, Claude Code",
    description:
      "A site for Lisa Blecker and Aaron Kreader's family-friendly media company, in production since 2005. Includes PayPal integration for their online store.",
  },
  {
    title: "Realign Apparel",
    url: "https://realignapparel.store/",
    tech: "Hydrogen (React.js), TailwindCSS, Shopify E-Commerce, Claude Code",
    description:
      "An e-commerce store for Ra, a Chicago-based designer. Built on Shopify's Hydrogen framework for a fast, custom storefront.",
  },
  {
    title: "Roll Funky Dice",
    url: "https://rollfunkydice.com/",
    tech: "Phoenix LiveView, TailwindCSS, Fly.io, PostgreSQL",
    description:
      "A real-time platform for tabletop gamers using the DCC system. Players roll dice and collaborate on stories together, with subscription-based access for groups.",
  },
  {
    title: "Charms Game",
    url: "https://www.charmsgame.com/",
    tech: "Gatsby.js, TailwindCSS, Konva",
    description:
      "A landing page and playable online version of the Charms card game, built with the Konva 2D canvas library.",
  },
  {
    title: "Nelson's Computer Help",
    url: "https://nelsonscomputerhelp.com/",
    tech: "Gatsby.js, TypeScript, TailwindCSS",
    description:
      "A landing page and contact form for Nelson's computer building and repair business in New Hampshire. Simple, fast, and to the point — exactly what he needed.",
  },
  {
    title: "Cornyn Therapeutics",
    url: "https://www.cornyntherapeutics.ltd/",
    tech: "Gatsby.js, Sass, HTML5UP Design",
    description:
      "A landing page for Charles Cornyn's massage therapy practice in Chicago. Connects visitors to his scheduling system.",
  },
];

export default function Work() {
  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">Work</h1>
      <p className="text-text-secondary mb-10">
        A selection of websites I've built for clients and personal projects.
      </p>

      <div className="space-y-10">
        {projects.map((project) => (
          <div key={project.url}>
            <h2 className="text-lg font-bold mb-1">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.title}
                <span
                  className="text-text-muted ml-1.5"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            </h2>
            <p className="text-sm text-text-muted mb-2">{project.tech}</p>
            <p className="text-text-secondary">{project.description}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
