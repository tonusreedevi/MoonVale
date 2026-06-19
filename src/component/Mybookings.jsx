import React, { useEffect, useState } from "react";

const Mybookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const load = () => {
      const data = JSON.parse(localStorage.getItem("bookings")) || [];
      setBookings(data);
    };

    load();
    window.addEventListener("storage", load);
    return () => window.removeEventListener("storage", load);
  }, []);

  const remove = (id) => {
    const updated = bookings.filter((b) => b.id !== id);
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  const filtered = bookings.filter((item) => {
    if (filter === "all") return true;
    return item.status === filter;
  });

  return (
    <section className="max-w-7xl mx-auto py-20 px-5">

      <h1 className="text-4xl font-bold text-center mb-8">
        My Bookings
      </h1>

      <div className="flex justify-center gap-3 mb-8">

        {["all","booked","wishlist"].map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-4 py-2 rounded-full border ${
              filter === t ? "bg-black text-white" : ""
            }`}
          >
            {t}
          </button>
        ))}

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {filtered.map((item) => (
          <div key={item.id} className="bg-white shadow rounded-2xl overflow-hidden">

            <img src={item.image} className="h-56 w-full object-cover" />

            <div className="p-4">

              <h2 className="font-bold">{item.name}</h2>

              <p className="text-gray-500">{item.price}</p>

              <span className="text-sm px-3 py-1 rounded-full bg-gray-200">
                {item.status}
              </span>

              <button
                onClick={() => remove(item.id)}
                className="mt-3 w-full bg-red-500 text-white py-2 rounded-full"
              >
                Remove
              </button>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Mybookings;