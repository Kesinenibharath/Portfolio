import profilePhoto from "@/assets/profile.jpg";
import { Mail, Phone, Linkedin, Github, ArrowDown, FileText } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32"
    >
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[500px] w-[500px] rounded-full opacity-40 blur-[120px]"
        style={{ background: "var(--gradient-primary)" }}
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1fr_auto] md:gap-16">
        <div className="reveal-up">
          <p className="mb-4 font-display text-2xl font-semibold text-primary md:text-4xl lg:text-5xl">
            Welcome to my portfolio
          </p>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5">
            <span className="pulse-dot block h-2 w-2 rounded-full bg-primary" />
            <span className="font-mono text-[11px] tracking-wider text-primary">
              {profile.available}
            </span>
          </div>

          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-[88px]">
            Bharath
            <br />
            <span className="gradient-text">Kesineni</span>
          </h1>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {["Full Stack Developer", "AI / ML Engineer", "Cybersecurity Enthusiast", "ServiceNow Learner"].map((kw, i, arr) => (
              <span
                key={kw}
                className="keyword-pill rounded-full border border-border bg-surface px-4 py-1.5 font-display text-xs font-semibold text-muted-foreground md:text-sm"
                style={{
                  animationDelay: `${i * (6 / arr.length)}s`,
                  animationDuration: `${6}s`,
                }}
              >
                {kw}
              </span>
            ))}
          </div>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-display text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]"
            >
              View My Work <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 font-display text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
            >
              Get In Touch
            </a>
            <a
              href="/Bharath_Kesineni_Resume.pdf"
              download
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 font-display text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary/20 hover:shadow-[var(--shadow-elegant)]"
            >
              <FileText className="h-4 w-4" /> Resume
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs text-muted-foreground">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 transition-colors hover:text-primary">
              <Mail className="h-3.5 w-3.5" /> {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 transition-colors hover:text-primary">
              <Phone className="h-3.5 w-3.5" /> {profile.phone}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-primary">
              <Linkedin className="h-3.5 w-3.5" /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-primary">
              <Github className="h-3.5 w-3.5" /> GitHub
            </a>
          </div>
        </div>

        <div className="reveal-up justify-self-center md:justify-self-end" style={{ animationDelay: "0.15s" }}>
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl opacity-40 blur-2xl"
              style={{ background: "var(--gradient-primary)" }}
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-1.5">
              <img
                src={profilePhoto}
                alt="Bharath Kesineni — professional headshot"
                width={280}
                height={340}
                className="h-[340px] w-[280px] rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
