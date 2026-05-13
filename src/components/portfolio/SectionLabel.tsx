export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
      <span className="block h-px w-8 bg-primary" />
      {children}
    </div>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-12 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-balance md:text-5xl lg:text-6xl">
      {children}
    </h2>
  );
}
