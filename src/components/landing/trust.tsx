function MarketIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M3 10h18v10H3V10Zm2 2v6h14v-6H5ZM7 4h10l2 4H5l2-4Z" />
    </svg>
  );
}

function ClarityIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="m3 17 6-6 4 4 7-8 1.5 1.32L13 18l-4-4-4.5 4.5L3 17Z" />
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M4 20h16v2H2V4h2v16Zm4-4-3-3 1.4-1.4L8 13.17l4.6-4.59L15 11l4.6-4.6L21 7.83 15 13.83l-2.4-2.4L8 16Z" />
    </svg>
  );
}

const trustItems = [
  {
    title: "Pensado para o mercado real",
    description:
      "Construído com foco na rotina de fornecedores de festas e eventos, e não como um sistema genérico.",
    icon: MarketIcon,
  },
  {
    title: "Mais clareza para vender e operar",
    description:
      "A proposta é reduzir ruído, melhorar acompanhamento e fortalecer a gestão comercial e operacional.",
    icon: ClarityIcon,
  },
  {
    title: "Base pronta para evoluir",
    description:
      "A estrutura foi pensada para crescer junto com o produto, com visão de SaaS profissional.",
    icon: GrowthIcon,
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
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(92,44,111,0.06))] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#5c2c6f]/35 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(92,44,111,0.10))]"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(92,44,111,0.20),rgba(126,217,87,0.10))] text-[#C0C0C0]">
                  <Icon />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-[#C0C0C0]/82">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
