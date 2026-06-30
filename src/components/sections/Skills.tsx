"use client";

import type { ComponentType } from "react";
import { motion } from "motion/react";
import {
  SiTypescript, SiJavascript, SiPython, SiNodedotjs, SiNestjs, SiExpress,
  SiFastapi, SiGraphql, SiReact, SiNextdotjs, SiTailwindcss, SiShadcnui,
  SiPostgresql, SiMysql, SiMongodb, SiScylladb, SiRedis, SiApachekafka,
  SiRabbitmq, SiDocker, SiKubernetes, SiAnthropic, SiGooglegemini,
  SiJest, SiVitest, SiK6, SiGithubactions,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { Code2, Server, MonitorSmartphone, Database, Cloud, Sparkles, Workflow, FlaskConical } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { skillGroups } from "@/lib/data";

type IconType = ComponentType<{ className?: string; size?: number }>;

const skillIcons: Record<string, IconType> = {
  TypeScript: SiTypescript, JavaScript: SiJavascript, Python: SiPython,
  "Node.js": SiNodedotjs, NestJS: SiNestjs, Express: SiExpress, FastAPI: SiFastapi,
  GraphQL: SiGraphql, "React.js": SiReact, "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss, "shadcn/ui": SiShadcnui, PostgreSQL: SiPostgresql,
  MySQL: SiMysql, MongoDB: SiMongodb, ScyllaDB: SiScylladb, Redis: SiRedis,
  Kafka: SiApachekafka, RabbitMQ: SiRabbitmq, Docker: SiDocker, Kubernetes: SiKubernetes,
  AWS: FaAws, "GitHub Actions": SiGithubactions, Anthropic: SiAnthropic,
  "Google Gemini": SiGooglegemini, Jest: SiJest, Vitest: SiVitest, K6: SiK6,
};

const categoryIcons: Record<string, IconType> = {
  Languages: Code2, Backend: Server, Frontend: MonitorSmartphone, Databases: Database,
  Infrastructure: Cloud, "AI & LLM": Sparkles, Practices: Workflow, Testing: FlaskConical,
};

export default function Skills() {
  return (
    <section id="skills" className="section-cv mx-auto max-w-5xl scroll-mt-24 px-5 py-20 sm:px-6 sm:py-32">
      <Reveal>
        <p className="font-mono text-sm text-cyan-400">03 — Skills</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          The toolkit
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, gi) => {
          const Cat = categoryIcons[group.category] ?? Sparkles;
          return (
            <Reveal key={group.category} delay={gi * 0.04}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                <div className="mb-4 flex items-center gap-2.5">
                  <Cat size={18} className="text-cyan-400" />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const Icon = skillIcons[item];
                    return (
                      <motion.span
                        key={item}
                        whileHover={{ y: -3, scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 18 }}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-slate-200 transition-colors hover:border-cyan-400/40 hover:text-cyan-200"
                      >
                        {Icon ? <Icon size={14} /> : <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/70" />}
                        {item}
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
