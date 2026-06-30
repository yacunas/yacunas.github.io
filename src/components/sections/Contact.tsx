"use client";

import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="section-cv mx-auto max-w-3xl scroll-mt-24 px-5 py-20 text-center sm:px-6 sm:py-32">
      <Reveal>
        <p className="font-mono text-sm text-amber-400">04 — Contact</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-50 sm:text-5xl">
          Let’s build something
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-slate-300">
          I’m open to engineering roles and interesting projects. The fastest way to reach me is email —
          I usually reply within a day.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/25 transition hover:brightness-110"
        >
          <Mail size={18} /> {profile.email}
        </a>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10">
            <FaGithub size={16} /> GitHub
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10">
            <FaLinkedin size={16} /> LinkedIn
          </a>
          <a href={profile.resumes.backend} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10">
            <FileText size={16} /> Backend CV
          </a>
        </div>
      </Reveal>

      <footer className="mt-24 border-t border-white/10 pt-8 text-xs text-slate-500">
        <p>Designed & built by {profile.name} · in space, with Next.js + Three.js.</p>
      </footer>
    </section>
  );
}
