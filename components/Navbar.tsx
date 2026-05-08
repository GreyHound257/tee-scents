"use client";
import Link from 'next/link';
import Logo from './Logo';
import { useCart } from '@/utils/cartStore';

export default function Navbar() {
  const cart = useCart((state) => state.cart);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        <Link href="/"><Logo className="w-12 h-12" /></Link>
        <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em] font-bold">
          <Link href="/" className="hover:text-[#8C7355]">Home</Link>
          <Link href="/#shop" className="hover:text-[#8C7355]">Collection</Link>
          <Link href="/quiz" className="hover:text-[#8C7355]">Scent Quiz</Link>
          <Link href="/about" className="hover:text-[#8C7355]">About</Link>
        </div>
        <Link href="/cart" className="bg-[#2D2926] text-white px-4 py-2 text-[10px] uppercase tracking-widest rounded-sm">
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
}