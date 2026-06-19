import React, { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Ocean Paradise",
    subtitle: "Luxury Beach Resort",
    offer: "30% OFF",
    price: "$120 / Night",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
  },

  {
    id: 2,
    title: "Mountain Retreat",
    subtitle: "Experience Nature Like Never Before",
    offer: "25% OFF",
    price: "$95 / Night",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
  },

  {
    id: 3,
    title: "City Lights Hotel",
    subtitle: "Premium Urban Stay",
    offer: "40% OFF",
    price: "$150 / Night",
    rating: "5.0",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  return (
    <div className="relative h-[65vh] overflow-hidden rounded-3xl">

      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">

        <div className="grid md:grid-cols-2 gap-10 items-center w-full">

          {/* Left Side */}
          <div className="text-white">

            <p className="uppercase tracking-[0.3em] text-sm text-gray-200 mb-4">
              🔥 Trending Hotels
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {slides[current].title}
            </h1>

            <p className="mt-4 text-lg text-gray-200 max-w-xl">
              {slides[current].subtitle}
            </p>

            <div className="mt-6">

              <span className="bg-white text-black px-5 py-2 rounded-full text-base font-bold">
                {slides[current].offer}
              </span>

            </div>

            <div className="mt-8">

              <button className="btn rounded-full px-8 bg-white text-black border-none hover:bg-gray-100">
                Book Now
              </button>

            </div>

            {/* Slider Dots */}
            <div className="mt-10 flex gap-3">

              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`transition-all rounded-full h-3 ${
                    current === index
                      ? "w-8 bg-white"
                      : "w-3 bg-white/50"
                  }`}
                />
              ))}

            </div>

          </div>

          {/* Right Side Floating Card */}
          <div className="hidden md:flex justify-center">

            <div className="w-72 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl">

              <img
                src={slides[current].image}
                alt={slides[current].title}
                className="h-44 w-full object-cover"
              />

              <div className="p-5 text-white">

                <div className="flex justify-between items-center">

                  <span className="bg-yellow-400 text-black px-4 py-1 rounded-full font-semibold text-sm">
                    ⭐ {slides[current].rating}
                  </span>

                  <span className="font-bold text-lg">
                    {slides[current].price}
                  </span>

                </div>

                <h2 className="text-2xl font-bold mt-4">
                  {slides[current].title}
                </h2>

                <p className="text-gray-200 mt-2">
                  {slides[current].subtitle}
                </p>

                <button className="btn w-full mt-5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20">
                  Explore Now →
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Banner;