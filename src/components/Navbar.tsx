import { useEffect, useRef, useState } from "react";
import { Menu, PlayCircle, Search, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { navLinks, stories, categoryMap } from "@/data/content";
import { navigate, type RoutePath } from "@/lib/router";
import { Container, LogoMark } from "@/components/ui";

interface NavbarProps {
  route: RoutePath;
  /** Home has a full-bleed hero, so the bar starts transparent there. */
  overlay?: boolean;
}

export default function Navbar({ route, overlay = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [route]);

  useEffect(() => {
    const locked = menuOpen || searchOpen;
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, searchOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const solid = scrolled || !overlay;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:rounded-full focus:bg-forest-900 focus:px-5 focus:py-3 focus:text-sm focus:text-cream-50"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,box-shadow,border-color] duration-500",
          solid
            ? "border-b border-cream-100/10 bg-forest-950/92 backdrop-blur-xl shadow-[0_10px_40px_-24px_rgba(0,0,0,0.9)]"
            : "border-b border-transparent bg-gradient-to-b from-black/55 via-black/20 to-transparent",
        )}
      >
        <Container as="nav" className="flex items-center justify-between gap-4 py-3.5 lg:py-4">
          {/* Brand */}
          <a
            href="#/"
            className="group flex shrink-0 items-center gap-3.5"
            aria-label="Tales of the Living — home"
          >
            <span className="transition-transform duration-500 group-hover:scale-105">
              <LogoMark className="h-12 w-12 sm:h-14 sm:w-14" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-serif text-[0.85rem] font-semibold tracking-[0.2em] text-cream-50 uppercase sm:text-[0.95rem]">
                Tales of the Living
              </span>
              <span className="mt-1.5 hidden text-[0.53rem] tracking-[0.3em] text-cream-200/55 uppercase sm:block">
                Every living thing has a story
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = link.href.replace("#", "") === route;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-[0.72rem] font-medium tracking-[0.18em] uppercase transition-colors duration-300",
                      active ? "text-gold-300" : "text-cream-100/75 hover:text-cream-50",
                    )}
                  >
                    {link.label}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-x-4 -bottom-0.5 h-px origin-center bg-gold-400 transition-transform duration-400",
                        active ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search stories"
              className="grid h-10 w-10 place-items-center rounded-full text-cream-100/80 transition-colors duration-300 hover:bg-white/10 hover:text-cream-50"
            >
              <Search className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.6} />
            </button>

            <a
              href="#/explore?type=video"
              className="hidden items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-5 py-2.5 text-[0.68rem] font-medium tracking-[0.16em] text-gold-300 uppercase transition-all duration-300 hover:border-gold-400/80 hover:bg-gold-400/20 hover:text-gold-300 sm:inline-flex"
            >
              <PlayCircle className="h-4 w-4" strokeWidth={1.6} />
              Watch Videos
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="grid h-10 w-10 place-items-center rounded-full text-cream-100/85 transition-colors duration-300 hover:bg-white/10 lg:hidden"
            >
              <Menu className="h-[1.3rem] w-[1.3rem]" strokeWidth={1.6} />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} route={route} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

/* ------------------------------------------------------------------ */
function MobileMenu({
  open,
  onClose,
  route,
}: {
  open: boolean;
  onClose: () => void;
  route: RoutePath;
}) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <div
        className={cn(
          "absolute inset-0 bg-forest-950/70 backdrop-blur-sm transition-opacity duration-400",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={cn(
          "absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-forest-900 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-cream-100/10 px-6 py-5">
          <span className="font-serif text-[0.78rem] tracking-[0.22em] text-cream-50 uppercase">
            Menu
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-10 w-10 place-items-center rounded-full text-cream-100/80 hover:bg-white/10"
          >
            <X className="h-5 w-5" strokeWidth={1.6} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-8">
          <ul className="space-y-1">
            {navLinks.map((link, i) => {
              const active = link.href.replace("#", "") === route;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-baseline gap-4 rounded-2xl px-3 py-4 font-serif text-2xl transition-colors duration-300",
                      active ? "text-gold-300" : "text-cream-100 hover:text-gold-300",
                    )}
                  >
                    <span className="font-sans text-[0.6rem] tracking-[0.2em] text-cream-200/40">
                      0{i + 1}
                    </span>
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 border-t border-cream-100/10 pt-7">
            <p className="text-[0.6rem] tracking-[0.28em] text-gold-400/80 uppercase">
              Categories
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {Object.values(categoryMap).map((c) => (
                <li key={c.id}>
                  <a
                    href={`#/explore?category=${c.id}`}
                    onClick={onClose}
                    className="inline-block rounded-full border border-cream-100/15 px-3.5 py-2 text-[0.7rem] text-cream-200/80 transition-colors hover:border-gold-400/60 hover:text-gold-300"
                  >
                    {c.short}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="border-t border-cream-100/10 p-6">
          <a
            href="#/explore?type=video"
            onClick={onClose}
            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gold-400/15 px-6 text-[0.72rem] font-medium tracking-[0.18em] text-gold-300 uppercase ring-1 ring-gold-400/40"
          >
            <PlayCircle className="h-4 w-4" strokeWidth={1.6} /> Watch Videos
          </a>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQ("");
      const t = window.setTimeout(() => inputRef.current?.focus(), 120);
      return () => window.clearTimeout(t);
    }
  }, [open]);

  const term = q.trim().toLowerCase();
  const results = term
    ? stories
        .filter(
          (s) =>
            s.title.toLowerCase().includes(term) ||
            s.excerpt.toLowerCase().includes(term) ||
            s.tags.some((t) => t.toLowerCase().includes(term)) ||
            categoryMap[s.category].name.toLowerCase().includes(term),
        )
        .slice(0, 6)
    : [];

  return (
    <div
      className={cn(
        "fixed inset-0 z-[65] transition-opacity duration-400",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-forest-950/94 backdrop-blur-xl" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        className="relative mx-auto flex h-full max-w-3xl flex-col px-5 pt-24 pb-10 sm:px-8 sm:pt-32"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close search"
          className="absolute top-6 right-5 grid h-11 w-11 place-items-center rounded-full text-cream-100/70 hover:bg-white/10 sm:right-8"
        >
          <X className="h-5 w-5" strokeWidth={1.6} />
        </button>

        <label htmlFor="global-search" className="text-[0.62rem] tracking-[0.3em] text-gold-400 uppercase">
          Search the living world
        </label>
        <div className="mt-4 flex items-center gap-4 border-b border-cream-100/20 pb-4">
          <Search className="h-6 w-6 shrink-0 text-cream-200/50" strokeWidth={1.4} />
          <input
            id="global-search"
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Try “peacock”, “Sahiwal”, “mango”…"
            className="w-full bg-transparent font-serif text-2xl text-cream-50 placeholder:text-cream-200/30 focus:outline-none sm:text-3xl"
          />
        </div>

        <div className="mt-8 min-h-0 flex-1 overflow-y-auto">
          {!term && (
            <ul className="flex flex-wrap gap-2">
              {["Sahiwal", "Peacock", "Mango", "Trees", "Butterflies", "Migration"].map((s) => (
                <li key={s}>
                  <button
                    type="button"
                    onClick={() => setQ(s)}
                    className="rounded-full border border-cream-100/15 px-4 py-2 text-[0.72rem] text-cream-200/70 transition-colors hover:border-gold-400/60 hover:text-gold-300"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          )}

          {term && results.length === 0 && (
            <p className="text-cream-200/60">
              No stories match “{q}”. Try a different word or browse{" "}
              <a href="#/explore" onClick={onClose} className="text-gold-300 underline underline-offset-4">
                Explore
              </a>
              .
            </p>
          )}

          <ul className="space-y-1">
            {results.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    navigate(`/explore?q=${encodeURIComponent(s.title)}`);
                  }}
                  className="group flex w-full items-center gap-4 rounded-2xl p-3 text-left transition-colors hover:bg-white/5"
                >
                  <img
                    src={s.image}
                    alt=""
                    loading="lazy"
                    className="h-16 w-20 shrink-0 rounded-xl object-cover sm:h-18 sm:w-28"
                  />
                  <span className="min-w-0">
                    <span className="block text-[0.58rem] tracking-[0.24em] text-gold-400 uppercase">
                      {categoryMap[s.category].name}
                    </span>
                    <span className="mt-1 block truncate font-serif text-lg text-cream-50 group-hover:text-gold-300">
                      {s.title}
                    </span>
                    <span className="mt-0.5 block truncate text-sm text-cream-200/55">
                      {s.excerpt}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
