import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">

      <Image
        src="/furnicoHero.avif"
        alt="Modern living room furniture"
        fill
        priority
        className="object-cover brightness-75"
      />


      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Elevate Your Space with Timeless Furniture
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Discover stylish,durable and affordable pieces that bring comfort and class to every corner of your home
        </p>
        <a
          href="/product"
          className="bg-white text-black font-semibold py-3 px-6 rounded-full transition"
        >
          Browse Products
        </a>
      </div>
    </section>
  );
}
