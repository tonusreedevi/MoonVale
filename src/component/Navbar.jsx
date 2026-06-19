import React from "react";

const Navbar = ({ setPage }) => {
  return (
    <div className="sticky top-0 z-50 text-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        {/* LEFT - LOGO */}
        <div
          onClick={() => setPage("hotels")}
          className="text-2xl font-serif font-semibold tracking-wide cursor-pointer"
        >
          MoonVale
        </div>

        {/* CENTER - NAV BUTTONS */}
        <div className="hidden md:flex gap-8 items-center">
          <button
            onClick={() => setPage("hotels")}
            className="text-sm tracking-wide hover:opacity-70 transition"
          >
            Hotels
          </button>

          <button
            onClick={() => setPage("deals")}
            className="text-sm tracking-wide hover:opacity-70 transition"
          >
            Special Offers
          </button>

          <button
            onClick={() => setPage("trending")}
            className="text-sm tracking-wide hover:opacity-70 transition"
          >
            Trending
          </button>

          <button
            onClick={() => setPage("bookings")}
            className="text-sm tracking-wide hover:opacity-70 transition"
          >
            My Bookings
          </button>
        </div>

        {/* RIGHT - ACTION */}
        <div>
          <button className="px-5 py-2 border bg-black text-white border-black/40 rounded-full text-sm hover:bg-white hover:text-black transition">
            Logout
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;