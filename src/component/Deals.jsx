import React, { useEffect, useState } from "react";

const Deals = () => {
  const [hotels, setHotels] = useState([]);
  const [activeTab, setActiveTab] = useState("20-30");

  useEffect(() => {
    fetch("/deals.json")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);

  // Save to booking / wishlist
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

  // FILTER LOGIC
  const filteredHotels = hotels.filter((hotel) => {
    if (activeTab === "20-30")
      return hotel.offer >= 20 && hotel.offer <= 30;

    if (activeTab === "31-40")
      return hotel.offer >= 31 && hotel.offer <= 40;

    if (activeTab === "41-50")
      return hotel.offer >= 41 && hotel.offer <= 50;

    if (activeTab === "50-60")
      return hotel.offer >= 50 && hotel.offer <= 60;

    return true;
  });

  return (
    <section className="max-w-7xl mx-auto py-20 px-5">

      {/* HEADER */}
      <div className="text-center mb-12">

        <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
          Limited Time Deals
        </p>

        <h2 className="text-5xl font-bold mt-3">
          Special Offers
        </h2>

        <p className="text-gray-500 mt-4">
          Grab the best hotel deals before they’re gone
        </p>

      </div>

      {/* FILTER TABS */}
      <div className="flex justify-center gap-4 mb-12">

        {["20-30", "31-40", "41-50", "50-60"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              px-6 py-3 rounded-full border font-medium transition
              ${
                activeTab === tab
                  ? "bg-black text-white border-black shadow-lg"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }
            `}
          >
            {tab}%
          </button>
        ))}

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
              group
            "
          >

            {/* IMAGE */}
            <div className="relative overflow-hidden">

              <img
                src={hotel.image}
                alt={hotel.name}
                className="
                  h-60
                  w-full
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-105
                "
              />

              {/* OFFER BADGE */}
              <div className="
                absolute
                top-4
                right-4
                bg-black
                text-white
                px-3
                py-1
                rounded-full
                text-sm
              ">
                {hotel.offer}% OFF
              </div>

            </div>

            {/* CONTENT */}
            <div className="p-6">

              <div className="flex justify-between items-center">

                <h2 className="text-xl font-bold">
                  {hotel.name}
                </h2>

                <span className="text-sm font-semibold">
                  ⭐ {hotel.rating}
                </span>

              </div>

              <p className="text-gray-500 mt-2 text-sm">
                Luxury stay with premium facilities and unforgettable experience.
              </p>

              <div className="flex justify-between items-center mt-5">

                <span className="text-2xl font-bold">
                  {hotel.price}
                </span>

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

export default Deals;