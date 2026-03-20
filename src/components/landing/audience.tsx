const audiences = [
  {
    title: "Decoradores",
    description:
      "Organize demandas, agenda, clientes, itens e processos com mais previsibilidade e menos retrabalho.",
  },
  {
    title: "Buffets",
    description:
      "Centralize a rotina operacional e financeira para ter mais controle da operação e das entregas.",
  },
  {
    title: "Locadores",
    description:
      "Tenha visão melhor do estoque, locações, movimentações e compromissos da empresa.",
  },
  {
    title: "Cerimonialistas",
    description:
      "Acompanhe clientes, eventos, agenda e fluxos importantes sem depender de processos soltos.",
  },
];

export function Audience() {
  return (
    <section className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.25em] text-lime-300 uppercase">
            Para quem é o VisionFest
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Feito para empresas que vivem a rotina intensa do mercado de festas
            e eventos
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/70">
            O VisionFest foi pensado para negócios que precisam vender melhor,
            organizar a operação e profissionalizar a gestão sem complicação.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {audiences.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl bg-gradient-to-br from-lime-400/30 to-white/5" />
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 leading-7 text-white/68">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
