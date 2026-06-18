import React, { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">

      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-5">

        <div className="text-center text-white max-w-4xl">

          <p className="uppercase tracking-[0.4em] text-sm text-gray-200 mb-5">
            Luxury • Comfort • Serenity
          </p>

          <h1 className="font-serif text-5xl md:text-7xl font-semibold leading-tight">
            Find Your Perfect
            <br />
            Escape at MoonVale
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
            Experience elegant stays, breathtaking destinations,
            and unforgettable moments crafted for your comfort.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">

            <button className="btn rounded-full px-8 py-6 bg-white text-slate-900 border-none hover:bg-gray-100 shadow-xl">
              Book Now
            </button>

            <button className="btn rounded-full px-8 py-6 bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20">
              Reviews
            </button>

          </div>

          {/* Slider Dots */}
          <div className="mt-12 flex justify-center gap-3">

            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  current === index
                    ? "bg-white w-8"
                    : "bg-white/50"
                }`}
              />
            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default Banner;