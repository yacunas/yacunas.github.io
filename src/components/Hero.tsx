"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import confetti from "canvas-confetti";

const NAME = "Ronnel James Yacunas";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.2 } },
};

const letter: Variants = {
  hidden: { y: "0.6em", opacity: 0, rotate: -8 },
  show: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 320, damping: 18 },
  },
};

function burst() {
  const colors = ["#a78bfa", "#f472b6", "#38bdf8", "#facc15"];
  confetti({ particleCount: 90, spread: 75, origin: { y: 0.55 }, colors });
  confetti({ particleCount: 50, angle: 60, spread: 55, origin: { x: 0 }, colors });
  confetti({ particleCount: 50, angle: 120, spread: 55, origin: { x: 1 }, colors });
}

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.p
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-violet-300/80"
      >
        Full-Stack Engineer
      </motion.p>

      <motion.h1
        variants={reduce ? undefined : container}
        initial={reduce ? false : "hidden"}
        animate="show"
        onClick={burst}
        aria-label={NAME}
        title="Click me ✨"
        className="cursor-pointer select-none bg-gradient-to-r from-violet-400 via-pink-400 to-sky-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl md:text-8xl"
      >
        {NAME.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={reduce ? undefined : letter}
            whileHover={reduce ? undefined : { y: -8, scale: 1.1 }}
            className="inline-block"
          >
            {char === " " ? " " : char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="mt-6 text-sm text-slate-400"
      >
        (psst — click my name)
      </motion.p>
    </section>
  );
}
