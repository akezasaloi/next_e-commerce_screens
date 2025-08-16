import Image from "next/image";
import Link from "next/link";
import { FaShippingFast, FaHeadset, FaUndo } from "react-icons/fa";


export default function Featured() {
 return (
   <main className="px-10 py-12">
     <section className="mb-10">
      
     <div className="flex items-center gap-2 mb-2">
 <div className="w-6 h-10 rounded-sm bg-red-600 ml-45 "></div>
 <span className="text-red-600 font-bold text-sm pb-2">Featured</span>
</div>
       <h1 className="text-3xl font-semibold mt-12 mb-16 ml-45">New Arrival</h1>
       <div className="flex gap-6">
         <div className="flex-2">
           <div className="relative rounded-lg overflow-hidden bg-black h-[620px] w-[700px] ml-45">
             <Image
               src="/images/speaker.png"
               alt="PlayStation 5"
               className=" object-cover brightness-75 pl-17 pt-20"
             />
             <div className="absolute left-6 bottom-10 text-white">
               <h2 className="text-3xl font-semibold pb-5 ml-5">PlayStation 5</h2>
               <p className="mt-1 mb-8 text-sm ml-5">
                 Black and White version of the PS5
                 <br />
                 coming out on sale.
               </p>
               <Link href="/shop/ps5" className="inline-block text-white px-6 py-2  font-semibold text-lg transition underline ">
                 Shop Now
               </Link>
             </div>
           </div>
         </div>



         <div className="flex-3 flex flex-col gap-4 ">
           <div>
             <div className="relative rounded-lg overflow-hidden  bg-black w-[670px] ">
               <Image
                 src="/images/women.png"
                 alt="Women's Collections"
       
                 className=" object-cover brightness-75 ml-48 "
               />
               <div className="absolute left-7 top-33 text-white">
                 <h3 className="text-3xl
                 font-semibold pt-1 pb-3 ml-5">Women’s Collections</h3>
                 <p className="mt-1 mb-3 text-sm leading-snug max-w-xs pb-1 ml-5">
                   Featured woman collections that
                   <br />
                   give you another vibe.
                 </p>
                 <Link href="/shop/women" className="inline-block  text-white px-4 py-1 rounded-full font-bold text-lg transition underline ml-2">
                   Shop Now
                 </Link>
               </div>
             </div>
           </div>
           <div className="flex gap-4">
             <div className="relative rounded-lg overflow-hidden  bg-black h-[320px] w-[330]">
               <Image
                 src="/images/smallspeaker.png"
                 alt="Speakers"
                 className=" pt-13 ml-16 brightness-80 w-60"
               />
               <div className="absolute left-4 top-53 text-white">
                 <h3 className="text-3xl font-semibold ml-5">Speakers</h3>
                 <p className="text-xs mt-1 mb-2 ml-5">
                   Amazon wireless speakers.
                 </p>
                 <Link href="/shop/speakers" className="inline-block  text-white px-3 py-1  font-bold text-lg transition underline ml-2">
                   Shop Now
                 </Link>
               </div>
             </div>
             <div className="relative rounded-lg bg-black overflow-hidden h-[320px] w-[330]">
               <Image
                 src="/images/perfume.png"
                 alt="Perfume"
                 className=" brightness-70 ml-15 mt-10 w-60"
               />
               <div className="absolute left-4 top-53 text-white">
                 <h3 className="text-3xl ml-2 font-semibold">Perfume</h3>
                 <p className="text-xs mt-1 ml-2 mb-2">GUCCI INTENSE OUD EDP</p>
                 <Link href="/shop/perfume" className="inline-block  text-white px-3 py-1 pl-2  font-bold text-lg transition underline">
                   Shop Now
                 </Link>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>



     <section className="flex justify-center gap-65 py-10">
       <div className="text-center max-w-xs">
         <FaShippingFast size={56} className="mx-auto mb-2 text-white bg-black rounded-full p-3" />
         <p className="font-bold uppercase text-lg">Free and Fast Delivery</p>
         <p className="text-gray-800 text-xs mt-2">Free delivery for all orders over $140</p>
       </div>
       <div className="text-center max-w-xs  ">
         <FaHeadset size={53} className="mx-auto mb-2 text-white bg-black rounded-full p-3" />
         <p className="font-bold uppercase text-lg">24/7 Customer Service</p>
         <p className="text-gray-800 text-xs mt-2">Friendly 24/7 customer support</p>
       </div>
       <div className="text-center max-w-xs ">
         <FaUndo size={20} className="mx-auto mb-2 bg-black w-[50] h-[50] text-white rounded-full p-3" />
         <p className="font-bold uppercase text-lg">Money Back Guarantee</p>
         <p className="text-gray-800 text-xs mt-2">We reurn money within 30 days</p>
       </div>
     </section>
   </main>
 );
}



