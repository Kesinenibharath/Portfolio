import { useState } from "react";
import { Award, ExternalLink, X } from "lucide-react";
import { SectionLabel, SectionTitle } from "./SectionLabel";
import { certifications, type Certification } from "@/data/portfolio";

export function Certifications() {
  const [active, setActive] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="border-t border-border bg-surface/40 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Certifications</SectionLabel>
        <SectionTitle>Credentials &amp; courses</SectionTitle>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => (
            <button
              key={c.name}
              onClick={() => setActive(c)}
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 text-left transition-all hover:-translate-y-0.5 hover:border-primary/40"
            >
              {c.logo ? (
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-white p-1.5">
                  <img src={c.logo} alt={`${c.issuer} logo`} className="h-full w-full object-contain" />
                </div>
              ) : c.initials ? (
                <div
                  className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border bg-gradient-to-br font-display text-[11px] font-bold tracking-tight ${c.brandTint ?? "from-primary/20 to-primary/5 text-primary border-primary/40"}`}
                >
                  {c.initials}
                </div>
              ) : (
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-primary/10 text-primary">
                  <Award className="h-5 w-5" />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <div className="font-display text-sm font-semibold leading-snug transition-colors group-hover:text-primary">
                  {c.name}
                </div>
                <div className="mt-1 font-mono text-[11px] leading-relaxed text-muted-foreground">
                  {c.issuer} · {c.meta}
                </div>
                <div className="mt-2 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Preview <ExternalLink className="h-3 w-3" />
                </div>
              </div>
            </button>
          ))}
        </div>

        {active && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground backdrop-blur transition-colors hover:text-primary"
              >
                <X className="h-4 w-4" />
              </button>
              {active.image ? (
                <img
                  src={active.image}
                  alt={active.name}
                  className="max-h-[60vh] w-full object-contain bg-black"
                />
              ) : (
                <div className="flex h-56 items-center justify-center bg-gradient-to-br from-primary/10 to-transparent">
                  <Award className="h-20 w-20 text-primary/60" />
                </div>
              )}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold tracking-tight">{active.name}</h3>
                <div className="mt-2 font-mono text-xs text-muted-foreground">
                  {active.issuer} · {active.meta}
                </div>
                {!active.image && (
                  <p className="mt-4 rounded-lg border border-dashed border-border bg-surface p-3 text-xs text-muted-foreground">
                    Upload the certificate image to <code className="font-mono text-primary">src/assets/certs/</code> and import it on this entry in <code className="font-mono text-primary">src/data/portfolio.ts</code> to display it here.
                  </p>
                )}
                {active.verifyUrl && (
                  <a
                    href={active.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 font-display text-xs font-semibold text-primary-foreground"
                  >
                    Verify credential <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
