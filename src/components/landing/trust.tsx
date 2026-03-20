const trustItems = [
  {
    title: "Pensado para o mercado real",
    description:
      "Construído com foco na rotina de fornecedores de festas e eventos, e não como um sistema genérico.",
  },
  {
    title: "Estrutura pronta para evoluir",
    description:
      "A base foi planejada para crescer junto com o produto, com visão de SaaS profissional.",
  },
  {
    title: "Mais clareza para vender e operar",
    description:
      "A proposta é reduzir ruído, melhorar acompanhamento e fortalecer a gestão comercial e operacional.",
  },
];

export function Trust() {
  return (
    <section className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.25em] text-lime-300 uppercase">
            Diferenciais
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Mais do que software: uma estrutura para profissionalizar sua
            empresa
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {trustItems.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-7"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl border border-lime-400/20 bg-lime-400/10" />
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 leading-7 text-white/68">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
