import Image from "next/image";
import { FiHeart, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Button from "@/app/shared-components/Button";


interface Product {
  id: string | number;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isCart?: boolean;
  colors?: string[];
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

export default function ExploreProducts({
  products,
  page,
  setPage,
  itemsPerPage = 10,
  maxPage,
}: {
  products: Product[];
  page: number;
  setPage: (page: number) => void;
  itemsPerPage?: number;
  maxPage: number;
}) {
  const visibleProducts = products.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  return (
    <section className="w-full py-1 bg-white">
      <div className="w-full mx-auto ">
        <div className="flex justify-between items-end mb-7">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-10 rounded ml-0 bg-[#DB4444]"></span>
              <span className="font-semibold text-lg ml-2 text-[#DB4444]">
                Our Products
              </span>
            </div>
            <h2 className="font-inter font-semibold text-[32px] text-black">
              Explore Our Products
            </h2>
          </div>
          <div className="flex gap-2 items-center">
            <button
              className={`rounded-full bg-white shadow text-black w-9 h-9 flex items-center justify-center border border-gray-200 ${
                page === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => setPage(Math.max(page - 1, 0))}
              aria-label="Scroll Left"
              disabled={page === 0}
              type="button"
            >
              <FiChevronLeft size={22} />
            </button>
            <button
              className={`rounded-full bg-white shadow text-black w-9 h-9 flex items-center justify-center border border-gray-200 ${
                page >= maxPage ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => setPage(Math.min(page + 1, maxPage))}
              aria-label="Scroll Right"
              disabled={page >= maxPage}
              type="button"
            >
              <FiChevronRight size={22} />
            </button>
          </div>
        </div>
        <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
          {visibleProducts.map((product) => (
            <div
              className="w-[220px] relative bg-[#FAFAFA] rounded-lg shadow-sm min-h-[322px] flex flex-col items-center border border-gray-100"
              key={product.id}
            >
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-[#00FF80] text-white text-xs px-2 py-1 rounded">
                  NEW
                </span>
              )}
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
              <div className="mt-auto w-full text-left px-4 pb-3">
                <div className="font-medium text-base mt-4 text-black">
                  {product.name}
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#DB4444] font-semibold">
                    ${product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      ${product.oldPrice}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <ProductStars rating={product.rating} />
                  <span className="text-gray-500 ml-1">
                    ({product.reviews})
                  </span>
                </div>
                {product.colors && (
                  <div className="flex gap-2 mt-2">
                    {product.colors.map((color, idx) => (
                      <span
                        key={color + idx}
                        style={{ background: color }}
                        className="w-4 h-4 rounded-full border border-gray-200 inline-block"
                      ></span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button onClick={() => {}}>
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}