import type { Route } from "./+types/contact";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact | Johnny Cornyn" },
    {
      name: "description",
      content:
        "Get in touch with Johnny Cornyn about a project, consultation, or question.",
    },
  ];
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => alert("Something went wrong. Please try again."));
  }

  if (submitted) {
    return (
      <article>
        <h1 className="text-3xl font-bold mb-4">Thanks</h1>
        <p className="text-text-secondary">
          Your message has been sent. I'll get back to you soon.
        </p>
      </article>
    );
  }

  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-text-secondary mb-8">
        Have a project in mind, or want to talk through an idea? Send me a note.
      </p>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            className="w-full border border-border bg-white p-3 font-mono text-text focus:outline-2 focus:outline-black focus:outline-offset-2"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            className="w-full border border-border bg-white p-3 font-mono text-text focus:outline-2 focus:outline-black focus:outline-offset-2"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="w-full border border-border bg-white p-3 font-mono text-text resize-y focus:outline-2 focus:outline-black focus:outline-offset-2"
          />
        </div>

        <button
          type="submit"
          className="bg-text text-bg px-6 py-3 font-semibold hover:bg-black transition-colors focus:outline-2 focus:outline-black focus:outline-offset-2"
        >
          Send Message
        </button>
      </form>
    </article>
  );
}
