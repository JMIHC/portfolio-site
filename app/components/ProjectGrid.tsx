import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Studio 9 Inc",
    url: "https://studio9inc.com/",
    image: "/images/studio9inc.png",
    tech: "React Router · Netlify · TailwindCSS · PayPal · Claude Code",
  },
  {
    title: "Iambic Nana",
    url: "https://iambicnana.com/",
    image: "/images/iambicnana.png",
    tech: "React Router · Netlify · TailwindCSS · Stripe · Claude Code",
  },
  {
    title: "Realign Apparel",
    url: "https://realignapparel.store/",
    image: "/images/realignapparel.png",
    tech: "Hydrogen (React.js) · Shopify E-Commerce",
  },
  {
    title: "Roll Funky Dice",
    url: "https://rollfunkydice.com/",
    image: "/images/rollfunkydice.png",
    tech: "Gatsby.js · AWS Amplify · GraphQL · TailwindCSS",
  },
  {
    title: "Nelson's Computer Help",
    url: "https://nelsonscomputerhelp.com/",
    image: "/images/nelsonscomputerhelp.png",
    tech: "Gatsby.js · TypeScript · TailwindCSS",
  },
  {
    title: "Cornyn Therapeutics",
    url: "https://www.cornyntherapeutics.ltd/",
    image: "/images/cornyntherapeutics.png",
    tech: "Gatsby.js · Sass · HTML5UP Design",
  },
  {
    title: "Charms Game",
    url: "https://www.charmsgame.com/",
    image: "/images/charmsgame.png",
    tech: "Gatsby.js · TailwindCSS",
  },
];

export function ProjectGrid() {
  return (
    <main className="flex-1 bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-brand-800 text-center mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.url} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
}
