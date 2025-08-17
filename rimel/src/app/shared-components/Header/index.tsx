import Link from "next/link";
import { MdSearch, MdShoppingCart, MdPerson, MdFavorite } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="w-full">
      <div className="bg-black text-white text-center py-2 text-sm">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <Link href="#" className="underline font-semibold">
          ShopNow
        </Link>
        <select className="bg-black text-white border-none ml-4 text-sm">
          <option>English</option>
        </select>
      </div>

      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-black">
              Exclusive
            </Link>

            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-900  hover:text-gray-950 border-b-2 border-transparent hover:border-b-gray-700 pb-1 transition-colors">
                Home
              </Link>
              <Link href="/contact" className="text-gray-900  hover:text-gray-950 border-b-2 border-transparent hover:border-b-gray-700 pb-1 transition-colors">
                Contact
              </Link>
              <Link href="/about" className="text-gray-900  hover:text-gray-950 border-b-2 border-transparent hover:border-b-gray-700 pb-1 transition-colors">
                About
              </Link>
              <Link href="/signup" className="text-gray-900 hover:text-gray-950 border-b-2 border-transparent hover:border-b-gray-700 pb-1 transition-colors">
                Sign Up
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="bg-gray-100 px-4 py-2 pr-10 rounded text-sm w-64 focus:outline-none focus:ring-2 focus:ring-black"
                />
              <IoSearchOutline  className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black" />
              </div>
              
              <button className="p-2 hover:bg-gray-100 rounded">
                <MdOutlineFavoriteBorder className="h-5 w-5 text-black" />
              </button>
              
              <button className="p-2 hover:bg-gray-100 rounded relative">
                <IoCartOutline className="h-5 w-5 text-black" />
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;