const plans = [
  {
    name: "Essencial",
    price: "R$ 179,90",
    description:
      "Para quem quer começar a organizar e profissionalizar a operação.",
  },
  {
    name: "Operação",
    price: "R$ 200,00",
    description:
      "Mais estrutura para acompanhar a rotina e ganhar controle real.",
  },
  {
    name: "Full",
    price: "R$ 259,90",
    description:
      "Plano mais completo para empresas que querem crescer com gestão.",
    featured: true,
  },
];

export function Pricing() {
  return (
    <section id="planos" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.25em] text-lime-300 uppercase">
            Planos
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Estrutura simples, clara e pronta para acompanhar sua evolução
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-[2rem] border p-8 backdrop-blur-sm ${
                plan.featured
                  ? "border-lime-400/40 bg-lime-400/[0.09] shadow-[0_0_50px_rgba(126,217,87,0.08)]"
                  : "border-white/10 bg-white/[0.05]"
              }`}
            >
              {plan.featured ? (
                <span className="inline-flex rounded-full border border-lime-400/30 bg-lime-400/12 px-3 py-1 text-xs font-semibold tracking-wider text-lime-300 uppercase">
                  Mais completo
                </span>
              ) : null}

              <h3 className="mt-4 text-2xl font-bold text-white">
                {plan.name}
              </h3>
              <p className="mt-4 text-4xl font-black tracking-tight text-white">
                {plan.price}
              </p>
              <p className="mt-4 min-h-[84px] leading-7 text-white/68">
                {plan.description}
              </p>

              <a
                href="#lead-form"
                className={`mt-8 inline-flex rounded-full px-5 py-3 font-semibold transition ${
                  plan.featured
                    ? "bg-lime-400 text-black hover:scale-[1.02]"
                    : "border border-white/12 text-white hover:bg-white/5"
                }`}
              >
                Quero conhecer
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
