import { useState, useEffect } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiHeart } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    discount: 40,
    image: "/images/gamepad2.png",
    rating: 5,
    reviews: 88,
    isCart: false,
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    discount: 35,
    image: "/images/wired-keyboard.png",
    rating: 4,
    reviews: 75,
    isCart: true,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    discount: 30,
    image: "/images/gaming-monitor.png",
    rating: 5,
    reviews: 99,
    isCart: false,
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    price: 375,
    oldPrice: 400,
    discount: 25,
    image: "/images/comfort-chair.png",
    rating: 4.5,
    reviews: 99,
    isCart: false,
  },
  {
    id: 5,
    name: "SteelSeries Wireless Mouse",
    price: 210,
    oldPrice: 260,
    discount: 20,
    image: "/images/wireless-mouse.png",
    rating: 4,
    reviews: 43,
    isCart: false,
  },
  {
    id: 6,
    name: "Logitech G Pro Headset",
    price: 180,
    oldPrice: 220,
    discount: 18,
    image: "/images/headset.png",
    rating: 4.5,
    reviews: 54,
    isCart: false,
  },
];

function useCountdown(target: Date | null) {
  const [now, setNow] = useState<Date | null>(target ? new Date() : null);
  useEffect(() => {
    if (!target) return;
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, [target]);
  if (!target || !now) {
    return { days: "--", hours: "--", minutes: "--", seconds: "--" };
  }
  const diff = Math.max(0, target.getTime() - now.getTime());
  const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0");
  const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0");
  const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
  const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");
  return { days, hours, minutes, seconds };
}

function ProductStars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
  return (
    <span className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={"f" + i} className="text-yellow-400 mr-0.5" />
      ))}
      {hasHalf && <FaStarHalfAlt className="text-yellow-400 mr-0.5" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={"e" + i} className="text-yellow-400 mr-0.5" />
      ))}
    </span>
  );
}

export default function FlashSales() {
  const [target, setTarget] = useState<Date | null>(null);
  useEffect(() => {
    setTarget(new Date(Date.now() + 3 * 24 * 60 * 60 * 1000 + 23 * 60 * 60 * 1000 + 19 * 60 * 1000 + 56 * 1000));
  }, []);
  const countdown = useCountdown(target);

  const itemsPerPage = 4;
  const [page, setPage] = useState(0);
  const maxPage = Math.ceil(products.length / itemsPerPage) - 1;
  const pagedProducts = products.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="w-5 h-10 rounded bg-[#DB4444]"></span>
        <span className="font-semibold text-lg text-[#DB4444]">Today&apos;s </span>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-4 gap-4">
        <div className="flex flex-col md:flex-row items-start md:items-end gap-8">
          <h2 className="text-4xl font-semibold text-black">Flash Sales</h2>
          {/* Countdown Timer */}
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            {[
              { value: countdown.days, label: "Days" },
              { value: countdown.hours, label: "Hours" },
              { value: countdown.minutes, label: "Minutes" },
              { value: countdown.seconds, label: "Seconds" },
            ].map((item, idx) => (
              <div key={item.label} className="flex flex-col items-center relative">
                <div className="text-xs text-black font-semibold">{item.label}</div>
                <div className="text-2xl font-bold text-black">{item.value}</div>
                {idx < 3 && (
                  <span className="absolute right-[-14px] top-[13px] text-[22px] font-bold text-[#DB4444]">{":"}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-4">
          <button
            className={`rounded-full bg-white shadow text-black w-9 h-9 flex items-center justify-center border border-gray-200 hover:bg-gray-200 transition-colors ${
              page === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            aria-label="Scroll Left"
            disabled={page === 0}
          >
            <FiChevronLeft size={22} className="text-black" />
          </button>
          <button
            className={`rounded-full bg-white shadow text-black w-9 h-9 flex items-center justify-center border border-gray-200 hover:bg-gray-200 transition-colors ${
              page >= maxPage ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => setPage((prev) => Math.min(prev + 1, maxPage))}
            aria-label="Scroll Right"
            disabled={page >= maxPage}
          >
            <FiChevronRight size={22} className="text-black" />
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pagedProducts.map((product) => (
          <div
            key={product.id}
            className="group relative bg-[#FAFAFA] rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Discount Badge */}
            <span className="absolute top-4 left-4 bg-[#DB4444] text-white text-xs px-2 py-1 rounded">
              -{product.discount}%
            </span>
            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 flex items-center justify-center">
                <FiHeart className="h-5 w-5 text-black" />
              </button>
              <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 flex items-center justify-center">
                <IoEyeOutline className="h-5 w-5 text-black" />
              </button>
            </div>
            {/* Product Image */}
            <div className="relative bg-gray-100 h-64 flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              width={140}
              height={120}
              className="w-[140px] h-[120px] object-contain mt-14"
            />
              {/* Add to Cart Button */}
              <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Add To Cart
              </button>
            </div>
            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-black font-medium mb-2">{product.name}</h3>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-[#DB4444] font-semibold">${product.price}</span>
                <span className="text-gray-400 line-through">${product.oldPrice}</span>
              </div>
              <div className="flex items-center space-x-2">
                <ProductStars rating={product.rating} />
                <span className="text-gray-500 text-sm">({product.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10 mb-12">
        <button className="bg-[#DB4444] hover:bg-red-600 text-white px-8 py-3 rounded transition-colors font-semibold text-base">
          View All Products
        </button>
      </div>
    </section>
  );
}