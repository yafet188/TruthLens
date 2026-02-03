import Header from "../components/Header";
import Footer from "../components/Footer";
import EnterMedia from "../components/EnterMedia";

export default function page() {
  const handleEnter = () => {
    // Add your logic here
  };

  return (
    <div className="bg-[#000F14] min-h-screen">
      <Header />
      <EnterMedia onEnter={handleEnter}/>
      <Footer />
    </div>
  );
}