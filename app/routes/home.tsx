import type { Route } from "./+types/home";
import { Link } from "react-router";
import { CodeBlock } from "~/components/CodeBlock";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Johnny Cornyn | Build Your Website" },
    {
      name: "description",
      content:
        "A step-by-step workshop for building, deploying, and updating a modern website with GitHub, React Router, Claude Code, and Netlify.",
    },
  ];
}

export default function Home() {
  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">Build Your Website</h1>
      <p className="text-text-secondary text-lg mb-8">
        A step-by-step workshop for building, deploying, and updating your own
        website. Most of the tools are free. Claude Code requires a
        subscription (starting at $20/month). The whole setup takes about an
        hour.
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
            <a href="#step-1">Set Up Your Project</a>
          </li>
          <li>
            <a href="#step-2">Set Up Git and GitHub</a>
          </li>
          <li>
            <a href="#step-3">Plan Your Site</a>
          </li>
          <li>
            <a href="#step-4">Build with Claude Code</a>
          </li>
          <li>
            <a href="#step-5">Deploy to Netlify</a>
          </li>
          <li>
            <a href="#step-6">Test and Audit with Playwright</a>
          </li>
          <li>
            <a href="#step-7">Update and Maintain Your Site</a>
          </li>
          <li>
            <a href="#help">Want Help?</a>
          </li>
        </ol>
      </nav>

      {/* Prerequisites */}
      <section id="prerequisites" className="mb-12">
        <h2 className="text-xl font-bold mb-4">What You'll Need</h2>
        <ul className="list-disc list-inside space-y-2 text-text-secondary">
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
            A terminal — already on your computer (Terminal on Mac, PowerShell
            on Windows). On a Chromebook, you'll need{" "}
            <a
              href="https://support.google.com/chromebook/answer/9145439"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linux (Beta)
            </a>{" "}
            enabled — check if your model supports it. If not, you may need
            access to a Mac or Windows computer for this workshop.
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
          <li>
            A <strong className="text-text">Netlify account</strong> — free at{" "}
            <a
              href="https://netlify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              netlify.com
            </a>
          </li>
        </ul>
      </section>

      {/* Step 1 */}
      <section id="step-1" className="mb-12">
        <h2 className="text-xl font-bold mb-4">Step 1: Set Up Your Project</h2>
        <p className="text-text-secondary mb-4">
          {/* PLACEHOLDER: Describe what React Router is and why you're using it.
              Explain that this command scaffolds a full project with routing,
              a dev server, and a build system ready to go. */}
          We'll use React Router to scaffold a new project. This gives you a
          modern website with page routing, a development server, and everything
          you need to build and deploy. Open your terminal and run:
        </p>
        <CodeBlock copyable>npx create-react-router@latest my-site</CodeBlock>
        <p className="text-text-secondary mt-4 mb-4">
          Follow the prompts — you can accept the defaults. Then move into
          your new project and install dependencies:
        </p>
        <CodeBlock copyable>{`cd my-site\nnpm install`}</CodeBlock>

        <h3 className="text-lg font-bold mt-8 mb-3">Add TailwindCSS</h3>
        <p className="text-text-secondary mb-4">
          {/* PLACEHOLDER: Explain what Tailwind is — a utility-first CSS
              framework that lets you style everything with classes
              directly in your HTML. No separate CSS files to manage. */}
          TailwindCSS lets you style your site by adding classes directly to your
          markup — no switching between files, no naming things. Install it:
        </p>
        <CodeBlock copyable>npm install tailwindcss @tailwindcss/vite</CodeBlock>
        <p className="text-text-secondary mt-4 mb-4">
          Then add the Tailwind plugin to your <code>vite.config.ts</code>:
        </p>
        <CodeBlock>{`import tailwindcss from "@tailwindcss/vite";\n\nexport default defineConfig({\n  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],\n});`}</CodeBlock>
        <p className="text-text-secondary mt-4 mb-4">
          And add the Tailwind import to the top of <code>app/app.css</code>:
        </p>
        <CodeBlock copyable>@import "tailwindcss";</CodeBlock>
        <p className="text-text-secondary mt-4">
          {/* PLACEHOLDER: Mention that Claude Code can handle all of this
              setup for you if you'd rather not do it manually. */}
          That's it — Tailwind is ready. Or, skip the manual setup entirely and
          ask Claude Code to do it for you in Step 4.
        </p>

        <h3 className="text-lg font-bold mt-8 mb-3">Using a template</h3>
        <p className="text-text-secondary mb-4">
          {/* PLACEHOLDER: Explain that templates give you a head start —
              pre-built layouts, components, and styling so you're not
              starting from a blank page. */}
          If you'd rather start with something pre-built instead of a blank
          project, React Router has official templates. These come with layouts,
          components, and styling already in place:
        </p>
        <CodeBlock copyable>npx create-react-router@latest my-site --template react-router-templates/default</CodeBlock>
        <p className="text-text-secondary mt-4 mb-4">
          You can browse available templates at{" "}
          <a
            href="https://github.com/react-router-templates"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/react-router-templates
          </a>
          . Pick one that's close to what you want and customize from there — it's
          often faster than building everything from scratch.
        </p>

        <h3 className="text-lg font-bold mt-8 mb-3">Start the dev server</h3>
        <p className="text-text-secondary mb-4">
          Once your project is set up (with or without a template), start the
          dev server:
        </p>
        <CodeBlock copyable>npm run dev</CodeBlock>
        <p className="text-text-secondary mt-4">
          {/* PLACEHOLDER: Describe what they should see in the browser.
              Walk through the file structure briefly — where pages live,
              where styles go, etc. */}
          Open{" "}
          <code>http://localhost:5173</code> in your browser. You should see the
          default welcome page (or your template's starter page). Your project
          files are in the <code>app/</code> folder — that's where you'll do most
          of your work. Keep this dev server running in the background — it
          updates live as you make changes.
        </p>
      </section>

      {/* Step 2 */}
      <section id="step-2" className="mb-12">
        <h2 className="text-xl font-bold mb-4">
          Step 2: Set Up Git and GitHub
        </h2>
        <p className="text-text-secondary mb-4">
          {/* PLACEHOLDER: Explain why version control matters — it saves
              your work, lets you undo mistakes, and is required for
              deploying to Netlify later. */}
          Before you start building, set up version control. Git tracks every
          change you make so you can undo mistakes and see your project's history.
          GitHub stores your code online — and it's how Netlify will deploy your
          site later.
        </p>
        <p className="text-text-secondary mb-4">
          Initialize a git repo and make your first commit:
        </p>
        <CodeBlock copyable>{`git init\ngit add .\ngit commit -m "initial project setup"`}</CodeBlock>
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
        <p className="text-text-secondary mt-4">
          {/* PLACEHOLDER: Reassure them this is a one-time setup.
              After this, updating is just commit and push. */}
          This is a one-time setup. From now on, saving your work is just{" "}
          <code>git add</code>, <code>git commit</code>, <code>git push</code>.
          We'll come back to that in Step 7.
        </p>
      </section>

      {/* Step 3 */}
      <section id="step-3" className="mb-12">
        <h2 className="text-xl font-bold mb-4">Step 3: Plan Your Site</h2>
        <p className="text-text-secondary mb-4">
          {/* PLACEHOLDER: Help them think about what they're building
              before they start prompting Claude. Even a few sentences
              makes the next step much more productive. */}
          Before you start building, take a few minutes to decide what your site
          needs. You don't need a detailed plan — just enough to give Claude Code
          clear direction. Write down:
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
          {/* PLACEHOLDER: Explain that the more specific they are here,
              the better Claude Code will perform in the next step. */}
          Even a rough list on paper makes a difference. The more specific you
          are about what you want, the better Claude Code will build it for you
          in the next step.
        </p>
      </section>

      {/* Step 4 */}
      <section id="step-4" className="mb-12">
        <h2 className="text-xl font-bold mb-4">
          Step 4: Build with Claude Code
        </h2>
        <p className="text-text-secondary mb-4">
          {/* PLACEHOLDER: Explain what Claude Code is — an AI assistant
              that lives in your terminal, reads your project, and can
              write code for you. This is the power tool. */}
          Claude Code is an AI-powered CLI that can read your project, understand
          what you're building, and write code for you. Instead of Googling every
          question, you describe what you want and Claude builds it.
        </p>
        <p className="text-text-secondary mb-4">
          Install it and start a session in your project:
        </p>
        <CodeBlock copyable>npm install -g @anthropic-ai/claude-code</CodeBlock>
        <p className="text-text-secondary mt-4 mb-2">
          If you get a permissions error on Mac, try:
        </p>
        <CodeBlock copyable>sudo npm install -g @anthropic-ai/claude-code</CodeBlock>
        <p className="text-text-secondary mt-4 mb-4">
          Then start Claude Code inside your project. Make sure your dev server
          is still running in another terminal tab so you can see changes as
          Claude makes them:
        </p>
        <CodeBlock copyable>{`cd my-site\nclaude`}</CodeBlock>
        <p className="text-text-secondary mt-4 mb-4">
          {/* PLACEHOLDER: Walk through an example conversation with Claude Code.
              Show how to ask it to create a page, add a component, fix a bug.
              Include actual prompts you'd type. */}
          Now you can ask Claude to build things for you. Use the plan you wrote
          in Step 3. Try something like:
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
          {/* PLACEHOLDER: Tips for working with Claude Code effectively —
              be specific, review what it writes, iterate. */}
          Be specific about what you want. Review what it writes. Ask it to change
          things. It's a conversation, not a magic button — the more context you
          give, the better the results.
        </p>

        <h3 className="text-lg font-bold mt-8 mb-4">Plugins</h3>
        <p className="text-text-secondary mb-4">
          {/* PLACEHOLDER: Explain what plugins are — they extend Claude Code
              with specialized capabilities. You install them once and they're
              available in every session. */}
          Plugins give Claude Code superpowers. They connect it to documentation,
          design tools, and other services so it can do more than just write code.
          Install them with the <code>/install-plugin</code> command inside Claude
          Code.
        </p>

        <h4 className="font-bold mt-6 mb-3">Context7</h4>
        <p className="text-text-secondary mb-4">
          {/* PLACEHOLDER: Explain what context7 does — it fetches up-to-date
              documentation for any library so Claude always has current
              API references, not stale training data. */}
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
          {/* PLACEHOLDER: Describe why this matters — libraries update
              frequently, docs change, and context7 keeps Claude current. */}
          This matters because libraries update constantly. Context7 means Claude
          always gives you answers based on the latest version, not something that
          changed six months ago.
        </p>

        <h4 className="font-bold mt-6 mb-3">Frontend Design</h4>
        <p className="text-text-secondary mb-4">
          {/* PLACEHOLDER: Explain what the frontend-design plugin does —
              it helps Claude generate polished, production-quality UI
              instead of generic-looking output. */}
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
          {/* PLACEHOLDER: Tips for getting the best results — describe
              the mood/style you want, reference sites you like,
              mention specific requirements like responsive or accessible. */}
          Be descriptive about the style you want. Mention sites you like, the
          mood you're going for, and any specific requirements like mobile
          responsiveness or accessibility. The more context you give, the better
          the result.
        </p>
      </section>

      {/* Step 5 */}
      <section id="step-5" className="mb-12">
        <h2 className="text-xl font-bold mb-4">Step 5: Deploy to Netlify</h2>
        <p className="text-text-secondary mb-4">
          {/* PLACEHOLDER: Explain what deploying means — making your site
              live on the internet so anyone can visit it. Netlify makes
              this free and simple. */}
          Deploying means putting your site on the internet so anyone can visit
          it. Since your code is already on GitHub from Step 2, connecting to
          Netlify only takes a minute.
        </p>
        <p className="text-text-secondary mb-4">
          First, commit your latest work:
        </p>
        <CodeBlock copyable>{`git add .\ngit commit -m "build out site pages"\ngit push`}</CodeBlock>
        <p className="text-text-secondary mt-4 mb-4">
          {/* PLACEHOLDER: Walk through connecting Netlify to GitHub.
              Describe the build settings they'll need:
              - Build command: npm run build
              - Publish directory: build/client */}
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
          {/* PLACEHOLDER: Mention custom domains, HTTPS, and how Netlify
              handles all of that automatically. */}
          Netlify will build and deploy your site. You'll get a URL like{" "}
          <code>your-site-name.netlify.app</code> immediately. You can add a
          custom domain later in your site settings.
        </p>
        <p className="text-text-secondary">
          Your site is live. Share the link — you just built and deployed a
          website from scratch.
        </p>
      </section>

      {/* Step 6 */}
      <section id="step-6" className="mb-12">
        <h2 className="text-xl font-bold mb-4">
          Step 6: Test and Audit with Playwright
        </h2>
        <p className="text-text-secondary mb-4">
          {/* PLACEHOLDER: Explain why testing matters — catching broken links,
              making sure pages load, verifying your site works on different
              screen sizes before your visitors find the problems. */}
          Before you share your site with the world, make sure it actually works.
          Playwright is a testing tool that opens a real browser and clicks through
          your site automatically — checking that pages load, links work, and
          nothing is broken.
        </p>
        <p className="text-text-secondary mb-4">
          Install Playwright in your project:
        </p>
        <CodeBlock copyable>{`npm install -D @playwright/test\nnpx playwright install`}</CodeBlock>
        <p className="text-text-secondary mt-4 mb-4">
          {/* PLACEHOLDER: Explain that the first command adds Playwright
              to the project, and the second downloads the browsers it
              needs to run tests (Chromium, Firefox, WebKit). */}
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
          {/* PLACEHOLDER: Explain that accessibility means your site works
              for everyone — screen readers, keyboard navigation, color
              contrast, etc. */}
          You can also ask Claude Code to audit your site for accessibility
          issues — things like missing alt text, low contrast, or elements that
          can't be reached with a keyboard:
        </p>
        <CodeBlock copyable>Write a Playwright test that audits each page for accessibility issues using @axe-core/playwright</CodeBlock>
        <p className="text-text-secondary mt-4">
          {/* PLACEHOLDER: Explain that axe-core is an accessibility testing
              engine that checks for WCAG compliance. Claude Code will
              install it and write the test for you. */}
          Claude Code will install the{" "}
          <code>@axe-core/playwright</code> package and write a test that scans
          every page for WCAG violations. Fix any issues it finds before you
          deploy — it's the easiest way to make sure your site works for everyone.
        </p>

        <h3 className="text-lg font-bold mt-6 mb-3">Running tests before you deploy</h3>
        <p className="text-text-secondary">
          Make it a habit to run your tests before pushing updates. It takes a
          few seconds and catches problems before your visitors do:
        </p>
        <CodeBlock copyable>{`npx playwright test\ngit add .\ngit commit -m "update site content"\ngit push`}</CodeBlock>
      </section>

      {/* Step 7 */}
      <section id="step-7" className="mb-12">
        <h2 className="text-xl font-bold mb-4">
          Step 7: Update and Maintain Your Site
        </h2>
        <p className="text-text-secondary mb-4">
          {/* PLACEHOLDER: Explain the update workflow — edit locally,
              commit, push, and Netlify automatically redeploys. */}
          Every time you push to GitHub, Netlify automatically rebuilds and
          deploys your site. This is the workflow you'll use from now on.
        </p>

        <h3 className="text-lg font-bold mt-6 mb-3">Opening your project</h3>
        <p className="text-text-secondary mb-4">
          {/* PLACEHOLDER: Explain how to get back into the project
              after closing everything. This is the #1 thing people
              forget after a workshop. */}
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
          Once you're happy with your changes, save them and push to GitHub.
          Netlify will redeploy automatically — your site updates in about a
          minute:
        </p>
        <CodeBlock copyable>{`git add .\ngit commit -m "update contact info"\ngit push`}</CodeBlock>

        <h3 className="text-lg font-bold mt-6 mb-3">If something goes wrong</h3>
        <p className="text-text-secondary">
          {/* PLACEHOLDER: Common issues and fixes — npm run dev not working,
              build errors, how to ask Claude Code for help debugging. */}
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
        <p className="text-text-secondary mb-6">
          That's the whole process. It's more approachable than it looks — give
          it a shot.
        </p>
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
