import Header from "../components/Header";
import Footer from "../components/Footer";
import TechStack from "../components/TechStack";

export default function page() {
  return <div className="bg-[#000F14] min-h-screen">
      <Header />
        <main className="max-w-5xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-white mb-6">Background Page</h1>
            <TechStack technologies={['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js']} />
        </main>
      <Footer />
  </div>
}