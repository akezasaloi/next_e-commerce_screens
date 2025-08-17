import Link from "next/link";
import { FaChevronRight, FaApple } from "react-icons/fa";

const HeroSection = () => {
  const categories = [
    "Woman's Fashion",
    "Men's Fashion", 
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex">
        {/* Sidebar Categories */}
        <div className="hidden lg:block w-64 border-r border-gray-200 pr-8">
          <nav className="py-6 space-y-4">
            {categories.map((category, index) => (
              <Link 
                key={index}
                href="#" 
                className="flex items-center justify-between text-black hover:text-black transition-colors group"
              >
                <span>{category}</span>
                {(category === "Woman's Fashion" || category === "Men's Fashion") && (
                  <FaChevronRight className="h-4 w-4 text-black group-hover:text-gray-400" />
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* Hero Banner */}
        <div className="flex-1 lg:pl-8">
          <div className="bg-black text-white rounded-lg overflow-hidden relative">
            <div className="flex items-center h-80 lg:h-96">
              <div className="flex-1 p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <FaApple className="h-10 w-10" />
                  <span className="text-lg">iPhone 14 Series</span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-semibold mb-4 leading-tight">
                  Up to 10%<br />
                  off Voucher
                </h2>
                <Link 
                  href="#" 
                  className="inline-flex items-center text-white border-b border-white pb-1 hover:border-gray-300 transition-colors"
                >
                  Shop Now
                  <FaChevronRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
              <div className="flex-1 relative">
                <img 
                  src="/images/iphone-hero.png" 
                  alt="iPhone 14 Series" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {[0, 1, 2, 3, 4].map((dot) => (
                <button
                  key={dot}
                  className={`w-3 h-3 rounded-full ${
                    dot === 2 ? 'bg-red-500 border-2 border-white' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;