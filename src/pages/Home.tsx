import { ArrowRight, Compass, Film, Play, Sparkles } from "lucide-react";
import Hero from "@/components/Hero";
import Storytelling from "@/components/Storytelling";
import DidYouKnow from "@/components/DidYouKnow";
import Newsletter from "@/components/Newsletter";
import { AdBanner, AdStrip, NativeBanner, ResponsiveBanner, SponsoredLink } from "@/components/Ads.tsx";
import { CategoryCard, StoryCard, VideoCard } from "@/components/cards";
import {
  Container,
  DemoBadge,
  Eyebrow,
  Reveal,
  SectionHeading,
} from "@/components/ui";
import { categories, IMAGES, journey, stories, videos } from "@/data/content";

export default function Home() {
  const latest = stories.slice(0, 6);
  const featured = stories[0];

  return (
    <>
      <Hero />
      <Intro />
      <ExploreCategories />
      <AdStrip tone="cream-100">
        <ResponsiveBanner />
      </AdStrip>
      <FeaturedStory featuredImage={IMAGES.featuredCattle} storyId={featured.id} />
      <LatestStories stories={latest} />
      <AdStrip>
        <NativeBanner />
      </AdStrip>
      <VideoShowcase />
      <Storytelling />
      <DidYouKnow />
      <AdStrip>
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-10">
          <AdBanner size="300x250" />
          <SponsoredLink className="w-full max-w-md" />
        </div>
      </AdStrip>
      <AboutStrip />
      <Newsletter />
    </>
  );
}

/* ------------------------------------------------------------------ */
function Intro() {
  const stats = [
    { value: "7+", label: "Categories", note: "Live now" },
    { value: "100s", label: "Stories", note: "Placeholder — update" },
    { value: "∞", label: "Discoveries", note: "Always growing" },
  ];

  return (
    <section id="welcome" className="relative bg-cream-50" aria-labelledby="welcome-title">
      <Container className="py-20 sm:py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <div>
            <Reveal>
              <Eyebrow>Welcome</Eyebrow>
              <h2
                id="welcome-title"
                className="mt-6 font-serif text-[2.1rem] leading-[1.05] text-forest-900 sm:text-[2.9rem] lg:text-[3.5rem]"
              >
                Welcome to the
                <span className="block text-moss-600 italic">Living World</span>
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-7 max-w-xl text-[1rem] leading-[1.8] text-bark-600 sm:text-[1.08rem]">
                At Tales of the Living, we turn curiosity into discovery. From a tiny insect to a
                mighty animal, from a simple fruit to an ancient tree — every living thing has
                something to tell us.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#/explore"
                  className="group inline-flex min-h-12 items-center gap-2.5 rounded-full bg-forest-800 px-6 text-[0.72rem] font-medium tracking-[0.18em] text-cream-50 uppercase transition-all duration-300 hover:bg-forest-700"
                >
                  Start exploring
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5"
                    strokeWidth={2}
                  />
                </a>
                <a
                  href="#/about"
                  className="inline-flex min-h-12 items-center gap-2.5 rounded-full border border-forest-900/15 px-6 text-[0.72rem] font-medium tracking-[0.18em] text-forest-800 uppercase transition-all duration-300 hover:border-forest-900/35 hover:bg-forest-900/5"
                >
                  Our story
                </a>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-forest-900/10 pt-8 sm:gap-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd>
                      <span className="block font-serif text-[1.9rem] leading-none text-forest-800 sm:text-[2.6rem]">
                        {s.value}
                      </span>
                      <span className="mt-2 block text-[0.62rem] font-medium tracking-[0.22em] text-bark-600 uppercase sm:text-[0.7rem]">
                        {s.label}
                      </span>
                      <span className="mt-1.5 block text-[0.6rem] text-bark-500/70 italic">
                        {s.note}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Editorial image */}
          <Reveal delay={140} className="relative">
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(8,25,15,0.55)]">
              <img
                src={IMAGES.introEditorial}
                alt="Sunlight filtering through the canopy of an ancient tropical forest"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1600ms] ease-out hover:scale-[1.04] sm:aspect-[5/4] lg:aspect-[4/5]"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-950/45 via-transparent to-transparent"
              />
            </div>

            <div className="absolute -bottom-6 -left-2 max-w-[16rem] rounded-2xl border border-forest-900/8 bg-cream-50 p-5 shadow-[0_24px_50px_-28px_rgba(8,25,15,0.6)] sm:-left-6">
              <Sparkles className="h-5 w-5 text-gold-600" strokeWidth={1.5} />
              <p className="mt-3 font-serif text-[1.05rem] leading-snug text-forest-900">
                Learning that feels like listening to a good story.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
function ExploreCategories() {
  return (
    <section className="relative bg-cream-100" aria-labelledby="categories-title">
      <Container className="py-20 sm:py-24 lg:py-32">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Categories"
            title={
              <>
                Explore the <span className="text-moss-600 italic">World of Life</span>
              </>
            }
            lead="Seven living worlds, each with its own vocabulary, rhythm and surprises. Pick a thread and follow it."
            className="max-w-2xl"
          />
          <Reveal delay={140}>
            <a
              href="#/explore"
              className="group inline-flex min-h-12 shrink-0 items-center gap-2.5 rounded-full border border-forest-900/15 px-6 text-[0.7rem] font-medium tracking-[0.18em] text-forest-800 uppercase transition-all duration-300 hover:border-forest-900/35 hover:bg-white"
            >
              <Compass className="h-4 w-4" strokeWidth={1.6} />
              All categories
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {categories.slice(0, 2).map((c, i) => (
            <Reveal key={c.id} delay={i * 80}>
              <CategoryCard category={c} />
            </Reveal>
          ))}

          {/* Tall feature card spanning rows on large screens */}
          <Reveal delay={160} className="lg:row-span-2">
            <CategoryCard category={categories[6]} size="tall" className="h-full" />
          </Reveal>

          {categories.slice(2, 6).map((c, i) => (
            <Reveal key={c.id} delay={(i + 3) * 70}>
              <CategoryCard category={c} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
function FeaturedStory({ featuredImage, storyId }: { featuredImage: string; storyId: string }) {
  return (
    <section className="relative overflow-hidden bg-forest-900" aria-labelledby="featured-title">
      <div className="grid lg:grid-cols-2">
        {/* Image */}
        <div className="relative order-1 min-h-[22rem] overflow-hidden lg:order-none lg:min-h-[38rem]">
          <img
            src={featuredImage}
            alt="A cow grazing in an open field at golden hour"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2000ms] ease-out hover:scale-105"
          />
          <span
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/25 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-forest-900/10 lg:to-forest-900"
          />
        </div>

        {/* Copy */}
        <div className="relative flex items-center">
          <div className="w-full px-5 py-16 sm:px-8 sm:py-20 lg:max-w-[46rem] lg:py-24 lg:pr-12 lg:pl-14 xl:pl-20">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <Eyebrow tone="cream">Featured Story</Eyebrow>
                <DemoBadge invert>Sample content — replace with your published story</DemoBadge>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <p className="mt-8 text-[0.62rem] font-medium tracking-[0.3em] text-moss-300 uppercase">
                Cattle &amp; Livestock
              </p>
              <h2
                id="featured-title"
                className="mt-4 font-serif text-[2.2rem] leading-[1.02] text-cream-50 sm:text-[3rem] lg:text-[3.6rem]"
              >
                The Sahiwal Cattle
              </h2>
            </Reveal>

            <Reveal delay={170}>
              <p className="mt-6 max-w-xl text-[1rem] leading-[1.8] text-cream-200/72">
                Known for its resilience, distinctive appearance and importance to livestock
                farming, Sahiwal cattle have a fascinating story rooted in the Indian
                subcontinent.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-cream-100/12 py-7 sm:grid-cols-4">
                {[
                  ["Scientific name", "Bos indicus"],
                  ["Local names", "Sahiwal, Lambi Bar"],
                  ["Origin", "Punjab region"],
                  ["Known for", "Heat tolerance"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[0.55rem] tracking-[0.22em] text-cream-200/40 uppercase">
                      {k}
                    </dt>
                    <dd className="mt-1.5 font-serif text-[0.98rem] text-cream-100 italic">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={310}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`#/stories?story=${storyId}`}
                  className="group inline-flex min-h-12 items-center gap-2.5 rounded-full bg-cream-50 px-7 text-[0.72rem] font-medium tracking-[0.18em] text-forest-900 uppercase transition-all duration-300 hover:bg-gold-300"
                >
                  Read Story
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5"
                    strokeWidth={2}
                  />
                </a>
                <a
                  href="#/explore?type=video"
                  className="inline-flex min-h-12 items-center gap-2.5 rounded-full border border-cream-100/28 px-7 text-[0.72rem] font-medium tracking-[0.18em] text-cream-50 uppercase transition-all duration-300 hover:border-gold-400/70 hover:bg-white/8"
                >
                  <Play className="h-3 w-3 fill-current" strokeWidth={0} />
                  Watch Video
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
function LatestStories({ stories: list }: { stories: typeof stories }) {
  return (
    <section className="relative bg-cream-50" aria-labelledby="latest-title">
      <Container className="py-20 sm:py-24 lg:py-32">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="From the archive"
            title={
              <>
                Latest <span className="text-moss-600 italic">Stories</span>
              </>
            }
            lead="Field notes, close observations and the small details that change how you see a species."
            className="max-w-2xl"
          />
          <Reveal delay={120}>
            <a
              href="#/stories"
              className="group inline-flex min-h-12 shrink-0 items-center gap-2.5 rounded-full border border-forest-900/15 px-6 text-[0.7rem] font-medium tracking-[0.18em] text-forest-800 uppercase transition-all duration-300 hover:border-forest-900/35 hover:bg-white"
            >
              All stories
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5"
                strokeWidth={2}
              />
            </a>
          </Reveal>
        </div>

        <Reveal delay={60} className="mt-8">
          <DemoBadge>Demo articles — swap in your published stories</DemoBadge>
        </Reveal>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {list.map((s, i) => (
            <Reveal as="li" key={s.id} delay={(i % 3) * 90}>
              <StoryCard story={s} className="h-full" />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
function VideoShowcase() {
  return (
    <section className="relative overflow-hidden bg-forest-950" aria-labelledby="videos-title">
      <div aria-hidden className="texture-grain pointer-events-none absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-moss-500/10 blur-[120px]"
      />

      <Container className="relative py-20 sm:py-24 lg:py-32">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            invert
            eyebrow="On screen"
            title={
              <>
                Watch the <span className="text-gold-300 italic">Stories</span>
              </>
            }
            lead="Short, cinematic episodes made for YouTube and Facebook — narrated, subtitled and built around one living thing at a time."
            className="max-w-2xl"
          />
          <Reveal delay={120}>
            <a
              href="#/explore?type=video"
              className="group inline-flex min-h-12 shrink-0 items-center gap-2.5 rounded-full border border-cream-100/25 px-6 text-[0.7rem] font-medium tracking-[0.18em] text-cream-50 uppercase transition-all duration-300 hover:border-gold-400/70 hover:bg-white/8"
            >
              <Film className="h-4 w-4" strokeWidth={1.6} />
              View All Videos
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5"
                strokeWidth={2}
              />
            </a>
          </Reveal>
        </div>

        <Reveal delay={60} className="mt-8">
          <DemoBadge invert>Placeholder thumbnails — link these to your uploads</DemoBadge>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-12 lg:gap-6">
          <Reveal delay={80} className="lg:col-span-7">
            <VideoCard video={videos[0]} featured className="h-full" />
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 lg:gap-6">
            {videos.slice(1, 3).map((v, i) => (
              <Reveal key={v.id} delay={140 + i * 90}>
                <VideoCard video={v} className="h-full" />
              </Reveal>
            ))}
          </div>

          <Reveal delay={260} className="lg:col-span-7">
            <VideoCard video={videos[3]} className="h-full" />
          </Reveal>

          <Reveal delay={330} className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-cream-100/12 bg-white/4 p-7 sm:p-9">
              <div>
                <p className="text-[0.58rem] font-medium tracking-[0.28em] text-gold-400/85 uppercase">
                  New episodes
                </p>
                <p className="mt-4 font-serif text-[1.5rem] leading-snug text-cream-50 sm:text-[1.8rem]">
                  Every episode opens with a question and ends with something you didn’t know.
                </p>
                <p className="mt-4 text-[0.88rem] leading-relaxed text-cream-200/60">
                  Subscribe on YouTube and follow along on Facebook to catch each new story from
                  the living world.
                </p>
              </div>
              <a
                href="#/explore?type=video"
                className="group inline-flex min-h-12 w-fit items-center gap-2.5 rounded-full bg-cream-50 px-6 text-[0.7rem] font-medium tracking-[0.18em] text-forest-900 uppercase transition-all duration-300 hover:bg-gold-300"
              >
                Browse the video library
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5"
                  strokeWidth={2}
                />
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
function AboutStrip() {
  return (
    <section className="relative bg-cream-50" aria-labelledby="about-strip-title">
      <Container className="py-20 sm:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>About the brand</Eyebrow>
              <h2
                id="about-strip-title"
                className="mt-6 font-serif text-[2rem] leading-[1.06] text-forest-900 sm:text-[2.7rem] lg:text-[3.1rem]"
              >
                Stories that help us
                <span className="block text-moss-600 italic">understand life</span>
              </h2>
            </Reveal>
            <Reveal delay={110}>
              <p className="mt-7 text-[0.98rem] leading-[1.8] text-bark-600">
                Tales of the Living is an educational content platform dedicated to exploring the
                natural world through storytelling, visual learning and fascinating facts.
              </p>
              <p className="mt-5 border-l-2 border-gold-500/60 pl-5 font-serif text-[1.15rem] leading-snug text-forest-800 italic sm:text-[1.3rem]">
                Our mission: to make learning about nature simple, engaging and memorable.
              </p>
            </Reveal>
            <Reveal delay={190}>
              <a
                href="#/about"
                className="group mt-8 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-forest-800 px-6 text-[0.72rem] font-medium tracking-[0.18em] text-cream-50 uppercase transition-all duration-300 hover:bg-forest-700"
              >
                More about us
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5"
                  strokeWidth={2}
                />
              </a>
            </Reveal>
          </div>

          {/* Journey */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[0.6rem] font-medium tracking-[0.3em] text-bark-500 uppercase">
                The journey of every episode
              </p>
            </Reveal>
            <ol className="mt-8 grid gap-4 sm:grid-cols-2">
              {journey.map((j, i) => (
                <Reveal as="li" key={j.step} delay={i * 90}>
                  <div className="group relative h-full overflow-hidden rounded-3xl border border-forest-900/8 bg-cream-100 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/40 hover:bg-white">
                    <span
                      aria-hidden
                      className="absolute -top-4 -right-1 font-serif text-[4.5rem] leading-none text-forest-900/6 transition-colors duration-500 group-hover:text-gold-500/20"
                    >
                      {j.step}
                    </span>
                    <h3 className="relative font-serif text-[1.35rem] text-forest-900">{j.title}</h3>
                    <p className="relative mt-3 text-[0.88rem] leading-relaxed text-bark-600">
                      {j.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={360}>
              <ul className="mt-8 flex flex-wrap gap-2">
                {categories.map((c) => (
                  <li key={c.id}>
                    <a
                      href={`#/explore?category=${c.id}`}
                      className="inline-block rounded-full border border-forest-900/12 bg-white px-4 py-2.5 text-[0.7rem] font-medium tracking-[0.1em] text-bark-600 uppercase transition-all duration-300 hover:border-forest-800 hover:bg-forest-800 hover:text-cream-50"
                    >
                      {c.short}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
