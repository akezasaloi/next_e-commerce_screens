"use client";

import { useState } from "react";
import Image from "next/image";
import {  FiHeart } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";

const products = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    price: 100,
    rating: 3,
    reviews: 35,
    image: "/images/dog-food.png",
    isNew: true
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    price: 360,
    rating: 4,
    reviews: 95,
    image: "/images/canon-camera.png",
    isCart: false
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    price: 700,
    rating: 5,
    reviews: 325,
    image: "/images/asus-laptop.png"
  },
  {
    id: 4,
    name: "Curology Product Set",
    price: 500,
    rating: 4,
    reviews: 145,
    image: "/images/curology-set.png"
  },
  {
    id: 5,
    name: "Kids Electric Car",
    price: 960,
    rating: 5,
    reviews: 65,
    image: "/images/kids-car.png",
    isNew: true,
    colors: ["#DB4444", "#000"]
  },
  {
    id: 6,
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    rating: 5,
    reviews: 35,
    image: "/images/soccer-cleats.png",
    colors: ["#FFD600", "#000"]
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    rating: 4,
    reviews: 55,
    image: "/images/gamepad-gp11.png",
    isNew: true,
    colors: ["#DB4444", "#000"]
  },
  {
    id: 8,
    name: "Quilted Satin Jacket",
    price: 660,
    rating: 4,
    reviews: 55,
    image: "/images/satin-jacket.png",
    colors: ["#009688", "#FF6B00"]
  }
];


function ProductStars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center text-[15px]">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={`mr-[1px] ${star <= rating ? "text-[#FFAD33]" : "text-[#CACACA]"}`}>
          ★
        </span>
      ))}
    </span>
  );
}


function ColorOptions({ colors }: { colors?: string[] }) {
  const [selected, setSelected] = useState<number | null>(null);
  if (!colors) return null;
  return (
    <div className="flex gap-2 mt-2">
      {colors.map((color, idx) => (
        <button
          key={color + idx}
          type="button"
          aria-label={`Select color`}
          className={`w-4 h-4 rounded-full border-2 flex-shrink-0
            ${selected === idx ? "border-black ring-2 ring-offset-2 ring-[#DB4444]" : "border-gray-300"}
          `}
          style={{ background: color, outline: "none" }}
          onClick={() => setSelected(selected === idx ? null : idx)}
        />
      ))}
    </div>
  );
}

export default function ExploreProducts() {

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200">

      <div className="flex items-center space-x-4 mb-6">
        <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
        <span className="text-[#DB4444] font-semibold">Our Products</span>
      </div>

      <h2 className="text-4xl font-semibold text-gray-900 mb-8">Explore Our Products</h2>


      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 mb-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            style={{ margin: "0" }}
          >
            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 flex items-center justify-center">
                <FiHeart className="h-4 w-4 text-gray-600" />
              </button>
              <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 flex items-center justify-center">
                <IoEyeOutline className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            <div className="relative bg-gray-100 h-52 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                width={160}
                height={130}
                className="w-[120px] h-[100px] object-contain"
                unoptimized
              />

              {product.isNew && (
                <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                  NEW
                </div>
              )}

              <button
                className={`
                  absolute bottom-0 left-0 right-0 bg-black text-white py-2 font-semibold transition-opacity
                  ${product.isCart ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                `}
              >
                Add To Cart
              </button>
            </div>

            <div className="p-3">
              <h3 className="text-black font-medium mb-2 text-[16px]">{product.name}</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#DB4444] font-semibold">${product.price}</span>
              </div>
              <div className="flex items-center gap-1 mb-1">
                <ProductStars rating={product.rating} />
                <span className="text-gray-500 text-xs ml-1">({product.reviews})</span>
              </div>
              <ColorOptions colors={product.colors} />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="bg-[#DB4444] hover:bg-[#b92c2c] text-white px-8 py-3 rounded transition-colors font-semibold text-base">
          View All Products
        </button>
      </div>
    </section>
  );
}