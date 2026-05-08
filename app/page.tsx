import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

const products = [
  { id: '1', name: "Floral Bliss", price: 15000, vibe: "Fresh & Floral", image: "/fresh-floral.jpg" },
  { id: '2', name: "Midnight Oak", price: 18500, vibe: "Warm & Woody", image: "/warm-woody.jpg" },
];

export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="h-[95vh] relative flex items-center bg-[#E5E0DA] overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-12 pt-20">
          <div className="z-10">
            <span className="text-[10px] tracking-[0.4em] text-[#8C7355] uppercase font-bold mb-4 block">New Season Drop</span>
            <h1 className="text-6xl md:text-9xl font-serif text-[#2D2926] leading-[0.9] mb-8">
              Signature <br/> <span className="italic">Vibes.</span>
            </h1>
            <p className="text-[#5E5852] max-w-sm mb-10 leading-loose text-sm uppercase tracking-wider">
              Luxury scents hand-picked for the modern student. Long-lasting, high-impact, campus-ready.
            </p>
            <div className="flex gap-4">
              <a href="#shop" className="bg-[#2D2926] text-white px-10 py-5 text-[10px] uppercase tracking-[0.3em] hover:bg-[#8C7355] transition-all shadow-xl">Shop Collection</a>
              <Link href="/quiz" className="border border-[#2D2926] text-[#2D2926] px-10 py-5 text-[10px] uppercase tracking-[0.3em] hover:bg-[#2D2926] hover:text-white transition-all">Scent Quiz</Link>
            </div>
          </div>
          <div className="relative h-[700px] w-full hidden md:block">
            <Image src="/hero-perfume.jpg" alt="Hero" fill className="object-cover rounded-t-full shadow-2xl scale-110 translate-y-10" priority />
          </div>
        </div>
      </section>

      {/* 2. THE MOOD BANNER (Adds Volume) */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4">
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">Crafted for the <br/><span className="text-[#8C7355]">Bold & Ambitious.</span></h2>
            </div>
            <div className="md:col-span-8 relative h-64 md:h-96 w-full grayscale hover:grayscale-0 transition-all duration-700">
               <Image src="/lifestyle-spritz.jpg" alt="Atmosphere" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALUE PROPS (The "Why Us") */}
      <section className="py-24 bg-[#F4F1EE]">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-16 text-center">
          {[
            { t: 'Curated Selection', d: 'Hand-picked by scent experts' },
            { t: 'Campus Delivery', d: 'Quick delivery to your hostel' },
            { t: '8+ Hour Sillage', d: 'Smell great from morning to night' }
          ].map((item, i) => (
            <div key={i} className="group">
              <div className="h-px w-8 bg-[#8C7355] mx-auto mb-6 group-hover:w-20 transition-all duration-500"></div>
              <h3 className="font-serif text-2xl mb-2 tracking-tight">{item.t}</h3>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MAIN SHOP SECTION */}
      <section id="shop" className="py-32 container mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="font-serif text-5xl mb-6 tracking-tighter">The Full Collection</h2>
          <p className="text-[10px] tracking-[0.5em] text-[#8C7355] uppercase">Find your signature today</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {products.map((p) => <ProductCard key={p.id} {...p} />)}
        </div>
      </section>

      {/* 5. INTERACTIVE QUIZ PROMO (Template "Filler") */}
      <section className="bg-[#2D2926] py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Image src="/lifestyle-spritz.jpg" alt="bg" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-serif text-5xl text-white mb-8">Not sure where to start?</h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-12 text-sm leading-loose uppercase tracking-[0.2em]">Take our 60-second scent quiz to find the fragrance that matches your personality and vibe.</p>
          <Link href="/quiz" className="inline-block bg-white text-[#2D2926] px-12 py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#8C7355] hover:text-white transition-all">Take The Quiz</Link>
        </div>
      </section>

      {/* 6. SOCIAL PROOF / TESTIMONIALS */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto border-l-4 border-[#8C7355] pl-12">
            <span className="text-[4rem] font-serif leading-none text-[#8C7355] opacity-20 block mb-[-20px]">“</span>
            <p className="text-2xl md:text-3xl font-serif italic text-[#2D2926] mb-8 leading-relaxed">
              "Every time I wear Midnight Oak to class, I get asked what it is. The longevity is actually insane for the price. Tee Scents is a campus game-changer."
            </p>
            <cite className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold not-italic">— Covenant University Student</cite>
          </div>
        </div>
      </section>
    </>
  );
}