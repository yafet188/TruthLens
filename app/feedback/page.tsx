"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import FeedbackForm from "../components/FeedbackForm";

export default function Page() {
  return (
    <div className="bg-[#000F14] min-h-screen">
      <Header />

      {/* Feedback Container */}
      <div className="container mx-auto w-[1000px] flex flex-col items-center gap-[50px]">
        <h1 className="sf-pro text-white text-[64px] font-semibold mt-10">Your Feedback is Valuable!</h1>
        <p className="sf-pro text-white text-[40px] text-center">
          Your insights drive our evolution.
        </p>
        <p className="sf-pro text-white text-[30px] text-center max-w-3xl">
          Share your feedback or report an issue so we can make
          Truth
          <span className="text-[#6EC9F5]">Lens </span>
          smarter and more accurate for everyone.
        </p>
        <FeedbackForm onSubmit={(formData) => {
          // Handle form submission logic here
          console.log("Feedback submitted:", Object.fromEntries(formData.entries()));
        }} />
      </div>

      <Footer />
    </div>
  );
}