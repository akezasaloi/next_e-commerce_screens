'use client';
import { useRef } from 'react';
import {
 MdPhoneIphone,
 MdComputer,
 MdWatch,
 MdCameraAlt,
 MdHeadphones,
 MdSportsEsports,
 MdTablet,
 MdTv,
 MdSpeaker,
} from 'react-icons/md';
import { PiNavigationArrow } from 'react-icons/pi';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


type Category = {
 name: string;
 icon: React.ComponentType<{ className?: string }>;
 active?: boolean;
};
const categories: Category[] = [
 { name: 'Phones', icon: MdPhoneIphone },
 { name: 'Computers', icon: MdComputer },
 { name: 'SmartWatch', icon: MdWatch },
 { name: 'Camera', icon: MdCameraAlt },
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
export default function Category() {
 const scrollRef = useRef<HTMLDivElement>(null);
 const scrollLeft = () => {
   scrollRef.current?.scrollBy({ left: -600, behavior: 'smooth' });
 };
 const scrollRight = () => {
   scrollRef.current?.scrollBy({ left: 600, behavior: 'smooth' });
 };
 return (
   <main className="font-poppins">
  
     <div className="mb-10"></div>
     <section className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 py-6">
       <div className="flex gap-2 mb-6 items-center">
         <div className="bg-red-400 w-3.5 h-3.5 rounded-sm"></div>
         <p className="text-red-400 text-sm sm:text-[16px]">Categories</p>
       </div>


       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
         <h2 className="text-xl sm:text-2xl font-semibold">Browse by Categories</h2>
         <div className="flex gap-4 sm:gap-10">
           <button
             onClick={scrollLeft}
             className="p-2 rounded hover:bg-gray-200"
             aria-label="Scroll Left"
           >
             <FaChevronLeft />
           </button>
           <button
             onClick={scrollRight}
             className="p-2 rounded hover:bg-gray-200"
             aria-label="Scroll Right"
           >
             <FaChevronRight />
           </button>
         </div>
       </div>


       <div
         ref={scrollRef}
         className="flex gap-6 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 overflow-x-auto scroll-smooth hide-scrollbar"
       >
         {categories.map(({ name, icon: Icon, active }) => (
           <div
             key={name}
             className={`flex-shrink-0 w-44 sm:w-48 md:w-52 lg:w-56 xl:w-60 h-40 sm:h-44 md:h-48 lg:h-50 flex flex-col items-center justify-center border rounded-lg cursor-pointer transition text-[22px] sm:text-[25px] gap-2.5 ${
               active
                 ? 'bg-red-500 border-red-500 text-white'
                 : 'border-gray-300 text-gray-700'
             } hover:border-white hover:text-white hover:bg-red-400`}
           >
             <Icon className="text-4xl sm:text-5xl mb-2.5" />
             <span className="text-sm sm:text-[16px] font-medium text-center">{name}</span>
           </div>
         ))}
       </div>
     </section>
   </main>
 );
}
