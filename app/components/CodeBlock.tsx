import { useState } from "react";

interface CodeBlockProps {
  children: string;
  copyable?: boolean;
}

export function CodeBlock({ children, copyable = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(children).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="relative">
      <pre>
        <code>{children}</code>
      </pre>
      {copyable && (
        <button
          type="button"
          onClick={handleCopy}
          className="absolute top-2 right-2 text-xs text-text-muted hover:text-text transition-colors focus:outline-2 focus:outline-black focus:outline-offset-2 bg-surface px-2 py-1 cursor-grab active:cursor-grabbing"
          aria-label={copied ? "Copied" : "Copy to clipboard"}
        >
          {copied ? "copied" : "copy"}
        </button>
      )}
    </div>
  );
}
