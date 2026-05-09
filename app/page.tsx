import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

const products = [
  { id: 'fresh', name: "Fresh & Energetic Set", price: 25000, vibe: "Zesty & Clean", image: "/fresh-floral.jpg" },
  { id: 'romantic', name: "Romantic & Soft Set", price: 28000, vibe: "Warm & Sweet", image: "/lifestyle-spritz.jpg" },
  { id: 'mysterious', name: "Mysterious & Alluring Set", price: 32000, vibe: "Spicy & Deep", image: "/warm-woody.jpg" },
  { id: 'cozy', name: "Relaxed & Cozy Set", price: 24000, vibe: "Soft & Calm", image: "/hero-perfume.jpg" },
  { id: 'confident', name: "Confident & Empowered Set", price: 30000, vibe: "Bold & Sharp", image: "/lifestyle-spritz.jpg" },
  { id: 'wild', name: "Adventurous & Wild Set", price: 26000, vibe: "Oceanic & Fresh", image: "/fresh-floral.jpg" },
];

export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION - Changed bg-[#E5E0DA] to bg-[var(--muted)] */}
      <section className="h-[95vh] relative flex items-center bg-[var(--muted)] transition-colors duration-500 overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-12 pt-20">
          <div className="z-10">
            <span className="text-[10px] tracking-[0.4em] text-[var(--accent)] uppercase font-bold mb-4 block">New Season Drop</span>
            <h1 className="text-6xl md:text-9xl font-serif text-[var(--foreground)] leading-[0.9] mb-8">
              Signature <br/> <span className="italic">Vibes.</span>
            </h1>
            <p className="text-[var(--foreground)] opacity-70 max-w-sm mb-10 leading-loose text-sm uppercase tracking-wider">
              Luxury scents hand-picked for the modern student. Long-lasting, high-impact, campus-ready.
            </p>
            <div className="flex gap-4">
              <a href="#shop" className="bg-[var(--foreground)] text-[var(--background)] px-10 py-5 text-[10px] uppercase tracking-[0.3em] hover:bg-[var(--accent)] transition-all shadow-xl">Shop Collection</a>
              <Link href="/quiz" className="border border-[var(--foreground)] text-[var(--foreground)] px-10 py-5 text-[10px] uppercase tracking-[0.3em] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all">Scent Quiz</Link>
            </div>
          </div>
          <div className="relative h-[700px] w-full hidden md:block">
            <Image src="/hero-perfume.jpg" alt="Hero" fill className="object-cover rounded-t-full shadow-2xl scale-110 translate-y-10" priority />
          </div>
        </div>
      </section>

      {/* 2. THE MOOD BANNER - Changed bg-white to bg-[var(--card)] */}
      <section className="py-32 bg-[var(--card)] transition-colors duration-500 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4">
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[var(--foreground)]">Crafted for the <br/><span className="text-[var(--accent)]">Bold & Ambitious.</span></h2>
            </div>
            <div className="md:col-span-8 relative h-64 md:h-96 w-full grayscale hover:grayscale-0 transition-all duration-700">
               <Image src="/lifestyle-spritz.jpg" alt="Atmosphere" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALUE PROPS - Changed bg-[#F4F1EE] to bg-[var(--background)] */}
      <section className="py-24 bg-[var(--background)] transition-colors duration-500">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-16 text-center">
          {[
            { t: 'Curated Selection', d: 'Hand-picked by scent experts' },
            { t: 'Campus Delivery', d: 'Quick delivery to your hostel' },
            { t: '8+ Hour Sillage', d: 'Smell great from morning to night' }
          ].map((item, i) => (
            <div key={i} className="group">
              <div className="h-px w-8 bg-[var(--accent)] mx-auto mb-6 group-hover:w-20 transition-all duration-500"></div>
              <h3 className="font-serif text-2xl mb-2 tracking-tight text-[var(--foreground)]">{item.t}</h3>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MAIN SHOP SECTION */}
      <section id="shop" className="py-32 container mx-auto px-6 transition-colors duration-500">
        <div className="mb-20 text-center">
          <h2 className="font-serif text-5xl mb-6 tracking-tighter text-[var(--foreground)] uppercase">The Full Collection</h2>
          <p className="text-[10px] tracking-[0.5em] text-[var(--accent)] uppercase font-bold">Find your signature today</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {products.map((p) => <ProductCard key={p.id} {...p} />)}
        </div>
      </section>

      {/* 5. LAYERING TIPS SECTION - Uses dark background by default but respects theme vars */}
      <section className="py-24 bg-[var(--foreground)] text-[var(--background)] transition-colors duration-500">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-serif text-4xl mb-12 text-center text-[var(--accent)]">The Art of Layering</h2>
          <div className="grid md:grid-cols-2 gap-12 text-[var(--background)]">
            <div className="space-y-6">
              <div>
                <h4 className="font-bold uppercase text-xs tracking-widest mb-2 text-[var(--accent)]">01. Start Light</h4>
                <p className="opacity-70 text-sm font-light">Begin with mists and sprays before applying heavier perfumes and oils.</p>
              </div>
              <div>
                <h4 className="font-bold uppercase text-xs tracking-widest mb-2 text-[var(--accent)]">02. Match or Contrast</h4>
                <p className="opacity-70 text-sm font-light">Try to match fragrance families or contrast light and heavy notes strategically.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold uppercase text-xs tracking-widest mb-2 text-[var(--accent)]">03. Pulse Points</h4>
                <p className="opacity-70 text-sm font-light">Use lighter products on pulse points and heavier oils directly on the skin for longevity.</p>
              </div>
              <div>
                <h4 className="font-bold uppercase text-xs tracking-widest mb-2 text-[var(--accent)]">04. Individual Chemistry</h4>
                <p className="opacity-70 text-sm font-light">Always test combinations on your skin; scents change based on your unique chemistry.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE QUIZ PROMO */}
      <section className="bg-[var(--foreground)] py-32 relative overflow-hidden transition-colors duration-500">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Image src="/lifestyle-spritz.jpg" alt="bg" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-serif text-5xl text-[var(--background)] mb-8">Not sure where to start?</h2>
          <p className="text-[var(--background)] opacity-60 max-w-lg mx-auto mb-12 text-sm leading-loose uppercase tracking-[0.2em]">Take our 60-second scent quiz to find the fragrance that matches your personality and vibe.</p>
          <Link href="/quiz" className="inline-block bg-[var(--background)] text-[var(--foreground)] px-12 py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[var(--accent)] hover:text-white transition-all shadow-2xl">Take The Quiz</Link>
        </div>
      </section>

      {/* 7. SOCIAL PROOF / TESTIMONIALS */}
      <section className="py-32 bg-[var(--card)] transition-colors duration-500">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto border-l-4 border-[var(--accent)] pl-12">
            <span className="text-[4rem] font-serif leading-none text-[var(--accent)] opacity-20 block mb-[-20px]">“</span>
            <p className="text-2xl md:text-3xl font-serif italic text-[var(--foreground)] mb-8 leading-relaxed">
              "Every time I wear Midnight Oak to class, I get asked what it is. The longevity is actually insane for the price. Tee Scents is a campus game-changer."
            </p>
            <cite className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold not-italic">— Covenant University Student</cite>
          </div>
        </div>
      </section>
    </>
  );
}