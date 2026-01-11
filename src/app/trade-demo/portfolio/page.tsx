"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/trade-demo/ui/badge";

const projects = [
  {
    id: 1,
    title: "Modern Kitchen Renovation",
    category: "Kitchen",
    type: "image",
    src: "https://images.unsplash.com/photo-1682888813913-e13f18692019?q=80&w=1170&auto=format&fit=crop",
    tags: ["Cabinetry", "Lighting", "Flooring"],
  },
  {
    id: 2,
    title: "EV Charger Installation",
    category: "Commercial",
    type: "video",
    src: "/videos/ev-charger-video.mp4",
    tags: ["EV Charger", "Green Energy", "Commercial"],
  },
  {
    id: 3,
    title: "Commercial Lighting Setup",
    category: "Commercial",
    type: "video",
    src: "/videos/commercial-light-setup.mp4",
    tags: ["Lighting", "Electrical", "Office Setup"],
  },
  {
    id: 4,
    title: "Master Bathroom Spa",
    category: "Bathroom",
    type: "image",
    src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2070&auto=format&fit=crop",
    tags: ["Tile Work", "Plumbing", "Design"],
  },
  {
    id: 5,
    title: "Outdoor Living Space",
    category: "Exterior",
    type: "image",
    src: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=2070&auto=format&fit=crop",
    tags: ["Decking", "Landscaping", "Patio"],
  },
  {
    id: 6,
    title: "Corporate Office Remodel",
    category: "Commercial",
    type: "image",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    tags: ["Partitions", "Electrical", "HVAC"],
  },
  {
    id: 7,
    title: "Luxury Living Room",
    category: "Interior",
    type: "image",
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
    tags: ["Painting", "Molding", "Flooring"],
  },
  {
    id: 8,
    title: "Custom Staircase",
    category: "Carpentry",
    type: "image",
    src: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=1976&auto=format&fit=crop",
    tags: ["Woodwork", "Railing", "Finish"],
  },
];

const categories = ["All", "Kitchen", "Bathroom", "Interior", "Exterior", "Commercial"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [index, setIndex] = useState(0);

  const filtered = projects.filter((p) => filter === "All" || p.category === filter);

  const total = filtered.length;

  // Auto slide
  useEffect(() => {
    if (total <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 5500);
    return () => clearInterval(id);
  }, [total]);

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  return (
    <section className="min-h-screen bg-[#f8f9fb] pb-24">
      {/* Header */}
      <div className="bg-[#1a1c1e] py-24 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
        <h1 className="text-5xl font-['Nunito_Sans'] font-bold text-white mb-6 relative z-10">
          Our Work
        </h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto relative z-10">
          Browse our portfolio of completed projects.
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-3 mt-12 flex-wrap px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat);
              setIndex(0);
            }}
            className={`px-6 py-2 rounded-full text-sm font-bold uppercase transition ${
              filter === cat
                ? "bg-[#d4915a] text-[#1a1c1e] shadow-lg scale-105"
                : "bg-white text-gray-500 border border-gray-200 hover:border-[#d4915a]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative mt-20 px-4">
        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={filtered[index]?.id}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative aspect-[16/9]"
            >
              {filtered[index]?.type === "image" ? (
                <img
                  src={filtered[index]?.src}
                  alt={filtered[index]?.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <video
                  src={filtered[index]?.src}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-white text-2xl font-['Nunito_Sans'] font-bold mb-3">
                  {filtered[index]?.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {filtered[index]?.tags.map((tag) => (
                    <Badge key={tag} className="bg-[#d4915a]/90 text-[#1a1c1e] font-semibold">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          {total > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow"
              >
                <ArrowLeft className="text-[#1a1c1e]" />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow"
              >
                <ArrowRight className="text-[#1a1c1e]" />
              </button>
            </>
          )}
        </div>

        {/* Dots */}
        {total > 1 && (
          <div className="flex justify-center gap-3 mt-6">
            {filtered.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === index ? "bg-[#d4915a] scale-110" : "bg-gray-400 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
