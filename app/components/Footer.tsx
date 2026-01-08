import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div className="w-full flex flex-col items-top gap-[20px] px-[60px] py-[20px] bg-[#000000]">

                {/* Top Section */}
                <div className="w-full flex flex-row justify-between items-start">

                    {/* Logo Section */}
                    <div>
                        <Link
                            href="/analyze"
                            aria-label="Go to Analyze"
                            className="flex flex-row items-center"
                        >
                            <Image
                                src="/images/Logo+Text.png"
                                alt="TruthLens logo"
                                width={100}
                                height={100}
                                className="border-l-[0.5px] border-t-[0.5px] border-b-[0.5px] border-[#00B0F2]"
                            />
                            <Image
                                src="/images/SeeThroughTheNoise.png"
                                alt="See Through the Noise"
                                width={445}
                                height={100}
                                className="border-r-[0.5px] border-t-[0.5px] border-b-[0.5px] border-[#00B0F2]"
                            />
                        </Link>
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
                                width={16}
                                height={16}
                            />

                            <Image
                                src="/images/T.png"
                                alt="T Logo"
                                width={16}
                                height={16}
                            />
                        </div>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="w-full flex flex-col justify-between">
                    {/* Divider */}
                    <div className="w-full border-[1px] border-[#003446]" />

                    {/* Info */}
                    <div className="w-full flex flex-row justify-between items-center pt-[3px] pb-[3px]">
                        {/* Name */}
                        <div className="flex flex-row gap-[10px]">
                            <p className="text-[16px] font-normal text-[#004159] sf-pro ">Designed and Developed by Yafet Tegbaru</p>
                        </div>

                        {/* Copyright */}
                        <div className="flex flex-row gap-[10px]">
                            <p className="text-[16px] font-normal text-[#004159] sf-pro ">© 2025 TruthLens. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>

        </footer >
    );
}