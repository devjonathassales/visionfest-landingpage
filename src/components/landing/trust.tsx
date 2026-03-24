const trustItems = [
  {
    title: "Pensado para o mercado real",
    description:
      "Construído com foco na rotina de fornecedores de festas e eventos, e não como um sistema genérico.",
  },
  {
    title: "Mais clareza para vender e operar",
    description:
      "A proposta é reduzir ruído, melhorar acompanhamento e fortalecer a gestão comercial e operacional.",
  },
  {
    title: "Base pronta para evoluir",
    description:
      "A estrutura foi pensada para crescer junto com o produto, com visão de SaaS profissional.",
  },
];

export function Trust() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.24em] text-[#7ed957] uppercase">
            Diferenciais
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Mais do que software: uma estrutura para profissionalizar sua
            empresa
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {trustItems.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(92,44,111,0.06))] p-6"
            >
              <div className="mb-5 h-11 w-11 rounded-2xl border border-[#5c2c6f]/30 bg-[rgba(92,44,111,0.16)]" />
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 leading-7 text-[#C0C0C0]/82">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
