import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Fade-up reveal on scroll. */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/** Small uppercase mono label. */
export function MonoLabel({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("label-mono block text-muted-foreground", className)}>{children}</span>;
}

/** Tiny "+" grid intersection mark. */
export function PlusMark({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={cn("pointer-events-none absolute z-10 select-none text-[12px] leading-none opacity-70", className)}>
      +
    </span>
  );
}

/** Sharp outlined button / link. */
export function OutlineLink({
  href,
  children,
  onClick,
  className,
  tone = "dark",
  type,
  disabled,
}: {
  href?: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  tone?: "dark" | "paper";
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const base = cn(
    "label-mono group inline-flex items-center justify-center gap-3 border px-6 py-4 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(0,0,0,0.16)]",
    tone === "dark"
      ? "border-accent text-accent bg-transparent hover:bg-accent hover:text-accent-foreground"
      : "border-paper-border text-paper-foreground hover:border-accent hover:bg-accent hover:text-accent-foreground",
    disabled && "pointer-events-none opacity-60",
    className,
  );

  if (href) {
    return (
      <a href={href} className={base} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button type={type ?? "button"} onClick={onClick} className={base} disabled={disabled}>
      {children}
    </button>
  );
}

export function SectionRule({ tone = "dark" }: { tone?: "dark" | "paper" }) {
  return <div className={cn("h-px w-full", tone === "dark" ? "bg-hairline" : "bg-paper-border")} />;
}
