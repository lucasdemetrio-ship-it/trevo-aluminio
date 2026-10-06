import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { categorias, obras, etapas, depoimentos } from "@/lib/site";
import heroTrevo from "@/assets/hero-trevo.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alumínios Trevo | Esquadrias de Alumínio em Petrolândia SC" },
      {
        name: "description",
        content:
          "Janelas, portas, box, cercas e guarda-corpos de alumínio com vidro temperado, sob medida, com fabricação própria em Petrolândia/SC. Peça seu orçamento pelo WhatsApp.",
      },
      { property: "og:title", content: "Alumínios Trevo | Esquadrias de Alumínio e Vidros" },
      {
        property: "og:description",
        content:
          "Mais de uma década fabricando esquadrias de alumínio e vidros temperados sob medida em Petrolândia e região.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
            {/* Hero */}
      <section
        className="relative w-full"
        aria-label="Alumínios Trevo — Esquadrias de Alumínio e Vidros Temperados"
      >
        <img
          src={heroTrevo}
          alt="Fachada da Alumínios Trevo — Esquadrias de Alumínio e Vidros Temperados"
          width={1672}
          height={941}
          fetchPriority="high"
          className="block h-auto w-full"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
        <h1 className="sr-only">Alumínios Trevo — Esquadrias de Alumínio e Vidros Temperados</h1>
      </section>

      {/* Acessos principais */}
      <section className="bg-background px-5 pt-8 sm:pt-10">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-xl bg-primary shadow-card md:grid-cols-3">
          {[
            {
              numero: "01",
              to: "/catalogo" as const,
              label: "Catálogo",
              titulo: "Acesse nosso catálogo",
              texto: "Veja nossos produtos e escolha o que combina com sua obra.",
            },
            {
              numero: "02",
              to: "/obras" as const,
              label: "Obras",
              titulo: "Veja nossas obras",
              texto: "Confira projetos realizados pela Trevo e tenha uma referência para sua obra.",
            },
            {
              numero: "03",
              to: "/sobre" as const,
              label: "Sobre nós",
              titulo: "Conheça a Trevo",
              texto: "Veja um pouco sobre nossa empresa e nossa história.",
            },
          ].map((acesso) => (
            <Link
              key={acesso.numero}
              to={acesso.to}
              className="group relative border-b border-primary-foreground/15 p-6 transition-colors hover:bg-primary-dark md:border-b-0 md:border-r md:last:border-r-0 sm:p-7"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-primary-foreground/80">
                  {acesso.numero}
                </span>
                <span className="eyebrow text-primary-foreground/80">{acesso.label}</span>
              </div>
              <h2 className="mt-3 text-lg font-semibold text-primary-foreground">
                {acesso.titulo}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-primary-foreground/75">
                {acesso.texto}
              </p>
            </Link>
          ))}
        </div>
      </section>
      {/* Catálogo */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-primary">Catálogo</p>
              <h2 className="mt-2 text-3xl font-bold text-balance sm:text-4xl">
                Tudo em alumínio e vidro para a sua obra
              </h2>
            </div>
            <Link
              to="/catalogo"
              className="text-sm font-semibold text-primary hover:text-primary-dark"
            >
              Ver catálogo completo →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categorias.map((c) => (
              <Link
                key={c.slug}
                to="/catalogo"
                hash={c.slug}
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-card transition-shadow hover:shadow-lift"
              >
                <div className="relative">
                  <img
                    src={c.imagem}
                    alt={c.nome}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                    width={465}
                    height={350}
                  />
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-primary/0 transition-colors group-hover:bg-primary/80" />
                </div>
                <div className="p-5">
                  <div className="h-1 w-10 rounded-full bg-primary" />
                  <h3 className="mt-3 text-lg font-semibold">{c.nome}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.resumo}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Obras */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="eyebrow text-primary">Obras realizadas</p>
          <h2 className="mt-2 text-3xl font-bold text-balance sm:text-4xl">
            Trabalho entregue no padrão da fábrica
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {obras.slice(0, 8).map((o) => (
              <img
                key={o.slug}
                src={o.imagem}
                alt={o.titulo}
                loading="lazy"
                width={465}
                height={350}
                className="aspect-[4/3] w-full rounded-lg object-cover ring-1 ring-border"
              />
            ))}
          </div>
          <Link
            to="/obras"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Ver todas as obras <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>

      {/* Processo */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="eyebrow text-primary">Como funciona</p>
          <h2 className="mt-2 text-3xl font-bold text-balance sm:text-4xl">
            Da medição à instalação, com a nossa equipe
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-2 lg:grid-cols-4">
            {etapas.map((e) => (
              <div key={e.numero} className="relative bg-card p-6">
                <div className="absolute left-0 top-0 h-full w-1 bg-primary/40" />
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary font-mono text-sm font-semibold text-primary-foreground">
                  {e.numero}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{e.titulo}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="eyebrow text-primary">Clientes</p>
          <h2 className="mt-2 text-3xl font-bold text-balance sm:text-4xl">
            Quem já instalou com a Trevo
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {depoimentos.map((d) => (
              <figure
                key={d.autor}
                className="trevo-green-top rounded-xl border border-border bg-card p-6 shadow-card"
              >
                <blockquote className="text-[15px] leading-relaxed">“{d.texto}”</blockquote>
                <figcaption className="mt-4 font-mono text-[11px] font-semibold uppercase tracking-wider text-primary">
                  {d.autor} · {d.local}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
