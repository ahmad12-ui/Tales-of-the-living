import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui";
import { cn } from "@/utils/cn";

/* ------------------------------------------------------------------ */
/* Adsterra config — saare ad codes yahan ek jagah hain                */
/* ------------------------------------------------------------------ */
export const SMARTLINK_URL =
  "https://predestineheadypleasure.com/p30vwe4i?key=bf36bf3ee994577ffabbbd9737b80eae";

const NATIVE = {
  src: "https://pl31565135.profitableratecpmnetwork.com/c859529ad404355b958e9efbd752eb8e/invoke.js",
  containerId: "container-c859529ad404355b958e9efbd752eb8e",
};

const BANNERS = {
  "468x60": { key: "e4cea03b7221e9fdcb53addd394d6f7d", width: 468, height: 60 },
  "160x300": { key: "0cfb69babbf2b0a5b899105b2484a174", width: 160, height: 300 },
  "320x50": { key: "e16ee4a78c1d14cad28b1fc8f6a6de1a", width: 320, height: 50 },
  "728x90": { key: "199c864e54f17240381dd7a6f4b34108", width: 728, height: 90 },
  "160x600": { key: "8fd01a19b61b94e6d02a532b9aef91c1", width: 160, height: 600 },
  "300x250": { key: "2132603a352dc003c2870510a033e8fe", width: 300, height: 250 },
} as const;

export type BannerSize = keyof typeof BANNERS;

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() =>
    typeof window === "undefined" ? false : window.matchMedia(query).matches,
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

/* ------------------------------------------------------------------ */
/* Banner (iframe format)                                              */
/* Har banner apne iframe mein chalta hai taake `atOptions` aapas mein */
/* clash na kare — is se ek page par kai banners safely chalte hain.   */
/* ------------------------------------------------------------------ */
export function AdBanner({ size, className }: { size: BannerSize; className?: string }) {
  const { key, width, height } = BANNERS[size];

  const srcDoc = `<!doctype html><html><head><meta charset="utf-8"><style>html,body{margin:0;padding:0;background:transparent;overflow:hidden}</style></head><body><script>atOptions={'key':'${key}','format':'iframe','height':${height},'width':${width},'params':{}};<\/script><script src="https://www.highrevenueformat.com/${key}/invoke.js"><\/script></body></html>`;

  return (
    <iframe
      title={`Advertisement ${size}`}
      srcDoc={srcDoc}
      width={width}
      height={height}
      scrolling="no"
      loading="lazy"
      className={cn("block max-w-full border-0", className)}
      style={{ width, height }}
    />
  );
}

/** Screen size ke hisab se sahi banner: mobile 320x50, tablet 468x60, desktop 728x90 */
export function ResponsiveBanner() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 640px)");
  const size: BannerSize = isDesktop ? "728x90" : isTablet ? "468x60" : "320x50";
  return <AdBanner key={size} size={size} />;
}

/* ------------------------------------------------------------------ */
/* Native Banner                                                       */
/* NOTE: ek page par sirf ek NativeBanner lagayein (container id fixed) */
/* ------------------------------------------------------------------ */
export function NativeBanner({ className }: { className?: string }) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const container = document.createElement("div");
    container.id = NATIVE.containerId;

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src = NATIVE.src;

    host.appendChild(script);
    host.appendChild(container);

    return () => {
      host.innerHTML = "";
    };
  }, []);

  return <div ref={hostRef} className={cn("min-h-[120px] w-full", className)} />;
}

/* ------------------------------------------------------------------ */
/* Smartlink — "Sponsored" card                                        */
/* ------------------------------------------------------------------ */
export function SponsoredLink({ className }: { className?: string }) {
  return (
    <a
      href={SMARTLINK_URL}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className={cn(
        "group flex items-center justify-between gap-5 rounded-2xl border border-forest-900/10 bg-white px-6 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/60",
        className,
      )}
    >
      <span>
        <span className="block text-[0.58rem] font-medium tracking-[0.3em] text-bark-500 uppercase">
          Sponsored
        </span>
        <span className="mt-1.5 block font-serif text-lg leading-snug text-forest-900">
          Discover something new today
        </span>
      </span>
      <ArrowUpRight
        className="h-5 w-5 shrink-0 text-gold-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        strokeWidth={1.8}
      />
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Layout wrappers                                                     */
/* ------------------------------------------------------------------ */
export function AdStrip({
  children,
  tone = "cream-50",
  label = true,
}: {
  children: ReactNode;
  tone?: "cream-50" | "cream-100";
  label?: boolean;
}) {
  return (
    <section
      aria-label="Advertisement"
      className={cn("py-8 sm:py-10", tone === "cream-50" ? "bg-cream-50" : "bg-cream-100")}
    >
      <Container>
        {label && (
          <p className="mb-3 text-center text-[0.55rem] tracking-[0.3em] text-bark-500/70 uppercase">
            Advertisement
          </p>
        )}
        <div className="flex flex-col items-center gap-6">{children}</div>
      </Container>
    </section>
  );
}

/** Sirf bohot bari screens (1800px+) par left/right sidebar ads — 160x600 aur 160x300 */
export function AdSideRails({ routeKey }: { routeKey: string }) {
  const wide = useMediaQuery("(min-width: 1800px)");
  if (!wide) return null;
  return (
    <>
      <div className="pointer-events-none fixed top-28 left-4 z-30">
        <div className="pointer-events-auto">
          <AdBanner key={`l-${routeKey}`} size="160x600" />
        </div>
      </div>
      <div className="pointer-events-none fixed top-28 right-4 z-30">
        <div className="pointer-events-auto">
          <AdBanner key={`r-${routeKey}`} size="160x300" />
        </div>
      </div>
    </>
  );
}
