"use client";
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// THE DATA DEFINITIONS 
const questions = [
  {
    id: 1,
    question: "How do you want to feel today?",
    options: [
      { text: "Invigorated and ready to go", type: "fresh" },
      { text: "Soft, romantic, and sweet", type: "romantic" },
      { text: "Deep, mysterious, and bold", type: "mysterious" },
      { text: "Calm, cozy, and relaxed", type: "cozy" },
      { text: "Empowered and confident", type: "confident" },
      { text: "Wild and adventurous", type: "wild" },
    ],
  },
  {
    id: 2,
    question: "Pick a morning setting:",
    options: [
      { text: "Sunrise at a citrus grove", type: "fresh" },
      { text: "Breakfast in a rose garden", type: "romantic" },
      { text: "Foggy morning in the woods", type: "mysterious" },
      { text: "Curled up in cashmere blankets", type: "cozy" },
      { text: "Sharp suit and a fresh apple", type: "confident" },
      { text: "A hike through fresh grass", type: "wild" },
    ],
  },
  {
    id: 3,
    question: "Which 'Note' speaks to your soul?",
    options: [
      { text: "Zesty Lemon & Mint", type: "fresh" },
      { text: "Vanilla & Sandalwood", type: "romantic" },
      { text: "Spicy Patchouli & Oud", type: "mysterious" },
      { text: "Coconut & Sweet Almond", type: "cozy" },
      { text: "Bold Tuberose & Bergamot", type: "confident" },
      { text: "Sea Salt & Green Apple", type: "wild" },
    ],
  },
];

const vibesData: any = {
  fresh: {
    title: "Fresh & Energetic",
    perfume: "Citrus-based (Lemon/Bergamot)",
    spray: "Mint or Green Tea",
    mist: "Light Floral (Jasmine)",
    oil: "Eucalyptus",
    description: "Citrus and mint awaken the senses, while floral notes provide a refreshing balance.",
    image: "/fresh-floral.jpg"
  },
  romantic: {
    title: "Romantic & Soft",
    perfume: "Vanilla or Sandalwood",
    spray: "Rose or Lavender",
    mist: "Soft Musky Mist",
    oil: "Honey or Amber",
    description: "Warm, sweet notes create a comforting backdrop with a romantic floral touch.",
    image: "/lifestyle-spritz.jpg"
  },
  mysterious: {
    title: "Mysterious & Alluring",
    perfume: "Spicy (Patchouli/Pepper)",
    spray: "Dark Berry",
    mist: "Woody (Cedarwood)",
    oil: "Oud or Incense",
    description: "Spicy and woody notes add complexity. Dark berry enhances the richness.",
    image: "/warm-woody.jpg"
  },
  cozy: {
    title: "Relaxed & Cozy",
    perfume: "Light Musk or Soft Floral",
    spray: "Chamomile or Vanilla",
    mist: "Coconut or Cashmere",
    oil: "Neroli or Sweet Almond",
    description: "Soft florals and cozy scents create a calming, nostalgic atmosphere.",
    image: "/hero-perfume.jpg"
  },
  confident: {
    title: "Confident & Empowered",
    perfume: "Bold Floral (Tuberose)",
    spray: "Crisp Apple or Pear",
    mist: "Spicy Cinnamon",
    oil: "Bergamot or Blackcurrant",
    description: "Bold florals convey strength, while crisp fruit notes add dynamic energy.",
    image: "/lifestyle-spritz.jpg"
  },
  wild: {
    title: "Adventurous & Wild",
    perfume: "Sea Salt or Oceanic",
    spray: "Green Apple or Cucumber",
    mist: "Fresh Grass or Herbal",
    oil: "Bergamot or Mint",
    description: "Oceanic and fresh scents evoke the outdoors and a feeling of adventure.",
    image: "/fresh-floral.jpg"
  }
};

export default function ScentQuiz() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<any>({});
  const [result, setResult] = useState<string | null>(null);

  const handleSelect = (type: string) => {
    const newScores = { ...scores, [type]: (scores[type] || 0) + 1 };
    setScores(newScores);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      const winner = Object.keys(newScores).reduce((a, b) => 
        (newScores[a] || 0) > (newScores[b] || 0) ? a : b
      );
      setResult(winner);
    }
  };

  if (result) {
    const v = vibesData[result];
    return (
      <div className="min-h-screen bg-[var(--background)] pt-32 pb-20 px-6 flex items-center justify-center transition-colors duration-500">
        <motion.div 
          initial={{opacity:0, scale:0.9}} 
          animate={{opacity:1, scale:1}} 
          className="max-w-2xl bg-[var(--card)] p-8 md:p-12 shadow-xl rounded-sm text-center border border-[var(--muted)] transition-colors duration-500"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--accent)] font-bold">Your Discovery</span>
          <h1 className="font-serif text-4xl md:text-5xl my-6 text-[var(--foreground)]">{v.title}</h1>
          
          <div className="relative h-64 w-full mb-8">
            <Image src={v.image} alt={v.title} fill className="object-cover rounded-sm" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left mb-8 border-y border-[var(--muted)] py-8 transition-colors duration-500">
            <div>
              <p className="text-[10px] uppercase text-gray-400 mb-2 font-bold">Recommended Layering:</p>
              <ul className="text-sm space-y-2 text-[var(--foreground)]">
                <li><strong className="text-[var(--accent)]">Perfume:</strong> {v.perfume}</li>
                <li><strong className="text-[var(--accent)]">Body Spray:</strong> {v.spray}</li>
                <li><strong className="text-[var(--accent)]">Body Mist:</strong> {v.mist}</li>
                <li><strong className="text-[var(--accent)]">Oil:</strong> {v.oil}</li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] uppercase text-gray-400 mb-2 font-bold">Why it works:</p>
              <p className="text-sm italic text-[var(--foreground)] opacity-70 leading-relaxed">{v.description}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Link href="/#shop" className="btn-luxury">Shop This Collection</Link>
            <button 
              onClick={() => window.location.reload()} 
              className="text-[10px] uppercase tracking-widest text-gray-400 underline decoration-[var(--muted)] hover:text-[var(--foreground)] transition-all"
            >
              Retake Quiz
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)] pt-32 px-6 flex items-center justify-center transition-colors duration-500">
      <div className="max-w-xl w-full">
        <div className="text-center mb-12">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--accent)] mb-2 font-bold">Discovery Quiz</p>
          <h2 className="font-serif text-4xl text-[var(--foreground)]">
            {questions[step].question}
          </h2>
        </div>
        <div className="grid gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              className="grid gap-4"
            >
              {questions[step].options.map((opt, i) => (
                <button 
                  key={i} 
                  onClick={() => handleSelect(opt.type)} 
                  className="w-full bg-[var(--card)] p-6 text-left border border-[var(--muted)] hover:border-[var(--accent)] transition-all group flex justify-between items-center shadow-sm"
                >
                  <span className="text-sm uppercase tracking-widest text-[var(--foreground)] font-medium">
                    {opt.text}
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transition-all text-[var(--accent)] translate-x-[-10px] group-hover:translate-x-0">
                    →
                  </span>
                </button>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}