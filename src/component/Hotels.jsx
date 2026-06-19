import React, { useEffect, useState } from "react";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/hotels.json")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);

  // Save booking / wishlist
  const saveToStorage = (hotel, status) => {
    const existing = JSON.parse(localStorage.getItem("bookings")) || [];

    const alreadyExists = existing.find((item) => item.id === hotel.id);

    if (!alreadyExists) {
      localStorage.setItem(
        "bookings",
        JSON.stringify([...existing, { ...hotel, status }])
      );
    }
  };

  // SEARCH FILTER
  const filteredHotels = hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(search.toLowerCase()) ||
    hotel.destination?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto py-20 px-5">

      {/* HEADER */}
      <div className="text-center mb-12">

        <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
          Explore Bangladesh
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mt-3">
          Hotels & Destinations
        </h1>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Discover luxury hotels and breathtaking destinations across Bangladesh.
        </p>

      </div>

      {/* SEARCH BAR */}
      <div className="flex justify-center mb-16">

        <div className="relative w-full max-w-2xl">

          <input
            type="text"
            placeholder="Search hotel or destination..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              py-4
              px-7
              rounded-full
              border
              border-gray-200
              shadow-lg
              outline-none
              text-lg
              focus:ring-2
              focus:ring-black
            "
          />

          <button className="
            absolute
            right-2
            top-1/2
            -translate-y-1/2
            bg-black
            text-white
            px-6
            py-3
            rounded-full
            hover:bg-gray-800
            transition
          ">
            Search
          </button>

        </div>

      </div>

      {/* GRID CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {filteredHotels.map((hotel) => (
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
            <div className="relative overflow-hidden">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="
                  h-64
                  w-full
                  object-cover
                  transition
                  duration-500
                  hover:scale-105
                "
              />

              {/* Rating */}
              <div className="
                absolute
                top-4
                left-4
                bg-white
                px-4
                py-2
                rounded-full
                text-sm
                font-semibold
                shadow
              ">
                ⭐ {hotel.rating}
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-6">

              <h3 className="text-2xl font-bold">
                {hotel.name}
              </h3>

              <p className="text-gray-500 mt-2">
                {hotel.destination}
              </p>

              <div className="flex justify-between items-center mt-6">

                <div>
                  <p className="text-gray-400 text-sm">
                    Starting From
                  </p>
                  <p className="text-2xl font-bold">
                    {hotel.price}
                  </p>
                </div>

                {/* BUTTONS */}
                <div className="flex gap-2">

                  <button
                    onClick={() => saveToStorage(hotel, "booked")}
                    className="
                      bg-black
                      text-white
                      px-5
                      py-2
                      rounded-full
                      hover:bg-gray-800
                      transition
                    "
                  >
                    Book
                  </button>

                  <button
                    onClick={() => saveToStorage(hotel, "wishlist")}
                    className="
                      border
                      px-4
                      py-2
                      rounded-full
                      text-pink-500
                      hover:bg-pink-50
                      transition
                    "
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

export default Hotels;