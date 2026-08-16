import { useCallback, useEffect, useState } from "react";
import { ArrowRight, Lightbulb, RotateCw } from "lucide-react";
import { facts } from "@/data/content";
import { Container, DemoBadge, Eyebrow } from "@/components/ui";

export default function DidYouKnow() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % facts.length), []);

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(next, 7000);
    return () => window.clearInterval(t);
  }, [next, paused]);

  const fact = facts[index];

  return (
    <section
      className="relative overflow-hidden bg-cream-100"
      aria-labelledby="dyk-title"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(194,162,76,0.14),transparent_55%),radial-gradient(circle_at_82%_75%,rgba(36,92,63,0.12),transparent_55%)]"
      />

      <Container className="relative py-20 sm:py-24 lg:py-28">
        <div className="reveal mx-auto max-w-4xl text-center">
          <span className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full border border-gold-600/25 bg-cream-50 text-gold-600 shadow-[0_10px_30px_-18px_rgba(169,133,58,0.9)]">
            <Lightbulb className="h-6 w-6" strokeWidth={1.3} />
          </span>
          <Eyebrow className="justify-center">Did you know?</Eyebrow>

          <div className="mt-8 min-h-[13rem] sm:min-h-[12rem]">
            <blockquote key={index} className="animate-fact-in">
              <p
                id="dyk-title"
                className="font-serif text-[1.45rem] leading-[1.3] text-forest-900 sm:text-[2.05rem] lg:text-[2.35rem]"
              >
                “{fact.text}”
              </p>
              <footer className="mt-6 flex flex-col items-center gap-3">
                <span className="text-[0.6rem] tracking-[0.28em] text-moss-600 uppercase">
                  {fact.category}
                </span>
                <DemoBadge>{fact.source}</DemoBadge>
              </footer>
            </blockquote>
          </div>

          <div className="mt-8 flex flex-col items-center gap-6">
            {/* Progress dots */}
            <div className="flex items-center gap-2.5" role="tablist" aria-label="Choose a fact">
              {facts.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Fact ${i + 1} of ${facts.length}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === index
                      ? "w-9 bg-gold-600"
                      : "w-1.5 bg-forest-900/20 hover:bg-forest-900/40"
                  }`}
                />
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={next}
                className="group inline-flex min-h-11 items-center gap-2.5 rounded-full border border-forest-900/15 px-6 text-[0.7rem] font-medium tracking-[0.18em] text-forest-800 uppercase transition-all duration-300 hover:border-forest-900/35 hover:bg-forest-900/5"
              >
                <RotateCw
                  className="h-3.5 w-3.5 transition-transform duration-500 group-hover:rotate-180"
                  strokeWidth={1.8}
                />
                Another fact
              </button>
              <a
                href="#/stories"
                className="group inline-flex min-h-11 items-center gap-2.5 rounded-full bg-forest-800 px-6 text-[0.7rem] font-medium tracking-[0.18em] text-cream-50 uppercase transition-all duration-300 hover:bg-forest-700"
              >
                Discover More Facts
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5"
                  strokeWidth={2}
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
