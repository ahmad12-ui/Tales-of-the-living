import { Search, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { categories, type CategoryId } from "@/data/content";

export type SortKey = "newest" | "oldest" | "popular" | "az";
export type FilterId = "all" | CategoryId;

export const sortOptions: { value: SortKey; label: string }[] = [
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "popular", label: "Most popular" },
  { value: "az", label: "Title A–Z" },
];

export const filterOptions: { id: FilterId; label: string }[] = [
  { id: "all", label: "All" },
  ...categories.map((c) => ({ id: c.id as FilterId, label: c.short })),
];

interface Props {
  query: string;
  onQuery: (v: string) => void;
  active: FilterId;
  onFilter: (v: FilterId) => void;
  sort: SortKey;
  onSort: (v: SortKey) => void;
  resultCount: number;
  variant?: "light" | "dark";
  placeholder?: string;
}

export default function SearchFilter({
  query,
  onQuery,
  active,
  onFilter,
  sort,
  onSort,
  resultCount,
  variant = "light",
  placeholder = "Search stories, species, topics…",
}: Props) {
  const dark = variant === "dark";

  return (
    <div
      className={cn(
        "rounded-3xl border p-5 sm:p-6",
        dark
          ? "border-cream-100/12 bg-forest-900/70 backdrop-blur-md"
          : "border-forest-900/10 bg-white shadow-[0_18px_44px_-34px_rgba(8,25,15,0.5)]",
      )}
    >
      {/* Search + sort row */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <div className="relative flex-1">
          <Search
            className={cn(
              "pointer-events-none absolute top-1/2 left-5 h-[1.05rem] w-[1.05rem] -translate-y-1/2",
              dark ? "text-cream-200/45" : "text-bark-500/60",
            )}
            strokeWidth={1.6}
          />
          <label htmlFor="content-search" className="sr-only">
            Search content
          </label>
          <input
            id="content-search"
            type="search"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder={placeholder}
            className={cn(
              "min-h-12 w-full rounded-full border pr-11 pl-13 text-[0.92rem] transition-colors duration-300 focus:outline-none",
              dark
                ? "border-cream-100/15 bg-cream-50/5 text-cream-50 placeholder:text-cream-200/35 focus:border-gold-400/70"
                : "border-forest-900/12 bg-cream-50 text-forest-900 placeholder:text-bark-500/55 focus:border-forest-600/50",
            )}
          />
          {query && (
            <button
              type="button"
              onClick={() => onQuery("")}
              aria-label="Clear search"
              className={cn(
                "absolute top-1/2 right-3.5 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full transition-colors",
                dark
                  ? "text-cream-200/50 hover:bg-white/10"
                  : "text-bark-500 hover:bg-forest-900/8",
              )}
            >
              <X className="h-3.5 w-3.5" strokeWidth={2} />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <SlidersHorizontal
            className={cn("h-4 w-4 shrink-0", dark ? "text-cream-200/45" : "text-bark-500")}
            strokeWidth={1.6}
          />
          <label htmlFor="content-sort" className="sr-only">
            Sort results
          </label>
          <select
            id="content-sort"
            value={sort}
            onChange={(e) => onSort(e.target.value as SortKey)}
            className={cn(
              "min-h-12 w-full cursor-pointer rounded-full border px-5 text-[0.85rem] transition-colors focus:outline-none lg:w-auto",
              dark
                ? "border-cream-100/15 bg-forest-950/60 text-cream-100 focus:border-gold-400/70"
                : "border-forest-900/12 bg-cream-50 text-forest-800 focus:border-forest-600/50",
            )}
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Filter chips */}
      <div
        className={cn(
          "mt-5 flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar",
          dark ? "border-cream-100/10" : "border-forest-900/8",
        )}
        role="group"
        aria-label="Filter by category"
      >
        {filterOptions.map((f) => {
          const isActive = f.id === active;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => onFilter(f.id)}
              aria-pressed={isActive}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2.5 text-[0.72rem] font-medium tracking-[0.1em] whitespace-nowrap uppercase transition-all duration-300",
                isActive
                  ? dark
                    ? "border-gold-400/70 bg-gold-400/15 text-gold-300"
                    : "border-forest-800 bg-forest-800 text-cream-50"
                  : dark
                    ? "border-cream-100/12 text-cream-200/60 hover:border-cream-100/30 hover:text-cream-100"
                    : "border-forest-900/12 text-bark-600 hover:border-forest-900/30 hover:text-forest-800",
              )}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <p
        className={cn(
          "mt-4 text-[0.72rem] tracking-[0.14em] uppercase",
          dark ? "text-cream-200/40" : "text-bark-500",
        )}
        aria-live="polite"
      >
        {resultCount} {resultCount === 1 ? "result" : "results"}
      </p>
    </div>
  );
}
