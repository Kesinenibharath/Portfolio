import { Github, ExternalLink } from "lucide-react";
import { SectionLabel, SectionTitle } from "./SectionLabel";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="border-t border-border px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Projects</SectionLabel>
        <SectionTitle>Things I've built</SectionTitle>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
            >
              <div
                className={`relative mb-5 flex h-32 items-center justify-center overflow-hidden rounded-xl border border-border bg-gradient-to-br ${p.tint}`}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-60"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 60%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 70%)",
                  }}
                />
                <span
                  role="img"
                  aria-label={`${p.title} icon`}
                  className="relative text-5xl drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
                >
                  {p.icon}
                </span>
              </div>
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  {p.type}
                </span>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.title} GitHub repository`}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
                {p.title}
              </h3>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 border-t border-border pt-4">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-surface px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Github className="h-3.5 w-3.5" /> Code
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
