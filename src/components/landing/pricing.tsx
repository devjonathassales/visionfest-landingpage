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
    <section id="planos" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.24em] text-[#7ed957] uppercase">
            Planos
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Estrutura clara para acompanhar o momento do seu negócio
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-[1.8rem] border p-8 ${
                plan.featured
                  ? "border-[#5c2c6f]/45 bg-[linear-gradient(180deg,rgba(92,44,111,0.16),rgba(126,217,87,0.08))]"
                  : "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(92,44,111,0.04))]"
              }`}
            >
              {plan.featured ? (
                <span className="inline-flex rounded-full border border-[#7ed957]/20 bg-[#7ed957]/10 px-3 py-1 text-xs font-semibold tracking-wider text-[#7ed957] uppercase">
                  Mais completo
                </span>
              ) : null}

              <h3 className="mt-4 text-2xl font-bold text-white">
                {plan.name}
              </h3>
              <p className="mt-4 text-4xl font-black tracking-tight text-white">
                {plan.price}
              </p>
              <p className="mt-4 min-h-[84px] leading-7 text-[#C0C0C0]/82">
                {plan.description}
              </p>

              <a
                href="#lead-form"
                className={`mt-8 inline-flex rounded-full px-5 py-3 font-semibold transition ${
                  plan.featured
                    ? "bg-[#7ed957] text-black hover:scale-[1.02]"
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
