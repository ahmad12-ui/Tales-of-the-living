import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Leaf } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui";

/**
 * Newsletter block.
 * NOTE: no backend is connected — submission only shows a local confirmation.
 * Wire `onSubmit` to your provider (Mailchimp, Buttondown, etc.) when ready.
 */
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  };

  return (
    <section className="relative overflow-hidden bg-forest-900" aria-labelledby="newsletter-title">
      <div aria-hidden className="texture-grain pointer-events-none absolute inset-0 opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -bottom-32 h-96 w-96 rounded-full bg-moss-500/12 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-20 h-80 w-80 rounded-full bg-gold-500/8 blur-[100px]"
      />

      <Container className="relative py-20 sm:py-24 lg:py-28">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="mx-auto mb-7 grid h-14 w-14 place-items-center rounded-full border border-gold-400/30 text-gold-400">
            <Leaf className="h-6 w-6" strokeWidth={1.3} />
          </span>
          <Eyebrow tone="cream" className="justify-center">
            Join the community
          </Eyebrow>
          <h2
            id="newsletter-title"
            className="mt-5 text-[2.4rem] leading-[1.02] text-cream-50 sm:text-[3.2rem] lg:text-[3.8rem]"
          >
            Stay Curious.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[0.98rem] leading-relaxed text-cream-200/70 sm:text-[1.05rem]">
            Get new stories, fascinating facts and discoveries from the living world.
          </p>

          {done ? (
            <div
              role="status"
              className="mx-auto mt-9 flex max-w-md items-center justify-center gap-3 rounded-full border border-gold-400/35 bg-gold-400/10 px-6 py-4 text-sm text-gold-300"
            >
              <Check className="h-4 w-4" strokeWidth={2} />
              Thank you — this demo form isn’t connected to a mailing list yet.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-9 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="min-h-13 flex-1 rounded-full border border-cream-100/20 bg-cream-50/6 px-6 text-[0.95rem] text-cream-50 placeholder:text-cream-200/40 transition-colors duration-300 focus:border-gold-400/70 focus:bg-cream-50/10 focus:outline-none"
              />
              <button
                type="submit"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-cream-50 px-8 text-[0.74rem] font-medium tracking-[0.18em] text-forest-900 uppercase transition-all duration-300 hover:bg-gold-300 active:scale-[0.98]"
              >
                Subscribe
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2}
                />
              </button>
            </form>
          )}

          <p className="mt-5 text-[0.7rem] tracking-wide text-cream-200/35">
            Demo form — no data is collected or stored.
          </p>
        </div>
      </Container>
    </section>
  );
}
