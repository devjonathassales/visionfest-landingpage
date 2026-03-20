const features = [
  {
    title: "Agenda centralizada",
    description:
      "Tenha visão clara dos eventos, entregas, compromissos e demandas da operação em um único ambiente.",
  },
  {
    title: "Orçamentos e contratos",
    description:
      "Organize sua jornada comercial com mais rapidez, mais padrão e menos retrabalho no atendimento.",
  },
  {
    title: "Financeiro mais seguro",
    description:
      "Acompanhe entradas, recebimentos e organização financeira sem depender de controles espalhados.",
  },
  {
    title: "Estoque e locação",
    description:
      "Controle produtos, movimentações e itens alugados com muito mais clareza operacional.",
  },
  {
    title: "Cadastro de clientes",
    description:
      "Centralize informações estratégicas dos clientes e melhore o acompanhamento da equipe.",
  },
  {
    title: "Gestão para crescer",
    description:
      "Estruture sua empresa para vender mais, operar melhor e ganhar maturidade de gestão.",
  },
];

export function Features() {
  return (
    <section id="recursos" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.25em] text-lime-300 uppercase">
            Recursos principais
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Tudo o que sua empresa precisa para operar com mais clareza
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/70">
            O VisionFest nasce para profissionalizar a rotina de fornecedores de
            festas e eventos e transformar a gestão em vantagem competitiva.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <div className="mb-5 h-11 w-11 rounded-2xl bg-lime-400/14" />
              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-4 leading-7 text-white/68">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
