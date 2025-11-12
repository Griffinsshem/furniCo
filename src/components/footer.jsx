import React from "react";
import DeckIcon from "@mui/icons-material/Deck";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#A67B5B] text-white mt-0 shadow-inner">
      <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">


        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <DeckIcon fontSize="large" />
            <p className="text-2xl font-semibold tracking-wide">FurniCo</p>
          </div>
          <p className="text-lg text-gray-200 leading-relaxed">
            Creating timeless furniture pieces that bring comfort, elegance, and
            style into every home.
          </p>
        </div>


        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-200 text-lg">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About</Link></li>
            <li><Link href="/products" className="hover:text-white transition">Products</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>


        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-5">
            <a href="#" className="hover:text-gray-300 transition"><FacebookIcon fontSize="medium" /></a>
            <a href="#" className="hover:text-gray-300 transition"><InstagramIcon fontSize="medium" /></a>
            <a href="#" className="hover:text-gray-300 transition"><TwitterIcon fontSize="medium" /></a>
            <a href="#" className="hover:text-gray-300 transition"><LinkedInIcon fontSize="medium" /></a>
          </div>
        </div>
      </div>


      <div className="border-t border-gray-400 text-center py-4 text-sm text-gray-100">
        © {new Date().getFullYear()} FurniCo. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
