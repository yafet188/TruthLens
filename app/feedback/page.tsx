import Header from "../components/Header";
import Footer from "../components/Footer";
import FeedbackForm from "../components/FeedbackForm";

export default function Page() {
  return (
    <div className="bg-[#000F14] min-h-screen">
      <Header />

      {/* Feedback Container */}
      <div className="container mx-auto w-[1000px] flex flex-col items-center gap-[50px]">
        <h1 className="text-white text-4xl font-bold mt-10">Your Feedback is Valuable!</h1>
        <p className="sf-pro text-gray-300 text-lg mt-4 text-center">
          Your insights drive our evolution. Share your feedback or report an issue so we can make
          TruthLens smarter and more accurate for everyone.
        </p>
      </div>

       <Footer />
    </div>
  );
}