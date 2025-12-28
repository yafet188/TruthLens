import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="w-full flex flex-row items-center justify-between px-[60px] py-[20px] gap-[75px] bg-[#000000]">

        <div className="flex flex-row">
            <Image 
              src="/images/Logo+Text.png"
              alt="Logo"
              width={100}
              height={100}
              className="border-l-[0.5px] border-t-[0.5px] border-b-[0.5px] border-[#00B0F2]"
            />
            <Image 
              src="/images/SeeThroughTheNoise.png"
              alt="Logo"
              width={445}
              height={100}
              className="border-r-[0.5px] border-t-[0.5px] border-b-[0.5px] border-[#00B0F2]"
            />
        </div>

        <div className="flex flex-row gap-[50px]">
            <div className="flex flex-col pt-[8px] pb-[8px] gap-[15px]">
                <p className="text-[15px] underline font-bold text-[#00B0F2] sf-pro ">Quick Links</p>
                <div className="flex flex-col justify-between gap-[10px]">
                    <p className="text-[15px] font-bold text-[#0181B1] sf-pro ">Home</p>
                    <p className="text-[15px] font-bold text-[#0181B1] sf-pro ">How It Works</p>
                    <p className="text-[15px] font-bold text-[#0181B1] sf-pro ">Analyze</p>
                    <p className="text-[15px] font-bold text-[#0181B1] sf-pro ">Dashboard</p>
                    <p className="text-[15px] font-bold text-[#0181B1] sf-pro ">Feedback</p>
                </div>
            </div>
        </div>

      </div>
    </footer>
  );
}