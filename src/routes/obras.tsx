import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { empresa, obras, whatsappCom, type Obra } from "@/lib/site";

export const Route = createFileRoute("/obras")({
  head: () => ({
    meta: [
      { title: "Obras Realizadas | Alumínios Trevo" },
      {
        name: "description",
        content:
          "Galeria de obras da Alumínios Trevo: janelas, portas, box, guarda-corpos e fachadas instaladas em Petrolândia e região do Alto Vale.",
      },
      { property: "og:title", content: "Obras Realizadas | Alumínios Trevo" },
      {
        property: "og:description",
        content: "Veja esquadrias de alumínio e vidros temperados instalados pela nossa equipe.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ObrasPage,
});

function ModalObra({ obra, onClose }: { obra: Obra; onClose: () => void }) {
  const [i, setI] = useState(0);
  const toqueInicial = useRef<number | null>(null);
  const total = obra.imagens.length;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setI((v) => (v + 1) % total);
      if (e.key === "ArrowLeft") setI((v) => (v - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, total]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={obra.titulo}
      className="fixed inset-0 z-[60] flex items-end justify-center bg-foreground/60 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl bg-card shadow-lift sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={obra.imagens[i]}
            alt={`${obra.titulo} — foto ${i + 1}`}
            className="aspect-[16/10] w-full object-cover sm:rounded-t-2xl"
            onTouchStart={(e) => {
              toqueInicial.current = e.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(e) => {
              const inicio = toqueInicial.current;
              const fim = e.changedTouches[0]?.clientX;
              if (inicio === null || fim === undefined || Math.abs(inicio - fim) < 45) return;
              setI((v) => (inicio > fim ? (v + 1) % total : (v - 1 + total) % total));
              toqueInicial.current = null;
            }}
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="absolute right-3 top-3 rounded-full bg-background/90 p-2 text-foreground shadow-card"
          >
            <X className="size-4" />
          </button>
          {total > 1 && (
            <>
              <button
                type="button"
                aria-label="Foto anterior"
                onClick={() => setI((v) => (v - 1 + total) % total)}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-2 text-foreground shadow-card"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Próxima foto"
                onClick={() => setI((v) => (v + 1) % total)}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-2 text-foreground shadow-card"
              >
                <ChevronRight className="size-4" />
              </button>
            </>
          )}
        </div>

        {total > 1 && (
          <div className="flex gap-2 overflow-x-auto px-5 pt-4">
            {obra.imagens.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setI(idx)}
                aria-label={`Ver foto ${idx + 1}`}
                className={`shrink-0 overflow-hidden rounded-lg ring-2 transition-colors ${
                  idx === i ? "ring-primary" : "ring-transparent"
                }`}
              >
                <img src={img} alt="" className="h-16 w-24 object-cover" />
              </button>
            ))}
          </div>
        )}

        <div className="p-6">
          <h3 className="text-2xl font-bold">{obra.titulo}</h3>
          <p className="mt-1 text-muted-foreground">{obra.descricao}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {obra.servicos.map((s) => (
              <span
                key={s}
                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
              >
                {s}
              </span>
            ))}
          </div>
          <a
            href={whatsappCom(`Olá! Gostei da obra "${obra.titulo}" e gostaria de um orçamento.`)}
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

function ObrasPage() {
  const [obra, setObra] = useState<Obra | null>(null);

  return (
    <>
      <PageBanner
        eyebrow="Obras realizadas"
        title="Tenha acesso a obras realizadas pela Trevo"
        description="Confira nossos projetos e tenha uma referência da qualidade do nosso serviço."
      />

      <section className="mx-auto max-w-6xl px-5 pb-20 pt-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {obras.map((o) => (
            <article
              key={o.slug}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-shadow hover:shadow-lift"
            >
              <img
                src={o.imagem}
                alt={o.titulo}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="p-5">
                <h2 className="text-lg font-semibold">{o.titulo}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{o.descricao}</p>
                <p className="mt-2 text-sm text-muted-foreground">{o.servicos.join(" · ")}</p>
                <button
                  type="button"
                  onClick={() => setObra(o)}
                  className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
                >
                  Ver obra completa
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-secondary/50 p-8 text-center">
          <h2 className="text-2xl font-bold">Quer um trabalho assim na sua obra?</h2>
          <a
            href={empresa.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            Falar com a Trevo
          </a>
        </div>
      </section>

      {obra && <ModalObra obra={obra} onClose={() => setObra(null)} />}
    </>
  );
}
