import { MessageCircle } from "lucide-react";

const whatsappHref = "https://wa.me/201001307944";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Contact on WhatsApp"
      className="floating-whatsapp"
    >
      <MessageCircle aria-hidden="true" size={24} strokeWidth={2.4} />
    </a>
  );
}
