'use client';

import React, { useState } from 'react';

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

  // Tracks which reliability options are selected (checkboxes)
  const [selectedReliability, setSelectedReliability] = useState<string[]>([]);

  // Toggles a reliability checkbox value in/out of the selected list
  const toggleReliability = (value: string) => {
    setSelectedReliability((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  // Tracks which date options are selected (checkboxes)
  const [selectedDate, setSelectedDate] = useState<string[]>([]);

  // Tracks which media options are selected (checkboxes)
  const [selectedMedia, setSelectedMedia] = useState<string[]>([]);

  // Tracks which category options are selected (checkboxes)
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  // Generic toggler helper for checkbox lists
  const toggleFromList = (
    value: string,
    setList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

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
      <div className="grid grid-cols-4 gap-[20px] mt-[10px]">
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
            <div className="min-h-0 overflow-hidden gap-[10px] flex flex-col">
              {/* Reliability options (checkboxes) */}
              <label className="bg-[#3D1001] flex flex-row items-center justify-between rounded-[15px] border-[0.5px] border-[#E2420F] px-[10px] py-[20px] cursor-pointer">
                <p className="sf-pro font-700 text-[20px] text-white/80">Unreliable</p>

                <input
                  type="checkbox"
                  className="h-[18px] w-[18px] accent-[#E2420F]"
                  checked={selectedReliability.includes('unreliable')}
                  onChange={() => toggleReliability('unreliable')}
                />
              </label>

              <label className="bg-[#544207] flex flex-row items-center justify-between rounded-[15px] border-[0.5px] border-[#E5B000] px-[10px] py-[20px] cursor-pointer">
                <p className="sf-pro font-700 text-[20px] text-white/80">Controversial</p>

                <input
                  type="checkbox"
                  className="h-[18px] w-[18px] accent-[#E5B000]"
                  checked={selectedReliability.includes('controversial')}
                  onChange={() => toggleReliability('controversial')}
                />
              </label>

              <label className="bg-[#0E3903] flex flex-row items-center justify-between rounded-[15px] border-[0.5px] border-[#2EE500] px-[10px] py-[20px] cursor-pointer">
                <p className="sf-pro font-700 text-[20px] text-white/80">Reliable</p>

                <input
                  type="checkbox"
                  className="h-[18px] w-[18px] accent-[#2EE500]"
                  checked={selectedReliability.includes('reliable')}
                  onChange={() => toggleReliability('reliable')}
                />
              </label>
            </div>
            {/* Debug: remove later */}
            {/* <p className="mt-[8px] text-white/60 text-[12px]">Selected: {selectedReliability.join(', ')}</p> */}
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
            <div className="min-h-0 overflow-hidden gap-[10px] flex flex-col">
              {/* Date options (checkboxes) */}
              <label className="bg-[#001A24] flex flex-row items-center justify-between rounded-[15px] border-[0.5px] border-[#00B3F4] px-[10px] py-[20px] cursor-pointer">
                <p className="sf-pro font-700 text-[20px] text-white/80">New to Old</p>

                <input
                  type="checkbox"
                  className="h-[18px] w-[18px] accent-[#00B3F4]"
                  checked={selectedDate.includes('new_to_old')}
                  onChange={() => toggleFromList('new_to_old', setSelectedDate)}
                />
              </label>

              <label className="bg-[#001A24] flex flex-row items-center justify-between rounded-[15px] border-[0.5px] border-[#00B3F4] px-[10px] py-[20px] cursor-pointer">
                <p className="sf-pro font-700 text-[20px] text-white/80">Old to New</p>

                <input
                  type="checkbox"
                  className="h-[18px] w-[18px] accent-[#00B3F4]"
                  checked={selectedDate.includes('old_to_new')}
                  onChange={() => toggleFromList('old_to_new', setSelectedDate)}
                />
              </label>
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
            <div className="min-h-0 overflow-hidden gap-[10px] flex flex-col">
              {/* Media options (checkboxes) */}
              <label className="bg-[#001A24] flex flex-row items-center justify-between rounded-[15px] border-[0.5px] border-[#00B3F4] px-[10px] py-[20px] cursor-pointer">
                <p className="sf-pro font-700 text-[20px] text-white/80">Photo</p>

                <input
                  type="checkbox"
                  className="h-[18px] w-[18px] accent-[#00B3F4]"
                  checked={selectedMedia.includes('photo')}
                  onChange={() => toggleFromList('photo', setSelectedMedia)}
                />
              </label>

              <label className="bg-[#001A24] flex flex-row items-center justify-between rounded-[15px] border-[0.5px] border-[#00B3F4] px-[10px] py-[20px] cursor-pointer">
                <p className="sf-pro font-700 text-[20px] text-white/80">Video</p>

                <input
                  type="checkbox"
                  className="h-[18px] w-[18px] accent-[#00B3F4]"
                  checked={selectedMedia.includes('video')}
                  onChange={() => toggleFromList('video', setSelectedMedia)}
                />
              </label>

              <label className="bg-[#001A24] flex flex-row items-center justify-between rounded-[15px] border-[0.5px] border-[#00B3F4] px-[10px] py-[20px] cursor-pointer">
                <p className="sf-pro font-700 text-[20px] text-white/80">Text</p>

                <input
                  type="checkbox"
                  className="h-[18px] w-[18px] accent-[#00B3F4]"
                  checked={selectedMedia.includes('text')}
                  onChange={() => toggleFromList('text', setSelectedMedia)}
                />
              </label>
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
            <div className="min-h-0 overflow-hidden gap-[10px] flex flex-col">
              {/* Category options (checkboxes) */}
              <label className="bg-[#001A24] flex flex-row items-center justify-between rounded-[15px] border-[0.5px] border-[#00B3F4] px-[10px] py-[20px] cursor-pointer">
                <p className="sf-pro font-700 text-[20px] text-white/80">Politics</p>
                <input
                  type="checkbox"
                  className="h-[18px] w-[18px] accent-[#00B3F4]"
                  checked={selectedCategory.includes('politics')}
                  onChange={() => toggleFromList('politics', setSelectedCategory)}
                />
              </label>

              <label className="bg-[#001A24] flex flex-row items-center justify-between rounded-[15px] border-[0.5px] border-[#00B3F4] px-[10px] py-[20px] cursor-pointer">
                <p className="sf-pro font-700 text-[20px] text-white/80">Health</p>
                <input
                  type="checkbox"
                  className="h-[18px] w-[18px] accent-[#00B3F4]"
                  checked={selectedCategory.includes('health')}
                  onChange={() => toggleFromList('health', setSelectedCategory)}
                />
              </label>

              <label className="bg-[#001A24] flex flex-row items-center justify-between rounded-[15px] border-[0.5px] border-[#00B3F4] px-[10px] py-[20px] cursor-pointer">
                <p className="sf-pro font-700 text-[20px] text-white/80">Science</p>
                <input
                  type="checkbox"
                  className="h-[18px] w-[18px] accent-[#00B3F4]"
                  checked={selectedCategory.includes('science')}
                  onChange={() => toggleFromList('science', setSelectedCategory)}
                />
              </label>

              <label className="bg-[#001A24] flex flex-row items-center justify-between rounded-[15px] border-[0.5px] border-[#00B3F4] px-[10px] py-[20px] cursor-pointer">
                <p className="sf-pro font-700 text-[20px] text-white/80">Entertainment</p>
                <input
                  type="checkbox"
                  className="h-[18px] w-[18px] accent-[#00B3F4]"
                  checked={selectedCategory.includes('entertainment')}
                  onChange={() => toggleFromList('entertainment', setSelectedCategory)}
                />
              </label>

              <label className="bg-[#001A24] flex flex-row items-center justify-between rounded-[15px] border-[0.5px] border-[#00B3F4] px-[10px] py-[20px] cursor-pointer">
                <p className="sf-pro font-700 text-[20px] text-white/80">Social Issues</p>
                <input
                  type="checkbox"
                  className="h-[18px] w-[18px] accent-[#00B3F4]"
                  checked={selectedCategory.includes('social_issues')}
                  onChange={() => toggleFromList('social_issues', setSelectedCategory)}
                />
              </label>

              <label className="bg-[#001A24] flex flex-row items-center justify-between rounded-[15px] border-[0.5px] border-[#00B3F4] px-[10px] py-[20px] cursor-pointer">
                <p className="sf-pro font-700 text-[20px] text-white/80">Sports</p>
                <input
                  type="checkbox"
                  className="h-[18px] w-[18px] accent-[#00B3F4]"
                  checked={selectedCategory.includes('sports')}
                  onChange={() => toggleFromList('sports', setSelectedCategory)}
                />
              </label>

              <label className="bg-[#001A24] flex flex-row items-center justify-between rounded-[15px] border-[0.5px] border-[#00B3F4] px-[10px] py-[20px] cursor-pointer">
                <p className="sf-pro font-700 text-[20px] text-white/80">Technology</p>
                <input
                  type="checkbox"
                  className="h-[18px] w-[18px] accent-[#00B3F4]"
                  checked={selectedCategory.includes('technology')}
                  onChange={() => toggleFromList('technology', setSelectedCategory)}
                />
              </label>

              <label className="bg-[#001A24] flex flex-row items-center justify-between rounded-[15px] border-[0.5px] border-[#00B3F4] px-[10px] py-[20px] cursor-pointer">
                <p className="sf-pro font-700 text-[20px] text-white/80">Business</p>
                <input
                  type="checkbox"
                  className="h-[18px] w-[18px] accent-[#00B3F4]"
                  checked={selectedCategory.includes('business')}
                  onChange={() => toggleFromList('business', setSelectedCategory)}
                />
              </label>

              <label className="bg-[#001A24] flex flex-row items-center justify-between rounded-[15px] border-[0.5px] border-[#00B3F4] px-[10px] py-[20px] cursor-pointer">
                <p className="sf-pro font-700 text-[20px] text-white/80">Other</p>
                <input
                  type="checkbox"
                  className="h-[18px] w-[18px] accent-[#00B3F4]"
                  checked={selectedCategory.includes('other')}
                  onChange={() => toggleFromList('other', setSelectedCategory)}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}