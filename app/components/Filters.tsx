'use client';

import React from 'react';
import { use, useEffect, useState } from 'react'

export default function TechStack() {
    return (
        <div className="w-[990px] flex flex-row justify-between items-center mx-auto mt-[80px] mb-[100px] gap-[20px]">
            {/* Reliability */}
            <div className="bg-[#001A24] flex flex-row rounded-[15px] border-[0.5px] border-[#00B3F4] px-[10px] py-[20px] gap-[90px]">
                <p className="sf-compact text-[20px] font-semibold text-white">Reliability</p>
                <img src="/images/ChevronDownBlue.png" alt="reliability icon"
                    className="w-[24px] h-[24px]"
                />
            </div>
            {/* Date */}
            <div className="bg-[#001A24] flex flex-row rounded-[15px] border-[0.5px] border-[#00B3F4] px-[10px] py-[20px] gap-[130px]">
                <p className="sf-compact text-[20px] font-semibold text-white">Date</p>
                <img src="/images/ChevronDownBlue.png" alt="date icon"
                    className="w-[24px] h-[24px]"
                />
            </div>
            {/* Media */}
            <div className="bg-[#001A24] flex flex-row rounded-[15px] border-[0.5px] border-[#00B3F4] px-[10px] py-[20px] gap-[125px]">
                <p className="sf-compact text-[20px] font-semibold text-white">Media</p>
                <img src="/images/ChevronDownBlue.png" alt="media icon"
                    className="w-[24px] h-[24px]"
                />
            </div>
            {/* Category */}
            <div className="bg-[#001A24] flex flex-row rounded-[15px] border-[0.5px] border-[#00B3F4] px-[10px] py-[20px] gap-[100px]">
                <p className="sf-compact text-[20px] font-semibold text-white">Category</p>
                <img src="/images/ChevronDownBlue.png" alt="category icon"
                    className="w-[24px] h-[24px]"
                />
            </div>
        </div>
    );
}