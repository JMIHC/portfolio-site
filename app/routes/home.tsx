import type { Route } from "./+types/home";
import { Hero } from "~/components/Hero";
import { ProjectGrid } from "~/components/ProjectGrid";
import { Footer } from "~/components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Johnny Cornyn | Full-Stack Developer" },
    {
      name: "description",
      content:
        "Portfolio of Johnny Cornyn — Full-Stack Developer specializing in React, Gatsby, and modern web technologies.",
    },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <ProjectGrid />
      <Footer />
    </div>
  );
}
