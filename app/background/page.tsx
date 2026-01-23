// This page provides background and context information about the application.

import Header from "../components/Header";
import Footer from "../components/Footer";
import TechStack from "../components/TechStack";

// Defines the Background route component
export default function page() {
  return (
    // Sets the page background and full height
    <div className="bg-[#000F14] min-h-screen">
      {/* Renders the global header */}
      <Header />
      {/* Main content area */}
      {/* Contains the page-specific content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-6">Background Page</h1>
        {/* Showcases the technologies used */}
        <TechStack technologies={['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js']} />
      </main>
      {/* Renders the global footer */}
      <Footer />
    </div>
  );
}