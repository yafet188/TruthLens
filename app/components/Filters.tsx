'use client';

import React, { useState } from 'react';
import { text } from 'stream/consumers';

// Represents all possible filter dropdowns
type FilterKey = 'reliability' | 'date' | 'media' | 'category';

// Tracks which dropdowns are open
type OpenState = Record<FilterKey, boolean>;

export default function Filters() {
  // Multiple filters can be open at the same time
  const [open, setOpen] = useState<OpenState>({
    reliability: false,
    date: false,
    media: false,
    category: false,
  });

  // Toggles a single dropdown without affecting others
  const toggle = (key: FilterKey) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-[990px] mx-auto mt-[80px] mb-[100px]">
      {/* Interactive filter trigger row: top row of filter pills */}
      <div className="flex flex-row justify-between items-center gap-[20px]">
        {/* Reliability pill: toggles reliability dropdown and rotates chevron */}
        <button
          type="button"
          onClick={() => toggle('reliability')}
          className={`bg-[#001A24] flex flex-row w-[230px] justify-between rounded-[15px] border-[0.5px] border-[#00B3F4] px-[10px] py-[20px] ${open.reliability ? 'bg-[#D0EEF9] border-[#00B3F4] text-[#001A24]' : 'bg-[#001A24] border-[#00B3F4]'}`}
        >
          <p className={`sf-compact text-[20px] font-semibold ${open.reliability ? 'text-[#004159]' : 'text-white'}`}>Reliability</p>
          <img
            src={open.reliability ? '/images/ChevronUpBlue.png' : '/images/ChevronDownBlue.png'}
            alt="reliability icon"
            className={`w-[24px] h-[24px] transition-transform duration-200`}
          />
        </button>

        {/* Date pill: toggles date dropdown and rotates chevron */}
        <button
          type="button"
          onClick={() => toggle('date')}
          className={`bg-[#001A24] flex flex-row w-[230px] justify-between rounded-[15px] border-[0.5px] border-[#00B3F4] px-[10px] py-[20px] ${open.date ? 'bg-[#D0EEF9] border-[#00B3F4] text-[#001A24]' : 'bg-[#001A24] border-[#00B3F4]'}`}
        >
          <p className={`sf-compact text-[20px] font-semibold ${open.date ? 'text-[#004159]' : 'text-white'}`}>Date</p>
          <img
            src={open.date ? '/images/ChevronUpBlue.png' : '/images/ChevronDownBlue.png'}
            alt="date icon"
            className={`w-[24px] h-[24px] transition-transform duration-200`}
          />
        </button>

        {/* Media pill: toggles media dropdown and rotates chevron */}
        <button
          type="button"
          onClick={() => toggle('media')}
          className={`bg-[#001A24] flex flex-row w-[230px] justify-between rounded-[15px] border-[0.5px] border-[#00B3F4] px-[10px] py-[20px] ${open.media ? 'bg-[#D0EEF9] border-[#00B3F4] text-[#001A24]' : 'bg-[#001A24] border-[#00B3F4]'}`}
        >
          <p className={`sf-compact text-[20px] font-semibold ${open.media ? 'text-[#004159]' : 'text-white'}`}>Media</p>
          <img
            src={open.media ? '/images/ChevronUpBlue.png' : '/images/ChevronDownBlue.png'}
            alt="media icon"
            className={`w-[24px] h-[24px] transition-transform duration-200`}
          />
        </button>

        {/* Category pill: toggles category dropdown and rotates chevron */}
        <button
          type="button"
          onClick={() => toggle('category')}
          className={`bg-[#001A24] flex flex-row w-[230px] justify-between rounded-[15px] border-[0.5px] border-[#00B3F4] px-[10px] py-[20px] ${open.category ? 'bg-[#D0EEF9] border-[#00B3F4] text-[#001A24]' : 'bg-[#001A24] border-[#00B3F4]'}`}
        >
          <p className={`sf-compact text-[20px] font-semibold ${open.category ? 'text-[#004159]' : 'text-white'}`}>Category</p>
          <img
            src={open.category ? '/images/ChevronUpBlue.png' : '/images/ChevronDownBlue.png'}
            alt="category icon"
            className={`w-[24px] h-[24px] transition-transform duration-200`}
          />
        </button>
      </div>

      {/* Aligns dropdown panels under their respective pills */}
      <div className="mt-[18px] grid grid-cols-4 gap-[20px]">
        {/* Reliability panel */}
        <div
          className={`transition-[opacity,transform] duration-200 ${
            open.reliability
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          {/* opacity/translate wrapper controls visual entrance and pointer-events */}
          <div
            className={`grid transition-[grid-template-rows] duration-300 ease-out ${
              open.reliability ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            }`}
          >
            {/* grid-template-rows wrapper controls physical collapse animation */}
            <div className="min-h-0 overflow-hidden">
              {/* min-h-0 and overflow-hidden prevent layout breaking during collapse */}
              <div className="bg-[#001A24] rounded-[15px] border-[0.5px] border-[#00B3F4] px-[16px] py-[14px]">
                {/* TODO: replace with real options */}
                <p className="sf-compact text-[16px] text-white/80">(Reliability options go here)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Date panel */}
        <div
          className={`transition-[opacity,transform] duration-200 ${
            open.date ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          {/* opacity/translate wrapper controls visual entrance and pointer-events */}
          <div
            className={`grid transition-[grid-template-rows] duration-300 ease-out ${
              open.date ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            }`}
          >
            {/* grid-template-rows wrapper controls physical collapse animation */}
            <div className="min-h-0 overflow-hidden">
              {/* min-h-0 and overflow-hidden prevent layout breaking during collapse */}
              <div className="bg-[#001A24] rounded-[15px] border-[0.5px] border-[#00B3F4] px-[16px] py-[14px]">
                {/* TODO: replace with real options */}
                <p className="sf-compact text-[16px] text-white/80">(Date options go here)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Media panel */}
        <div
          className={`transition-[opacity,transform] duration-200 ${
            open.media
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          {/* opacity/translate wrapper controls visual entrance and pointer-events */}
          <div
            className={`grid transition-[grid-template-rows] duration-300 ease-out ${
              open.media ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            }`}
          >
            {/* grid-template-rows wrapper controls physical collapse animation */}
            <div className="min-h-0 overflow-hidden">
              {/* min-h-0 and overflow-hidden prevent layout breaking during collapse */}
              <div className="bg-[#001A24] rounded-[15px] border-[0.5px] border-[#00B3F4] px-[16px] py-[14px]">
                {/* TODO: replace with real options */}
                <p className="sf-compact text-[16px] text-white/80">(Media options go here)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Category panel */}
        <div
          className={`transition-[opacity,transform] duration-200 ${
            open.category
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          {/* opacity/translate wrapper controls visual entrance and pointer-events */}
          <div
            className={`grid transition-[grid-template-rows] duration-300 ease-out ${
              open.category ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            }`}
          >
            {/* grid-template-rows wrapper controls physical collapse animation */}
            <div className="min-h-0 overflow-hidden">
              {/* min-h-0 and overflow-hidden prevent layout breaking during collapse */}
              <div className="bg-[#001A24] rounded-[15px] border-[0.5px] border-[#00B3F4] px-[16px] py-[14px]">
                {/* TODO: replace with real options */}
                <p className="sf-compact text-[16px] text-white/80">(Category options go here)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}