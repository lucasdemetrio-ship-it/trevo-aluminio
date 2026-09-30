import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/page-banner";
import { sobreFachada } from "@/lib/site";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Alumínios Trevo | Fábrica em Petrolândia SC" },
      {
        name: "description",
        content:
          "Mais de uma década fabricando esquadrias de alumínio e vidros temperados em Rio Antinhas, Petrolândia/SC, com equipe própria de medição e instalação.",
      },
      { property: "og:title", content: "Sobre a Alumínios Trevo" },
      {
        property: "og:description",
        content: "Conheça a Alumínios Trevo, fábrica de esquadrias em Petrolândia/SC.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <>
      <PageBanner
        eyebrow="Sobre nós"
        title="Conheça um pouco da nossa história"
        description="Conheça nossa trajetória, nossa experiência e o trabalho que realizamos."
      />
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-24 pt-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-primary">Nossa história</p>
          <div className="mt-3 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Fundada em novembro de 2007, a Trevo Alumínios se dedica à produção de esquadrias de
              alumínio e vidros temperados. Com mais de uma década de experiência, nossa
              trajetória é marcada pela conquista de espaço no mercado local e regional, sempre
              priorizando excelência e qualidade em tudo o que fazemos.
            </p>
          </div>
        </div>
        <img
          src={sobreFachada}
          alt="Alumínios Trevo em Petrolândia, Santa Catarina"
          className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card ring-1 ring-border"
          width={465}
          height={350}
        />
      </section>
    </>
  );
}
