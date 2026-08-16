import { ArrowRight, Quote } from "lucide-react";
import { IMAGES } from "@/data/content";
import { Container, Eyebrow } from "@/components/ui";

/**
 * The signature brand device: a question asked at home becomes an
 * expedition into the living world.
 */
export default function Storytelling() {
  return (
    <section
      className="relative overflow-hidden bg-forest-950 text-cream-100"
      aria-labelledby="storytelling-title"
    >
      <div aria-hidden className="texture-grain pointer-events-none absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-gold-500/8 blur-[130px]"
      />

      <Container className="relative py-20 sm:py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Image + speech bubbles */}
          <div className="reveal relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-cream-100/12">
              <img
                src={IMAGES.storytelling}
                alt="A grandmother and a child sitting together outdoors, sharing a story"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/5] lg:aspect-[4/5]"
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/12 to-transparent"
              />
            </div>

            {/* Speech bubbles */}
            <div className="relative -mt-16 space-y-3 px-3 sm:-mt-20 sm:px-6">
              <div className="max-w-[19rem] rounded-2xl rounded-bl-md border border-cream-100/15 bg-cream-50/95 p-4 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.9)] backdrop-blur sm:p-5">
                <p className="text-[0.55rem] font-medium tracking-[0.26em] text-bark-500 uppercase">
                  Grandchild
                </p>
                <p className="mt-2 font-serif text-lg leading-snug text-forest-900 sm:text-xl">
                  “Dadi, ye kya hai?”
                </p>
              </div>

              <div className="ml-auto max-w-[21rem] rounded-2xl rounded-br-md border border-gold-400/25 bg-forest-800/95 p-4 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.9)] backdrop-blur sm:p-5">
                <p className="text-[0.55rem] font-medium tracking-[0.26em] text-gold-400/85 uppercase">
                  Grandmother
                </p>
                <p className="mt-2 font-serif text-lg leading-snug text-cream-50 sm:text-xl">
                  “Beta, iski kahani bohat interesting hai…”
                </p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <div className="reveal">
              <Eyebrow tone="cream">The Tales of the Living method</Eyebrow>
              <h2
                id="storytelling-title"
                className="mt-6 text-[2.1rem] leading-[1.05] text-cream-50 sm:text-[2.9rem] lg:text-[3.4rem]"
              >
                Every story begins
                <span className="block text-gold-300 italic">with a question.</span>
              </h2>
            </div>

            <div className="reveal mt-8 space-y-5 text-[0.98rem] leading-[1.8] text-cream-200/70" style={{ transitionDelay: "120ms" }}>
              <p>
                Our videos rarely open with a definition. They open with a moment — a child
                pointing at something in the yard, and an elder who knows its name.
              </p>
              <p>
                From there the narrator steps in: the scientific name, the local names, where it
                lives, what it eats, how long it lives, why it matters, and the details most
                people never hear.
              </p>
              <p className="font-serif text-xl leading-snug text-cream-50 italic sm:text-2xl">
                “And that question begins a journey into the living world.”
              </p>
            </div>

            <div
              className="reveal mt-9 flex flex-wrap gap-3"
              style={{ transitionDelay: "220ms" }}
            >
              <a
                href="#/about"
                className="group inline-flex min-h-12 items-center gap-2.5 rounded-full border border-cream-100/25 px-6 text-[0.72rem] font-medium tracking-[0.18em] text-cream-50 uppercase transition-all duration-300 hover:border-gold-400/70 hover:bg-white/8"
              >
                Our storytelling philosophy
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5"
                  strokeWidth={2}
                />
              </a>
            </div>

            <div
              className="reveal mt-10 flex items-start gap-4 border-t border-cream-100/10 pt-7"
              style={{ transitionDelay: "300ms" }}
            >
              <Quote className="h-6 w-6 shrink-0 text-gold-400/70" strokeWidth={1.4} />
              <p className="text-sm leading-relaxed text-cream-200/55">
                Storytelling makes scientific information easier to follow and far easier to
                remember — which is exactly why we build every episode this way.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
