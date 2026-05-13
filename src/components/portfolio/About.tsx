import { SectionLabel, SectionTitle } from "./SectionLabel";
import { facts, education } from "@/data/portfolio";
import { GraduationCap, MapPin, Target, BookOpen, Sparkles } from "lucide-react";

const factIcons: Record<string, typeof MapPin> = {
  Location: MapPin,
  Focus: Target,
  Coursework: BookOpen,
  Strengths: Sparkles,
};

export function About() {
  return (
    <section id="about" className="border-t border-border bg-surface/40 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>About</SectionLabel>
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <SectionTitle>
              Building at the intersection of <span className="text-primary">web, AI &amp; security</span>
            </SectionTitle>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I'm a software developer from Hyderabad who genuinely enjoys building things. I graduated in 2026 with a B.Tech in Information Technology from Vignan's Lara (CGPA 8.5), and have been sharpening my skills across web development, machine learning, and cybersecurity.
              </p>
              <p>
                I learn by doing — wiring up a full-stack MERN app, training an ML model, or exploring how systems can be made more secure. I've completed two internships, shipped meaningful real-world projects, and earned certifications from Cisco, AWS, ServiceNow, and more.
              </p>
              <p>
                I'm looking for my first full-time role where I can keep growing, contribute to a great team, and build software that matters.
              </p>
            </div>
            <blockquote className="mt-8 border-l-2 border-primary bg-primary/5 px-5 py-4 text-sm italic text-foreground/80">
              "I don't just want a job — I want a place where I can grow, contribute, and keep getting better at what I do."
            </blockquote>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {facts.map((f) => {
              const Icon = factIcons[f.label] ?? Sparkles;
              return (
                <li
                  key={f.label}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-elegant)]"
                >
                  <div
                    aria-hidden
                    className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-opacity group-hover:bg-primary/10"
                  />
                  <div className="relative">
                    <div className="mb-3 flex items-center gap-2.5">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                        {f.label}
                      </div>
                    </div>
                    <div className="text-sm leading-relaxed text-foreground/90">
                      {f.value}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Education timeline */}
        <div className="mt-20">
          <div className="mb-8 flex items-center gap-3">
            <GraduationCap className="h-5 w-5 text-primary" />
            <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              Education <span className="text-primary">Journey</span>
            </h3>
          </div>

          <div className="relative">
            {/* horizontal connector line (md+) */}
            <div
              aria-hidden
              className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block"
            />
            <ol className="grid gap-6 md:grid-cols-3">
              {education.map((e, i) => (
                <li key={e.level} className="relative">
                  {/* dot */}
                  <div className="mb-4 hidden items-center md:flex">
                    <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-background font-mono text-xs font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-elegant)]">
                    <div className="mb-2 inline-block rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-primary">
                      {e.year}
                    </div>
                    <div className="font-display text-base font-semibold text-foreground">
                      {e.level}
                    </div>
                    <div className="mt-1 text-sm text-foreground/80">{e.institution}</div>
                    {e.board && (
                      <div className="mt-0.5 text-xs text-muted-foreground">{e.board}</div>
                    )}
                    <div className="mt-3 font-mono text-xs font-semibold text-primary">
                      {e.score}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
