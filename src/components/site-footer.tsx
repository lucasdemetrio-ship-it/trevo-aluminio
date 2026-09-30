import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-trevo-white.png";
import { empresa, categorias } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="Alumínios Trevo" className="h-10 w-auto" width={444} height={152} />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
            {empresa.slogan}. Mais de uma década fabricando e instalando esquadrias sob medida em
            Petrolândia e região do Alto Vale do Itajaí.
          </p>
          <a
            href={empresa.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-5 py-2.5 text-sm font-semibold text-primary-dark shadow-lift transition-colors hover:bg-primary-foreground/90"
          >
            <MessageCircle className="size-4" aria-hidden />
            Falar no WhatsApp
          </a>
        </div>

        <div>
          <h2 className="eyebrow text-primary-foreground/80">Catálogo</h2>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            {categorias.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/catalogo"
                  hash={c.slug}
                  className="transition-colors hover:text-primary-foreground"
                >
                  {c.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-primary-foreground/80">Contato</h2>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/75">
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary-foreground" aria-hidden />
              <span>
                <a href={empresa.whatsappLink} className="hover:text-primary-foreground">
                  {empresa.whatsappNumero}
                </a>
                <br />
                <a href={empresa.telefoneLink} className="hover:text-primary-foreground">
                  {empresa.telefone}
                </a>
              </span>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary-foreground" aria-hidden />
              <a
                href={`mailto:${empresa.email}`}
                className="break-all hover:text-primary-foreground"
              >
                {empresa.email}
              </a>
            </li>
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary-foreground" aria-hidden />
              <span>{empresa.endereco}</span>
            </li>
            <li className="flex gap-2">
              <Clock className="mt-0.5 size-4 shrink-0 text-primary-foreground" aria-hidden />
              <span>{empresa.horario}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 font-mono text-[11px] text-primary-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Alumínios Trevo · Petrolândia/SC</span>
          <Link to="/politica-de-privacidade" className="hover:text-primary-foreground">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
