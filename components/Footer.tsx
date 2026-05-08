import Logo from './Logo';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2D2926] text-white pt-20 pb-10">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 border-b border-white/5 pb-16">
        <div className="col-span-2">
          <Logo className="w-16 h-16 invert mb-6" />
          <p className="text-gray-400 text-sm max-w-sm leading-loose font-light">
            Bringing luxury fragrance curation to campus. We believe your scent is your signature. Hand-picked, student-tested, and uniquely yours.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-6 text-[#8C7355]">Explore</h4>
          <ul className="text-[10px] uppercase tracking-widest space-y-4 text-gray-500">
            <li><Link href="/#shop" className="hover:text-white">Shop All</Link></li>
            <li><Link href="/quiz" className="hover:text-white">Scent Quiz</Link></li>
            <li><Link href="/about" className="hover:text-white">Our Story</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-6 text-[#8C7355]">Contact</h4>
          <ul className="text-[10px] uppercase tracking-widest space-y-4 text-gray-500">
            <li><a href="https://wa.me/2349012964699" className="hover:text-white">WhatsApp Us</a></li>
            <li><p>@TeeScents_</p></li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-10 text-[9px] uppercase tracking-[0.4em] text-gray-600">
        © 2026 Tee Scents • Developed by EnnyCode
      </p>
    </footer>
  );
}