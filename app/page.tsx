import { TypewriterConverter } from "@/components/typewriter-converter";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Typewriter Font",
  url: "https://typewriter-font.vercel.app",
  description:
    "Convert text to monospace Unicode characters that look like a terminal or typewriter. Copy and paste them anywhere.",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0" },
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex w-full max-w-xl flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            Typewriter Font
          </h1>
          <p className="text-sm text-foreground/70">
            Convert text to monospace Unicode characters that look like a
            terminal or typewriter. Copy and paste them anywhere.
          </p>
        </div>
        <TypewriterConverter />
        <footer className="text-center text-xs text-foreground/50">
          Characters use{" "}
          <a
            href="https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols"
            className="underline underline-offset-2 hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unicode Mathematical Monospace
          </a>{" "}
          symbols. No data leaves your browser.
        </footer>
      </main>
    </div>
  );
}
