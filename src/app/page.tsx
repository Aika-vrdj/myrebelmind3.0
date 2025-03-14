"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const enneagramTypes = [
  { number: 1, name: "The Crusader", color: "bg-[#1d1d1b]" },
  { number: 2, name: "The Guardian", color: "bg-[#1d1d1b]" },
  { number: 3, name: "The Trailblazer", color: "bg-[#1d1d1b]" },
  { number: 4, name: "The Visionary", color: "bg-[#1d1d1b]" },
  { number: 5, name: "The Strategist", color: "bg-[#1d1d1b]" },
  { number: 6, name: "The Sentinel", color: "bg-[#1d1d1b]" },
  { number: 7, name: "The Maverick", color: "bg-[#1d1d1b]" },
  { number: 8, name: "The Warlord", color: "bg-[#1d1d1b]" },
  { number: 9, name: "The Diplomat", color: "bg-[#1d1d1b]" },
];

// Descriptions for each personality type
const personalityDescriptions = {
  "The Crusader": "The moral warrior who fights for justice and structure.",
  "The Guardian": "The protector who uplifts others in the fight.",
  "The Trailblazer": "The charismatic leader who thrives on success and recognition.",
  "The Visionary": "The creative soul who rebels against the ordinary.",
  "The Strategist": "The thinker who gathers intelligence to outmaneuver opponents.",
  "The Sentinel": "The steadfast rebel who holds the group together.",
  "The Maverick": "The thrill-seeking rebel who craves adventure and freedom.",
  "The Warlord": "The fearless warrior who commands respect and power.",
  "The Diplomat": "The calm, unifying force that keeps the rebellion from falling apart.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      <main className="mx-auto max-w-7xl px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Link
            href="/quiz"
            className="inline-block mb-8 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Find your Rebel Mind Quiz
          </Link>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            The Rebel Mind
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlock your true nature and embrace the rebellion within. Find your Rebel Archetype and discover your path to power, strategy, and freedom.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-6">
          {enneagramTypes.map((type, index) => (
            <motion.div
              key={type.number}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/type/${type.number}`}>
                <div className={`${type.color} rounded-lg p-6 h-full transition-transform hover:scale-105 cursor-pointer`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-bold">{type.number}</span>
                    <ArrowRight className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">{type.name}</h2>
                  <p className="text-sm opacity-90">
                    {personalityDescriptions[type.name]}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
