import Header from "../components/Header";
import Footer from "../components/Footer";
import ReactMarkdown from "react-markdown";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Ensure this route runs on the Node.js runtime (required for reading from the filesystem)
export const runtime = "nodejs";

export default async function Page() {
  let content = "";

  try {
    const filePath = join(process.cwd(), "app", "privacy", "privacy.md");
    content = await readFile(filePath, "utf8");
  } catch (err) {
    // Fallback so the page still renders if the file path is wrong or the file is missing
    content =
      "# Privacy Policy\n\n*(privacy.md not found — check that it exists at `app/privacy/privacy.md`)*";
  }

  return (
    <div className="bg-[#000F14] min-h-screen">
      <Header />

      <main className="mx-auto max-w-4xl px-6 py-12 text-white">
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </main>

      <Footer />
    </div>
  );
}