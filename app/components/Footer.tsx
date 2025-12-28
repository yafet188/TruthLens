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

                {/* Links Section */}
                <div className="flex flex-row gap-[50px]">
                    {/* Quick Links */}
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

                    {/* Policies */}
                    <div className="flex flex-col pt-[8px] pb-[8px] gap-[15px]">
                        <p className="text-[15px] underline font-bold text-[#00B0F2] sf-pro ">Policies</p>
                        <div className="flex flex-col justify-between gap-[10px]">
                            <p className="text-[15px] font-bold text-[#0181B1] sf-pro ">Terms</p>
                            <p className="text-[15px] font-bold text-[#0181B1] sf-pro ">Privacy Policy</p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col pt-[8px] pb-[8px] gap-[15px]">
                        <p className="text-[15px] underline font-bold text-[#00B0F2] sf-pro ">Contact</p>
                        <div className="flex flex-col justify-between gap-[10px]">
                            <p className="text-[15px] font-bold text-[#0181B1] sf-pro ">Email</p>
                            <p className="text-[15px] font-bold text-[#0181B1] sf-pro ">Phone</p>
                        </div>
                    </div>

                </div>

                {/* Social Media Icons */}
                <div className="flex flex-row items-center pt-[8px] pb-[5px] gap-[20px]">
                    <Image
                        src="/images/github.png"
                        alt="GitHub"
                        width={24}
                        height={24}
                    />
                    <Image
                        src="/images/linkedin.png"
                        alt="LinkedIn"
                        width={24}
                        height={24}
                    />
                    <Image
                        src="/images/instagram.png"
                        alt="Instagram"
                        width={24}
                        height={24}
                    />

                    <div className="flex flex-row pt-[5px] pb-[5px] gap-[5px]">

                        <Image
                            src="/images/Y.png"
                            alt="Y Logo"
                            width={24}
                            height={24}
                        />

                        <Image
                            src="/images/T.png"
                            alt="T Logo"
                            width={24}
                            height={24}
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}