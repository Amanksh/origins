"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const applications = [
  {
    title: "Indoor LED Display",
    slides: [
      {
        src: "/applications/indoor1.jpg",
        label: "Energy-Efficient LED Displays",
      },
      { src: "/applications/indoor2.jpg", label: "High Brightness & Clarity" },
      { src: "/applications/indoor3.jpg", label: "Seamless Integration" },
    ],
  },
  {
    title: "Outdoor LED Display",
    slides: [
      {
        src: "/applications/outdoor1.jpg",
        label: "Easy On-Site installation and maintenance",
      },
      { src: "/applications/outdoor2.jpg", label: "Weatherproof & Durable" },
      { src: "/applications/outdoor3.jpg", label: "Vivid Daylight Visibility" },
    ],
  },
  {
    title: "Rental LED Display",
    slides: [
      { src: "/applications/rental1.jpg", label: "No Limit To The Size" },
      { src: "/applications/rental2.jpg", label: "Flexible Event Solutions" },
      { src: "/applications/rental3.jpg", label: "Quick Setup & Dismantle" },
    ],
  },
];

const categories = [
  {
    key: "retail",
    label: "Retail",
    icon: "/categories/retail.svg",
    img: "/categories/retail.jpg",
  },
  {
    key: "corporate",
    label: "Corporate",
    icon: "/categories/corporate.svg",
    img: "/categories/corporate.jpg",
  },
  {
    key: "dooh",
    label: "DOOH",
    icon: "/categories/dooh.svg",
    img: "/categories/dooh.jpg",
  },
  {
    key: "entertainment",
    label: "Entertainment",
    icon: "/categories/entertainment.svg",
    img: "/categories/entertainment.jpg",
  },
  {
    key: "event",
    label: "Event",
    icon: "/categories/event.svg",
    img: "/categories/event.jpg",
  },
  {
    key: "hotel",
    label: "Hotel",
    icon: "/categories/hotel.svg",
    img: "/categories/hotel.jpg",
  },
];

export function ApplicationsSection() {
  const [appIndexes, setAppIndexes] = useState([0, 0, 0]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0].key);

  const handlePrev = (i: number) => {
    setAppIndexes((prev) => {
      const newIndexes = [...prev];
      newIndexes[i] =
        (newIndexes[i] - 1 + applications[i].slides.length) %
        applications[i].slides.length;
      return newIndexes;
    });
  };
  const handleNext = (i: number) => {
    setAppIndexes((prev) => {
      const newIndexes = [...prev];
      newIndexes[i] = (newIndexes[i] + 1) % applications[i].slides.length;
      return newIndexes;
    });
  };

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 text-white">
      <div className="container px-4 md:px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight uppercase">
            <span className="text-blue-500">APP</span>
            <span className="relative inline-block ml-1">
              LICATIONS
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-blue-500 rounded-full animate-pulse" />
            </span>
          </h2>
        </div>
        {/* Applications Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {applications.map((app, i) => (
            <div
              key={app.title}
              className="bg-white/5 rounded-2xl overflow-hidden shadow-xl border border-white/10 relative flex flex-col"
            >
              <div className="relative aspect-[4/3] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={appIndexes[i]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={app.slides[appIndexes[i]].src}
                      alt={app.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="text-white text-2xl md:text-2xl font-extrabold drop-shadow-lg text-center px-4">
                        {app.slides[appIndexes[i]].label}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
                {/* Arrows */}
                <button
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-blue-500/80 text-white rounded-full p-2 z-10 transition"
                  onClick={() => handlePrev(i)}
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-blue-500/80 text-white rounded-full p-2 z-10 transition"
                  onClick={() => handleNext(i)}
                  aria-label="Next"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
              <div className="bg-white text-black text-xl font-bold text-center py-4 border-t border-white/10">
                {app.title}
              </div>
            </div>
          ))}
        </div>
        {/* Categories Row */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`group flex flex-col items-center justify-center w-32 h-28 border-2 rounded-xl bg-black/80 border-white/30 hover:border-blue-500 transition-all duration-200 focus:outline-none ${
                selectedCategory === cat.key ? "border-blue-500 shadow-lg" : ""
              }`}
              onClick={() => setSelectedCategory(cat.key)}
            >
              <div className="flex items-center justify-center h-12">
                <Image
                  src={cat.icon}
                  alt={cat.label}
                  width={40}
                  height={40}
                  className="mb-2 group-hover:scale-110 transition-transform"
                />
              </div>
              <span className="text-white font-semibold text-base mt-2 group-hover:text-blue-500 transition-colors">
                {cat.label}
              </span>
            </button>
          ))}
        </div>
        {/* Category Image */}
        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            {categories.map((cat) =>
              cat.key === selectedCategory ? (
                <motion.div
                  key={cat.key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
                >
                  <Image
                    src={cat.img}
                    alt={cat.label}
                    width={500}
                    height={300}
                    className="object-cover w-[90vw] max-w-xl h-64"
                  />
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
