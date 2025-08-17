"use client";

import Image from "next/image";
import Link from "next/link";

export default function NewArrival() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
        <span className="text-[#DB4444] font-semibold">Featured</span>
      </div>

      <h2 className="text-4xl font-semibold text-gray-900 mb-8">New Arrival</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[600px]">
        <div className="bg-black text-white rounded-lg overflow-hidden relative flex items-end min-h-[280px]">
          <div className="absolute inset-0">
            <Image
              src="/images/ps5-console.png"
              alt="PlayStation 5"
              fill
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="relative z-10 p-8">
            <h3 className="text-2xl font-semibold mb-2">PlayStation 5</h3>
            <p className="text-gray-300 mb-4 max-w-xs text-sm">Black and White version of the PS5 coming out on sale.</p>
            <Link href="#" className="inline-block bg-white text-black px-6 py-2 rounded font-semibold text-sm hover:bg-gray-200 transition">
              Shop Now
            </Link>
          </div>
        </div>


        <div className="grid grid-rows-2 gap-6 h-full">

          <div className="relative bg-black text-white rounded-xl overflow-hidden flex items-end aspect-[2/1]">

  <div className="flex items-center justify-center w-full h-full ">
    <Image
      src="/images/womens-collection.png"
      alt="Women Collections"
      width={600} 
      height={40}
      className="object-contain"
      priority
    />
  </div>

  <div className="absolute bottom-0 left-0 z-10 p-8">
    <h3 className="text-xl font-semibold mb-2">Women Collections</h3>
    <p className="text-gray-300 mb-3 text-sm max-w-xs">
      Featured woman collections that give you another vibe.
    </p>
    <Link
      href="#"
      className="inline-block bg-white text-black px-5 py-2 rounded font-semibold text-xs hover:bg-gray-200 transition"
    >
      Shop Now
    </Link>
  </div>
</div>

          <div className="grid grid-cols-2 gap-6">

            <div className="relative bg-black text-white rounded-xl overflow-hidden flex items-end aspect-square">
              <div className="flex items-center justify-center w-full h-full p-8">
                <Image
                  src="/images/speakers.png"
                  alt="Speakers"
                  width={120}
                  height={120}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="absolute bottom-0 left-0 z-10 p-6">
                <h3 className="text-lg font-semibold mb-1">Speakers</h3>
                <p className="text-gray-300 mb-2 text-xs">Amazon wireless speakers</p>
                <Link href="#" className="inline-block bg-white text-black px-4 py-2 rounded font-semibold text-xs hover:bg-gray-200 transition">
                  Shop Now
                </Link>
              </div>
            </div>


            <div className="relative bg-black text-white rounded-xl overflow-hidden flex items-end aspect-square">
              <div className="flex items-center justify-center w-full h-full p-8">
                <Image
                  src="/images/perfume.png"
                  alt="Perfume"
                  width={100}
                  height={140}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="absolute bottom-0 left-0 z-10 p-6">
                <h3 className="text-lg font-semibold mb-1">Perfume</h3>
                <p className="text-gray-300 mb-2 text-xs">GUCCI INTENSE OUD EDP</p>
                <Link href="#" className="inline-block bg-white text-black px-4 py-2 rounded font-semibold text-xs hover:bg-gray-200 transition">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}