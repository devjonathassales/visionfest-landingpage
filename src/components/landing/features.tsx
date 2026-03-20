const features = [
  {
    title: "Agenda centralizada",
    description:
      "Visualize eventos, compromissos e demandas operacionais sem depender de anotações soltas.",
  },
  {
    title: "Orçamentos mais rápidos",
    description:
      "Tenha processos mais claros para vender melhor e responder clientes com mais agilidade.",
  },
  {
    title: "Financeiro sob controle",
    description:
      "Acompanhe recebimentos, fluxo e organização financeira com mais segurança.",
  },
  {
    title: "Estoque e locação",
    description:
      "Controle itens, movimentações e operação de produtos alugados ou vendidos.",
  },
  {
    title: "Cadastro de clientes",
    description:
      "Centralize informações importantes e melhore o acompanhamento comercial.",
  },
  {
    title: "Crescimento com processo",
    description:
      "Profissionalize sua empresa e ganhe visão para escalar sem perder controle.",
  },
];

export function Features() {
  return (
    <section id="recursos" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-widest text-lime-300 uppercase">
            Recursos
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Tudo o que sua operação precisa para funcionar melhor
          </h2>
          <p className="mt-4 text-white/70">
            O VisionFest foi pensado para reduzir retrabalho, organizar a rotina
            e transformar sua gestão em algo realmente profissional.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-3 leading-7 text-white/70">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
