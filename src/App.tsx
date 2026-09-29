import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Explore from "@/pages/Explore";
import Stories from "@/pages/Stories";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import { AdSideRails, AdStrip, ResponsiveBanner } from "@/components/Ads.tsx";
import { useRoute, useScrollReveal, type RoutePath } from "@/lib/router";

const TITLES: Record<RoutePath, string> = {
  "/": "Tales of the Living — Every Living Thing Has a Story",
  "/explore": "Explore the Living World — Tales of the Living",
  "/stories": "Stories — Tales of the Living",
  "/about": "About — Tales of the Living",
  "/contact": "Contact — Tales of the Living",
};

export default function App() {
  const { path, query } = useRoute();

  useEffect(() => {
    document.title = TITLES[path];
  }, [path]);

  // Re-scan for reveal targets whenever the page (or its query) changes.
  useScrollReveal([path, query.toString()]);

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-cream-50">
      <Navbar route={path} overlay={path === "/"} />
      <AdSideRails routeKey={path} />

      <main id="main" className="flex-1">
        {path === "/" && <Home />}
        {path === "/explore" && <Explore query={query} />}
        {path === "/stories" && <Stories query={query} />}
        {path === "/about" && <About />}
        {path === "/contact" && <Contact />}
      </main>

      {/* Har page ke end par responsive banner (728x90 / 468x60 / 320x50) */}
      <AdStrip>
        <ResponsiveBanner key={path} />
      </AdStrip>

      <Footer />
    </div>
  );
}
