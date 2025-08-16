"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { FaApple } from "react-icons/fa";

const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const pictures = [
  "/images/14.png",
  "/images/15.png",
  "/images/i-phone.png",
  "/images/20.png",
  "/images/17.png",
];

const Main = () => {
  const [selectedIndex, setSelectedIndex] = useState(2);

  return (
    <div className="flex h-screen mt-15 ml-30">
      <div className={`${poppins.className} w-80 h-100 p-20 text-black`}>
        <nav>
          {categories.map((category, index) => (
            <div key={index} className="flex space-x-7">
              <Link href="#">
                {category}
              </Link>
            </div>
          ))}
        </nav>
      </div>
      <div className="flex-1 p-4">
        <div className={`${poppins.className} w-[892px] h-[344px] bg-black text-white p-6 flex items-center justify-between rounded-lg`}>
          <div>
            <FaApple className="pr-28 w-40 h-15" />
            <p className="text-4xl font-bold">
              Up to 10% <br />
              off Voucher
            </p>
            <button className={`${poppins.className} mt-20 text-white px-4 py-2 rounded hover:bg-gray-200 underline`}>
              Shop Now →
            </button>
          </div>
          <div className="relative">
            <Image
              src={pictures[selectedIndex]}
              alt="Picture"
              width={480}
              height={320}
              className="w-120 h-80 object-contain"
              priority
            />
            <div className="absolute flex space-x-3 top-full mt-2">
              {pictures.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`w-2 h-2 rounded-full cursor-pointer ${selectedIndex === index ? "bg-red-500" : "bg-gray-400"}`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === "Enter") setSelectedIndex(index); }}
                  aria-label={`Select picture ${index + 1}`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;