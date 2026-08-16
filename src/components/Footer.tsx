import { categories, navLinks, socials } from "@/data/content";
import { Container, LogoMark } from "@/components/ui";
import { socialIconMap } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-950 text-cream-100">
      <div aria-hidden className="texture-grain pointer-events-none absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[70rem] -translate-x-1/2 rounded-full bg-moss-500/10 blur-[120px]"
      />

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4">
              <LogoMark className="h-14 w-14" />
              <span className="font-serif text-[1rem] font-semibold tracking-[0.2em] text-cream-50 uppercase">
                Tales of the Living
              </span>
            </div>
            <p className="mt-7 max-w-sm font-serif text-xl leading-snug text-cream-200/85 italic">
              “Every living thing has a story.”
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-200/55">
              An educational storytelling platform exploring animals, birds, cattle, plants,
              fruits, insects and the ecosystems that connect them.
            </p>

            <ul className="mt-8 flex flex-wrap gap-3">
              {socials.map((s) => {
                const Icon = socialIconMap[s.name];
                return (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      aria-label={`${s.name} — ${s.handle}`}
                      className="grid h-11 w-11 place-items-center rounded-full border border-cream-100/15 text-cream-200/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400/70 hover:text-gold-300"
                    >
                      <Icon className="h-[1.05rem] w-[1.05rem]" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Navigation */}
          <nav className="lg:col-span-2" aria-labelledby="footer-nav">
            <h2
              id="footer-nav"
              className="font-sans text-[0.6rem] font-medium tracking-[0.3em] text-gold-400/85 uppercase"
            >
              Navigate
            </h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-cream-200/65 transition-colors hover:text-gold-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Categories */}
          <nav className="lg:col-span-3" aria-labelledby="footer-cats">
            <h2
              id="footer-cats"
              className="font-sans text-[0.6rem] font-medium tracking-[0.3em] text-gold-400/85 uppercase"
            >
              Categories
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {categories.map((c) => (
                <li key={c.id}>
                  <a
                    href={`#/explore?category=${c.id}`}
                    className="text-sm text-cream-200/65 transition-colors hover:text-gold-300"
                  >
                    {c.short}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Follow */}
          <div className="lg:col-span-3">
            <h2 className="font-sans text-[0.6rem] font-medium tracking-[0.3em] text-gold-400/85 uppercase">
              Follow the stories
            </h2>
            <ul className="mt-5 space-y-3">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    className="group flex items-center justify-between gap-4 border-b border-cream-100/8 pb-3 text-sm text-cream-200/65 transition-colors hover:text-gold-300"
                  >
                    <span>{s.name}</span>
                    <span className="text-xs text-cream-200/35 transition-colors group-hover:text-gold-400/80">
                      {s.handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[0.7rem] leading-relaxed text-cream-200/35">
              Social handles are placeholders — replace them with your channel links.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream-100/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-cream-200/45">
            © 2026 Tales of the Living. All rights reserved.
          </p>
          <p className="text-[0.68rem] tracking-[0.2em] text-cream-200/30 uppercase">
            Educational nature storytelling
          </p>
        </div>
      </Container>
    </footer>
  );
}
