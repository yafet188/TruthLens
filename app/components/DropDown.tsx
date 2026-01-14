import Link from "next/link";
import link from "next/link";

export default function DropDown() {
    return (
        <div className="flex flex-col gap-25px">
            <div className="flex flex-col py-[10px] gap-[10px]">
                {/* Analyze */}
                <Link href="/analyze" aria-label="Go to Analyze" className="no-underline">
                    <div className="flex flex-col px-[15px] py-[15px] justify-between border border-[#00B3F4] rounded-[20px] bg-[#000000] hover:bg-[#00B0F2] cursor-pointer">
                        <p className="text-[24px] font-bold text-[#00B3F4] sf-pro hover:text-[#FFFFFF]">Analyze</p>

                    </div>
                </Link>

                {/* Dashboard */}
                <Link href="/dashboard" aria-label="Go to Dashboard" className="no-underline">
                    <div className="flex flex-col px-[15px] py-[15px] justify-between border border-[#00B3F4] rounded-[20px] bg-[#000000] hover:bg-[#00B0F2] cursor-pointer">
                        <p className="text-[24px] font-bold text-[#00B3F4] sf-pro hover:text-[#FFFFFF]">Dashboard</p>

                    </div>
                </Link>

                {/* Steps */}
                <Link href="/feedback" aria-label="Go to Feedback" className="no-underline">
                    <div className="flex flex-col px-[15px] py-[15px] justify-between border border-[#00B3F4] rounded-[20px] bg-[#000000] hover:bg-[#00B0F2] cursor-pointer">
                        <p className="text-[24px] font-bold text-[#00B3F4] sf-pro hover:text-[#FFFFFF]">Steps</p>
                    </div>
                </Link>

                {/* Background */}
                <Link href="/background" aria-label="Go to Background" className="no-underline">
                    <div className="flex flex-col px-[15px] py-[15px] justify-between border border-[#00B3F4] rounded-[20px] bg-[#000000] hover:bg-[#00B0F2] cursor-pointer">
                        <p className="text-[24px] font-bold text-[#00B3F4] sf-pro hover:text-[#FFFFFF]">Background</p>
                    </div>
                </Link>

                {/* Contact/Feedback */}
                <Link href="/contact" aria-label="Go to Contact" className="no-underline">
                    <div className="flex flex-col px-[15px] py-[15px] justify-between border border-[#00B3F4] rounded-[20px] bg-[#000000] hover:bg-[#00B0F2] cursor-pointer">
                        <p className="text-[24px] font-bold text-[#00B3F4] sf-pro hover:text-[#FFFFFF]">Contact/Feedback</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}