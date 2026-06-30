"use client";

import { motion } from "motion/react";
import { GraduationCap, MapPin } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { profile, stats, education } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-cv mx-auto max-w-5xl scroll-mt-24 px-5 py-20 sm:px-6 sm:py-32">
      <Reveal>
        <p className="font-mono text-sm text-cyan-400">01 — About</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Engineer across the whole stack
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-slate-300">
          {profile.about}
        </p>
        <p className="mt-4 inline-flex items-center gap-2 text-sm text-slate-400">
          <MapPin size={16} className="text-cyan-400" /> {profile.location}
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center"
          >
            <div className="bg-gradient-to-r from-sky-300 to-cyan-200 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
              {s.value}
            </div>
            <div className="mt-1 text-xs text-slate-400 sm:text-sm">{s.label}</div>
          </motion.div>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <GraduationCap className="mt-0.5 shrink-0 text-cyan-400" />
          <div>
            <p className="font-semibold text-slate-100">{education.degree}</p>
            <p className="text-sm text-slate-400">{education.school}</p>
            <p className="mt-0.5 text-xs text-slate-500">
              {education.period} · {education.location}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
