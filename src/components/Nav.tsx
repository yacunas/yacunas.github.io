"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { navLinks, profile } from "@/lib/data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-white/10 bg-[#05060f]/70 backdrop-blur-md" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight text-slate-100">
          <span className="text-cyan-400">{"<"}</span>RJY<span className="text-cyan-400">{" />"}</span>
        </a>
        <ul className="hidden items-center gap-7 text-sm text-slate-300 sm:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-cyan-300">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.resumes.fullstack}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1.5 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
        >
          Resume
        </a>
      </nav>
    </motion.header>
  );
}
