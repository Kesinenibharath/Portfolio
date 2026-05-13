import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { profile } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border px-6 py-28">
      <div
        className="pointer-events-none absolute -bottom-40 -right-20 h-[400px] w-[400px] rounded-full opacity-30 blur-[120px]"
        style={{ background: "var(--gradient-primary)" }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Let's build something <span className="gradient-text">great</span> together
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Open to full-time roles, internships, freelance projects, and collaborations in web development, AI/ML, or cybersecurity.
          </p>
          <div className="mt-8 space-y-3">
            <ContactLink href={`mailto:${profile.email}`} icon={<Mail className="h-4 w-4" />} label={profile.email} />
            <ContactLink href={`tel:${profile.phone.replace(/\s/g, "")}`} icon={<Phone className="h-4 w-4" />} label={profile.phone} />
            <ContactLink href={profile.linkedin} icon={<Linkedin className="h-4 w-4" />} label="linkedin.com/in/bharath-kesineni" external />
            <ContactLink href={profile.github} icon={<Github className="h-4 w-4" />} label="github.com/Kesinenibharath" external />
          </div>
        </div>

        <form
          className="space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const subject = encodeURIComponent(String(fd.get("subject") || "Hello Bharath"));
            const body = encodeURIComponent(
              `From: ${fd.get("name")} <${fd.get("email")}>\n\n${fd.get("message")}`
            );
            window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
          }}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <Field name="name" label="Name" placeholder="Your name" />
            <Field name="email" label="Email" type="email" placeholder="your@email.com" />
          </div>
          <Field name="subject" label="Subject" placeholder="What's this about?" />
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Tell me about your project or opportunity..."
              className="resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]"
          >
            Send Message <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  icon,
  label,
  external,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-primary">
        {icon}
      </span>
      {label}
    </a>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
