

'use client';
import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart, AiOutlineEye, AiFillEye } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
type Product = {
 name: string;
 price: number;
 originalPrice?: number;
 image: string;
 imageClass?: string;
 reviews: number;
};
const products: Product[] = [
 {
   name: 'The north coat',
   price: 260,
   originalPrice: 360,
   image: '/images/north-coat.jpg',
   imageClass: 'w-[60%] h-[45%]',
   reviews: 65,
 },
 {
   name: 'Gucci duffle bag',
   price: 960,
   originalPrice: 1160,
   image: '/images/gucci-bag.jpg',
   imageClass: 'w-[80%] h-[45%]',
   reviews: 65,
 },
 {
   name: 'RGB liquid CPU cooler',
   price: 160,
   originalPrice: 170,
   image: '/images/cpu-cooler.jpg',
   imageClass: 'rounded-lg object-coverhover:grayscale-0 transition w-[90%] h-[45%] mx-auto mt-10 sm:ml-[-5%]',
   reviews: 65,
 },
 {
   name: 'Small bookshelf',
   price: 360,
   image: '/images/bookshelf.jpg',
   reviews: 65,
 },
];
export default function SellingProducts() {
 return (
   <section className="font-poppins p-6">
     <div className="flex justify-between items-center mb-6">
       <div className="relative group">
         <div className='flex gap-4.5 mb-9'>
           <p className='border-red-400 bg-red-400 text-red-400 w-3.5 h-9 rounded-sm'>.</p>
           <p className='text-red-400 text-[16px] mt-1.5'>This Month</p>
         </div>
         <h2 className="text-2xl font-semibold">Best Selling Products</h2>
       </div>
       <button className="border pl-7.5 pr-7.5 pt-2.5 pb-2.5 bg-red-400 rounded-sm text-white text-sm font-medium hover:underline">
         View All
       </button>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ml-12 ">
       {products.map((product) => {
         const [liked, setLiked] = useState(false);
         const [viewed, setViewed] = useState(false);
         return (
           <div key={product.name} className="p-4 hover:shadow-lg transition relative">
             <div className="relative ml-5 mb-4 border-gray-100 rounded-lg bg-gray-100 w-70.5 p-4">
               <img
                 src={product.image}
                 alt={product.name}
                 className={`h-40 object-cover rounded ${product.imageClass || ''}`}
               />
               <div className="absolute top-2 right-2 flex flex-col gap-2 text-gray-600">
                 <button onClick={() => setLiked(!liked)}>
                   {liked ? (
                     <AiFillHeart className="text-red-500 mb-4.5 cursor-pointer" />
                   ) : (
                     <AiOutlineHeart className="mb-4.5 cursor-pointer hover:text-red-500" />
                   )}
                 </button>
                 <button onClick={() => setViewed(!viewed)}>
                   {viewed ? (
                     <AiFillEye className="text-blue-500 cursor-pointer" />
                   ) : (
                     <AiOutlineEye className="cursor-pointer hover:text-blue-500" />
                   )}
                 </button>
               </div>
             </div>
             <h3 className="text-lg font-medium mb-1">{product.name}</h3>
             <div className="flex items-center gap-2 mb-2">
               <span className="text-red-500 font-semibold">${product.price}</span>
               {product.originalPrice && (
                 <span className="line-through text-gray-400 text-sm">
                   ${product.originalPrice}
                 </span>
               )}
             </div>
             <div className="flex items-center gap-1 text-yellow-500 text-sm">
               {Array(5)
                 .fill(0)
                 .map((_, i) => (
                   <FaStar key={i} />
                 ))}
               <span className="text-gray-600 ml-2">({product.reviews})</span>
             </div>
           </div>
         );
       })}
     </div>
   </section>
 );
}


