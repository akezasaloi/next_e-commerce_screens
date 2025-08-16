import { FaMagnifyingGlass } from "react-icons/fa6";


const Navbar = () => {
 return (
   <nav className="border border-gray-200 flex  justify-center items-center p-4 gap-80 bg-white text-black">
     <div className="font-bold text-[30px]">Exclusive</div>
     <ul className="flex space-x-4 text-[16px]">
       <li><a href="#" className="hover:underline">Home</a></li>
       <li><a href="#" className="hover:underline">Contact</a></li>
       <li><a href="#" className="hover:underline">About</a></li>
       <li><a href="#" className="hover:underline">Sign Up</a></li>
     </ul>
     <div className="relative text-[12px]">
       <input
         type="text"
         placeholder="What are you looking for?"
         className="border border-gray-200 bg-gray-200 p-2 pr-10 rounded"
       />
       <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
         <FaMagnifyingGlass />
       </button>
     </div>
   </nav>
 );
};


export default Navbar;




