'use client';

import Image from 'next/image'
import Link from 'next/link'
import { use, useEffect, useState } from 'react'
import DropDown from './DropDown';

export default function DashboardMenu() {
    const [scrolled, setScrolled] = useState(false)

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrolled(window.scrollY > 10)
    //     }

    //     window.addEventListener('scroll', handleScroll)
    //     return () => window.removeEventListener('scroll', handleScroll)
    // }, [])

    return (
        <div className="sticky top-0 z-50 w-full transition-all duration-300 ease-out">
            {/* Header Container */}
            <div className="w-full flex flex-row justify-between items-center px-[40px] py-[25px] gap-auto">
                {/* Logo */}
                <Link href="/analyze" aria-label="Go to homepage">
                    <Image
                        src="/images/Logo.png"
                        alt="TruthLens Logo"
                        width={60}
                        height={60}
                        className="w-[63px] h-[63px] rounded-[15px] border-[2px] border-[#00B0F2] shadow-[0px_4px_10px_rgba(0,0,0,0.60)] cursor-pointer"
                    />
                </Link>

                {/* Navigation Links */}
                <div className='flex flex-row gap-[15px]'>

                    {/* Login Button */}

                    <Link href="/signin" aria-label="Go to sign in page">
                        <div className="group w-[100px] h-[50px] flex flex-row justify-center items-center rounded-[25px] border-[1px] border-solid border-[#00B0F2] gap-[15px] hover:bg-[#00B0F2] cursor-pointer transition-all duration-200">
                            <p className="text-[24px] font-normal text-[#00B3F4] sf-pro group-hover:text-[#005F99] transition-colors duration-200">
                                Login
                            </p>
                        </div>
                    </Link>

                    <DropDown />
                </div>

            </div>
        </div>
    );
}