import { ArrowRight, Clock, Play } from "lucide-react";
import { cn } from "@/utils/cn";
import { categoryMap, type Category, type Story, type Video } from "@/data/content";

/* ------------------------------------------------------------------ */
/* Category card                                                       */
/* ------------------------------------------------------------------ */
export function CategoryCard({
  category,
  className,
  size = "default",
}: {
  category: Category;
  className?: string;
  size?: "default" | "tall";
}) {
  return (
    <a
      href={`#/explore?category=${category.id}`}
      className={cn(
        "group relative isolate flex overflow-hidden rounded-3xl bg-forest-900 ring-1 ring-forest-900/10 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(8,25,15,0.7)]",
        size === "tall" ? "min-h-[26rem] lg:min-h-full" : "min-h-[19rem] sm:min-h-[21rem]",
        className,
      )}
    >
      <img
        src={category.image}
        alt={category.name}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.09]"
      />
      <span
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950 via-forest-950/55 to-forest-950/10 transition-opacity duration-500 group-hover:from-forest-950 group-hover:via-forest-950/65"
      />

      <div className="mt-auto flex w-full flex-col p-6 sm:p-7">
        <span className="text-[0.58rem] font-medium tracking-[0.28em] text-gold-400/90 uppercase">
          {category.accent}
        </span>
        <h3 className="mt-2.5 font-serif text-[1.45rem] leading-tight text-cream-50 sm:text-[1.6rem]">
          {category.name}
        </h3>
        <p className="mt-2.5 max-w-md text-[0.85rem] leading-relaxed text-cream-200/70">
          {category.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-[0.7rem] font-medium tracking-[0.2em] text-cream-50 uppercase">
          Explore
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform duration-400 group-hover:translate-x-1.5"
            strokeWidth={1.8}
          />
        </span>
        <span
          aria-hidden
          className="mt-4 h-px w-full origin-left scale-x-[0.12] bg-gold-400/70 transition-transform duration-600 ease-out group-hover:scale-x-100"
        />
      </div>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Story card                                                          */
/* ------------------------------------------------------------------ */
export function StoryCard({
  story,
  className,
  compact = false,
}: {
  story: Story;
  className?: string;
  compact?: boolean;
}) {
  const cat = categoryMap[story.category];
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl border border-forest-900/8 bg-white shadow-[0_2px_14px_-8px_rgba(8,25,15,0.25)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-forest-900/14 hover:shadow-[0_28px_55px_-30px_rgba(8,25,15,0.55)]",
        className,
      )}
    >
      <div className={cn("relative overflow-hidden", compact ? "aspect-[16/10]" : "aspect-[4/3]")}>
        <img
          src={story.image}
          alt={story.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.07]"
        />
        <span
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-forest-950/55 via-transparent to-transparent opacity-70"
        />
        <span className="absolute top-4 left-4 rounded-full bg-forest-950/70 px-3 py-1.5 text-[0.56rem] font-medium tracking-[0.22em] text-gold-300 uppercase backdrop-blur-sm">
          {cat.name}
        </span>
        {story.hasVideo && (
          <span className="absolute right-4 bottom-4 inline-flex items-center gap-1.5 rounded-full bg-cream-50/92 px-3 py-1.5 text-[0.6rem] font-medium tracking-[0.14em] text-forest-900 uppercase">
            <Play className="h-2.5 w-2.5 fill-current" strokeWidth={0} /> {story.watchTime}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-serif text-[1.22rem] leading-snug text-forest-900 transition-colors duration-300 group-hover:text-forest-600 sm:text-[1.35rem]">
          {story.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-[0.875rem] leading-relaxed text-bark-600">
          {story.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-forest-900/8 pt-4">
          <span className="inline-flex items-center gap-1.5 text-[0.68rem] tracking-[0.08em] text-bark-500">
            <Clock className="h-3.5 w-3.5" strokeWidth={1.6} />
            {story.readTime}
          </span>
          <a
            href={`#/stories?story=${story.id}`}
            className="inline-flex items-center gap-1.5 text-[0.66rem] font-medium tracking-[0.2em] text-forest-700 uppercase transition-colors hover:text-gold-600"
          >
            {story.hasVideo ? "Read / Watch" : "Read More"}
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.8}
            />
          </a>
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Video card                                                          */
/* ------------------------------------------------------------------ */
export function VideoCard({
  video,
  className,
  featured = false,
}: {
  video: Video;
  className?: string;
  featured?: boolean;
}) {
  const cat = categoryMap[video.category];
  return (
    <a
      href="#/explore?type=video"
      className={cn(
        "group relative isolate block overflow-hidden rounded-3xl bg-forest-900 ring-1 ring-cream-100/10 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:ring-gold-400/35",
        className,
      )}
      aria-label={`Watch: ${video.title}`}
    >
      <div className={cn("relative", featured ? "aspect-[16/10] lg:aspect-[16/9]" : "aspect-video")}>
        <img
          src={video.thumbnail}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover opacity-90 transition-transform duration-[1300ms] ease-out group-hover:scale-[1.07] group-hover:opacity-100"
        />
        <span
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/35 to-forest-950/5"
        />

        {/* Play button */}
        <span className="absolute inset-0 grid place-items-center">
          <span className="relative grid h-16 w-16 place-items-center rounded-full border border-cream-50/45 bg-forest-950/35 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-gold-400/80 group-hover:bg-forest-950/55 sm:h-[4.5rem] sm:w-[4.5rem]">
            <span
              aria-hidden
              className="animate-soft-pulse absolute inset-0 rounded-full border border-gold-400/40"
            />
            <Play className="ml-0.5 h-6 w-6 fill-cream-50 text-cream-50" strokeWidth={0} />
          </span>
        </span>

        <span className="absolute top-4 left-4 rounded-full bg-forest-950/65 px-3 py-1.5 text-[0.55rem] font-medium tracking-[0.22em] text-gold-300 uppercase backdrop-blur-sm">
          {cat.name}
        </span>
        <span className="absolute top-4 right-4 rounded-md bg-forest-950/75 px-2.5 py-1 font-sans text-[0.68rem] font-medium text-cream-100 tabular-nums backdrop-blur-sm">
          {video.duration}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <h3
          className={cn(
            "font-serif leading-snug text-cream-50",
            featured ? "text-xl sm:text-2xl lg:text-[1.75rem]" : "text-[1.1rem] sm:text-[1.2rem]",
          )}
        >
          {video.title}
        </h3>
        <p className="mt-2 line-clamp-2 max-w-lg text-[0.82rem] leading-relaxed text-cream-200/65">
          {video.blurb}
        </p>
      </div>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Content card (Explore grid — horizontal on wide screens)            */
/* ------------------------------------------------------------------ */
export function ContentCard({ story }: { story: Story }) {
  const cat = categoryMap[story.category];
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-forest-900/8 bg-cream-50 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-forest-900/16 hover:shadow-[0_26px_50px_-30px_rgba(8,25,15,0.5)] sm:flex-row">
      <div className="relative aspect-[16/10] shrink-0 overflow-hidden sm:aspect-auto sm:w-[38%]">
        <img
          src={story.image}
          alt={story.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.08]"
        />
        {story.hasVideo && (
          <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-forest-950/72 px-2.5 py-1.5 text-[0.58rem] font-medium tracking-[0.14em] text-cream-100 uppercase backdrop-blur-sm">
            <Play className="h-2.5 w-2.5 fill-current" strokeWidth={0} /> {story.watchTime}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="text-[0.56rem] font-medium tracking-[0.26em] text-gold-600 uppercase">
          {cat.name}
        </span>
        <h3 className="mt-2.5 font-serif text-[1.2rem] leading-snug text-forest-900 sm:text-[1.32rem]">
          {story.title}
        </h3>
        <p className="mt-2.5 line-clamp-3 text-[0.85rem] leading-relaxed text-bark-600">
          {story.excerpt}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-5">
          <a
            href={`#/stories?story=${story.id}`}
            className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-forest-800 px-4 text-[0.64rem] font-medium tracking-[0.16em] text-cream-50 uppercase transition-colors hover:bg-forest-700"
          >
            Read
            <ArrowRight className="h-3 w-3" strokeWidth={2} />
          </a>
          {story.hasVideo && (
            <a
              href="#/explore?type=video"
              className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-forest-900/18 px-4 text-[0.64rem] font-medium tracking-[0.16em] text-forest-800 uppercase transition-colors hover:border-forest-900/40 hover:bg-forest-900/5"
            >
              <Play className="h-2.5 w-2.5 fill-current" strokeWidth={0} />
              Watch
            </a>
          )}
          <span className="ml-auto inline-flex items-center gap-1.5 text-[0.66rem] text-bark-500">
            <Clock className="h-3.5 w-3.5" strokeWidth={1.6} />
            {story.readTime}
          </span>
        </div>
      </div>
    </article>
  );
}
