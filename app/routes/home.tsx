import type { Route } from "./+types/home";
import { Link } from "react-router";
import { CodeBlock } from "~/components/CodeBlock";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Johnny Cornyn | Build Your Website" },
    {
      name: "description",
      content:
        "A step-by-step workshop for building, deploying, and updating a modern website with Claude Code, GitHub, React Router, and Netlify.",
    },
  ];
}

export default function Home() {
  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">Build Your Website</h1>
      <p className="text-text-secondary text-lg mb-8">
        A step-by-step workshop for building, deploying, and updating your own
        website. Claude Code is your co-pilot for the entire process — it helps
        you scaffold, build, test, and deploy. The whole setup takes about an
        hour. Claude Code requires a subscription (starting at $20/month).
        Everything else is free.
      </p>

      <nav aria-label="Table of contents" className="mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-text-muted mb-3">
          Contents
        </h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>
            <a href="#prerequisites">What You'll Need</a>
          </li>
          <li>
            <a href="#step-1">Install Claude Code</a>
          </li>
          <li>
            <a href="#step-2">Scaffold Your Project</a>
          </li>
          <li>
            <a href="#step-3">Plan Your Site</a>
          </li>
          <li>
            <a href="#step-4">Build Your Site</a>
          </li>
          <li>
            <a href="#step-5">Set Up Git and GitHub</a>
          </li>
          <li>
            <a href="#step-6">Test and Audit with Playwright</a>
          </li>
          <li>
            <a href="#step-7">Deploy to Netlify</a>
          </li>
          <li>
            <a href="#step-8">Update and Maintain Your Site</a>
          </li>
          <li>
            <a href="#help">Want Help?</a>
          </li>
        </ol>
      </nav>

      {/* Prerequisites */}
      <section id="prerequisites" className="mb-12">
        <h2 className="text-xl font-bold mb-4">What You'll Need</h2>
        <p className="text-text-secondary mb-4">
          You only need three things to get started. Everything else gets
          introduced when you need it.
        </p>
        <ul className="list-disc list-inside space-y-2 text-text-secondary">
          <li>
            A <strong className="text-text">terminal</strong> — already on your
            computer. On Mac, open the Terminal app (search for "Terminal" in
            Spotlight). On Windows, open PowerShell (search for "PowerShell" in
            the Start menu).
          </li>
          <li>
            <strong className="text-text">Node.js</strong> installed on your
            computer —{" "}
            <a
              href="https://nodejs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              nodejs.org
            </a>
          </li>
          <li>
            A <strong className="text-text">Claude Code subscription</strong>{" "}
            — sign up at{" "}
            <a
              href="https://claude.ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              claude.ai
            </a>
            {". "}
            Claude Code is included with Claude Pro, Team, and Enterprise plans.
          </li>
        </ul>
        <p className="text-text-secondary mt-6">
          <strong className="text-text">On an iPad or Chromebook?</strong> You
          can do this entire workshop using{" "}
          <a
            href="https://github.com/features/codespaces"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Codespaces
          </a>
          , which gives you a full development environment (terminal, Node.js)
          in your browser — no installs needed. You'll need a free{" "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          account first. Create a new empty repository on GitHub (no README, no
          .gitignore), then click the green "Code" button, select the
          "Codespaces" tab, and create one. The free tier includes 60 hours per
          month. If you're using Codespaces, skip Step 5 — git and GitHub are
          already set up for you.
        </p>
      </section>

      {/* Step 1 */}
      <section id="step-1" className="mb-12">
        <h2 className="text-xl font-bold mb-4">
          Step 1: Install Claude Code
        </h2>
        <p className="text-text-secondary mb-4">
          Claude Code is an AI-powered CLI that lives in your terminal. It can
          read your project, understand what you're building, and write code for
          you. Instead of Googling every question, you describe what you want
          and Claude builds it. It's your co-pilot for the rest of this
          workshop.
        </p>
        <p className="text-text-secondary mb-4">
          Open your terminal and install Claude Code:
        </p>
        <p className="text-text-secondary text-sm mb-2">
          <strong className="text-text">macOS / Linux / WSL:</strong>
        </p>
        <CodeBlock copyable>curl -fsSL https://claude.ai/install.sh | bash</CodeBlock>
        <p className="text-text-secondary text-sm mt-4 mb-2">
          <strong className="text-text">Windows (CMD):</strong>
        </p>
        <CodeBlock copyable>curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd</CodeBlock>
        <p className="text-text-secondary text-sm mt-4 mb-2">
          <strong className="text-text">Windows (PowerShell):</strong>
        </p>
        <CodeBlock copyable>irm https://claude.ai/install.ps1 | iex</CodeBlock>
        <p className="text-text-secondary mt-4 mb-4">
          Once installed, launch it:
        </p>
        <CodeBlock copyable>claude</CodeBlock>
        <p className="text-text-secondary mt-4">
          The first time you run Claude Code, it will ask you to log in to
          your Anthropic account in the browser. Follow the prompts to
          authenticate — this only happens once. Once you see the Claude Code
          prompt, you're ready for the next step.
        </p>
      </section>

      {/* Step 2 */}
      <section id="step-2" className="mb-12">
        <h2 className="text-xl font-bold mb-4">
          Step 2: Scaffold Your Project
        </h2>
        <p className="text-text-secondary mb-4">
          Now you'll create a new website project. We'll use React Router with
          a Netlify template — this gives you a modern site with page routing,
          a development server, and everything you need to deploy later. Run
          this in your terminal:
        </p>
        <CodeBlock copyable>npx create-react-router@latest --template netlify/react-router-template</CodeBlock>
        <p className="text-text-secondary mt-4 mb-4">
          Follow the prompts — you can accept the defaults. Then move into
          your new project and install dependencies:
        </p>
        <CodeBlock copyable>{`cd my-site\nnpm install`}</CodeBlock>

        <h3 className="text-lg font-bold mt-8 mb-3">Start the dev server</h3>
        <p className="text-text-secondary mb-4">
          Start the dev server so you can see your site in the browser:
        </p>
        <CodeBlock copyable>npm run dev</CodeBlock>
        <p className="text-text-secondary mt-4">
          Open{" "}
          <code>http://localhost:5173</code> in your browser. You should see the
          default welcome page. Your project files are in the{" "}
          <code>app/</code> folder — that's where you'll do most of your work.
          Keep this dev server running — it updates live as you make changes.
          Open a second terminal tab for the commands in the next steps (on
          Mac, press <code>Cmd+T</code> in Terminal; on Windows, click the{" "}
          <code>+</code> tab in PowerShell).
        </p>
      </section>

      {/* Step 3 */}
      <section id="step-3" className="mb-12">
        <h2 className="text-xl font-bold mb-4">Step 3: Plan Your Site</h2>
        <p className="text-text-secondary mb-4">
          Before you start building, take a few minutes to decide what your site
          needs. You don't need a detailed plan — just enough to give Claude Code
          clear direction. Think about:
        </p>
        <ul className="list-disc list-inside space-y-2 text-text-secondary mb-4">
          <li>
            What pages do you need? (Home, About, Contact, Services, etc.)
          </li>
          <li>What should each page say?</li>
          <li>
            What's the feel? (Minimal, colorful, professional, playful?)
          </li>
          <li>
            Any sites you like the look of? (Great for reference when
            prompting.)
          </li>
        </ul>
        <p className="text-text-secondary">
          You can even do this planning inside Claude Code. Open it in your
          second terminal tab and have a conversation:
        </p>
        <CodeBlock copyable>{`cd my-site\nclaude`}</CodeBlock>
        <p className="text-text-secondary mt-4">
          Then try something like:
        </p>
        <CodeBlock copyable>I'm building a portfolio site for a photographer. I need a home page, an about page, and a contact page. I want it minimal and elegant. Help me plan what should go on each page.</CodeBlock>
        <p className="text-text-secondary mt-4">
          The more specific you are about what you want, the better Claude Code
          will build it in the next step.
        </p>
      </section>

      {/* Step 4 */}
      <section id="step-4" className="mb-12">
        <h2 className="text-xl font-bold mb-4">
          Step 4: Build Your Site
        </h2>
        <p className="text-text-secondary mb-4">
          With Claude Code running in your project, start building. Use the plan
          from Step 3 and describe what you want:
        </p>
        <CodeBlock copyable>Create an about page with my name, a short bio, and a link back to the home page</CodeBlock>
        <p className="text-text-secondary mt-4 mb-4">
          Check your browser — you should see the new page right away. Keep
          going:
        </p>
        <CodeBlock copyable>Add a contact page with a form for name, email, and message</CodeBlock>
        <p className="text-text-secondary mt-4 mb-4">
          And another:
        </p>
        <CodeBlock copyable>{`Change the homepage heading to "Welcome to My Site" and make the background a light gray`}</CodeBlock>
        <p className="text-text-secondary mt-4">
          Be specific about what you want. Review what it writes. Ask it to change
          things. It's a conversation, not a magic button — the more context you
          give, the better the results.
        </p>

        <h3 className="text-lg font-bold mt-8 mb-4">Plugins</h3>
        <p className="text-text-secondary mb-4">
          Plugins give Claude Code superpowers. They connect it to documentation,
          design tools, and other services so it can do more than just write code.
          Install them with the <code>/install-plugin</code> command inside Claude
          Code.
        </p>

        <h4 className="font-bold mt-6 mb-3">Context7</h4>
        <p className="text-text-secondary mb-4">
          Context7 gives Claude access to the latest documentation for any library
          or framework. Instead of relying on training data that might be outdated,
          Claude pulls the current docs in real time.
        </p>
        <CodeBlock copyable>/install-plugin context7</CodeBlock>
        <p className="text-text-secondary mt-4 mb-4">
          Once installed, Claude automatically fetches docs when you ask about a
          library. For example:
        </p>
        <CodeBlock>{`> How do I add a new page in React Router v7?\n  Use the route() helper in app/routes.ts...\n\n> How do I set up a contact form with Netlify Forms?\n  Add data-netlify="true" to your form element...`}</CodeBlock>
        <p className="text-text-secondary mt-4">
          This matters because libraries update constantly. Context7 means Claude
          always gives you answers based on the latest version, not something that
          changed six months ago.
        </p>

        <h4 className="font-bold mt-6 mb-3">Frontend Design</h4>
        <p className="text-text-secondary mb-4">
          The frontend-design plugin helps Claude build polished, distinctive
          interfaces. Without it, AI-generated sites tend to look generic. With
          it, Claude produces production-grade designs with real attention to
          typography, spacing, and visual hierarchy.
        </p>
        <CodeBlock copyable>/install-plugin frontend-design</CodeBlock>
        <p className="text-text-secondary mt-4 mb-4">
          After installing, use the <code>/frontend-design</code> command when
          you want Claude to build or redesign a page:
        </p>
        <CodeBlock copyable>/frontend-design Build me a landing page for my photography business with a minimal, elegant feel</CodeBlock>
        <p className="text-text-secondary mt-4">
          Be descriptive about the style you want. Mention sites you like, the
          mood you're going for, and any specific requirements like mobile
          responsiveness or accessibility. The more context you give, the better
          the result.
        </p>
      </section>

      {/* Step 5 */}
      <section id="step-5" className="mb-12">
        <h2 className="text-xl font-bold mb-4">
          Step 5: Set Up Git and GitHub
        </h2>
        <p className="text-text-secondary mb-4">
          Now that you've built something worth saving, set up version control.
          Git tracks every change you make so you can undo mistakes and see your
          project's history. GitHub stores your code online — and it's how
          Netlify will deploy your site in Step 7.
        </p>
        <p className="text-text-secondary mb-4">
          You'll need two things:
        </p>
        <ul className="list-disc list-inside space-y-2 text-text-secondary mb-4">
          <li>
            <strong className="text-text">Git</strong> — already installed on
            Mac and Linux. Windows users, download it from{" "}
            <a
              href="https://git-scm.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              git-scm.com
            </a>
          </li>
          <li>
            A <strong className="text-text">GitHub account</strong> — free at{" "}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com
            </a>
          </li>
        </ul>
        <p className="text-text-secondary mb-4">
          In your second terminal tab, make sure you're in your project folder
          and initialize a git repo:
        </p>
        <CodeBlock copyable>{`cd my-site\ngit init\ngit add .\ngit commit -m "initial project setup"`}</CodeBlock>
        <p className="text-text-secondary mt-4 mb-4">
          Now create a new repository on GitHub. Go to{" "}
          <a
            href="https://github.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/new
          </a>
          , name it <code>my-site</code>, and leave it empty (no README, no
          .gitignore). Then connect it and push — replace{" "}
          <code>YOUR-USERNAME</code> with your GitHub username:
        </p>
        <CodeBlock>{`git remote add origin https://github.com/YOUR-USERNAME/my-site.git\ngit push -u origin main`}</CodeBlock>
        <p className="text-text-secondary mt-4 mb-4">
          <strong className="text-text">Codespaces users:</strong> If you
          created your repo and opened a Codespace in the prerequisites step,
          git is already initialized and connected to GitHub. Just commit and
          push:
        </p>
        <CodeBlock copyable>{`git add .\ngit commit -m "initial project setup"\ngit push`}</CodeBlock>
        <p className="text-text-secondary mt-4">
          This is a one-time setup. From now on, saving your work is just{" "}
          <code>git add</code>, <code>git commit</code>, <code>git push</code>.
        </p>
      </section>

      {/* Step 6 */}
      <section id="step-6" className="mb-12">
        <h2 className="text-xl font-bold mb-4">
          Step 6: Test and Audit with Playwright
        </h2>
        <p className="text-text-secondary mb-4">
          Before you deploy, make sure your site actually works. Playwright is
          a testing tool that opens a real browser and clicks through your site
          automatically — checking that pages load, links work, and nothing is
          broken.
        </p>
        <p className="text-text-secondary mb-4">
          Install Playwright in your project:
        </p>
        <CodeBlock copyable>{`npm install -D @playwright/test\nnpx playwright install`}</CodeBlock>
        <p className="text-text-secondary mt-4 mb-4">
          The first command adds Playwright to your project. The second downloads
          the browsers it needs to run tests — Chromium, Firefox, and WebKit.
        </p>

        <h3 className="text-lg font-bold mt-6 mb-3">Writing tests with Claude Code</h3>
        <p className="text-text-secondary mb-4">
          You don't need to learn Playwright's syntax — Claude Code can write
          tests for you. With your dev server running, open Claude Code and ask:
        </p>
        <CodeBlock copyable>{`Write Playwright tests that check:\n- the homepage loads and has the right title\n- all navigation links work\n- the contact form is visible and has all fields\n- no pages return a 404`}</CodeBlock>
        <p className="text-text-secondary mt-4 mb-4">
          Claude will create a test file and run it for you. You'll see output
          like:
        </p>
        <CodeBlock>{`npx playwright test\n\nRunning 4 tests using 1 worker\n\n  ✓ homepage loads with correct title (1.2s)\n  ✓ navigation links work (0.8s)\n  ✓ contact form has all fields (0.6s)\n  ✓ no pages return 404 (0.9s)\n\n  4 passed (3.5s)`}</CodeBlock>

        <h3 className="text-lg font-bold mt-6 mb-3">Auditing accessibility</h3>
        <p className="text-text-secondary mb-4">
          You can also ask Claude Code to audit your site for accessibility
          issues — things like missing alt text, low contrast, or elements that
          can't be reached with a keyboard:
        </p>
        <CodeBlock copyable>Write a Playwright test that audits each page for accessibility issues using @axe-core/playwright</CodeBlock>
        <p className="text-text-secondary mt-4">
          Claude Code will install the{" "}
          <code>@axe-core/playwright</code> package and write a test that scans
          every page for WCAG violations. Fix any issues it finds — it's the
          easiest way to make sure your site works for everyone.
        </p>
      </section>

      {/* Step 7 */}
      <section id="step-7" className="mb-12">
        <h2 className="text-xl font-bold mb-4">Step 7: Deploy to Netlify</h2>
        <p className="text-text-secondary mb-4">
          Deploying means putting your site on the internet so anyone can visit
          it. You'll need a free{" "}
          <a
            href="https://netlify.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>{" "}
          account. Since your code is already on GitHub from Step 5, connecting
          to Netlify only takes a minute.
        </p>
        <p className="text-text-secondary mb-4">
          First, make sure all your latest changes are saved to GitHub. If
          you've made changes since your last commit:
        </p>
        <CodeBlock copyable>{`git add .\ngit commit -m "build out site pages"\ngit push`}</CodeBlock>
        <p className="text-text-secondary mt-4 mb-4">
          Then go to{" "}
          <a
            href="https://app.netlify.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            app.netlify.com
          </a>
          , click "Add new site," and connect your GitHub repo. Use these build
          settings:
        </p>
        <CodeBlock>{`Build command: npm run build\nPublish directory: build/client`}</CodeBlock>
        <p className="text-text-secondary mt-4 mb-4">
          Netlify will build and deploy your site. You'll get a URL like{" "}
          <code>your-site-name.netlify.app</code> immediately. You can add a
          custom domain later in your site settings.
        </p>
        <p className="text-text-secondary">
          Your site is live. Share the link — you just built and deployed a
          website from scratch.
        </p>
      </section>

      {/* Step 8 */}
      <section id="step-8" className="mb-12">
        <h2 className="text-xl font-bold mb-4">
          Step 8: Update and Maintain Your Site
        </h2>
        <p className="text-text-secondary mb-4">
          Every time you push to GitHub, Netlify automatically rebuilds and
          deploys your site. This is the workflow you'll use from now on.
        </p>

        <h3 className="text-lg font-bold mt-6 mb-3">Opening your project</h3>
        <p className="text-text-secondary mb-4">
          When you come back to your project after closing the terminal, open a
          new terminal and navigate to your project folder:
        </p>
        <CodeBlock copyable>{`cd my-site\nnpm run dev`}</CodeBlock>
        <p className="text-text-secondary mt-4">
          That starts the dev server again. Open{" "}
          <code>http://localhost:5173</code> to see your site locally.
        </p>

        <h3 className="text-lg font-bold mt-6 mb-3">Making changes</h3>
        <p className="text-text-secondary mb-4">
          You can edit files directly, or open Claude Code in a second terminal
          tab to make changes for you:
        </p>
        <CodeBlock>{`# In a second terminal tab:\ncd my-site\nclaude\n\n> Change the phone number on the contact page to 555-1234\n\n> Add a new project to the work page called "My New Project"`}</CodeBlock>

        <h3 className="text-lg font-bold mt-6 mb-3">Pushing updates live</h3>
        <p className="text-text-secondary mb-4">
          Once you're happy with your changes, run your tests, then save and
          push to GitHub. Netlify will redeploy automatically — your site
          updates in about a minute:
        </p>
        <CodeBlock copyable>{`npx playwright test\ngit add .\ngit commit -m "update contact info"\ngit push`}</CodeBlock>

        <h3 className="text-lg font-bold mt-6 mb-3">Working from a different computer</h3>
        <p className="text-text-secondary mb-4">
          As long as you've committed and pushed your work to GitHub, your code
          is saved — even if you delete the folder from your computer. If you're
          on a new machine (or just need a fresh copy), go to your repository on
          GitHub, click the green <strong className="text-text">Code</strong>{" "}
          button, make sure <strong className="text-text">HTTPS</strong> is
          selected, and copy the URL. Then open a terminal and run:
        </p>
        <CodeBlock>git clone YOUR-COPIED-URL</CodeBlock>
        <p className="text-text-secondary mt-4 mb-4">
          Then move into the project and install dependencies:
        </p>
        <CodeBlock copyable>{`cd my-site\nnpm install`}</CodeBlock>
        <p className="text-text-secondary mt-4">
          That gives you a complete copy of your project, ready to go. Start the
          dev server with <code>npm run dev</code> and pick up right where you
          left off.
        </p>

        <h3 className="text-lg font-bold mt-6 mb-3">If something goes wrong</h3>
        <p className="text-text-secondary">
          If <code>npm run dev</code> gives you an error, try running{" "}
          <code>npm install</code> first — this fixes most issues. For anything
          else, open Claude Code and describe the problem. It can read your error
          messages and help you fix them.
        </p>
      </section>

      <hr />

      {/* CTA Section */}
      <section id="help" className="mb-4">
        <h2 className="text-xl font-bold mb-4">Want Help?</h2>
        <p className="text-text-secondary mb-4">
          Not sure where to start? Book a consultation and we'll figure out your
          plan together:
        </p>
        <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6">
          <li>
            <Link to="/contact" className="text-text font-bold">One-on-one consultation</Link> — $50
          </li>
        </ul>
        <p className="text-text-secondary mb-4">
          Or if you'd rather have someone handle the whole thing, I build sites
          too:
        </p>
        <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6">
          <li>
            <strong className="text-text">Basic site</strong> (up to 5 pages) —
            $500
          </li>
          <li>
            <strong className="text-text">Complex site</strong> (custom features,
            e-commerce, etc.) — $1,500
          </li>
          <li>
            <strong className="text-text">Custom application</strong> (mobile
            apps, AI agent systems, etc.) —{" "}
            <Link to="/contact">starts with a consultation</Link>
          </li>
        </ul>
        <p>
          <Link to="/contact">Get in touch</Link>
        </p>
      </section>
    </article>
  );
}
