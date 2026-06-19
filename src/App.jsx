import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner.jsx";
import Deals from "./component/Deals.jsx";
import Hotels from "./component/Hotels.jsx";
import Mybookings from "./component/Mybookings.jsx";
import Trending from "./component/Trending.jsx";

const App = () => {
  const [page, setPage] = useState("home");

  return (
    <div>

      {/* NAVBAR */}
      <Navbar setPage={setPage} />

      {/* HOME PAGE */}
      {page === "home" && (
        <>
          <Banner />
          <Deals />
          <Hotels />
        </>
      )}

      {/* HOTELS PAGE */}
      {page === "hotels" && <Hotels />}

      {/* DEALS PAGE */}
      {page === "deals" && <Deals />}

      {/* ⭐ TRENDING PAGE (NEW) */}
      {page === "trending" && <Trending />}

      {/* BOOKINGS PAGE */}
      {page === "bookings" && <Mybookings />}

    </div>
  );
};

export default App;