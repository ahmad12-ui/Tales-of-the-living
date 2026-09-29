import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Clock, Flame, Play, Search, X } from "lucide-react";
import { cn } from "@/utils/cn";
import {
  categories,
  categoryMap,
  IMAGES,
  stories,
  type Story,
} from "@/data/content";
import { Container, DemoBadge, Eyebrow, Reveal, SectionHeading } from "@/components/ui";
import { StoryCard } from "@/components/cards";
import Newsletter from "@/components/Newsletter";
import { AdStrip, NativeBanner, ResponsiveBanner, SponsoredLink } from "@/components/Ads.tsx";
import type { FilterId } from "@/components/SearchFilter";

export default function Stories({ query: params }: { query: URLSearchParams }) {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<FilterId>("all");
  const [openStory, setOpenStory] = useState<Story | null>(null);

  useEffect(() => {
    const id = params.get("story");
    setOpenStory(id ? (stories.find((s) => s.id === id) ?? null) : null);
  }, [params]);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return stories.filter((s) => {
      const byCat = filter === "all" || s.category === filter;
      const byTerm =
        !term ||
        s.title.toLowerCase().includes(term) ||
        s.excerpt.toLowerCase().includes(term) ||
        s.tags.some((t) => t.toLowerCase().includes(term));
      return byCat && byTerm;
    });
  }, [q, filter]);

  const lead = filtered[0] ?? stories[0];
  const rest = filtered.slice(1);
  const popular = [...stories].sort((a, b) => b.popularity - a.popularity).slice(0, 4);

  return (
    <>
      {/* Masthead */}
      <header className="relative isolate flex min-h-[58vh] items-end overflow-hidden bg-forest-950 pt-28">
        <img
          src={IMAGES.storiesHero}
          alt="Fog rolling across dark forested hills"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-90"
          decoding="async"
        />
        <span
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950 via-forest-950/55 to-forest-950/70"
        />
        <div aria-hidden className="texture-grain absolute inset-0 -z-10 opacity-30" />

        <Container className="relative pb-14 sm:pb-20">
          <Eyebrow tone="cream">The archive</Eyebrow>
          <h1 className="mt-5 max-w-4xl font-serif text-[2.4rem] leading-[1.02] text-cream-50 sm:text-[3.4rem] lg:text-[4.4rem]">
            Stories from the <span className="text-gold-300 italic">living world</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[0.98rem] leading-[1.75] text-cream-200/72 sm:text-[1.05rem]">
            Every entry follows the same path — a question, a name, a habitat, a life. Written to
            be read in a sitting and remembered for longer.
          </p>
        </Container>
      </header>

      {/* Filter bar */}
      <div className="sticky top-16 z-30 border-y border-forest-900/8 bg-cream-50/92 backdrop-blur-md lg:top-[4.5rem]">
        <Container className="flex flex-col gap-3 py-3.5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {[{ id: "all" as FilterId, label: "All" }, ...categories.map((c) => ({ id: c.id as FilterId, label: c.short }))].map(
              (f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  aria-pressed={filter === f.id}
                  className={cn(
                    "shrink-0 rounded-full px-4 py-2.5 text-[0.68rem] font-medium tracking-[0.14em] whitespace-nowrap uppercase transition-all duration-300",
                    filter === f.id
                      ? "bg-forest-800 text-cream-50"
                      : "text-bark-600 hover:bg-forest-900/6 hover:text-forest-800",
                  )}
                >
                  {f.label}
                </button>
              ),
            )}
          </div>

          <div className="relative w-full lg:w-72">
            <Search
              className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-bark-500/60"
              strokeWidth={1.6}
            />
            <label htmlFor="stories-search" className="sr-only">
              Search stories
            </label>
            <input
              id="stories-search"
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search the archive…"
              className="min-h-11 w-full rounded-full border border-forest-900/12 bg-white pr-4 pl-11 text-[0.88rem] text-forest-900 placeholder:text-bark-500/55 focus:border-forest-600/50 focus:outline-none"
            />
          </div>
        </Container>
      </div>

      {/* Featured */}
      <section className="bg-cream-50 py-16 sm:py-20" aria-labelledby="featured-story-title">
        <Container>
          <Reveal className="mb-8 flex flex-wrap items-center gap-3">
            <Eyebrow>Featured story</Eyebrow>
            <DemoBadge>Sample content</DemoBadge>
          </Reveal>

          <Reveal delay={80}>
            <article className="group grid overflow-hidden rounded-[2rem] border border-forest-900/8 bg-white lg:grid-cols-2">
              <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[30rem]">
                <img
                  src={lead.image}
                  alt={lead.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-forest-950/40 to-transparent"
                />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <span className="text-[0.58rem] font-medium tracking-[0.28em] text-gold-600 uppercase">
                  {categoryMap[lead.category].name}
                </span>
                <h2
                  id="featured-story-title"
                  className="mt-4 font-serif text-[1.9rem] leading-[1.06] text-forest-900 sm:text-[2.5rem] lg:text-[2.9rem]"
                >
                  {lead.title}
                </h2>
                <p className="mt-5 text-[0.98rem] leading-[1.8] text-bark-600">{lead.excerpt}</p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {lead.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-cream-100 px-3 py-1.5 text-[0.65rem] tracking-[0.1em] text-bark-600 uppercase"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setOpenStory(lead)}
                    className="group/btn inline-flex min-h-12 items-center gap-2.5 rounded-full bg-forest-800 px-6 text-[0.72rem] font-medium tracking-[0.18em] text-cream-50 uppercase transition-colors hover:bg-forest-700"
                  >
                    Read Story
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1.5"
                      strokeWidth={2}
                    />
                  </button>
                  {lead.hasVideo && (
                    <a
                      href="#/explore?type=video"
                      className="inline-flex min-h-12 items-center gap-2.5 rounded-full border border-forest-900/15 px-6 text-[0.72rem] font-medium tracking-[0.18em] text-forest-800 uppercase transition-colors hover:border-forest-900/35 hover:bg-cream-100"
                    >
                      <Play className="h-3 w-3 fill-current" strokeWidth={0} />
                      Watch Video
                    </a>
                  )}
                  <span className="inline-flex items-center gap-1.5 text-[0.7rem] text-bark-500">
                    <Clock className="h-3.5 w-3.5" strokeWidth={1.6} />
                    {lead.readTime}
                  </span>
                </div>
              </div>
            </article>
          </Reveal>
        </Container>
      </section>

      <AdStrip tone="cream-100">
        <ResponsiveBanner />
      </AdStrip>

      {/* Latest grid */}
      <section className="bg-cream-100 py-16 sm:py-20 lg:py-24" aria-labelledby="latest-archive">
        <Container>
          <SectionHeading
            eyebrow="Latest"
            title={
              <>
                Recently <span className="text-moss-600 italic">published</span>
              </>
            }
            lead="The newest entries in the archive, ordered by publication date."
          />

          {rest.length === 0 ? (
            <p className="mt-10 rounded-3xl border border-dashed border-forest-900/15 bg-cream-50 px-6 py-16 text-center text-bark-600">
              No further stories match this filter yet.
            </p>
          ) : (
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
              {rest.map((s, i) => (
                <Reveal as="li" key={s.id} delay={(i % 3) * 80}>
                  <StoryCard story={s} className="h-full" />
                </Reveal>
              ))}
            </ul>
          )}
        </Container>
      </section>

      <AdStrip>
        <NativeBanner />
        <SponsoredLink className="w-full max-w-md" />
      </AdStrip>

      {/* Popular */}
      <section className="relative overflow-hidden bg-forest-950 py-16 sm:py-20 lg:py-24" aria-labelledby="popular-title">
        <div aria-hidden className="texture-grain pointer-events-none absolute inset-0 opacity-40" />
        <Container className="relative">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              invert
              eyebrow="Most read"
              title={
                <>
                  Popular <span className="text-gold-300 italic">this season</span>
                </>
              }
              lead="What readers and viewers keep coming back to."
              className="max-w-xl"
            />
            <Reveal delay={100}>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 px-4 py-2.5 text-[0.62rem] tracking-[0.2em] text-gold-300 uppercase">
                <Flame className="h-3.5 w-3.5" strokeWidth={1.7} />
                Demo ranking
              </span>
            </Reveal>
          </div>

          <ol className="mt-10 grid gap-4 lg:grid-cols-2">
            {popular.map((s, i) => (
              <Reveal as="li" key={s.id} delay={(i % 2) * 90}>
                <button
                  type="button"
                  onClick={() => setOpenStory(s)}
                  className="group flex w-full items-center gap-5 rounded-2xl border border-cream-100/10 bg-white/4 p-4 text-left transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/35 hover:bg-white/8 sm:p-5"
                >
                  <span className="font-serif text-[2.2rem] leading-none text-cream-100/18 transition-colors duration-500 group-hover:text-gold-400/50 sm:text-[2.8rem]">
                    0{i + 1}
                  </span>
                  <img
                    src={s.image}
                    alt=""
                    loading="lazy"
                    className="hidden h-20 w-28 shrink-0 rounded-xl object-cover sm:block"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[0.55rem] tracking-[0.24em] text-gold-400/85 uppercase">
                      {categoryMap[s.category].name}
                    </span>
                    <span className="mt-1.5 block font-serif text-[1.15rem] leading-snug text-cream-50 sm:text-[1.3rem]">
                      {s.title}
                    </span>
                    <span className="mt-1.5 block text-[0.72rem] text-cream-200/45">
                      {s.readTime}
                      {s.hasVideo && ` · Video ${s.watchTime}`}
                    </span>
                  </span>
                  <ArrowRight
                    className="hidden h-4 w-4 shrink-0 text-cream-200/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold-300 sm:block"
                    strokeWidth={1.8}
                  />
                </button>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <Newsletter />

      <StoryReader story={openStory} onClose={() => setOpenStory(null)} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Reading panel — demonstrates the episode structure                  */
/* ------------------------------------------------------------------ */
function StoryReader({ story, onClose }: { story: Story | null; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = story ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [story]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!story) return null;
  const cat = categoryMap[story.category];

  const sections = [
    ["Scientific name", "Placeholder — add the accepted binomial name here."],
    ["Local names", story.tags.join(" · ")],
    ["Habitat", "Placeholder — describe the typical range and preferred habitat."],
    ["Distribution", "Placeholder — list the regions where this species is found."],
    ["Diet", "Placeholder — outline what it eats and how it forages."],
    ["Lifespan", "Placeholder — typical lifespan in the wild and in care."],
    ["Characteristics", "Placeholder — size, markings, behaviour and distinguishing traits."],
    ["Importance", "Placeholder — ecological, cultural or agricultural significance."],
  ];

  return (
    <div className="fixed inset-0 z-[70] flex" role="dialog" aria-modal="true" aria-label={story.title}>
      <div className="absolute inset-0 bg-forest-950/75 backdrop-blur-sm" onClick={onClose} />

      <article className="relative ml-auto flex h-full w-full max-w-3xl flex-col overflow-y-auto bg-cream-50 shadow-2xl">
        <div className="relative h-56 shrink-0 sm:h-72">
          <img src={story.image} alt="" className="h-full w-full object-cover" />
          <span
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-cream-50 via-forest-950/25 to-forest-950/40"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close story"
            className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-forest-950/60 text-cream-50 backdrop-blur transition-colors hover:bg-forest-950/85"
          >
            <X className="h-5 w-5" strokeWidth={1.7} />
          </button>
        </div>

        <div className="px-6 pt-2 pb-16 sm:px-10 lg:px-14">
          <span className="text-[0.58rem] font-medium tracking-[0.28em] text-gold-600 uppercase">
            {cat.name}
          </span>
          <h2 className="mt-4 font-serif text-[1.9rem] leading-[1.06] text-forest-900 sm:text-[2.6rem]">
            {story.title}
          </h2>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.72rem] text-bark-500">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" strokeWidth={1.6} />
              {story.readTime}
            </span>
            {story.hasVideo && (
              <span className="inline-flex items-center gap-1.5">
                <Play className="h-2.5 w-2.5 fill-current" strokeWidth={0} />
                Video {story.watchTime}
              </span>
            )}
            <span>Published {new Date(story.published).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}</span>
          </div>

          <div className="mt-6">
            <DemoBadge>Sample article — replace with your written story</DemoBadge>
          </div>

          {/* Storytelling opener */}
          <div className="mt-8 rounded-2xl border border-forest-900/8 bg-cream-100 p-6">
            <p className="text-[0.55rem] tracking-[0.26em] text-bark-500 uppercase">
              How the episode opens
            </p>
            <p className="mt-3 font-serif text-lg text-forest-900 italic">
              “Dadi, ye kya hai?” — and the answer becomes the whole story.
            </p>
          </div>

          <p className="mt-8 font-serif text-[1.2rem] leading-[1.7] text-forest-800">
            {story.excerpt}
          </p>

          <dl className="mt-10 divide-y divide-forest-900/8 border-y border-forest-900/8">
            {sections.map(([k, v]) => (
              <div key={k} className="grid gap-1 py-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
                <dt className="text-[0.6rem] font-medium tracking-[0.22em] text-bark-500 uppercase">
                  {k}
                </dt>
                <dd className="text-[0.94rem] leading-relaxed text-bark-700">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            {story.hasVideo && (
              <a
                href="#/explore?type=video"
                onClick={onClose}
                className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-forest-800 px-6 text-[0.72rem] font-medium tracking-[0.18em] text-cream-50 uppercase transition-colors hover:bg-forest-700"
              >
                <Play className="h-3 w-3 fill-current" strokeWidth={0} />
                Watch the video
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="inline-flex min-h-12 items-center rounded-full border border-forest-900/15 px-6 text-[0.72rem] font-medium tracking-[0.18em] text-forest-800 uppercase transition-colors hover:bg-cream-100"
            >
              Back to archive
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
