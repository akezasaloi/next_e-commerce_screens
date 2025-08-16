import Image from "next/image"; 
import { FiHeart } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

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

export default function ProductCarousel({
  products,
}: {
  products: Array<{
    id: number;
    name: string;
    price: number;
    oldPrice: number;
    discount: number;
    image: string;
    rating: number;
    reviews: number;
    isCart: boolean;
  }>;
}) {
  return (
    <div
      className="flex w-full overflow-x-auto gap-10 pb-4 px-4 snap-x snap-mandatory scroll-smooth hide-scrollbar"
      style={{ scrollPaddingLeft: 24, scrollPaddingRight: 24 }}
    >
      {products.map((product) => (
        <div
          className="relative bg-[#FAFAFA] rounded-lg shadow-sm w-[250px] min-h-[350px] flex flex-col items-center border border-gray-100 flex-shrink-0 snap-center"
          key={product.id}
        >
          <span className="absolute top-4 left-4 bg-[#DB4444] text-white text-xs px-2 py-1 rounded">
            -{product.discount}%
          </span>
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button className="bg-white rounded-full border border-gray-200 w-8 h-8 flex items-center justify-center">
              <FiHeart size={18} className="text-black" />
            </button>
            <button className="bg-white rounded-full border border-gray-200 w-8 h-8 flex items-center justify-center">
              <IoEyeOutline className="text-black" size={18} />
            </button>
          </div>
          <Image
            src={product.image}
            alt={product.name}
            width={140}
            height={120}
            className="w-[140px] h-[120px] object-contain mt-14"
          />
          {product.isCart && (
            <button className="mt-4 w-full bg-black text-white rounded text-base font-medium py-2">
              Add To Cart
            </button>
          )}
          <div className="mt-auto w-full text-left px-3 pb-3">
            <div className="font-medium text-base mt-4 text-black">{product.name}</div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#DB4444] font-semibold">${product.price}</span>
              <span className="text-gray-400 line-through text-sm">${product.oldPrice}</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <ProductStars rating={product.rating} />
              <span className="text-gray-500 ml-1">({product.reviews})</span>
            </div>
          </div>
        </div>
      ))}
      <div className="w-6 flex-shrink-0"></div>
    </div>
  );
}