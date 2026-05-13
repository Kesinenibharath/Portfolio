import { SectionLabel, SectionTitle } from "./SectionLabel";
import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="border-t border-border px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Technical Skills</SectionLabel>
        <SectionTitle>My tech stack</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div
              key={s.category}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
              <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-primary">
                {s.category}
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors group-hover:text-foreground"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
