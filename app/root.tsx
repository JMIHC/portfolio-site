import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
} from "react-router";

import type { Route } from "./+types/root";
import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";
import stylesheet from "./app.css?url";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap",
  },
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script defer data-domain="johnnycornyn.com" src="https://plausible.io/js/script.js"></script>
      </head>
      <body className="bg-bg text-text font-mono antialiased">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-sm text-center py-3 border-b border-border mt-6">
            Free workshop Apr 15 — 551 Community Center, Grass Valley.{" "}
            <a href="/images/johnnycornynflyer.pdf" className="underline">
              See the flyer
            </a>
          </div>
          <Nav />
          <main className="py-8">{children}</main>
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  }

  return (
    <div className="py-20 text-center">
      <h1 className="text-4xl font-bold mb-2">{message}</h1>
      <p className="text-text-secondary">{details}</p>
    </div>
  );
}
