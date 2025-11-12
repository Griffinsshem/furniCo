import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="bg-[#F5F5F5] text-[#2C2C2C] min-h-screen py-16 px-6 md:px-20">

      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#A67B5B] mb-4">
          About FurniCo
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-600">
          Where craftsmanship meets comfort — creating timeless furniture pieces
          designed to make your house feel like home.
        </p>
      </section>


      <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-2xl font-semibold text-[#A67B5B] mb-4">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Founded with a passion for design and sustainability, FurniCo began
            as a small local workshop and grew into a trusted name in furniture
            craftsmanship. We believe that every piece should tell a story —
            blending natural materials, timeless aesthetics, and modern
            functionality to create spaces that inspire.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/brownSofa.avif"
            alt="FurniCo workshop"
            width={500}
            height={350}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
      </section>


      <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="flex justify-center order-2 md:order-1">
          <Image
            src="/livingRoom.avif"
            alt="Furniture design process"
            width={500}
            height={350}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-semibold text-[#A67B5B] mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our goal is to make high-quality furniture accessible while
            maintaining sustainability at our core. We source responsibly,
            design thoughtfully, and craft with precision to ensure every piece
            stands the test of time — both in style and durability.
          </p>
        </div>
      </section>


      <section className="bg-[#A67B5B] text-white rounded-2xl py-12 px-8 text-center shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">
          Bringing Comfort to Every Home
        </h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Discover our latest collections or get in touch to create custom
          furniture tailored to your space.
        </p>
        <button className="bg-white text-[#A67B5B] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Explore Products
        </button>
      </section>
    </div>
  );
}

export default About;
