import Image from "next/image";

const FeaturedBanner = () => {
  return (
    <section className="flex justify-center py-16">
      <div className="w-full max-w-[1200px] bg-black  overflow-hidden flex flex-col md:flex-row items-center shadow-lg min-h-[340px] px-10 md:px-14 py-12 gap-x-8">
        <div className="flex-1 flex flex-col justify-center gap-6 pr-3">
          <span className="text-[#00FF66] text-lg font-semibold mb-2">Categories</span>
          <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4" style={{lineHeight: "1.1"}}>
            Enhance Your<br />Music Experience
          </h2>
          <div className="flex gap-6 mb-8 mt-2">
            {[
              { value: "23", label: "Hours" },
              { value: "05", label: "Days" },
              { value: "59", label: "Minutes" },
              { value: "35", label: "Seconds" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center shadow">
                <span className="text-lg font-bold">{value}</span>
                <span className="text-xs">{label}</span>
              </div>
            ))}
          </div>
          <button className="bg-green-500 text-white font-bold text-base px-8 py-3 rounded-lg transition-colors w-fit mt-2 b">
            Buy Now!
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center relative min-h-[170px] md:min-h-[340px]">
          <Image
            src="/images/speaker-featured.png"
            alt="JBL Speaker"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedBanner;