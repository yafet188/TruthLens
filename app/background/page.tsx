import Header from "../components/Header";
import Footer from "../components/Footer";
import Filters from "../components/Filters";

export default function Page() {
  return (
     <div className="bg-[#000F14] min-h-screen">
      <Header />
      <Filters />
      <Footer />
    </div>
  );
}