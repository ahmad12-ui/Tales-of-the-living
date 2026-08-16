import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/utils/cn";

/* ------------------------------------------------------------------ */
/* Brand mark                                                          */
/* ------------------------------------------------------------------ */
export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src="https://ik.imagekit.io/rnegdq5vb/Tales%20of%20the%20living/imagewatermark%20(1).png?updatedAt=1786885395392"
      alt="Tales of the Living"
      className={cn("rounded-full object-cover", className)}
    />
  );
}

export function Wordmark({
  className,
  tagline = true,
  invert = false,
}: {
  className?: string;
  tagline?: boolean;
  invert?: boolean;
}) {
  return (
    <span className={cn("flex flex-col leading-none", className)}>
      <span
        className={cn(
          "font-serif text-[0.95rem] font-semibold tracking-[0.22em] uppercase sm:text-[1.02rem]",
          invert ? "text-cream-50" : "text-forest-900",
        )}
      >
        Tales of the Living
      </span>
      {tagline && (
        <span
          className={cn(
            "mt-1 text-[0.55rem] tracking-[0.3em] uppercase sm:text-[0.6rem]",
            invert ? "text-cream-200/70" : "text-bark-500",
          )}
        >
          Every living thing has a story
        </span>
      )}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Layout + typography                                                 */
/* ------------------------------------------------------------------ */
export function Container({
  children,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "main" | "nav";
}) {
  return (
    <As className={cn("mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 2xl:px-16", className)}>
      {children}
    </As>
  );
}

export function Eyebrow({
  children,
  className,
  tone = "gold",
}: {
  children: ReactNode;
  className?: string;
  tone?: "gold" | "moss" | "cream";
}) {
  const tones = {
    gold: "text-gold-600",
    moss: "text-moss-500",
    cream: "text-gold-300",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-[0.62rem] font-medium tracking-[0.32em] uppercase sm:text-[0.7rem]",
        tones[tone],
        className,
      )}
    >
      <span aria-hidden className="h-px w-6 bg-current opacity-60" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  invert = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "reveal max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow tone={invert ? "cream" : "gold"}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "mt-5 text-[2rem] leading-[1.08] font-normal sm:text-[2.6rem] lg:text-[3.15rem]",
          invert ? "text-cream-50" : "text-forest-900",
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-5 text-[0.98rem] leading-[1.75] sm:text-[1.06rem]",
            invert ? "text-cream-200/75" : "text-bark-600",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Buttons                                                             */
/* ------------------------------------------------------------------ */
type ButtonVariant = "primary" | "outline" | "ghost" | "cream";

const buttonBase =
  "group inline-flex min-h-11 items-center justify-center gap-2.5 rounded-full px-6 py-3 text-[0.78rem] font-medium tracking-[0.14em] uppercase transition-all duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-50 sm:px-7";

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-forest-800 text-cream-50 shadow-[0_10px_30px_-14px_rgba(8,25,15,0.8)] hover:bg-forest-700 hover:shadow-[0_16px_40px_-14px_rgba(8,25,15,0.85)] active:scale-[0.985]",
  outline:
    "border border-cream-100/45 bg-white/5 text-cream-50 backdrop-blur-sm hover:border-gold-400/70 hover:bg-white/12 active:scale-[0.985]",
  ghost:
    "border border-forest-900/15 bg-transparent text-forest-800 hover:border-forest-900/35 hover:bg-forest-900/5 active:scale-[0.985]",
  cream:
    "bg-cream-50 text-forest-900 hover:bg-gold-300 active:scale-[0.985]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  icon,
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={href} className={cn(buttonBase, buttonVariants[variant], className)} {...rest}>
      {children}
      {icon}
    </a>
  );
}

export function Button({
  children,
  variant = "primary",
  className,
  icon,
  ...rest
}: {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(buttonBase, buttonVariants[variant], className)} {...rest}>
      {children}
      {icon}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Misc                                                                */
/* ------------------------------------------------------------------ */
export function DemoBadge({
  children = "Sample content — replace with your published story",
  className,
  invert = false,
}: {
  children?: ReactNode;
  className?: string;
  invert?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[0.6rem] font-medium tracking-[0.16em] uppercase",
        invert
          ? "border-gold-400/35 bg-forest-950/40 text-gold-300"
          : "border-gold-600/30 bg-gold-300/20 text-gold-600",
        className,
      )}
    >
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article" | "section";
}) {
  return (
    <As
      className={cn("reveal", className)}
      style={{ transitionDelay: `${delay}ms` } as CSSProperties}
    >
      {children}
    </As>
  );
}
