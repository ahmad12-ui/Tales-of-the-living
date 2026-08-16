import { useEffect, useState } from "react";

export type RoutePath = "/" | "/explore" | "/stories" | "/about" | "/contact";

const KNOWN: RoutePath[] = ["/", "/explore", "/stories", "/about", "/contact"];

function readHash(): { path: RoutePath; query: URLSearchParams } {
  const raw = window.location.hash.replace(/^#/, "") || "/";
  const [pathPart, queryPart = ""] = raw.split("?");
  const clean = (pathPart || "/").replace(/\/+$/, "") || "/";
  const path = (KNOWN.includes(clean as RoutePath) ? clean : "/") as RoutePath;
  return { path, query: new URLSearchParams(queryPart) };
}

/** Minimal hash router — keeps the bundle tiny and works from any static host. */
export function useRoute() {
  const [state, setState] = useState(() =>
    typeof window === "undefined"
      ? { path: "/" as RoutePath, query: new URLSearchParams() }
      : readHash(),
  );

  useEffect(() => {
    const onChange = () => {
      setState(readHash());
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return state;
}

export function navigate(to: string) {
  if (window.location.hash === `#${to}`) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  window.location.hash = to;
}

/**
 * Reveals `.reveal` elements as they scroll into view.
 * A MutationObserver keeps watch so content rendered later
 * (filtered grids, tab switches) is picked up automatically.
 */
export function useScrollReveal(deps: unknown[] = []) {
  useEffect(() => {
    const reveal = (el: HTMLElement) => el.setAttribute("data-visible", "true");

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll<HTMLElement>(".reveal").forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );

    const tracked = new WeakSet<Element>();
    const observeAll = () => {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((n) => {
        if (n.dataset.visible !== "true" && !tracked.has(n)) {
          tracked.add(n);
          io.observe(n);
        }
      });
    };

    observeAll();

    const mo = new MutationObserver(() => {
      window.requestAnimationFrame(observeAll);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    // Safety net: anything still hidden after a beat gets shown.
    const fallback = window.setTimeout(observeAll, 400);

    return () => {
      io.disconnect();
      mo.disconnect();
      window.clearTimeout(fallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
