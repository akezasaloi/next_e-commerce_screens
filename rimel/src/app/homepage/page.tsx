"use client";
import { useEffect, useState } from "react";
import ProductCarousel from "./components/todays-deals";
import ExploreProducts from "./components/explore";
import Main from "./components/landing-page";
import Footer from "../shared-components/Footer";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Button from "@/app/shared-components/Button";
import Header from "../shared-components/Header";
import Navbar from "../shared-components/nav-bar";

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

const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    discount: 40,
    image: "/todays-image/gamepad.png",
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
    image: "/todays-image/wired-keyboard.png",
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
    image: "/todays-image/gaming-monitor.png",
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
    image: "/todays-image/comfort-chair.png",
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
    image: "/todays-image/wireless-mouse.png",
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
    image: "/todays-image/headset.png",
    rating: 4.5,
    reviews: 54,
    isCart: false,
  },
  {
    id: 7,
    name: "Anker USB Hub",
    price: 30,
    oldPrice: 44,
    discount: 32,
    image: "/todays-image/usb-hub.png",
    rating: 4,
    reviews: 12,
    isCart: false,
  },
  {
    id: 8,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    discount: 40,
    image: "/todays-image/gamepad.png",
    rating: 5,
    reviews: 88,
    isCart: false,
  },
  {
    id: 9,
    name: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    discount: 35,
    image: "/todays-image/wired-keyboard.png",
    rating: 4,
    reviews: 75,
    isCart: true,
  },
  {
    id: 10,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    discount: 30,
    image: "/todays-image/gaming-monitor.png",
    rating: 5,
    reviews: 99,
    isCart: false,
  },
  {
    id: 11,
    name: "S-Series Comfort Chair",
    price: 375,
    oldPrice: 400,
    discount: 25,
    image: "/todays-image/comfort-chair.png",
    rating: 4.5,
    reviews: 99,
    isCart: false,
  },
  {
    id: 12,
    name: "SteelSeries Wireless Mouse",
    price: 210,
    oldPrice: 260,
    discount: 20,
    image: "/todays-image/wireless-mouse.png",
    rating: 4,
    reviews: 43,
    isCart: false,
  },
];

const gridProducts = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    price: 100,
    image: "/explore/dog-food.png",
    rating: 4,
    reviews: 35,
    colors: [],
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    price: 360,
    image: "/explore/camera.png",
    rating: 5,
    reviews: 95,
    isCart: true,
    colors: [],
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    price: 700,
    image: "/explore/laptop.png",
    rating: 5,
    reviews: 325,
    colors: [],
  },
  {
    id: 4,
    name: "Curology Product Set",
    price: 500,
    image: "/explore/curology.png",
    rating: 4,
    reviews: 145,
    colors: [],
  },
  {
    id: 5,
    name: "Kids Electric Car",
    price: 960,
    image: "/explore/kids-car.png",
    rating: 5,
    reviews: 65,
    isNew: true,
    colors: ["#DB4444", "#000"],
  },
  {
    id: 6,
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    image: "/explore/cleats.png",
    rating: 5,
    reviews: 35,
    colors: ["#FFD600", "#000"],
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    image: "/explore/gamepad.png",
    rating: 5,
    reviews: 55,
    isNew: true,
    colors: ["#DB4444", "#000"],
  },
  {
    id: 8,
    name: "Quilted Satin Jacket",
    price: 660,
    image: "/explore/jacket.png",
    rating: 4,
    reviews: 55,
    colors: ["#009688", "#000"],
  },
  {
    id: 9,
    name: "Quilted Satin Jacket",
    price: 660,
    image: "/explore/jacket.png",
    rating: 4,
    reviews: 55,
    colors: ["#009688", "#000"],
  },
  {
    id: 10,
    name: "Quilted Satin Jacket",
    price: 660,
    image: "/explore/jacket.png",
    rating: 4,
    reviews: 55,
    colors: ["#009688", "#000"],
  },
  {
    id: 11,
    name: "Quilted Satin Jacket",
    price: 660,
    image: "/explore/jacket.png",
    rating: 4,
    reviews: 55,
    colors: ["#009688", "#000"],
  },
  {
    id: 12,
    name: "Quilted Satin Jacket",
    price: 660,
    image: "/explore/jacket.png",
    rating: 4,
    reviews: 55,
    colors: ["#009688", "#000"],
  },
  {
    id: 13,
    name: "Quilted Satin Jacket",
    price: 660,
    image: "/explore/jacket.png",
    rating: 4,
    reviews: 55,
    colors: ["#009688", "#000"],
  },
  {
    id: 14,
    name: "Quilted Satin Jacket",
    price: 660,
    image: "/explore/jacket.png",
    rating: 4,
    reviews: 55,
    colors: ["#009688", "#000"],
  },
  {
    id: 15,
    name: "Quilted Satin Jacket",
    price: 660,
    image: "/explore/jacket.png",
    rating: 4,
    reviews: 55,
    colors: ["#009688", "#000"],
  },
  {
    id: 16,
    name: "Quilted Satin Jacket",
    price: 660,
    image: "/explore/jacket.png",
    rating: 4,
    reviews: 55,
    colors: ["#009688", "#000"],
  }
];

export default function TodaysDealsPage() {
  const [target, setTarget] = useState<Date | null>(null);
  const [page, setPage] = useState(0);
  const itemsPerPage = 6;
  const maxPage = Math.ceil(products.length / itemsPerPage) - 1;

  
  const [gridPage, setGridPage] = useState(0);
  const gridItemsPerPage = 10;
  const gridMaxPage = Math.ceil(gridProducts.length / gridItemsPerPage) - 1;

  useEffect(() => {
    setTarget(new Date(Date.now() + 3 * 24 * 60 * 60 * 1000 + 23 * 60 * 60 * 1000 + 19 * 60 * 1000 + 56 * 1000));
  }, []);
  const countdown = useCountdown(target);

  return (
    <>
    <Header/>
    <Navbar/>
    <div className="w-full bg-white min-h-screen pl-35 px-5 pt-10 overflow-x-hidden">
    <Main/>
      <div className="flex justify-between items-center mb-7">
        <div className="flex items-center gap-2">
          <span className="w-5 h-10 rounded ml-1.5 bg-[#DB4444]"></span>
          <span className="font-semibold text-lg ml-2 text-[#DB4444]">Today&apos;s</span>
        </div>
        <div className="flex gap-2 pr-20">
          <button
            className={`rounded-full bg-white shadow text-black w-9 h-9 flex items-center justify-center border border-gray-200 ${page === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            aria-label="Scroll Left"
            disabled={page === 0}
          >
            <FiChevronLeft size={22} />
          </button>
          <button
            className={`rounded-full bg-white shadow text-black w-9 h-9 flex items-center justify-center border border-gray-200 ${page >= maxPage ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => setPage((prev) => Math.min(prev + 1, maxPage))}
            aria-label="Scroll Right"
            disabled={page >= maxPage}
          >
            <FiChevronRight size={22} />
          </button>
        </div>
      </div>
      <div className="flex flex-row items-end gap-7 mb-8 ">
        <h1 className="font-inter font-semibold text-[36px] leading-[48px] tracking-[0.04em] text-black ml-1">
          Flash Sales
        </h1>
        <div className="flex items-end gap-4">
          {[
            { value: countdown.days, label: "Days" },
            { value: countdown.hours, label: "Hours" },
            { value: countdown.minutes, label: "Minutes" },
            { value: countdown.seconds, label: "Seconds" },
          ].map((item, idx) => (
            <div key={item.label} className="flex flex-col items-center">
              <span className="text-[12px] text-black font-semibold -mt-1">{item.label}</span>
              <span className="text-[24px] font-bold text-black">{item.value}</span>
              {idx < 3 && (
                <span className="absolute right-[-14px] top-[3px] text-[22px] font-bold text-[#DB4444]">{":"}</span>
              )}
            </div>
          )).reduce((acc, curr, idx, arr) => {
            acc.push(curr);
            if (idx < arr.length - 1) acc.push(<span key={idx + 'colon'} className="text-[22px] font-bold text-[#DB4444] mx-1">:</span>);
            return acc;
          }, [] as React.ReactNode[])}       
           </div>
      </div>


      <ProductCarousel
        products={products.slice(page * itemsPerPage, (page + 1) * itemsPerPage)}
      />

   
      <div className="text-center mt-10 mb-12">
        <Button onClick={() => { }}>
          View All Products
        </Button>
      </div>

      <ExploreProducts
        products={gridProducts}
        page={gridPage}
        setPage={setGridPage}
        itemsPerPage={10} 
        maxPage={gridMaxPage}
      />
      
    </div>
    <Footer/>
    </>
  );
}