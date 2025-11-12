import React from "react";
import DeckIcon from "@mui/icons-material/Deck";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-[#A67B5B] text-white sticky top-0 z-50 shadow-md w-full">
      <div className="flex items-center justify-between px-10 h-16">


        <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition">
          <DeckIcon fontSize="large" />
          <p className="text-2xl font-semibold tracking-wide">FurniCo</p>
        </Link>


        <div className="hidden md:flex space-x-10 text-lg font-medium">
          <Link href="/" className="hover:text-gray-200 transition">Home</Link>
          <Link href="/about" className="hover:text-gray-200 transition">About</Link>
          <Link href="/product" className="hover:text-gray-200 transition">Products</Link>
          <Link href="/contact" className="hover:text-gray-200 transition">Contact</Link>
        </div>


        <div>
          <button className="bg-white text-[#A67B5B] px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
