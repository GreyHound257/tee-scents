"use client"; // Must be at the very top

import Image from 'next/image';
import { useCart } from '@/utils/cartStore'; // Add this import

export default function ProductCard(product: any) {
  const addToCart = useCart((state) => state.addToCart);

  return (
    <div className="bg-[var(--card)] p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-[var(--muted)] group">
      <div className="relative h-80 w-full overflow-hidden bg-[var(--muted)] mb-6">
        <Image 
          src={product.image} 
          alt={product.name} 
          fill 
          className="object-cover transition-transform group-hover:scale-105" 
        />
        <span className="absolute top-4 left-4 bg-[var(--background)]/90 px-3 py-1 text-[10px] uppercase tracking-widest text-[var(--accent)] font-bold">
          {product.vibe}
        </span>
      </div>
      <div className="flex justify-between items-baseline mb-6">
        <h3 className="font-serif text-2xl text-[var(--foreground)]">{product.name}</h3>
        <p className="text-[var(--accent)] font-bold">₦{product.price.toLocaleString()}</p>
      </div>
      <button 
        onClick={() => addToCart(product)}
        className="btn-luxury"
      >
        Add to Cart
      </button>
    </div>
  );
}