import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-trevo.png";
import { empresa } from "@/lib/site";

const nav = [
  { to: "/", label: "Início" },
  { to: "/catalogo", label: "Catálogo" },
  { to: "/obras", label: "Obras" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="mx-auto max-w-6xl rounded-2xl border border-border/70 bg-background/90 shadow-card backdrop-blur-md">
        <div className="flex items-center justify-between gap-4 px-4 py-3.5 sm:px-5 sm:py-4">
          <Link to="/" className="flex items-center gap-3" onClick={() => setAberto(false)}>
            <img
              src={logo}
              alt="Alumínios Trevo — Esquadrias de Alumínio e Vidros Temperados"
              className="h-10 w-auto sm:h-11"
              width={444}
              height={152}
            />
          </Link>

          <nav className="hidden items-center gap-1 text-sm font-medium text-muted-foreground lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{
                  className: "rounded-full bg-primary/10 px-3.5 py-1.5 text-primary",
                }}
                className="rounded-full px-3.5 py-1.5 transition-colors hover:bg-primary/5 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={empresa.telefoneLink}
              className="hidden items-center gap-2 rounded-lg border border-border px-3 py-2 font-mono text-xs text-foreground transition-colors hover:bg-secondary md:inline-flex"
            >
              <Phone className="size-3.5 text-primary" aria-hidden />
              {empresa.telefone}
            </a>
            <a
              href={empresa.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lift transition-colors hover:bg-primary-dark"
            >
              Orçamento
            </a>
            <button
              type="button"
              onClick={() => setAberto((v) => !v)}
              aria-label={aberto ? "Fechar menu" : "Abrir menu"}
              className="rounded-lg border border-border p-2 text-foreground lg:hidden"
            >
              {aberto ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        {aberto && (
          <nav className="border-t border-border px-3 py-2 lg:hidden">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setAberto(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{
                  className:
                    "block rounded-xl bg-primary/10 px-4 py-3 text-sm font-semibold text-primary",
                }}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={empresa.telefoneLink}
              className="mt-1 block rounded-xl px-4 py-3 font-mono text-xs text-muted-foreground md:hidden"
            >
              {empresa.telefone}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
