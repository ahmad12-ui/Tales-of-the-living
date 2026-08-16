import { useState, type FormEvent } from "react";
import { Check, Clapperboard, Mail, MapPin, MessageSquare, Send } from "lucide-react";
import { IMAGES, socials } from "@/data/content";
import { Container, DemoBadge, Eyebrow, Reveal } from "@/components/ui";
import { socialIconMap } from "@/components/SocialIcons";

const subjects = [
  "General enquiry",
  "Story suggestion",
  "Collaboration / partnership",
  "Correction or feedback",
  "Media & press",
];

const details = [
  {
    icon: Mail,
    label: "Email",
    value: "uxverse.labs@gmail.com",
    note: "Placeholder address — replace with yours",
  },
  {
    icon: Clapperboard,
    label: "Collaborations",
    value: "uxverse.labs@gmail.com",
    note: "For brands, NGOs and educators",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Pakistan · filming on location",
    note: "Update with your studio location",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: subjects[0], message: "" });

  const update = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Masthead */}
      <header className="relative isolate flex min-h-[52vh] items-end overflow-hidden bg-forest-950 pt-28">
        <img
          src={IMAGES.contactWide}
          alt="Silhouetted trees on a misty morning hillside"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          decoding="async"
        />
        <span
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950 via-forest-950/55 to-forest-950/70"
        />
        <div aria-hidden className="texture-grain absolute inset-0 -z-10 opacity-30" />

        <Container className="relative pb-14 sm:pb-20">
          <Eyebrow tone="cream">Contact</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-serif text-[2.4rem] leading-[1.02] text-cream-50 sm:text-[3.4rem] lg:text-[4.2rem]">
            Have a story <span className="text-gold-300 italic">to share?</span>
          </h1>
          <p className="mt-6 max-w-xl text-[1rem] leading-[1.75] text-cream-200/72">
            We’d love to hear from you.
          </p>
        </Container>
      </header>

      <section className="bg-cream-50 py-16 sm:py-20 lg:py-28" aria-labelledby="contact-form-title">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Form */}
            <Reveal className="lg:col-span-7">
              <div className="rounded-[2rem] border border-forest-900/8 bg-white p-6 shadow-[0_30px_70px_-50px_rgba(8,25,15,0.7)] sm:p-9 lg:p-11">
                <div className="flex flex-wrap items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-gold-600" strokeWidth={1.5} />
                  <h2
                    id="contact-form-title"
                    className="font-serif text-[1.55rem] text-forest-900 sm:text-[1.85rem]"
                  >
                    Send us a message
                  </h2>
                </div>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-bark-600">
                  Suggest a species, correct a detail, or propose a collaboration. Real questions
                  from viewers often become full episodes.
                </p>

                {sent ? (
                  <div
                    role="status"
                    className="mt-8 rounded-2xl border border-moss-400/40 bg-moss-300/15 p-7 text-center"
                  >
                    <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-forest-800 text-cream-50">
                      <Check className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <p className="mt-5 font-serif text-xl text-forest-900">
                      Thank you, {form.name || "friend"}.
                    </p>
                    <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-bark-600">
                      This is a demonstration form and is not connected to a mail service yet —
                      nothing was sent or stored. Connect it to your backend or a form provider to
                      go live.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="mt-6 inline-flex min-h-11 items-center rounded-full border border-forest-900/15 px-6 text-[0.7rem] font-medium tracking-[0.18em] text-forest-800 uppercase transition-colors hover:bg-cream-100"
                    >
                      Write another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="mt-8 space-y-5" noValidate={false}>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Name" htmlFor="c-name">
                        <input
                          id="c-name"
                          name="name"
                          required
                          autoComplete="name"
                          value={form.name}
                          onChange={update("name")}
                          placeholder="Your full name"
                          className={inputClass}
                        />
                      </Field>
                      <Field label="Email" htmlFor="c-email">
                        <input
                          id="c-email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          value={form.email}
                          onChange={update("email")}
                          placeholder="you@example.com"
                          className={inputClass}
                        />
                      </Field>
                    </div>

                    <Field label="Subject" htmlFor="c-subject">
                      <select
                        id="c-subject"
                        name="subject"
                        value={form.subject}
                        onChange={update("subject")}
                        className={`${inputClass} cursor-pointer`}
                      >
                        {subjects.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Message" htmlFor="c-message">
                      <textarea
                        id="c-message"
                        name="message"
                        required
                        rows={6}
                        value={form.message}
                        onChange={update("message")}
                        placeholder="Tell us what you’d like to see explored…"
                        className={`${inputClass} resize-y py-4 leading-relaxed`}
                      />
                    </Field>

                    <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                      <button
                        type="submit"
                        className="group inline-flex min-h-13 items-center justify-center gap-2.5 rounded-full bg-forest-800 px-8 text-[0.74rem] font-medium tracking-[0.18em] text-cream-50 uppercase transition-all duration-300 hover:bg-forest-700 active:scale-[0.98]"
                      >
                        Send Message
                        <Send
                          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                          strokeWidth={1.9}
                        />
                      </button>
                      <DemoBadge>Demo form — not connected to a backend so direct Dm using mail and we will response in 1-2 working days</DemoBadge>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Sidebar */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <ul className="space-y-4">
                  {details.map((d) => {
                    const Icon = d.icon;
                    return (
                      <li
                        key={d.label}
                        className="flex items-start gap-4 rounded-2xl border border-forest-900/8 bg-cream-100 p-5 transition-colors duration-300 hover:bg-white"
                      >
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest-800 text-gold-300">
                          <Icon className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.5} />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[0.58rem] font-medium tracking-[0.24em] text-bark-500 uppercase">
                            {d.label}
                          </span>
                          <span className="mt-1.5 block font-serif text-[1.05rem] break-words text-forest-900">
                            {d.value}
                          </span>
                          <span className="mt-1 block text-[0.72rem] text-bark-500/80 italic">
                            {d.note}
                          </span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>

              <Reveal delay={180}>
                <div className="mt-6 overflow-hidden rounded-[2rem] bg-forest-900 p-7 sm:p-8">
                  <Eyebrow tone="cream">Follow along</Eyebrow>
                  <p className="mt-5 font-serif text-[1.35rem] leading-snug text-cream-50">
                    The fastest way to reach us is a comment on the latest episode.
                  </p>
                  <ul className="mt-7 grid grid-cols-2 gap-3">
                    {socials.map((s) => {
                      const Icon = socialIconMap[s.name];
                      return (
                        <li key={s.name}>
                          <a
                            href={s.href}
                            className="group flex min-h-12 items-center gap-3 rounded-full border border-cream-100/15 px-4 text-[0.72rem] tracking-[0.1em] text-cream-100/80 uppercase transition-all duration-300 hover:border-gold-400/70 hover:text-gold-300"
                          >
                            <Icon className="h-4 w-4 shrink-0" />
                            <span className="truncate">{s.name}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-6 rounded-[2rem] border border-dashed border-forest-900/15 p-7">
                  <p className="text-[0.58rem] font-medium tracking-[0.24em] text-bark-500 uppercase">
                    Response time
                  </p>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-bark-600">
                    We read every message. Replies usually take a few working days — longer when
                    we are filming on location.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

const inputClass =
  "min-h-13 w-full rounded-2xl border border-forest-900/12 bg-cream-50 px-5 text-[0.95rem] text-forest-900 placeholder:text-bark-500/50 transition-colors duration-300 focus:border-forest-600/60 focus:bg-white focus:outline-none";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-[0.6rem] font-medium tracking-[0.22em] text-bark-600 uppercase"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
