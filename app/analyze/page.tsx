import Header from "../components/Header";
import Footer from "../components/Footer";

export default function page() {
  return (
    // Sets the background color and minimum height of the page
    <div className="bg-[#000F14] min-h-screen">
      {/* Renders the global header */}
      <Header />
      {/* Renders the global footer */}
      <Footer />
    </div>
  );
}