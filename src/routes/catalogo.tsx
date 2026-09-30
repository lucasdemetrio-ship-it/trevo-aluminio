import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, X } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { categorias, whatsappCom, type Modelo } from "@/lib/site";

export const Route = createFileRoute("/catalogo")({
  head: () => ({
    meta: [
      { title: "Catálogo de Esquadrias de Alumínio | Alumínios Trevo" },
      {
        name: "description",
        content:
          "Portas, box, cercas e portões, portões de elevação, janelas, corrimãos, coberturas e acabamentos em alumínio e vidro temperado, sob medida em Petrolândia/SC.",
      },
      { property: "og:title", content: "Catálogo | Alumínios Trevo" },
      {
        property: "og:description",
        content: "Veja os modelos de esquadrias de alumínio e vidros temperados da Trevo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CatalogoPage,
});

function ModalModelo({ modelo, onClose }: { modelo: Modelo; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={modelo.nome}
      className="fixed inset-0 z-[60] flex items-end justify-center bg-foreground/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl bg-card shadow-lift sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={modelo.imagem}
            alt={modelo.nome}
            className="aspect-[16/10] w-full object-cover sm:rounded-t-2xl"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="absolute right-3 top-3 rounded-full bg-background/90 p-2 text-foreground shadow-card"
          >
            <X className="size-4" />
          </button>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold">{modelo.nome}</h3>
          <p className="mt-2 text-muted-foreground">{modelo.descricao}</p>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {modelo.caracteristicas.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm">
                <span className="inline-flex rounded-full bg-primary/10 p-0.5 text-primary">
                  <Check className="size-3.5" aria-hidden />
                </span>
                {c}
              </li>
            ))}
          </ul>
          <a
            href={whatsappCom(`Olá! Gostaria de um orçamento de ${modelo.nome.toLowerCase()}.`)}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </div>
  );
}

function CatalogoPage() {
  const [ativa, setAtiva] = useState<string>(categorias[0]!.slug);
  const [modelo, setModelo] = useState<Modelo | null>(null);
  const categoria = categorias.find((c) => c.slug === ativa) ?? categorias[0]!;

  useEffect(() => {
    const slug = window.location.hash.slice(1);
    if (categorias.some((c) => c.slug === slug)) setAtiva(slug);
  }, []);

  return (
    <>
      <PageBanner
        eyebrow="Catálogo"
        title="Veja nosso catálogo e escolha o que for melhor para você"
        description="Encontre soluções em alumínio e vidro para sua obra."
      />
      <section className="mx-auto max-w-6xl px-5 pb-6 pt-8">
        <h2 className="text-xl font-bold">Escolha uma categoria</h2>
        <nav aria-label="Categorias" className="mt-6 flex flex-wrap gap-2">
          {categorias.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => {
                setAtiva(c.slug);
                window.history.replaceState(null, "", `#${c.slug}`);
              }}
              aria-current={c.slug === ativa}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                c.slug === ativa
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {c.nome}
            </button>
          ))}
        </nav>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <h2 className="text-xl font-bold">{categoria.nome}</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categoria.modelos.map((m) => (
            <article
              key={m.nome}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-shadow hover:shadow-lift"
            >
              <img
                src={m.imagem}
                alt={m.nome}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{m.nome}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{m.descricao}</p>
                <ul className="mt-3 space-y-1.5">
                  {m.caracteristicas.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 inline-block size-1.5 rounded-full bg-primary" />
                      {c}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setModelo(m)}
                    className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
                  >
                    Ver modelo
                  </button>
                  <a
                    href={whatsappCom(`Olá! Gostaria de um orçamento de ${m.nome.toLowerCase()}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-primary hover:text-primary-dark"
                  >
                    Solicitar orçamento
                  </a>
                </div>
              </div>
            </article>
          ))}

          {categoria.galeria.map((foto) => {
            const fotoModelo: Modelo = {
              nome: foto.titulo,
              descricao: foto.descricao,
              caracteristicas: [],
              imagem: foto.imagem,
            };
            return (
              <article
                key={foto.imagem}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-shadow hover:shadow-lift"
              >
                <img
                  src={fotoModelo.imagem}
                  alt={fotoModelo.nome}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{fotoModelo.nome}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{fotoModelo.descricao}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setModelo(fotoModelo)}
                      className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
                    >
                      Ver modelo
                    </button>
                    <a
                      href={whatsappCom(
                        `Olá! Gostaria de um orçamento de ${categoria.nome.toLowerCase()}.`,
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-primary hover:text-primary-dark"
                    >
                      Solicitar orçamento
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {modelo && <ModalModelo modelo={modelo} onClose={() => setModelo(null)} />}
    </>
  );
}
