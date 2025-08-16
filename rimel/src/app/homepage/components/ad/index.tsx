"use client";
import { useEffect, useState } from "react";
import Image from 'next/image';


function getTimeLeft(deadline: Date) {
 const now = new Date();
 let diff = Math.max(deadline.getTime() - now.getTime(), 0);


 const days = Math.floor(diff / (1000 * 60 * 60 * 24));
 diff -= days * (1000 * 60 * 60 * 24);


 const hours = Math.floor(diff / (1000 * 60 * 60));
 diff -= hours * (1000 * 60 * 60);


 const minutes = Math.floor(diff / (1000 * 60));
 diff -= minutes * (1000 * 60);


 const seconds = Math.floor(diff / 1000);


 return { days, hours, minutes, seconds };
}


export default function EnhanceYourProduct() {
 const deadline = new Date();
 deadline.setDate(deadline.getDate() + 5);


 const [timeLeft, setTimeLeft] = useState(getTimeLeft(deadline));


 useEffect(() => {
   const timer = setInterval(() => {
     setTimeLeft(getTimeLeft(deadline));
   }, 1000);
   return () => clearInterval(timer);
 }, [deadline]);


 return (
   <div className="bg-white min-h-screen flex flex-col">
    
          <section
            className="
   w-full
   my-12
   flex flex-col
   md:flex-row
   items-center
   justify-between
   gap-y-8
   gap-x-6
   px-4
   md:px-8
   xl:px-24
   min-h-[550px]
 "
          style={{
             background: "radial-gradient(circle at 60% 50%, #222 70%, #000 100%)",
             overflow: "hidden",
           }}
         >
               <div className="flex flex-col justify-center items-center md:items-start flex-1 w-full md:w-1/2 px-2 md:px-0">
              <span className="text-green-500 text-base sm:text-lg font-semibold mb-4">Categories</span>
   <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-8 leading-tight text-center md:text-left">
     Enhance Your<br />Music Experience
   </h2>
   <div className="flex gap-4 sm:gap-6 mb-8 flex-wrap justify-center md:justify-start">
     <div className="bg-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex flex-col justify-center items-center shadow">
       <span className="text-black font-bold text-lg sm:text-xl">{String(timeLeft.hours).padStart(2, "0")}</span>
       <span className="text-xs text-gray-600">Hours</span>
     </div>
   <div className="bg-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex flex-col justify-center items-center shadow">
       <span className="text-black font-bold text-lg sm:text-xl">{String(timeLeft.days).padStart(2, "0")}</span>
       <span className="text-xs text-gray-600">Days</span>
     </div>
                  <div className="bg-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex flex-col justify-center items-center shadow">
       <span className="text-black font-bold text-lg sm:text-xl">{String(timeLeft.minutes).padStart(2, "0")}</span>
       <span className="text-xs text-gray-600">Minutes</span>
     </div>
<div className="bg-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex flex-col justify-center items-center shadow">
       <span className="text-black font-bold text-lg sm:text-xl">{String(timeLeft.seconds).padStart(2, "0")}</span>
       <span className="text-xs text-gray-600">Seconds</span>
     </div>
           
             </div>


             <button
     className="bg-green-500 text-white font-medium text-base sm:text-lg rounded hover:bg-red-400 shadow transition mb-8 flex items-center justify-center w-full max-w-[180px] h-12 sm:h-[60px]"
     style={{
       fontSize: "1rem",
     }}
   >
     Buy Now!
   </button>
         
           </div>


<div className="flex-1 flex items-center justify-center w-full md:w-1/2 px-2 md:px-0">
   <Image
     src="/images/speaker.png"
     alt="JBL Speaker"
     width={700}
     height={300}
     style={{
       objectFit: "contain",
       width: "100%",
       maxWidth: 700,
       height: "auto",
     }}
     className="max-w-full h-auto"
   />
 </div>
         </section>
   </div>
 );
}

