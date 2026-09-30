import { MessageCircle } from "lucide-react";
import { empresa } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={empresa.whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Solicitar orçamento pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
    >
      <MessageCircle className="size-5" aria-hidden />
      <span className="hidden sm:inline">Orçamento no WhatsApp</span>
    </a>
  );
}
