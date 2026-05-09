"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    // Changed bg-[#F9F6F2] to var(--background)
    <div className="min-h-screen bg-[var(--background)] pt-32 pb-20 transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <header className="max-w-4xl mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] tracking-[0.4em] text-[var(--accent)] uppercase font-bold mb-4 block"
          >
            The Story Behind The Scent
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-[var(--foreground)] leading-tight"
          >
            Luxury is a <span className="italic font-serif">Feeling</span>, Not a Price Tag.
          </motion.h1>
        </header>

        {/* Story Grid */}
        <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] w-full bg-[var(--muted)] rounded-sm overflow-hidden shadow-sm transition-colors duration-500"
          >
            <Image 
              src="/lifestyle-spritz.jpg" 
              alt="Founder Journey" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-serif text-3xl text-[var(--foreground)]">The Tee Scents Mission</h2>
            <div className="space-y-6 text-[var(--foreground)] opacity-80 leading-relaxed font-light text-sm md:text-base">
              <p>
                Tee Scents was born out of a simple observation on campus: fragrance has the power to transform a mood, boost confidence, and leave an indelible mark on those around us.
              </p>
              <p>
                As a student, I realized that high-quality, sophisticated scents were often out of reach. I set out to bridge that gap. By curating the finest, longest-lasting fragrances and bringing them directly to your doorstep, we've made luxury an everyday reality for the modern student.
              </p>
              <p className="font-serif italic text-xl text-[var(--accent)] pt-6 border-t border-[var(--muted)] transition-colors duration-500">
                &quot;We don&apos;t just sell perfumes; we provide the invisible accessory that completes your identity.&quot;
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <section className="grid md:grid-cols-3 gap-12 py-20 border-y border-[var(--muted)] transition-colors duration-500">
          <div className="text-center px-4">
            <h4 className="font-serif text-xl mb-3 text-[var(--foreground)] font-bold">Premium Curation</h4>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Only the best notes make our cut.</p>
          </div>
          <div className="text-center px-4 md:border-x border-[var(--muted)] transition-colors duration-500">
            <h4 className="font-serif text-xl mb-3 text-[var(--foreground)] font-bold">Campus First</h4>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Designed specifically for our lifestyle.</p>
          </div>
          <div className="text-center px-4">
            <h4 className="font-serif text-xl mb-3 text-[var(--foreground)] font-bold">Unmatched Sillage</h4>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Scents that linger long after you leave.</p>
          </div>
        </section>

      </div>
    </div>
  );
}