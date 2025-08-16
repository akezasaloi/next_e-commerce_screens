'use client';
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { Poppins } from "next/font/google";
 const menuItems = [
   "Woman’s Fashion",
   "Men’s Fashion",
   "Electronics",
   "Home & Lifestyle",
   "Medicine",
   "Sports & Outdoor",
   "Baby’s & Toys",
   "Groceries & Pets",
   "Health & Beauty",
 ];




 const pictures = [
   "/images/14.png",
   "/images/15.png",
   "/images/i-phone.png",
   "/images/20.png",
   "/images/17.png",
 ];
const poppins = Poppins({
subsets: ["latin"],
weight: ["400", "600", "700"],
variable: "--font-poppins",
});




const Main = () => {




 const [currentIndex, setCurrentIndex] = useState(0);
 useEffect(() => {
   const interval = setInterval(() => {
     setCurrentIndex(prevIndex =>
       prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
     );
   }, 6000);
   return () => clearInterval(interval);
 }, []);
 return (
   <div className={`${poppins.className} flex w-350 mx-auto min-h-380px p-4 mt-10`}>
     <aside className="min-w-[200px] border-r border-gray-200 pr-6 mr-20">
       <ul className="space-y-4 text-lg font-poppins text-black">
         {menuItems.map((item, idx) => (
           <li key={idx} className="flex justify-between items-center cursor-pointer hover:font-semibold">
             <span>{item}</span>
             {(item === "Woman’s Fashion" || item === "Men’s Fashion") && <span>&gt;</span>}
           </li>
         ))}
       </ul>
     </aside>
     <div className="w-[80%] bg-black relative flex items-center px-10 h-[385px]">
       <div className="flex-1 text-white">
         <div className="flex items-center gap-4 mb-5">
           <span className="w-10 h-10 flex items-center justify-center">


          
         <svg xmlns="http://www.w3.org/2000/svg" x="-5px" y="0px" width="30" height="30" viewBox="0 0 256 256">
 <g
   fillOpacity="1"
   fill="#ffffffff"
   fillRule="nonzero"
   stroke="none"
   strokeWidth="1"
   strokeLinecap="butt"
   strokeLinejoin="miter"
   strokeMiterlimit="10"
   strokeDasharray=""
   strokeDashoffset="0"
   fontFamily="none"
   fontWeight="none"
   fontSize="none"
   textAnchor="none"
   style={{mixBlendMode: 'normal'}}
 >
   <g transform="scale(8.53333,8.53333)">
     <path d="M25.565,9.785c-0.123,0.077 -3.051,1.702 -3.051,5.305c0.138,4.109 3.695,5.55 3.756,5.55c-0.061,0.077 -0.537,1.963 -1.947,3.94c-1.119,1.703 -2.361,3.42 -4.247,3.42c-1.794,0 -2.438,-1.135 -4.508,-1.135c-2.223,0 -2.852,1.135 -4.554,1.135c-1.886,0 -3.22,-1.809 -4.4,-3.496c-1.533,-2.208 -2.836,-5.673 -2.882,-9c-0.031,-1.763 0.307,-3.496 1.165,-4.968c1.211,-2.055 3.373,-3.45 5.734,-3.496c1.809,-0.061 3.419,1.242 4.523,1.242c1.058,0 3.036,-1.242 5.274,-1.242c0.966,0.001 3.542,0.292 5.137,2.745zM15.001,6.688c-0.322,-1.61 0.567,-3.22 1.395,-4.247c1.058,-1.242 2.729,-2.085 4.17,-2.085c0.092,1.61 -0.491,3.189 -1.533,4.339c-0.935,1.242 -2.545,2.177 -4.032,1.993z"></path>
   </g>
 </g>
</svg>
</span>


           <span className="font-poppins text-lg">iPhone 14 Series</span>
         </div>
         <h2 className="text-5xl font-bold font-poppins mb-4 leading-tight">
           Up to 10%<br />
           off Voucher
         </h2>
         <button className="underline text-white flex items-center gap-2 font-poppins text-lg cursor-pointer select-none py-2">
           Shop Now <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 8H18M18 8L11 1M18 8L11 15" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


         </button>
       </div>
       <div className="flex-1 flex justify-end items-center h-full">
         <Image
           src={pictures[currentIndex]}
           alt={`Product ${currentIndex + 1}`}
           width={400}
           height={300}
           className="object-contain"
         />
       </div>
       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
         {pictures.map((_, index) => (
           <span
             key={index}
             className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-pink-600' : 'bg-gray-300'
               }`}
           ></span>
         ))}
       </div>
     </div>
   </div>
 );
}


export default Main;

