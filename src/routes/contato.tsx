import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { empresa, categorias, whatsappCom } from "@/lib/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e Orçamento | Alumínios Trevo Petrolândia SC" },
      {
        name: "description",
        content:
          "Solicite orçamento de esquadrias de alumínio e vidros temperados. WhatsApp (47) 99188-0768, Rodovia SC 110, Rio Antinhas, Petrolândia/SC.",
      },
      { property: "og:title", content: "Contato e Orçamento | Alumínios Trevo" },
      {
        property: "og:description",
        content:
          "Fale com a Alumínios Trevo pelo WhatsApp, telefone ou e-mail e peça seu orçamento.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cidade, setCidade] = useState("");
  const [servico, setServico] = useState(categorias[0]?.nome ?? "Janelas");
  const [detalhes, setDetalhes] = useState("");

  const mensagem = [
    "Olá! Gostaria de um orçamento.",
    nome && `Nome: ${nome}`,
    telefone && `Telefone: ${telefone}`,
    cidade && `Cidade: ${cidade}`,
    `Serviço: ${servico}`,
    detalhes && `Detalhes: ${detalhes}`,
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <>
      <section className="hero-surface relative overflow-hidden">
        <div className="blueprint-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 py-14">
          <p className="eyebrow text-primary-foreground/80">Contato</p>
          <h1 className="mt-3 max-w-[22ch] text-4xl font-extrabold text-balance text-primary-foreground sm:text-5xl">
            Faça seu orçamento
          </h1>
          <p className="mt-4 max-w-[56ch] text-primary-foreground/85">
            Preencha o formulário e envie direto para o nosso WhatsApp, ou fale conosco por telefone
            e e-mail.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <h2 className="text-2xl font-bold">Fale com a fábrica</h2>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a
                href={empresa.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl bg-primary px-4 py-4 font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
              >
                <span className="inline-flex items-center gap-2">
                  <MessageCircle className="size-4" aria-hidden /> WhatsApp
                </span>
                <span className="font-mono">{empresa.whatsappNumero}</span>
              </a>
            </li>
            <li>
              <a
                href={empresa.telefoneLink}
                className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-4 font-semibold transition-colors hover:bg-secondary"
              >
                <span className="inline-flex items-center gap-2">
                  <Phone className="size-4 text-primary" aria-hidden /> Telefone comercial
                </span>
                <span className="font-mono text-muted-foreground">{empresa.telefone}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${empresa.email}`}
                className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-4 font-semibold transition-colors hover:bg-secondary"
              >
                <span className="inline-flex items-center gap-2">
                  <Mail className="size-4 text-primary" aria-hidden /> E-mail
                </span>
                <span className="break-all text-right font-mono text-xs text-muted-foreground">
                  {empresa.email}
                </span>
              </a>
            </li>
            <li className="rounded-xl border border-border bg-card px-4 py-4">
              <span className="inline-flex items-center gap-2 font-semibold">
                <MapPin className="size-4 text-primary" aria-hidden /> Endereço
              </span>
              <p className="mt-1 text-muted-foreground">{empresa.endereco}</p>
              <a
                href={empresa.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-xs font-semibold text-primary hover:text-primary-dark"
              >
                Abrir no Google Maps →
              </a>
            </li>
            <li className="rounded-xl border border-border bg-card px-4 py-4">
              <span className="inline-flex items-center gap-2 font-semibold">
                <Clock className="size-4 text-primary" aria-hidden /> Horário
              </span>
              <p className="mt-1 text-muted-foreground">{empresa.horario}</p>
            </li>
          </ul>
        </div>

        <form
          className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="text-xl font-bold">Formulário de orçamento</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Ao enviar, abrimos o WhatsApp com a sua mensagem já preenchida.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium">
              Nome
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome"
                className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:border-primary focus:ring-2 focus:ring-ring/25"
              />
            </label>
            <label className="text-sm font-medium">
              Telefone
              <input
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="(47) 00000-0000"
                className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:border-primary focus:ring-2 focus:ring-ring/25"
              />
            </label>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium">
              Cidade
              <input
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                placeholder="Petrolândia"
                className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:border-primary focus:ring-2 focus:ring-ring/25"
              />
            </label>
            <label className="text-sm font-medium">
              O que você precisa
              <select
                value={servico}
                onChange={(e) => setServico(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:border-primary focus:ring-2 focus:ring-ring/25"
              >
                {categorias.map((c) => (
                  <option key={c.slug}>{c.nome}</option>
                ))}
                <option>Outro serviço</option>
              </select>
            </label>
          </div>

          <label className="mt-4 block text-sm font-medium">
            Medidas e detalhes
            <textarea
              rows={4}
              value={detalhes}
              onChange={(e) => setDetalhes(e.target.value)}
              placeholder="Ex.: 3 janelas de correr 1,20 x 1,00 m, cor branca, vidro temperado."
              className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:border-primary focus:ring-2 focus:ring-ring/25"
            />
          </label>

          <a
            href={whatsappCom(mensagem)}
            target="_blank"
            rel="noreferrer"
            className="mt-6 block rounded-lg bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            Enviar pelo WhatsApp
          </a>
        </form>
      </section>

      <section className="border-t border-border">
        <iframe
          title="Localização da Alumínios Trevo"
          src="https://www.google.com/maps?q=Rodovia%20SC%20110%2C%20Rio%20Antinhas%2C%20Petrol%C3%A2ndia%20-%20SC&output=embed"
          className="h-[380px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
