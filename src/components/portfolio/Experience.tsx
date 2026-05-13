import { useState } from "react";
import { Rocket, Wrench, Award, ExternalLink, X, Github } from "lucide-react";
import { SectionLabel, SectionTitle } from "./SectionLabel";
import { experience } from "@/data/portfolio";

export function Experience() {
  const [activeCert, setActiveCert] = useState<{ src: string; label: string } | null>(null);
  return (
    <section id="experience" className="border-t border-border bg-surface/40 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Experience</SectionLabel>
        <SectionTitle>Where I've worked</SectionTitle>
        <div className="space-y-5">
          {experience.map((e) => (
            <article
              key={e.role + e.company}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40 md:p-8"
            >
              <span
                className="absolute left-0 top-0 h-full w-1"
                style={{ background: "var(--gradient-primary)" }}
              />
              <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
                <h3 className="font-display text-xl font-bold tracking-tight">{e.role}</h3>
                <span className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-[11px] text-muted-foreground">
                  {e.period}
                </span>
              </div>
              <div className="text-sm font-medium text-primary">{e.company}</div>
              <div className="mb-5 font-mono text-xs italic text-muted-foreground">
                {e.location}
              </div>
              <ul className="space-y-2">
                {e.bullets.map((b, i) => (
                  <li key={i} className="relative pl-5 text-sm leading-relaxed text-muted-foreground">
                    <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>

              {e.project && (
                <div className="mt-5 flex items-start gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Rocket className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                      Featured Project
                    </div>
                    <div className="mt-1 text-sm font-medium text-foreground">
                      {e.project}
                    </div>
                    {e.projectGithub && (
                      <a
                        href={e.projectGithub}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 rounded-md border border-primary/30 bg-background/60 px-2.5 py-1 font-mono text-[11px] font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        <Github className="h-3 w-3" /> View on GitHub
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              )}

              <div className="mt-4">
                <div className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  <Wrench className="h-3 w-3" /> Tech Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {e.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[11px] font-medium text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {e.cert && (
                <button
                  type="button"
                  onClick={() => setActiveCert({ src: e.cert!, label: e.certLabel ?? `${e.role} — Certificate` })}
                  className="mt-5 flex w-full items-center gap-4 rounded-xl border border-border bg-surface p-3 text-left transition-all hover:-translate-y-0.5 hover:border-primary/40"
                >
                  <img
                    src={e.cert}
                    alt={e.certLabel ?? "Internship certificate"}
                    className="h-16 w-24 flex-shrink-0 rounded-md border border-border object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                      <Award className="h-3 w-3" /> Internship Certificate
                    </div>
                    <div className="mt-1 truncate text-sm font-medium text-foreground">
                      {e.certLabel ?? "View certificate"}
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                </button>
              )}
            </article>
          ))}
        </div>

        {activeCert && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
            onClick={() => setActiveCert(null)}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveCert(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground backdrop-blur transition-colors hover:text-primary"
              >
                <X className="h-4 w-4" />
              </button>
              <img src={activeCert.src} alt={activeCert.label} className="max-h-[75vh] w-full bg-black object-contain" />
              <div className="p-4 font-mono text-xs text-muted-foreground">{activeCert.label}</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
