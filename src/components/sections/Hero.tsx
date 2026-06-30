"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, FileText, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import PressureText from "@/components/sections/PressureText";
import { profile } from "@/lib/data";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 text-center sm:px-6"
    >
      <div className="relative z-10 flex flex-col items-center">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-amber-300/80 sm:mb-5 sm:text-sm sm:tracking-[0.35em]"
        >
          {profile.title}
        </motion.p>

        {/* dark scrim for legibility over the disk */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-56 w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(ellipse,rgba(3,3,8,0.82),transparent_70%)]" />

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 22, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <PressureText
            text={profile.name}
            className="select-none text-balance text-[clamp(2.4rem,9vw,7rem)] font-extrabold leading-[1.05] tracking-tight drop-shadow-[0_0_28px_rgba(249,115,22,0.3)]"
          />
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-5 max-w-md text-pretty text-sm text-slate-300 sm:mt-6 sm:max-w-xl sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/25 transition hover:brightness-110"
          >
            Get in touch
          </a>
          <a
            href={profile.resumes.fullstack}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-amber-400/40 hover:bg-white/10"
          >
            <FileText size={16} /> Resume
          </a>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-7 flex items-center gap-5 text-slate-400"
        >
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-amber-300">
            <FaGithub size={22} />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-amber-300">
            <FaLinkedin size={22} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="transition hover:text-amber-300">
            <Mail size={22} />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-7 z-10 text-slate-500"
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
