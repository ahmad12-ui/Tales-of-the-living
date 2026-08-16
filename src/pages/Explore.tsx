import { useEffect, useMemo, useState } from "react";
import { BookOpen, Film, LayoutGrid, SearchX } from "lucide-react";
import { cn } from "@/utils/cn";
import { categories, categoryMap, IMAGES, stories, videos } from "@/data/content";
import { Container, DemoBadge, Eyebrow, Reveal } from "@/components/ui";
import SearchFilter, { type FilterId, type SortKey } from "@/components/SearchFilter";
import { ContentCard, VideoCard } from "@/components/cards";
import Newsletter from "@/components/Newsletter";

type MediaType = "all" | "story" | "video";

const mediaTabs: { id: MediaType; label: string; icon: typeof LayoutGrid }[] = [
  { id: "all", label: "Everything", icon: LayoutGrid },
  { id: "story", label: "Stories", icon: BookOpen },
  { id: "video", label: "Videos", icon: Film },
];

export default function Explore({ query: params }: { query: URLSearchParams }) {
  const [q, setQ] = useState(params.get("q") ?? "");
  const [filter, setFilter] = useState<FilterId>(
    (params.get("category") as FilterId) ?? "all",
  );
  const [sort, setSort] = useState<SortKey>("newest");
  const [media, setMedia] = useState<MediaType>(
    (params.get("type") as MediaType) ?? "all",
  );

  // Keep in sync when arriving from a nav link with different params
  useEffect(() => {
    setQ(params.get("q") ?? "");
    setFilter((params.get("category") as FilterId) ?? "all");
    setMedia((params.get("type") as MediaType) ?? "all");
  }, [params]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    let list = stories.filter((s) => {
      const matchesCat = filter === "all" || s.category === filter;
      const matchesMedia = media === "video" ? s.hasVideo : true;
      const matchesTerm =
        !term ||
        s.title.toLowerCase().includes(term) ||
        s.excerpt.toLowerCase().includes(term) ||
        s.tags.some((t) => t.toLowerCase().includes(term)) ||
        categoryMap[s.category].name.toLowerCase().includes(term);
      return matchesCat && matchesMedia && matchesTerm;
    });

    list = [...list].sort((a, b) => {
      switch (sort) {
        case "oldest":
          return a.published.localeCompare(b.published);
        case "popular":
          return b.popularity - a.popularity;
        case "az":
          return a.title.localeCompare(b.title);
        default:
          return b.published.localeCompare(a.published);
      }
    });
    return list;
  }, [q, filter, sort, media]);

  const showVideoRail = media !== "story";

  return (
    <>
      {/* Page hero */}
      <header className="relative isolate flex min-h-[62vh] items-end overflow-hidden bg-forest-950 pt-28 sm:min-h-[68vh]">
        <img
          src={IMAGES.exploreHero}
          alt="Aerial view of a lush green forest and wetland"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          decoding="async"
        />
        <span
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950 via-forest-950/60 to-forest-950/70"
        />
        <div aria-hidden className="texture-grain absolute inset-0 -z-10 opacity-30" />

        <Container className="relative pb-14 sm:pb-20">
          <Eyebrow tone="cream">Discover</Eyebrow>
          <h1 className="mt-5 max-w-4xl font-serif text-[2.4rem] leading-[1.02] text-cream-50 sm:text-[3.4rem] lg:text-[4.4rem]">
            Explore the <span className="text-gold-300 italic">Living World</span>
          </h1>
          <p className="mt-6 max-w-xl text-[0.98rem] leading-[1.75] text-cream-200/72 sm:text-[1.05rem]">
            Search the archive, filter by category and follow whatever makes you curious — from
            indigenous cattle breeds to the insects in your garden.
          </p>
        </Container>
      </header>

      {/* Toolbar */}
      <section className="relative bg-cream-100 pb-4" aria-label="Search and filters">
        <Container className="-mt-10 sm:-mt-12">
          <Reveal>
            <SearchFilter
              query={q}
              onQuery={setQ}
              active={filter}
              onFilter={setFilter}
              sort={sort}
              onSort={setSort}
              resultCount={results.length}
            />
          </Reveal>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div
              className="inline-flex rounded-full border border-forest-900/10 bg-white p-1"
              role="tablist"
              aria-label="Content type"
            >
              {mediaTabs.map((t) => {
                const Icon = t.icon;
                const active = media === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setMedia(t.id)}
                    className={cn(
                      "inline-flex min-h-10 items-center gap-2 rounded-full px-4 text-[0.68rem] font-medium tracking-[0.14em] uppercase transition-all duration-300 sm:px-5",
                      active
                        ? "bg-forest-800 text-cream-50"
                        : "text-bark-600 hover:text-forest-800",
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" strokeWidth={1.7} />
                    {t.label}
                  </button>
                );
              })}
            </div>
            <DemoBadge>Demo library — replace with your published catalogue</DemoBadge>
          </div>
        </Container>
      </section>

      {/* Video rail */}
      {showVideoRail && (
        <section className="bg-cream-100 pt-12" aria-labelledby="explore-videos">
          <Container>
            <div className="flex items-end justify-between gap-4">
              <h2
                id="explore-videos"
                className="font-serif text-[1.5rem] text-forest-900 sm:text-[1.9rem]"
              >
                Featured videos
              </h2>
              <span className="text-[0.62rem] tracking-[0.24em] text-bark-500 uppercase">
                {videos.length} episodes
              </span>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {videos.map((v, i) => (
                <Reveal key={v.id} delay={i * 70}>
                  <VideoCard video={v} className="h-full" />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Results grid */}
      <section className="bg-cream-100 pt-14 pb-20 sm:pt-16 sm:pb-28" aria-label="Results">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-serif text-[1.5rem] text-forest-900 sm:text-[1.9rem]">
              {filter === "all" ? "All content" : categoryMap[filter].name}
            </h2>
            {filter !== "all" && (
              <button
                type="button"
                onClick={() => setFilter("all")}
                className="text-[0.66rem] tracking-[0.18em] text-bark-500 uppercase underline underline-offset-4 transition-colors hover:text-forest-800"
              >
                Clear filter
              </button>
            )}
          </div>

          {results.length === 0 ? (
            <div className="mt-10 rounded-3xl border border-dashed border-forest-900/15 bg-cream-50 px-6 py-20 text-center">
              <SearchX className="mx-auto h-9 w-9 text-bark-500/60" strokeWidth={1.3} />
              <p className="mt-5 font-serif text-2xl text-forest-900">Nothing found here yet</p>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-bark-600">
                Try a broader search term, or reset the filters to browse the whole living world.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQ("");
                  setFilter("all");
                  setMedia("all");
                }}
                className="mt-7 inline-flex min-h-11 items-center rounded-full bg-forest-800 px-6 text-[0.7rem] font-medium tracking-[0.18em] text-cream-50 uppercase transition-colors hover:bg-forest-700"
              >
                Reset everything
              </button>
            </div>
          ) : (
            <ul className="mt-8 grid gap-5 lg:grid-cols-2 lg:gap-6">
              {results.map((s, i) => (
                <Reveal as="li" key={s.id} delay={(i % 2) * 80}>
                  <ContentCard story={s} />
                </Reveal>
              ))}
            </ul>
          )}

          {/* Category shortcuts */}
          <Reveal className="mt-16">
            <div className="rounded-3xl border border-forest-900/8 bg-cream-50 p-6 sm:p-8">
              <p className="text-[0.6rem] font-medium tracking-[0.3em] text-bark-500 uppercase">
                Jump to a category
              </p>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {categories.map((c) => (
                  <li key={c.id}>
                    <button
                      type="button"
                      onClick={() => setFilter(c.id)}
                      className={cn(
                        "inline-flex min-h-10 items-center rounded-full border px-4 text-[0.7rem] font-medium tracking-[0.1em] uppercase transition-all duration-300",
                        filter === c.id
                          ? "border-forest-800 bg-forest-800 text-cream-50"
                          : "border-forest-900/12 text-bark-600 hover:border-forest-900/35 hover:text-forest-800",
                      )}
                    >
                      {c.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <Newsletter />
    </>
  );
}
