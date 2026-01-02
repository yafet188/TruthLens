import Header from "../components/Header";
import Footer from "../components/Footer";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";

export default function Page() {

  const filePath = path.join(process.cwd(), "app/privacy/privacy.md");
  const content = fs.readFileSync(filePath, "utf8");

  return (
    <div className="bg-[#000F14] min-h-screen">
      <Header />

      {/* Privacy Policy Header */}
      <div className="flex flex-col items-center justify-center py-[50px]">
        <h1 className="sf-pro font-[500] text-[75px] text-white">Privacy Policy</h1>
        
        {/* Privacy Policy Content */}
        <div className="max-w-4xl px-[20px] py-[30px]">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>

      <Footer />
    </div>
  );
}