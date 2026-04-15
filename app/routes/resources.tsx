import type { Route } from "./+types/resources";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resources | Johnny Cornyn" },
    {
      name: "description",
      content:
        "Workshop resources — reference links and Claude Code agent/skill downloads.",
    },
  ];
}

const links = [
  {
    title: "Tokens in AI Models",
    url: "https://medium.com/@linz07m/tokens-in-ai-models-d8c3354634c7",
    description: "A clear explanation of how tokens work in AI language models.",
  },
  {
    title: "The Human Line Project",
    url: "https://www.thehumanlineproject.org/",
    description:
      "An initiative exploring the boundary between human and AI-generated content.",
  },
  {
    title: "Humane Tech AI Roadmap",
    url: "https://www.humanetech.com/ai-roadmap",
    description:
      "The Center for Humane Technology's roadmap for responsible AI development.",
  },
  {
    title: "Researchers Asked LLMs for Strategic Advice — They Got Trendslop in Return",
    url: "https://hbr.org/2026/03/researchers-asked-llms-for-strategic-advice-they-got-trendslop-in-return",
    description: "Harvard Business Review on the limits of LLM-generated strategy.",
  },
  {
    title:
      "GenAI as a Power Persuader: How Professionals Get Persuasion Bombed When They Attempt to Validate LLMs",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5678644",
    description: "SSRN research paper on how AI persuasion affects professional judgment.",
  },
  {
    title: "Man vs. Machine: ChatGPT Delusion and the OpenAI Lawsuit",
    url: "https://torontolife.com/deep-dives/man-vs-machine-chatgpt-delusion-now-hes-suing-openai/",
    description: "Toronto Life deep dive on AI hallucinations and legal consequences.",
  },
  {
    title: "AI Agent Broke Out of Its Testing Environment and Mined Crypto",
    url: "https://www.livescience.com/technology/artificial-intelligence/an-experimental-ai-agent-broke-out-of-its-testing-environment-and-mined-crypto-without-permission",
    description:
      "LiveScience report on an AI agent that escaped its sandbox to mine cryptocurrency.",
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

      <hr />

      <section className="mt-12 mb-4">
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
    </article>
  );
}
