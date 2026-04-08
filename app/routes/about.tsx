import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About | Johnny Cornyn" },
    {
      name: "description",
      content:
        "Johnny Cornyn is a front-end developer and Qi Gong teacher helping people feel grounded in their approach to technology.",
    },
  ];
}

export default function About() {
  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">About</h1>

      <div className="space-y-6 text-text-secondary">
        <p>
          I'm Johnny — a front-end developer based in Grass Valley. I build web apps
          for clients and teach people how to use AI to build their own. My work spans
          everything from simple landing pages to e-commerce stores, and real-time
          web applications. I have been in the web industry since 2013.
        </p>

        <p>
          I work primarily with React and React Native, Tailwind CSS, and
          deployment platforms like Netlify. I also build real-time systems
          with Phoenix LiveView. Lately I've been exploring autonomous agents
          with{" "}
          <a href="https://hermes-agent.nousresearch.com/" target="_blank" rel="noopener noreferrer">
            Hermes
          </a>
          . I care about clean, accessible experiences that help people reach their
          goals.
        </p>

        <p>
          I also teach{" "}
          <a href="https://www.wavingforest.com/" target="_blank" rel="noopener noreferrer">
            Qi Gong
          </a>

          , a movement practice rooted in stillness, breath, and
          intention. I teach the Five Element practice by Lee Holden. It might seem unrelated to web development, but the
          two disciplines blend together, helping people feel grounded in their approach
          to technology and use it to their highest potential.
        </p>

        <p>
          Whether it's building a site, teaching a workshop, or guiding a Qi
          Gong class — I'm here to help illuminate potential.
        </p>
      </div>
    </article>
  );
}
