'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function DropDown() {
    // Controls whether the dropdown is open or closed
    const [open, setOpen] = useState(false);

    return (
        /* 
          Root dropdown container
          - relative: allows absolute positioning of the trigger & menu
        */
        <div className="relative inline-flex items-center">

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-haspopup="menu"
              className="relative w-[44px] h-[44px] flex items-center justify-center cursor-pointer"
            >
              {/* Hamburger icon (shown when closed) */}
              <div
                className={`flex flex-col items-center justify-center gap-[7.5px] transition-all duration-200 ${
                  open ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
                }`}
              >
                <div className="w-[30px] border-[1.5px] border-[#00B3F4]" />
                <div className="w-[30px] border-[1.5px] border-[#00B3F4]" />
                <div className="w-[30px] border-[1.5px] border-[#00B3F4]" />
              </div>

              {/* Chevron icon (shown when open) */}
              <Image
                src="/images/ChevronUp.png"
                alt="Close menu"
                width={30}
                height={30}
                className={`absolute transition-all duration-200 ${
                  open ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              />
            </button>

            {/* 
              Dropdown menu panel
              - Scales + fades in/out
              - pointer-events disabled when closed
            */}
            <div
              className={`w-[314px] text-center bg-[#00000B] rounded-[20px]
              shadow-[0px_4px_10px_rgba(0,0,0,0.25)] absolute top-full right-0 mt-[12px]
              px-[14px] py-[14px] transition-all duration-200 origin-top
              ${
                open
                  ? 'opacity-100 scale-y-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'
              }`}
            >

                {/* Navigation links inside the dropdown */}
                <div className="flex flex-col gap-[12px]">
                    {/* Analyze */}
                    <Link href="/analyze" aria-label="Go to Analyze" className="no-underline">
                        <div
                          onClick={() => setOpen(false)}
                          className="group flex flex-col px-[15px] py-[15px] justify-between border border-[#00B3F4] rounded-[20px] bg-[#000000] hover:bg-[#00B3F4] transition-colors cursor-pointer"
                        >
                            <p className="text-[24px] font-bold text-[#00B3F4] group-hover:text-[#FFFFFF] transition-colors sf-pro">Analyze</p>

                        </div>
                    </Link>

                    {/* Dashboard */}
                    <Link href="/dashboard" aria-label="Go to Dashboard" className="no-underline">
                        <div
                          onClick={() => setOpen(false)}
                          className="group flex flex-col px-[15px] py-[15px] justify-between border border-[#00B3F4] rounded-[20px] bg-[#000000] hover:bg-[#00B3F4] transition-colors cursor-pointer"
                        >
                            <p className="text-[24px] font-bold text-[#00B3F4] group-hover:text-[#FFFFFF] transition-colors sf-pro">Dashboard</p>

                        </div>
                    </Link>

                    {/* Steps */}
                    <Link href="/steps" aria-label="Go to Feedback" className="no-underline"> 
                        <div
                          onClick={() => setOpen(false)}
                          className="group flex flex-col px-[15px] py-[15px] justify-between border border-[#00B3F4] rounded-[20px] bg-[#000000] hover:bg-[#00B3F4] transition-colors cursor-pointer"
                        >
                            <p className="text-[24px] font-bold text-[#00B3F4] group-hover:text-[#FFFFFF] transition-colors sf-pro">Steps</p>
                        </div>
                    </Link>

                    {/* Background */}
                    <Link href="/background" aria-label="Go to Background" className="no-underline">
                        <div
                          onClick={() => setOpen(false)}
                          className="group flex flex-col px-[15px] py-[15px] justify-between border border-[#00B3F4] rounded-[20px] bg-[#000000] hover:bg-[#00B3F4] transition-colors cursor-pointer"
                        >
                            <p className="text-[24px] font-bold text-[#00B3F4] group-hover:text-[#FFFFFF] transition-colors sf-pro">Background</p>
                        </div>
                    </Link>

                    {/* Contact/Feedback */}
                    <Link href="/contact" aria-label="Go to Contact" className="no-underline">
                        <div
                          onClick={() => setOpen(false)}
                          className="group flex flex-col px-[15px] py-[15px] justify-between border border-[#00B3F4] rounded-[20px] bg-[#000000] hover:bg-[#00B3F4] transition-colors cursor-pointer"
                        >
                            <p className="text-[24px] font-bold text-[#00B3F4] group-hover:text-[#FFFFFF] transition-colors sf-pro">Contact/Feedback</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}