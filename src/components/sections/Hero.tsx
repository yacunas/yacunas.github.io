"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowDown, FileText, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import confetti from "canvas-confetti";
import { profile } from "@/lib/data";

const NAME = profile.name;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035, delayChildren: 0.15 } },
};
const letter: Variants = {
  hidden: { y: "0.5em", opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
};

function burst() {
  const colors = ["#22d3ee", "#6366f1", "#8b5cf6", "#e2e8f0"];
  confetti({ particleCount: 80, spread: 70, origin: { y: 0.5 }, colors, scalar: 0.9 });
}

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <motion.p
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-5 font-mono text-xs uppercase tracking-[0.35em] text-cyan-300/80 sm:text-sm"
      >
        {profile.title}
      </motion.p>

      <motion.h1
        variants={reduce ? undefined : container}
        initial={reduce ? false : "hidden"}
        animate="show"
        onClick={burst}
        aria-label={NAME}
        title="✨ click me"
        className="cursor-pointer select-none text-balance bg-gradient-to-br from-white via-slate-200 to-slate-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl md:text-8xl"
      >
        {NAME.split("").map((c, i) => (
          <motion.span
            key={i}
            variants={reduce ? undefined : letter}
            whileHover={reduce ? undefined : { y: -8, color: "#22d3ee", transition: { duration: 0.15 } }}
            className="inline-block"
          >
            {c === " " ? " " : c}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="mt-6 max-w-xl text-pretty text-base text-slate-300 sm:text-lg"
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.05 }}
        className="mt-9 flex flex-wrap items-center justify-center gap-3"
      >
        <a
          href="#contact"
          className="rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
        >
          Get in touch
        </a>
        <a
          href={profile.resumes.fullstack}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10"
        >
          <FileText size={16} /> Resume
        </a>
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-8 flex items-center gap-5 text-slate-400"
      >
        <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-cyan-300">
          <FaGithub size={22} />
        </a>
        <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-cyan-300">
          <FaLinkedin size={22} />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email" className="transition hover:text-cyan-300">
          <Mail size={22} />
        </a>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 text-slate-500"
      >
        <motion.span
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="inline-block"
        >
          <ArrowDown size={22} />
        </motion.span>
      </motion.a>
    </section>
  );
}
