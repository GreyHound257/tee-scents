"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { getWhatsAppLink } from "@/utils/whatsapp";

const questions = [
  {
    id: 1,
    question: "How do you start your ideal morning?",
    options: [
      { text: "A cold shower and a fresh green smoothie", type: "fresh" },
      { text: "Curled up with a book and coffee", type: "woody" },
      { text: "Walking through a garden in bloom", type: "floral" },
    ],
  },
  {
    id: 2,
    question: "Choose a vibe for your evening:",
    options: [
      { text: "Sharp, clean, and professional", type: "fresh" },
      { text: "Mysterious, warm, and cozy", type: "woody" },
      { text: "Sweet, romantic, and playful", type: "floral" },
    ],
  },
  {
    id: 3,
    question: "Which setting calls to you?",
    options: [
      { text: "The beach at sunrise", type: "fresh" },
      { text: "A cabin in the rain", type: "woody" },
      { text: "A high-end flower shop", type: "floral" },
    ],
  },
];

type PaymentMethod = "Transfer" | "POD";

export default function ScentQuiz() {
  const [currentStep, setCurrentStep] = useState(0);

  const [scores, setScores] = useState({
    fresh: 0,
    woody: 0,
    floral: 0,
  });

  const [result, setResult] = useState<string | null>(null);

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("Transfer");

  const handleAnswer = (type: string) => {
    const newScores = {
      ...scores,
      [type]: scores[type as keyof typeof scores] + 1,
    };

    setScores(newScores);

    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      const winner = Object.keys(newScores).reduce((a, b) =>
        newScores[a as keyof typeof newScores] >
        newScores[b as keyof typeof newScores]
          ? a
          : b
      );

      setResult(winner);
    }
  };

  // RESULT DATA
  const recommendations: any = {
    fresh: {
      name: "Floral Bliss",
      desc: "You love crisp, clean energy.",
      img: "/fresh-floral.jpg",
    },
    woody: {
      name: "Midnight Oak",
      desc: "You gravitate towards depth and warmth.",
      img: "/warm-woody.jpg",
    },
    floral: {
      name: "Floral Bliss",
      desc: "You are all about elegance and bloom.",
      img: "/fresh-floral.jpg",
    },
  };

  if (result) {
    const final = recommendations[result];

    return (
      <div className="min-h-screen bg-[#F9F6F2] flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center"
        >
          <h2 className="font-serif text-3xl mb-2 text-[#2D2926]">
            Your Match: {final.name}
          </h2>

          <p className="text-[#8C7355] mb-6">{final.desc}</p>

          <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={final.img}
              alt={final.name}
              fill
              className="object-cover"
            />
          </div>

          {/* PAYMENT OPTIONS */}
          <div className="mb-6">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#8C7355] mb-4">
              Select Payment Method
            </p>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setPaymentMethod("Transfer")}
                className={`py-3 border text-xs uppercase tracking-wider transition-all ${
                  paymentMethod === "Transfer"
                    ? "bg-[#2D2926] text-white border-[#2D2926]"
                    : "bg-white text-[#2D2926] border-gray-300"
                }`}
              >
                Bank Transfer
              </button>

              <button
                onClick={() => setPaymentMethod("POD")}
                className={`py-3 border text-xs uppercase tracking-wider transition-all ${
                  paymentMethod === "POD"
                    ? "bg-[#2D2926] text-white border-[#2D2926]"
                    : "bg-white text-[#2D2926] border-gray-300"
                }`}
              >
                Pay on Delivery
              </button>
            </div>
          </div>

          {/* WHATSAPP CTA */}
          <a
            href={getWhatsAppLink(final.name, paymentMethod)}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 bg-[#2D2926] text-white uppercase tracking-widest text-xs hover:bg-[#8C7355] transition-colors"
          >
            Claim Your Scent
          </a>

          <button
            onClick={() => window.location.reload()}
            className="mt-4 text-[10px] text-gray-400 uppercase underline"
          >
            Retake Quiz
          </button>
        </motion.div>
      </div>
    );
  }

  // QUIZ UI
  return (
    <div className="min-h-screen bg-[#F9F6F2] flex items-center justify-center p-6">
      <div className="max-w-xl w-full">
        {/* PROGRESS */}
        <div className="mb-12 text-center">
          <span className="text-[10px] tracking-[0.3em] text-[#8C7355] uppercase">
            Question {currentStep + 1} of {questions.length}
          </span>
        </div>

        {/* QUESTION ANIMATION */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            <h2 className="font-serif text-4xl text-[#2D2926] text-center mb-10">
              {questions[currentStep].question}
            </h2>

            <div className="grid gap-4">
              {questions[currentStep].options.map((opt, i) => (
                <motion.button
                  key={i}
                  onClick={() => handleAnswer(opt.type)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-6 bg-white border hover:border-[#8C7355] text-left transition-all flex justify-between items-center"
                >
                  <span className="text-[#5E5852] font-medium">
                    {opt.text}
                  </span>

                  <span className="opacity-0 group-hover:opacity-100 text-[#8C7355]">
                    →
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}