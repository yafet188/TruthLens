// This page renders the Terms of Service content by reading a markdown file and displaying it.

import Header from "../components/Header";
import Footer from "../components/Footer";
import ReactMarkdown from "react-markdown";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Use Node.js runtime to enable reading files from the filesystem
export const runtime = "nodejs";

// Defines the Terms page route that loads and displays the Terms of Service
export default async function Page() {
  // Stores the markdown content of the Terms of Service
  let content = "";

  // Load the terms markdown file from the filesystem
  try {
    const filePath = join(process.cwd(), "app", "terms", "terms.md");
    content = await readFile(filePath, "utf8");
  } catch (err) {
    // Provide fallback content if the markdown file is missing or unreadable
    content =
      "# Terms of Service\n\n*(terms.md not found — check that it exists at `app/terms/terms.md`)*";
  }

  return (
    // Sets background color and full viewport height
    <div className="bg-[#000F14] min-h-screen">
      {/* Renders the global header */}
      <Header />

      {/* Wraps the main Terms of Service content */}
      <main className="mx-auto max-w-4xl px-6 py-12 text-white">
        <div className="prose prose-invert max-w-none prose-headings:mt-6 prose-headings:mb-2 prose-p:my-3 prose-ul:list-disc prose-ol:list-decimal prose-ul:pl-6 prose-ol:pl-6 prose-li:my-1">
          {/* Renders markdown content as HTML */}
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </main>

      {/* Renders the global footer */}
      <Footer />
    </div>
  );
}