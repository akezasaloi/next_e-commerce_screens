'use client';
import { FiHeart } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "The north coat",
    price: 260,
    originalPrice: 360,
    rating: 5,
    reviews: 65,
    image: "/images/north-coat.png"
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    price: 960,
    originalPrice: 1160,
    rating: 4,
    reviews: 65,
    image: "/images/gucci-bag.png"
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    price: 160,
    originalPrice: 170,
    rating: 4,
    reviews: 65,
    image: "/images/cpu-cooler.png"
  },
  {
    id: 4,
    name: "Small BookShelf",
    price: 360,
    originalPrice: null,
    rating: 5,
    reviews: 65,
    image: "/images/bookshelf.png"
  }
];

function renderStars(rating: number) {
  return (
    <span className="flex items-center">
      {[...Array(5)].map((_, i) =>
        i < rating ? (
          <span key={i} className="text-yellow-400">★</span>
        ) : (
          <span key={i} className="text-yellow-400">☆</span>
        )
      )}
    </span>
  );
}

export default function BestSelling() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-gray-200">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-5 h-10 rounded bg-[#DB4444]"></span>
        <span className="font-semibold text-lg text-[#DB4444]">This Month</span>
      </div>

      <div className="flex items-end justify-between mb-4">
        <h2 className="text-4xl font-semibold text-black">Best Selling Products</h2>
        <button className="bg-[#DB4444] hover:bg-red-600 text-white px-8 py-3 rounded transition-colors font-semibold text-base">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group relative bg-[#FAFAFA] rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative bg-gray-100 h-64 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                width={180}
                height={160}
                className="w-full h-full object-contain p-4"
              />

              <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 flex items-center justify-center">
                  <FiHeart className="h-5 w-5 text-black" />
                </button>
                <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 flex items-center justify-center">
                  <IoEyeOutline className="h-5 w-5 text-black" />
                </button>
              </div>

              <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Add To Cart
              </button>
            </div>

            <div className="p-4">
              <h3 className="text-black font-medium mb-2">{product.name}</h3>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-[#DB4444] font-semibold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-gray-400 line-through">${product.originalPrice}</span>
                )}
              </div>
              <div className="flex items-center space-x-2">
                {renderStars(product.rating)}
                <span className="text-gray-500 text-sm">({product.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}