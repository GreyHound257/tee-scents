"use client";
import Image from 'next/image';
import { useCart, Product } from '@/utils/cartStore';

export default function ProductCard(product: Product) {
  const addToCart = useCart((state) => state.addToCart);

  return (
    <div className="bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-500">
      <div className="relative h-80 w-full overflow-hidden bg-[#E5E0DA] mb-6">
        <Image src={product.image} alt={product.name} fill className="object-cover transition-transform group-hover:scale-105" />
        <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[10px] uppercase tracking-widest text-[#8C7355] font-bold">{product.vibe}</span>
      </div>
      <div className="flex justify-between items-baseline mb-6">
        <h3 className="font-serif text-2xl">{product.name}</h3>
        <p className="text-[#8C7355] font-bold">₦{product.price.toLocaleString()}</p>
      </div>
      <button 
        onClick={() => addToCart(product)}
        className="w-full bg-[#2D2926] text-white py-4 text-[10px] uppercase tracking-widest hover:bg-[#8C7355] transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
}