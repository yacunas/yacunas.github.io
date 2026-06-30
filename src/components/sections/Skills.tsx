"use client";

import type { ReactNode } from "react";
import {
  SiTypescript, SiJavascript, SiPython, SiNodedotjs, SiNestjs, SiExpress,
  SiFastapi, SiGraphql, SiReact, SiNextdotjs, SiTailwindcss, SiShadcnui,
  SiPostgresql, SiMysql, SiMongodb, SiScylladb, SiRedis, SiApachekafka,
  SiRabbitmq, SiDocker, SiKubernetes, SiAnthropic, SiGooglegemini,
  SiJest, SiVitest, SiK6, SiGithubactions,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import LogoLoop, { type LogoItem } from "@/components/react-bits/LogoLoop";
import Reveal from "@/components/ui/Reveal";

const ico = (Icon: React.ComponentType<{ className?: string }>, title: string): LogoItem => ({
  node: (
    <Icon className="h-7 w-7 text-slate-400 transition-colors duration-300 hover:text-amber-300 sm:h-9 sm:w-9" />
  ) as ReactNode,
  title,
});

const rowA: LogoItem[] = [
  ico(SiTypescript, "TypeScript"), ico(SiJavascript, "JavaScript"), ico(SiPython, "Python"),
  ico(SiNodedotjs, "Node.js"), ico(SiNestjs, "NestJS"), ico(SiExpress, "Express"),
  ico(SiFastapi, "FastAPI"), ico(SiGraphql, "GraphQL"), ico(SiReact, "React"),
  ico(SiNextdotjs, "Next.js"), ico(SiTailwindcss, "Tailwind CSS"), ico(SiShadcnui, "shadcn/ui"),
];

const rowB: LogoItem[] = [
  ico(SiPostgresql, "PostgreSQL"), ico(SiMysql, "MySQL"), ico(SiMongodb, "MongoDB"),
  ico(SiScylladb, "ScyllaDB"), ico(SiRedis, "Redis"), ico(SiApachekafka, "Kafka"),
  ico(SiRabbitmq, "RabbitMQ"), ico(SiDocker, "Docker"), ico(SiKubernetes, "Kubernetes"),
  ico(FaAws, "AWS"), ico(SiGithubactions, "GitHub Actions"), ico(SiJest, "Jest"),
  ico(SiVitest, "Vitest"), ico(SiK6, "K6"), ico(SiAnthropic, "Anthropic"), ico(SiGooglegemini, "Gemini"),
];

export default function Skills() {
  return (
    <section id="skills" className="section-cv mx-auto max-w-5xl scroll-mt-24 px-5 py-20 sm:px-6 sm:py-32">
      <Reveal>
        <p className="font-mono text-sm text-amber-400">03 — Skills</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          The toolkit
        </h2>
        <p className="mt-4 max-w-xl text-pretty text-slate-400">
          Languages, frameworks, data stores, and infra I reach for to ship reliable products.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-12 space-y-8">
          <LogoLoop
            logos={rowA}
            speed={48}
            direction="left"
            gap={56}
            logoHeight={36}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#030308"
            ariaLabel="Languages and frameworks"
          />
          <LogoLoop
            logos={rowB}
            speed={48}
            direction="right"
            gap={56}
            logoHeight={36}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#030308"
            ariaLabel="Data stores, infrastructure, and testing"
          />
        </div>
      </Reveal>
    </section>
  );
}
