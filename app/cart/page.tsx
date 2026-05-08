"use client";

import { useCart } from '@/utils/cartStore';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  
  // Calculate the total price
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;

    const phoneNumber = "2349012964699";
    const itemsList = cart.map((item, index) => `${index + 1}. ${item.name} (₦${item.price.toLocaleString()})`).join('\n');
    
    const message = `Hi Tee Scents! 👋 I would like to place an order for the following:\n\n${itemsList}\n\nTotal: ₦${total.toLocaleString()}\n\nPlease let me know the next steps for payment and delivery!`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F9F6F2] pt-32 pb-20">
      <div className="container mx-auto px-6">
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-[#2D2926]">Your Selection</h1>
          <div className="h-1 w-20 bg-[#8C7355] mt-4"></div>
        </header>

        {cart.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white shadow-sm rounded-sm"
          >
            <p className="text-[#8C7355] uppercase tracking-[0.3em] text-xs mb-8">Your cart is currently empty</p>
            <Link href="/#shop" className="inline-block bg-[#2D2926] text-white px-10 py-4 text-[10px] uppercase tracking-widest hover:bg-[#8C7355] transition-all">
              Discover Scents
            </Link>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* List of Items */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {cart.map((item, index) => (
                  <motion.div 
                    // FIX: Using index + id to ensure unique keys even for duplicate products
                    key={`${item.id}-${index}`} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex gap-6 items-center bg-white p-4 md:p-6 shadow-sm group"
                  >
                    <div className="relative h-24 w-20 flex-shrink-0 bg-[#E5E0DA]">
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <span className="text-[9px] uppercase tracking-widest text-[#8C7355] font-bold">{item.vibe}</span>
                      <h3 className="font-serif text-xl text-[#2D2926] mt-1">{item.name}</h3>
                      <p className="text-[#2D2926] font-semibold mt-1">₦{item.price.toLocaleString()}</p>
                    </div>

                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-[10px] uppercase tracking-tighter text-gray-300 hover:text-red-400 transition-colors"
                    >
                      Remove
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>

              <button 
                onClick={clearCart}
                className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-[#2D2926] pt-4 transition-colors"
              >
                Clear All Items
              </button>
            </div>

            {/* Order Summary Card */}
            <aside className="bg-white p-8 shadow-lg border-t-4 border-[#8C7355] sticky top-32">
              <h2 className="font-serif text-2xl mb-8">Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="text-[#2D2926]">₦{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Delivery</span>
                  <span className="text-[#8C7355] text-[10px] uppercase font-bold">Calculated at Checkout</span>
                </div>
                <div className="h-px bg-gray-100 my-4"></div>
                <div className="flex justify-between text-xl font-bold">
                  <span className="font-serif">Total</span>
                  <span className="text-[#2D2926]">₦{total.toLocaleString()}</span>
                </div>
              </div>

              <button 
                onClick={handleCheckout}
                className="w-full bg-[#2D2926] text-white py-5 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#8C7355] transition-all shadow-md active:scale-[0.98]"
              >
                Checkout via WhatsApp
              </button>
              
              <p className="text-[9px] text-center text-gray-400 mt-6 leading-relaxed uppercase tracking-widest">
                Safe & Secure Personal Shopping Experience
              </p>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}