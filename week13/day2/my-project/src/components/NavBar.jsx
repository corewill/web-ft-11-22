import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z[100]  h-20 text-zinc-200 w-full ">
      <h1 className="text-red-600">NETFLIX</h1>
      <div>
        <Link to="/" className="text-zinc-200 pr-4">Home</Link>
        <Link to="/search" className="bg-red-600 px-6 py-2 rounded">
          Search
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
