// components/Navbar.tsx
"use client";
import Link from 'next/link';
import Logo from './Logo';
import { useCart } from '@/utils/cartStore';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const cart = useCart((state) => state.cart);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--muted)] transition-colors duration-500">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        <Link href="/"><Logo className="w-12 h-12" /></Link>
        
        {/* Navigation Links */}
        <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em] font-bold">
          <Link href="/" className="hover:text-[var(--accent)]">Home</Link>
          <Link href="/#shop" className="hover:text-[var(--accent)]">Collection</Link>
          <Link href="/quiz" className="hover:text-[var(--accent)]">Scent Quiz</Link>
          <Link href="/about" className="hover:text-[var(--accent)]">About</Link>
        </div>

        {/* Action Group: Space issue fixed with gap-2 */}
        <div className="flex items-center gap-3"> {/* Gap reduced to 3 (12px) */}
          <ThemeToggle />
          <Link href="/cart" className="relative bg-[var(--foreground)] text-[var(--background)] px-5 py-2.5 text-[10px] uppercase tracking-widest rounded-sm font-bold shadow-sm hover:bg-[var(--accent)] transition-all">
            Cart ({cart.length})
          </Link>
        </div>
      </div>
    </nav>
  );
}