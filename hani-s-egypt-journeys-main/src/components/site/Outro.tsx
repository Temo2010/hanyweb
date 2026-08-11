import { useState } from "react";
import { toast } from "sonner";
import { useLang } from "@/i18n/LanguageProvider";
import { MonoLabel, OutlineLink, PlusMark, Reveal } from "./primitives";

export function Contact() {
  const { t } = useLang();
  const [values, setValues] = useState({ name: "", email: "", phone: "", budget: "", message: "" });

  const inputClass =
    "w-full border border-hairline bg-transparent px-4 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none";

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Trip enquiry — ${values.name}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nGroup / budget: ${values.budget}\n\n${values.message}`,
    );
    window.location.href = `mailto:${t.contact.email}?subject=${subject}&body=${body}`;
    toast.success(t.contact.form.success);
  }

  const fields = [
    { id: "c-name", key: "name" as const, label: t.contact.form.name, type: "text", required: true, max: 100 },
    { id: "c-email", key: "email" as const, label: t.contact.form.email, type: "email", required: true, max: 255 },
    { id: "c-phone", key: "phone" as const, label: t.contact.form.phone, type: "tel", required: false, max: 40 },
    { id: "c-budget", key: "budget" as const, label: t.contact.form.budget, type: "text", required: false, max: 100 },
  ];

  return (
    <section id="contact" className="border-t border-hairline bg-background">
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
        <Reveal className="border-x border-hairline px-8 py-24 lg:px-12">
          <h2 className="headline max-w-4xl text-[clamp(2.2rem,7vw,7rem)]">{t.contact.heading}</h2>
        </Reveal>

        <div className="grid grid-cols-1 border-x border-t border-hairline lg:grid-cols-12">
          <div className="relative border-b border-hairline p-8 lg:col-span-4 lg:border-b-0 lg:border-e lg:p-12">
            <PlusMark className="-end-[6px] -top-[6px] text-muted-foreground" />
            <MonoLabel>Direct</MonoLabel>
            <p className="headline mt-8 text-[clamp(1.4rem,2.4vw,2rem)]">Hani Ezzat</p>
            <MonoLabel className="mt-3">{t.contact.role}</MonoLabel>
            <div className="mt-10 space-y-3">
              <a href={`mailto:${t.contact.email}`} className="block text-sm text-foreground transition-colors hover:text-accent">
                {t.contact.email}
              </a>
              <a href={`tel:${t.contact.phone.replace(/\s/g, "")}`} className="block text-sm text-foreground transition-colors hover:text-accent">
                {t.contact.phone}
              </a>
            </div>
          </div>

          <form onSubmit={submit} className="p-8 lg:col-span-8 lg:p-12">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {fields.map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="label-mono mb-2 block text-muted-foreground">
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    required={f.required}
                    maxLength={f.max}
                    value={values[f.key]}
                    onChange={(e) => setValues({ ...values, [f.key]: e.target.value })}
                    className={inputClass}
                  />
                </div>
              ))}
            </div>

            <div className="mt-6">
              <label htmlFor="c-message" className="label-mono mb-2 block text-muted-foreground">
                {t.contact.form.message}
              </label>
              <textarea
                id="c-message"
                rows={6}
                maxLength={2000}
                required
                value={values.message}
                onChange={(e) => setValues({ ...values, message: e.target.value })}
                className={inputClass}
              />
            </div>

            <OutlineLink type="submit" className="mt-8">
              {t.contact.form.send} →
            </OutlineLink>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useLang();
  const nav = [
    { href: "#about", label: t.nav.about },
    { href: "#cairo", label: t.nav.explore },
    { href: "#tours", label: t.nav.tours },
    { href: "#reviews", label: t.nav.reviews },
    { href: "#faq", label: t.nav.faq },
  ];
  const social = ["Instagram", "TripAdvisor", "WhatsApp", "YouTube"];

  return (
    <footer className="border-t border-hairline bg-background">
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 border-x border-hairline px-8 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
          <div>
            <p className="headline text-xl">Hani Ezzat</p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">{t.footer.philosophy}</p>
          </div>

          <nav aria-label="Footer">
            <MonoLabel>{t.footer.navTitle}</MonoLabel>
            <ul className="mt-6 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-foreground transition-colors hover:text-accent">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <MonoLabel>{t.footer.socialTitle}</MonoLabel>
            <ul className="mt-6 space-y-3">
              {social.map((s) => (
                <li key={s}>
                  <a href="#contact" className="text-sm text-foreground transition-colors hover:text-accent">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-start">
            <OutlineLink href="#contact">{t.footer.book} →</OutlineLink>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-x border-t border-hairline px-8 py-6 lg:px-12">
          <MonoLabel>© {new Date().getFullYear()} Hani Ezzat</MonoLabel>
          <MonoLabel>{t.footer.rights}</MonoLabel>
        </div>
      </div>

      <div className="overflow-hidden border-t border-hairline px-2 pt-6">
        <p aria-hidden="true" className="headline whitespace-nowrap text-center text-[13.5vw] leading-none text-foreground">
          Hani Ezzat
        </p>
      </div>
    </footer>
  );
}
