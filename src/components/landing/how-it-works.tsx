const steps = [
  {
    title: "Centralize sua operação",
    description:
      "Reúna dados, clientes, rotina, eventos e pontos importantes do seu negócio em um único sistema.",
  },
  {
    title: "Ganhe controle da gestão",
    description:
      "Estruture agenda, financeiro, atendimento e processos para ter mais previsibilidade e menos falhas.",
  },
  {
    title: "Escale com organização",
    description:
      "Profissionalize sua empresa e aumente a capacidade de operação sem perder qualidade no processo.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.25em] text-lime-300 uppercase">
            Como funciona
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Um sistema pensado para simplificar a rotina e elevar o nível da sua
            gestão
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[1.75rem] border border-white/10 bg-[#07101d] p-7"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-lime-400 font-bold text-black shadow-[0_0_25px_rgba(126,217,87,0.25)]">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-4 leading-7 text-white/68">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
