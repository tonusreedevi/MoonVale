import React, { useEffect, useState } from "react";

const Trending = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("/hotels.json")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);

  // Example logic: trending = top rated hotels
  const trendingHotels = hotels
    .filter((h) => h.rating >= 4.7)
    .sort((a, b) => b.rating - a.rating);

  const saveToStorage = (hotel, status) => {
    const existing = JSON.parse(localStorage.getItem("bookings")) || [];

    const already = existing.find((item) => item.id === hotel.id);

    if (!already) {
      localStorage.setItem(
        "bookings",
        JSON.stringify([...existing, { ...hotel, status }])
      );
    }
  };

  return (
    <section className="max-w-7xl mx-auto py-20 px-5">

      {/* HEADER */}
      <div className="text-center mb-12">

        <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
          Popular Now
        </p>

        <h1 className="text-5xl font-bold mt-3">
          Trending Hotels
        </h1>

        <p className="text-gray-500 mt-4">
          Most loved and highest rated stays right now
        </p>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {trendingHotels.map((hotel) => (
          <div
            key={hotel.id}
            className="
              bg-white/70
              backdrop-blur-xl
              rounded-3xl
              overflow-hidden
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-2xl
            "
          >

            {/* IMAGE */}
            <div className="relative">
              <img
                src={hotel.image}
                className="h-60 w-full object-cover"
              />

              <div className="
                absolute
                top-4
                left-4
                bg-black
                text-white
                px-3
                py-1
                rounded-full
                text-sm
              ">
                ⭐ {hotel.rating}
              </div>

            </div>

            {/* CONTENT */}
            <div className="p-6">

              <h2 className="text-xl font-bold">
                {hotel.name}
              </h2>

              <p className="text-gray-500 mt-2">
                Luxury stay with premium experience
              </p>

              <div className="flex justify-between items-center mt-5">

                <span className="text-2xl font-bold">
                  {hotel.price}
                </span>

                <div className="flex gap-2">

                  <button
                    onClick={() => saveToStorage(hotel, "booked")}
                    className="bg-black text-white px-4 py-2 rounded-full"
                  >
                    Book
                  </button>

                  <button
                    onClick={() => saveToStorage(hotel, "wishlist")}
                    className="border px-3 py-2 rounded-full text-pink-500"
                  >
                    wishlist
                  </button>

                </div>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Trending;