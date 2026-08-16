import { useEffect, useState, type CSSProperties } from "react";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
import { IMAGES } from "@/data/content";
import { Container } from "@/components/ui";

/** Deterministic drifting motes — evokes pollen / leaf litter in a sunbeam. */
const PARTICLES = [
  { left: 6, size: 7, dur: 30, delay: 0, x: 70, rot: 200, o: 0.5 },
  { left: 14, size: 4, dur: 24, delay: 5, x: -40, rot: -180, o: 0.35 },
  { left: 23, size: 9, dur: 34, delay: 11, x: 90, rot: 260, o: 0.4 },
  { left: 31, size: 5, dur: 27, delay: 3, x: -60, rot: 150, o: 0.45 },
  { left: 42, size: 6, dur: 32, delay: 15, x: 50, rot: -220, o: 0.3 },
  { left: 51, size: 8, dur: 29, delay: 8, x: -80, rot: 190, o: 0.42 },
  { left: 60, size: 4, dur: 22, delay: 18, x: 40, rot: 300, o: 0.32 },
  { left: 69, size: 10, dur: 36, delay: 2, x: -50, rot: -160, o: 0.38 },
  { left: 77, size: 5, dur: 26, delay: 13, x: 75, rot: 240, o: 0.45 },
  { left: 85, size: 7, dur: 31, delay: 7, x: -35, rot: 180, o: 0.35 },
  { left: 93, size: 6, dur: 28, delay: 20, x: 55, rot: -200, o: 0.4 },
  { left: 36, size: 3, dur: 21, delay: 24, x: 30, rot: 120, o: 0.28 },
];

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setOffset(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-forest-950"
      aria-label="Tales of the Living — introduction"
    >
      {/* Parallax background */}
      <div
        className="absolute inset-0 -z-20"
        style={{ transform: `translate3d(0, ${offset * 0.32}px, 0)` }}
      >
        <img
          src={IMAGES.hero}
          alt="Mist drifting across a forested mountain valley at sunrise"
          fetchPriority="high"
          decoding="async"
          className="animate-kenburns h-[115%] w-full object-cover"
        />
      </div>

      {/* Cinematic grade */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-950/78 via-forest-950/35 to-forest-950"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_35%,transparent_10%,rgba(4,13,9,0.55)_95%)]"
      />
      <div aria-hidden className="texture-grain absolute inset-0 -z-10 opacity-30" />

      {/* Drifting motes */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="animate-drift absolute bottom-[-8vh] rounded-full bg-gold-300"
            style={
              {
                left: `${p.left}%`,
                width: p.size,
                height: p.size,
                filter: "blur(0.6px)",
                "--drift-duration": `${p.dur}s`,
                "--drift-delay": `${p.delay}s`,
                "--drift-x": `${p.x}px`,
                "--drift-rot": `${p.rot}deg`,
                "--drift-opacity": p.o,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <Container className="relative pt-32 pb-20 sm:pb-24 lg:pb-28">
        <div className="max-w-4xl">
          <p
            className="hero-in text-[0.6rem] font-medium tracking-[0.42em] text-gold-400 uppercase sm:text-[0.72rem]"
            style={{ animationDelay: "0.15s" }}
          >
            Tales of the Living
          </p>

          <h1
            className="hero-in mt-6 font-serif text-[2.65rem] leading-[0.98] font-normal text-cream-50 sm:text-[4.2rem] lg:text-[5.4rem] xl:text-[6.2rem]"
            style={{ animationDelay: "0.3s" }}
          >
            Every living thing
            <span className="block text-gold-300 italic">has a story.</span>
          </h1>

          <p
            className="hero-in mt-7 max-w-xl text-[1rem] leading-[1.75] text-cream-100/80 sm:text-[1.15rem]"
            style={{ animationDelay: "0.5s" }}
          >
            Discover the fascinating stories behind the animals, birds, plants, fruits and
            creatures that share our world.
          </p>

          <div
            className="hero-in mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            style={{ animationDelay: "0.68s" }}
          >
            <a
              href="#/explore"
              className="group inline-flex min-h-13 items-center justify-center gap-2.5 rounded-full bg-cream-50 px-7 text-[0.74rem] font-medium tracking-[0.18em] text-forest-900 uppercase transition-all duration-300 hover:bg-gold-300 active:scale-[0.98]"
            >
              Explore the Living World
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5"
                strokeWidth={2}
              />
            </a>
            <a
              href="#/explore?type=video"
              className="group inline-flex min-h-13 items-center justify-center gap-2.5 rounded-full border border-cream-100/35 bg-white/6 px-7 text-[0.74rem] font-medium tracking-[0.18em] text-cream-50 uppercase backdrop-blur-md transition-all duration-300 hover:border-gold-400/80 hover:bg-white/14 active:scale-[0.98]"
            >
              <Play className="h-3 w-3 fill-current" strokeWidth={0} />
              Watch Our Stories
            </a>
          </div>
        </div>

        {/* Bottom rail */}
        <div className="mt-16 flex items-end justify-between gap-6 border-t border-cream-100/12 pt-6 sm:mt-20">
          <ul className="flex flex-wrap gap-x-7 gap-y-2 text-[0.58rem] tracking-[0.26em] text-cream-200/50 uppercase sm:text-[0.65rem]">
            <li>Animals</li>
            <li>Birds</li>
            <li className="hidden sm:list-item">Cattle</li>
            <li>Plants</li>
            <li className="hidden sm:list-item">Fruits</li>
            <li>Insects</li>
            <li className="hidden lg:list-item">Nature &amp; Ecosystems</li>
          </ul>
          <a
            href="#welcome"
            aria-label="Scroll to introduction"
            className="hidden shrink-0 items-center gap-2 text-[0.6rem] tracking-[0.24em] text-cream-200/55 uppercase transition-colors hover:text-gold-300 sm:inline-flex"
          >
            Scroll
            <ChevronDown className="animate-scroll-hint h-4 w-4" strokeWidth={1.6} />
          </a>
        </div>
      </Container>
    </section>
  );
}
