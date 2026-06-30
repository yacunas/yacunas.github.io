"use client";

import { motion } from "motion/react";
import Reveal from "@/components/ui/Reveal";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-cv mx-auto max-w-5xl scroll-mt-24 px-5 py-20 sm:px-6 sm:py-32">
      <Reveal>
        <p className="font-mono text-sm text-cyan-400">02 — Experience</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          A trajectory through the stack
        </h2>
      </Reveal>

      <div className="relative mt-14">
        {/* timeline spine */}
        <div className="absolute left-3 top-2 hidden h-full w-px bg-gradient-to-b from-sky-400/60 via-blue-500/25 to-transparent sm:block" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company + exp.period} delay={i * 0.05}>
              <div className="relative sm:pl-12">
                {/* node */}
                <span className="absolute left-1 top-2 hidden sm:block">
                  <span className="relative flex h-4 w-4 items-center justify-center">
                    {exp.current && (
                      <motion.span
                        className="absolute inline-flex h-full w-full rounded-full bg-cyan-400/60"
                        animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                        transition={{ repeat: Infinity, duration: 1.8 }}
                      />
                    )}
                    <span className="relative h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/15" />
                  </span>
                </span>

                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-sky-400/30 hover:bg-white/[0.06] sm:p-6"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold text-slate-50">
                      {exp.role} <span className="text-cyan-300">· {exp.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-slate-400">{exp.period}</span>
                  </div>
                  <p className="mt-0.5 text-xs text-slate-500">{exp.location}</p>
                  <p className="mt-3 text-sm text-slate-300">{exp.blurb}</p>

                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5 text-sm text-slate-400">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/70" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
