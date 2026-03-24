const steps = [
  {
    number: "01",
    title: "Centralize sua operação",
    description:
      "Reúna clientes, agenda, estoque, contratos e financeiro em um único sistema.",
  },
  {
    number: "02",
    title: "Ganhe mais controle",
    description:
      "Tenha mais clareza sobre a rotina, os compromissos e o andamento da operação.",
  },
  {
    number: "03",
    title: "Cresça com processo",
    description:
      "Profissionalize sua empresa e crie uma base mais forte para evoluir com organização.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-black/20 p-6 md:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.24em] text-[#7ed957] uppercase">
            Como funciona
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Um fluxo simples para transformar sua gestão
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(92,44,111,0.06))] p-6"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#7ed957] font-bold text-black">
                {step.number}
              </span>

              <h3 className="mt-5 text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 leading-7 text-[#C0C0C0]/82">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
