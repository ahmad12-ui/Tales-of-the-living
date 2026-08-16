import { BookOpen, Compass, Eye, Globe2, Heart, Sparkles, Target } from "lucide-react";
import { categories, IMAGES, journey, socials } from "@/data/content";
import { Container, Eyebrow, Reveal, SectionHeading } from "@/components/ui";
import { socialIconMap } from "@/components/SocialIcons";
import Storytelling from "@/components/Storytelling";
import Newsletter from "@/components/Newsletter";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    body: "To make learning about nature simple, engaging and memorable — so a fact you hear once stays with you for years.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    body: "A world where curiosity about living things is ordinary: where anyone can name the bird outside, the tree on the road, the breed in the field.",
  },
  {
    icon: Heart,
    title: "Our Promise",
    body: "Clear language, careful sourcing and respect for both science and the local knowledge passed down at home.",
  },
];

const reasons = [
  {
    icon: Globe2,
    title: "Nature literacy is life literacy",
    body: "Food, water, weather and health all run through living systems. Understanding them is a practical skill, not a hobby.",
  },
  {
    icon: BookOpen,
    title: "Stories outlast facts",
    body: "A list of traits is forgotten by evening. A story about a grandmother and a Sahiwal cow is not.",
  },
  {
    icon: Compass,
    title: "Local knowledge deserves a stage",
    body: "Indigenous breeds, regional names and traditional practices are part of the science — we record them alongside it.",
  },
];

export default function About() {
  return (
    <>
      {/* Masthead */}
      <header className="relative isolate flex min-h-[70vh] items-end overflow-hidden bg-forest-950 pt-28">
        <img
          src={IMAGES.aboutWide}
          alt="A river winding through dense forest at golden hour"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          decoding="async"
        />
        <span
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950 via-forest-950/55 to-forest-950/70"
        />
        <div aria-hidden className="texture-grain absolute inset-0 -z-10 opacity-30" />

        <Container className="relative pb-16 sm:pb-24">
          <Eyebrow tone="cream">About us</Eyebrow>
          <h1 className="mt-5 max-w-4xl font-serif text-[2.4rem] leading-[1.02] text-cream-50 sm:text-[3.4rem] lg:text-[4.6rem]">
            Stories that help us
            <span className="block text-gold-300 italic">understand life</span>
          </h1>
          <p className="mt-7 max-w-2xl text-[1rem] leading-[1.8] text-cream-200/75 sm:text-[1.1rem]">
            Tales of the Living is an educational content platform dedicated to exploring the
            natural world through storytelling, visual learning and fascinating facts.
          </p>
        </Container>
      </header>

      {/* Mission / Vision / Promise */}
      <section className="bg-cream-50 py-20 sm:py-24 lg:py-28" aria-labelledby="pillars-title">
        <Container>
          <SectionHeading
            eyebrow="Why we exist"
            title={
              <>
                A quiet ambition, <span className="text-moss-600 italic">clearly stated</span>
              </>
            }
            lead="We are not trying to replace a textbook. We are trying to make you look twice at something you walk past every day."
            className="max-w-3xl"
            align="center"
          />

          <ul className="mt-14 grid gap-5 md:grid-cols-3 lg:gap-7">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal as="li" key={p.title} delay={i * 100}>
                  <div className="group h-full rounded-3xl border border-forest-900/8 bg-cream-100 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-500/35 hover:bg-white hover:shadow-[0_30px_60px_-38px_rgba(8,25,15,0.6)] sm:p-8">
                    <span className="grid h-13 w-13 place-items-center rounded-2xl bg-forest-800 text-gold-300 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
                      <Icon className="h-6 w-6" strokeWidth={1.4} />
                    </span>
                    <h3 className="mt-6 font-serif text-[1.4rem] text-forest-900">{p.title}</h3>
                    <p className="mt-3.5 text-[0.92rem] leading-[1.75] text-bark-600">{p.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* Editorial split */}
      <section className="bg-cream-100 py-20 sm:py-24 lg:py-28" aria-labelledby="cover-title">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-45px_rgba(8,25,15,0.6)]">
                <img
                  src={IMAGES.aboutPortrait}
                  alt="An elder and a child sitting together outside a village home"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1800ms] ease-out hover:scale-[1.05] sm:aspect-[5/4] lg:aspect-[4/5]"
                />
              </div>
            </Reveal>

            <div className="order-1 lg:order-2">
              <Reveal>
                <Eyebrow>What we cover</Eyebrow>
                <h2
                  id="cover-title"
                  className="mt-6 font-serif text-[2rem] leading-[1.06] text-forest-900 sm:text-[2.7rem] lg:text-[3.1rem]"
                >
                  Seven living worlds,
                  <span className="block text-moss-600 italic">one way of telling them</span>
                </h2>
              </Reveal>

              <Reveal delay={110}>
                <p className="mt-7 text-[0.98rem] leading-[1.8] text-bark-600">
                  From a tiny insect to a mighty animal, from a simple fruit to an ancient tree —
                  each episode follows the same careful structure so that knowledge builds rather
                  than scatters.
                </p>
              </Reveal>

              <Reveal delay={180}>
                <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
                  {categories.map((c) => (
                    <li key={c.id}>
                      <a
                        href={`#/explore?category=${c.id}`}
                        className="group flex items-center justify-between gap-3 rounded-2xl border border-forest-900/8 bg-cream-50 px-5 py-4 transition-all duration-300 hover:border-forest-800/40 hover:bg-white"
                      >
                        <span>
                          <span className="block font-serif text-[1.05rem] text-forest-900">
                            {c.name}
                          </span>
                          <span className="mt-0.5 block text-[0.62rem] tracking-[0.16em] text-bark-500 uppercase">
                            {c.accent}
                          </span>
                        </span>
                        <Sparkles
                          className="h-4 w-4 shrink-0 text-gold-600/50 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12"
                          strokeWidth={1.5}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Storytelling philosophy */}
      <Storytelling />

      {/* Journey timeline */}
      <section className="bg-cream-50 py-20 sm:py-24 lg:py-28" aria-labelledby="journey-title">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="The journey"
            title={
              <>
                Curiosity → Discovery → Knowledge →{" "}
                <span className="text-moss-600 italic">Appreciation</span>
              </>
            }
            lead="Four steps that shape every script we write and every episode we film."
            className="max-w-3xl"
          />

          <ol className="relative mt-16 grid gap-8 md:grid-cols-4 md:gap-6">
            <span
              aria-hidden
              className="rule-gold absolute top-6 right-0 left-0 hidden h-px md:block"
            />
            {journey.map((j, i) => (
              <Reveal as="li" key={j.step} delay={i * 110} className="relative">
                <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-gold-500/40 bg-cream-50 font-serif text-[0.95rem] text-gold-600">
                  {j.step}
                </span>
                <h3 className="mt-6 font-serif text-[1.45rem] text-forest-900">{j.title}</h3>
                <p className="mt-3 max-w-xs text-[0.9rem] leading-[1.75] text-bark-600">{j.text}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Why nature education matters */}
      <section
        className="relative overflow-hidden bg-forest-900 py-20 sm:py-24 lg:py-28"
        aria-labelledby="why-title"
      >
        <div aria-hidden className="texture-grain pointer-events-none absolute inset-0 opacity-40" />
        <Container className="relative">
          <SectionHeading
            invert
            eyebrow="Why it matters"
            title={
              <>
                Nature education is not
                <span className="block text-gold-300 italic">a side subject</span>
              </>
            }
            lead="Understanding living things changes how people farm, eat, build and vote. That is worth telling well."
            className="max-w-2xl"
          />

          <ul className="mt-14 grid gap-5 md:grid-cols-3 lg:gap-7">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <Reveal as="li" key={r.title} delay={i * 100}>
                  <div className="h-full rounded-3xl border border-cream-100/10 bg-white/4 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/35 hover:bg-white/8 sm:p-8">
                    <Icon className="h-7 w-7 text-gold-400" strokeWidth={1.3} />
                    <h3 className="mt-6 font-serif text-[1.35rem] text-cream-50">{r.title}</h3>
                    <p className="mt-3.5 text-[0.92rem] leading-[1.75] text-cream-200/65">
                      {r.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* Social presence */}
      <section className="bg-cream-100 py-20 sm:py-24" aria-labelledby="social-title">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Where to find us</Eyebrow>
                <h2
                  id="social-title"
                  className="mt-6 font-serif text-[2rem] leading-[1.06] text-forest-900 sm:text-[2.6rem]"
                >
                  Watch, follow and
                  <span className="block text-moss-600 italic">keep discovering</span>
                </h2>
                <p className="mt-6 max-w-md text-[0.96rem] leading-[1.8] text-bark-600">
                  New episodes are published to YouTube and Facebook, with shorter cuts on
                  Instagram and TikTok. Handles below are placeholders — swap in your channels.
                </p>
              </Reveal>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {socials.map((s, i) => {
                const Icon = socialIconMap[s.name];
                return (
                  <Reveal as="li" key={s.name} delay={i * 80}>
                    <a
                      href={s.href}
                      className="group flex items-center gap-4 rounded-2xl border border-forest-900/8 bg-cream-50 p-5 transition-all duration-400 hover:-translate-y-1 hover:border-forest-800/35 hover:bg-white"
                    >
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-forest-800 text-cream-50 transition-transform duration-400 group-hover:scale-105">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-serif text-[1.1rem] text-forest-900">
                          {s.name}
                        </span>
                        <span className="mt-0.5 block truncate text-[0.78rem] text-bark-500">
                          {s.handle}
                        </span>
                      </span>
                    </a>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </Container>
      </section>

      <Newsletter />
    </>
  );
}
