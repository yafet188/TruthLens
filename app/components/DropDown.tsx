'use client';
import { useState } from "react";
import Link from "next/link";

export default function DropDown() {
    // Controls whether the dropdown is open or closed
    const [open, setOpen] = useState(false);

    {/*
      Dropdown component structure:
      - Root container
      - Trigger button (hamburger/chevron)
      - Menu panel (links)
    */}

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
              {/* Morphing hamburger → chevron */}
              <span
                className={`absolute h-[2px] w-[28px] bg-[#00B3F4] rounded transition-all duration-200
                  ${open ? 'rotate-45 translate-y-[0px] translate-x-[4px] w-[18px]' : '-translate-y-[8px]'}`}
               />
              <span
                className={`absolute h-[2px] w-[28px] bg-[#00B3F4] rounded transition-all duration-200
                  ${open ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}`}
               />
              <span
                className={`absolute h-[2px] w-[28px] bg-[#00B3F4] rounded transition-all duration-200
                  ${open ? '-rotate-45 translate-y-[0px] translate-x-[4px] w-[18px]' : 'translate-y-[8px]'}`}
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
              transition-[opacity,transform] duration-200
              ${
                open
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              {/* Physical collapse: content is always present, but clipped by a collapsing container */}
              <div
                className={`grid transition-[grid-template-rows] duration-200 ${
                  open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="min-h-0 overflow-hidden px-[14px] py-[14px]">

                {/* Navigation links inside the dropdown */}
                <div className="flex flex-col gap-[12px]">
                    {/* Analyze */}
                    <Link href="/analyze" aria-label="Go to Analyze" className="no-underline">
                        <div
                          onClick={() => setOpen(false)}
                          className="group flex flex-col px-[15px] py-[15px] justify-between border border-[#00B3F4] rounded-[20px] bg-[#000000] hover:bg-[#00B3F4] transition-colors duration-200 cursor-pointer"
                        >
                            <p className="text-[24px] font-bold text-[#00B3F4] group-hover:text-[#FFFFFF] transition-colors sf-pro">Analyze</p>

                        </div>
                    </Link>

                    {/* Dashboard */}
                    <Link href="/dashboard" aria-label="Go to Dashboard" className="no-underline">
                        <div
                          onClick={() => setOpen(false)}
                          className="group flex flex-col px-[15px] py-[15px] justify-between border border-[#00B3F4] rounded-[20px] bg-[#000000] hover:bg-[#00B3F4] transition-colors duration-200 cursor-pointer"
                        >
                            <p className="text-[24px] font-bold text-[#00B3F4] group-hover:text-[#FFFFFF] transition-colors sf-pro">Dashboard</p>

                        </div>
                    </Link>

                    {/* Steps */}
                    <Link href="/steps" aria-label="Go to Feedback" className="no-underline"> 
                        <div
                          onClick={() => setOpen(false)}
                          className="group flex flex-col px-[15px] py-[15px] justify-between border border-[#00B3F4] rounded-[20px] bg-[#000000] hover:bg-[#00B3F4] transition-colors duration-200 cursor-pointer"
                        >
                            <p className="text-[24px] font-bold text-[#00B3F4] group-hover:text-[#FFFFFF] transition-colors sf-pro">Steps</p>
                        </div>
                    </Link>

                    {/* Background */}
                    <Link href="/background" aria-label="Go to Background" className="no-underline">
                        <div
                          onClick={() => setOpen(false)}
                          className="group flex flex-col px-[15px] py-[15px] justify-between border border-[#00B3F4] rounded-[20px] bg-[#000000] hover:bg-[#00B3F4] transition-colors duration-200 cursor-pointer"
                        >
                            <p className="text-[24px] font-bold text-[#00B3F4] group-hover:text-[#FFFFFF] transition-colors sf-pro">Background</p>
                        </div>
                    </Link>

                    {/* Contact/Feedback */}
                    <Link href="/contact" aria-label="Go to Contact" className="no-underline">
                        <div
                          onClick={() => setOpen(false)}
                          className="group flex flex-col px-[15px] py-[15px] justify-between border border-[#00B3F4] rounded-[20px] bg-[#000000] hover:bg-[#00B3F4] transition-colors duration-200 cursor-pointer"
                        >
                            <p className="text-[24px] font-bold text-[#00B3F4] group-hover:text-[#FFFFFF] transition-colors sf-pro">Contact/Feedback</p>
                        </div>
                    </Link>
                </div>
                </div>
              </div>
            </div>
        </div>
    );
}