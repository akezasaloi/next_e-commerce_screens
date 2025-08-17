'use client';
import { useRef } from 'react';
import {
  MdPhoneIphone, MdComputer, MdWatch, MdCameraAlt, MdHeadphones, MdSportsEsports, MdTablet, MdTv, MdSpeaker,
} from 'react-icons/md';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const categories = [
  { name: 'Phones', icon: MdPhoneIphone },
  { name: 'Computers', icon: MdComputer },
  { name: 'SmartWatch', icon: MdWatch },
  { name: 'Camera', icon: MdCameraAlt, active: true },
  { name: 'HeadPhones', icon: MdHeadphones },
  { name: 'Gaming', icon: MdSportsEsports },
  { name: 'Tablet', icon: MdTablet },
  { name: 'Tv', icon: MdTv },
  { name: 'Speakers', icon: MdSpeaker },
  { name: 'Phones', icon: MdPhoneIphone },
  { name: 'Computers', icon: MdComputer },
  { name: 'SmartWatch', icon: MdWatch },
  { name: 'Camera', icon: MdCameraAlt },
];

export default function Categories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -600, behavior: 'smooth' });
  };
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 600, behavior: 'smooth' });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-gray-200">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-5 h-10 rounded bg-[#DB4444]"></span>
        <span className="font-semibold text-lg text-[#DB4444]">Categories</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <h2 className="text-4xl font-semibold text-black">Browse By Category</h2>
        <div className="flex gap-4">
          <button onClick={scrollLeft} className="p-2 rounded-full bg-white shadow text-black w-9 h-9 flex items-center justify-center border border-gray-200 hover:bg-gray-200 transition-colors" aria-label="Scroll Left">
            <FaChevronLeft size={22} className="text-black" />
          </button>
          <button onClick={scrollRight} className="p-2 rounded-full bg-white shadow text-black w-9 h-9 flex items-center justify-center border border-gray-200 hover:bg-gray-200 transition-colors" aria-label="Scroll Right">
            <FaChevronRight size={22} className="text-black" />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 overflow-x-auto scroll-smooth hide-scrollbar">
        {categories.map(({ name, icon: Icon, active }, idx) => (
          <div
            key={name + idx}
            className={`flex-shrink-0 w-36 sm:w-40 md:w-44 lg:w-48 h-36 sm:h-40 md:h-44 lg:h-48 flex flex-col items-center justify-center bg-[#FAFAFA] rounded-lg shadow-sm border border-gray-100 cursor-pointer transition-all gap-2.5
              ${active ? 'border-[#DB4444] text-[#DB4444] font-semibold' : 'border-gray-200 text-gray-700 hover:border-[#DB4444] hover:text-[#DB4444]'}
            `}
          >
            <Icon className={`text-4xl sm:text-5xl mb-2.5 ${active ? 'text-[#DB4444]' : 'text-gray-700 group-hover:text-[#DB4444]'}`} />
            <span className="text-sm font-medium text-center">{name}</span>
          </div>
        ))}
        <div className="w-6 flex-shrink-0"></div>
      </div>
    </section>
  );
}