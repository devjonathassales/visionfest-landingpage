const plans = [
  {
    name: "Essencial",
    price: "R$ 179,90",
    description: "Para quem quer começar a organizar a operação.",
  },
  {
    name: "Operação",
    price: "R$ 200,00",
    description: "Mais estrutura para acompanhar a rotina do negócio.",
  },
  {
    name: "Full",
    price: "R$ 259,90",
    description: "Experiência mais completa para gestão e crescimento.",
    featured: true,
  },
];

export function Pricing() {
  return (
    <section id="planos" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-widest text-lime-300 uppercase">
            Planos
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Escolha a estrutura ideal para a sua empresa
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-3xl border p-8 ${
                plan.featured
                  ? "border-lime-400/40 bg-lime-400/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
              <p className="mt-4 text-4xl font-extrabold text-white">
                {plan.price}
              </p>
              <p className="mt-4 leading-7 text-white/70">{plan.description}</p>

              <a
                href="#lead-form"
                className={`mt-8 inline-flex rounded-full px-5 py-3 font-semibold transition ${
                  plan.featured
                    ? "bg-lime-400 text-black hover:scale-[1.02]"
                    : "border border-white/15 text-white hover:bg-white/5"
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
