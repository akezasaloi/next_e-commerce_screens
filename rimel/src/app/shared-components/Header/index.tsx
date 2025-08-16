
function Header() {
 return (
   <header className="w-full">


     <div className="bg-black text-white py-3 px-4 sm:px-6 lg:px-8">
       <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
         <div className="flex items-center mb-2 sm:mb-0 w-full space-x-1 justify-center">
           <span className="text-[16px] text-center">
             Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
           </span>
           <button className=" underline text-sm sm:text-base hover:text-gray-300 transition-colors">
             ShopNow
           </button>
         </div>


         <div className="flex items-center space-x-2">
           <span className="text-sm sm:text-base">English</span>
           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
           </svg>
         </div>
       </div>
     </div>
    


   </header>
 );
}


export default Header;

