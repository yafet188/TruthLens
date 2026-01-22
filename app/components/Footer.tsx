// This component renders the global site footer, including navigation links, social media icons, and copyright information.

import Image from "next/image";
import Link from "next/link";

// Reusable footer component for the site
export default function Footer() {
    return (
        // Wraps the entire footer
        <footer>
            {/* Container controlling layout, spacing, and background */}
            <div className="w-full flex flex-col items-top gap-[20px] px-[60px] py-[20px] bg-[#000000]">

                {/* Top Section container */}
                <div className="w-full flex flex-row justify-between items-start">

                    {/* Logo Section (logo + tagline link) */}
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

                    {/* Links Section wrapper */}
                    <div className="flex flex-row gap-[50px]">
                        {/* Quick Links column */}
                        <div className="flex flex-col pt-[8px] pb-[8px] gap-[15px]">
                            <p className="text-[15px] underline font-bold text-[#00B0F2] sf-pro ">Quick Links</p>
                            <div className="flex flex-col justify-between gap-[10px]">
                                <Link href="/analyze" aria-label="Go to Home">
                                    <p className="text-[15px] font-bold text-[#0181B1] sf-pro hover:text-[#00B0F2]">Home</p>
                                </Link>
                                <Link href="/about" aria-label="Go to About">
                                    <p className="text-[15px] font-bold text-[#0181B1] sf-pro hover:text-[#00B0F2]">How It Works</p>
                                </Link>
                                <Link href="/analyze" aria-label="Go to Features">
                                    <p className="text-[15px] font-bold text-[#0181B1] sf-pro hover:text-[#00B0F2]">Analyze</p>
                                </Link>
                                <Link href="/dashboard" aria-label="Go to Dashboard">
                                    <p className="text-[15px] font-bold text-[#0181B1] sf-pro hover:text-[#00B0F2]">Dashboard</p>
                                </Link>
                                <Link href="/feedback" aria-label="Go to Feedback">
                                    <p className="text-[15px] font-bold text-[#0181B1] sf-pro hover:text-[#00B0F2]">Feedback</p>
                                </Link>
                            </div>
                        </div>

                        {/* Policies column */}
                        <div className="flex flex-col pt-[8px] pb-[8px] gap-[15px]">
                            <p className="text-[15px] underline font-bold text-[#00B0F2] sf-pro ">Policies</p>
                            <div className="flex flex-col justify-between gap-[10px]">
                                <Link href="/terms"
                                    aria-label="Go to Terms and Conditions">
                                    <p className="text-[15px] font-bold text-[#0181B1] sf-pro hover:text-[#00B0F2]">Terms</p>
                                </Link>
                                <Link href="/privacy"
                                    aria-label="Go to Privacy Policy">
                                    <p className="text-[15px] font-bold text-[#0181B1] sf-pro hover:text-[#00B0F2]">Privacy Policy</p>
                                </Link>
                            </div>
                        </div>

                        {/* Contact column */}
                        <div className="flex flex-col pt-[8px] pb-[8px] gap-[15px]">
                            <p className="text-[15px] underline font-bold text-[#00B0F2] sf-pro ">Contact</p>
                            <div className="flex flex-col justify-between gap-[10px]">
                                <Link href="mailto:tegbaruyafet18@gmail.com" aria-label="Send Email to Yafet Tegbaru">
                                    <p className="text-[15px] font-bold text-[#0181B1] sf-pro hover:text-[#00B0F2]">Email</p>
                                </Link>
                                <Link href="tel:+15195889059" aria-label="Call Phone Number">
                                    <p className="text-[15px] font-bold text-[#0181B1] sf-pro hover:text-[#00B0F2]">Phone</p>
                                </Link>
                            </div>
                        </div>

                    </div>

                    {/* Social Media Icons section */}
                    <div className="flex flex-row items-center pt-[8px] pb-[5px] gap-[20px]">
                        <Link href="https://github.com/yafet188" aria-label="GitHub Link">
                            <Image
                                src="/images/github.png"
                                alt="GitHub"
                                width={30}
                                height={30}
                                className="cursor-pointer hover:opacity-70 transition-opacity duration-200"
                            />
                        </Link>
                        <Link href="https://linkedin.com/in/yafet-tegbaru" aria-label="LinkedIn Link">
                            <Image
                                src="/images/linkedin.png"
                                alt="LinkedIn"
                                width={30}
                                height={30}
                                className="cursor-pointer hover:opacity-70 transition-opacity duration-200"
                            />
                        </Link>
                        <Link href="https://instagram.com/yafetegbaru" aria-label="Instagram Link">
                            <Image
                                src="/images/instagram.png"
                                alt="Instagram"
                                width={30}
                                height={30}
                                className="cursor-pointer hover:opacity-70 transition-opacity duration-200"
                            />
                        </Link>


                        <Link href="https://yafetegbaru.com" aria-label="Portfolio Link">
                            <div className="flex flex-row pt-[5px] pb-[5px] gap-[5px]">

                                <Image
                                    src="/images/Y.png"
                                    alt="Y Logo"
                                    width={20}
                                    height={20}
                                    className="hover:opacity-70 transition-opacity duration-200"
                                />

                                <Image
                                    src="/images/T.png"
                                    alt="T Logo"
                                    width={20}
                                    height={20}
                                    className="hover:opacity-70 transition-opacity duration-200"
                                />
                            </div>
                        </Link>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="w-full flex flex-col justify-between">
                    {/* Divider */}
                    <div className="w-full border-[1px] border-[#003446]" />

                    {/* Info row */}
                    <div className="w-full flex flex-row justify-between items-center pt-[3px] pb-[3px]">
                        {/* Designer credit */}
                        <div className="flex flex-row gap-[10px]">
                            <p className="text-[16px] font-normal text-[#004159] sf-pro ">Designed and Developed by Yafet Tegbaru</p>
                        </div>

                        {/* Copyright notice */}
                        <div className="flex flex-row gap-[10px]">
                            <p className="text-[16px] font-normal text-[#004159] sf-pro ">© 2025 TruthLens. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>

        </footer >
    );
}