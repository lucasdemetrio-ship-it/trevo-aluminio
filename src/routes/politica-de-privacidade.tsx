import { createFileRoute } from "@tanstack/react-router";
import { empresa } from "@/lib/site";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Alumínios Trevo" },
      {
        name: "description",
        content:
          "Como a Alumínios Trevo coleta, usa e protege os dados enviados por clientes através do site, WhatsApp e e-mail.",
      },
      { property: "og:title", content: "Política de Privacidade | Alumínios Trevo" },
      {
        property: "og:description",
        content: "Informações sobre uso de dados e cookies no site da Alumínios Trevo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PoliticaPage,
});

function PoliticaPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-3xl font-bold sm:text-4xl">Política de Privacidade</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Última atualização: janeiro de 2026 · {empresa.nome}
      </p>

      <div className="mt-8 space-y-6 leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-xl font-semibold text-foreground">1. Dados que coletamos</h2>
          <p className="mt-2">
            Coletamos apenas os dados que você informa voluntariamente ao solicitar orçamento: nome,
            telefone, cidade, e-mail e a descrição do serviço desejado. Não coletamos documentos nem
            dados sensíveis pelo site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">2. Como usamos seus dados</h2>
          <p className="mt-2">
            Os dados são utilizados exclusivamente para elaborar orçamentos, agendar medições e
            manter contato sobre o serviço solicitado. Não vendemos nem compartilhamos informações
            com terceiros para fins de marketing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">3. WhatsApp e e-mail</h2>
          <p className="mt-2">
            O formulário do site não armazena dados em servidor próprio: ele monta uma mensagem que
            é enviada pelo seu aplicativo de WhatsApp. As conversas ficam sujeitas também à política
            de privacidade do WhatsApp.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">4. Cookies</h2>
          <p className="mt-2">
            Utilizamos apenas cookies necessários ao funcionamento do site e, eventualmente, cookies
            de medição de audiência para entender quais páginas são mais acessadas. Você pode
            bloqueá-los nas configurações do navegador.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">5. Seus direitos (LGPD)</h2>
          <p className="mt-2">
            Conforme a Lei nº 13.709/2018, você pode solicitar a confirmação, correção ou exclusão
            dos seus dados a qualquer momento pelo e-mail{" "}
            <a href={`mailto:${empresa.email}`} className="text-primary hover:underline">
              {empresa.email}
            </a>{" "}
            ou pelo WhatsApp {empresa.whatsappNumero}.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">6. Contato</h2>
          <p className="mt-2">
            {empresa.nome} — {empresa.endereco}. Telefone {empresa.telefone}.
          </p>
        </section>
      </div>
    </article>
  );
}
