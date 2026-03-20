const steps = [
  {
    title: "Organize sua base",
    description:
      "Cadastre clientes, serviços, produtos e dados essenciais do seu negócio.",
  },
  {
    title: "Estruture sua operação",
    description:
      "Centralize agenda, financeiro, orçamentos e acompanhamento da rotina.",
  },
  {
    title: "Ganhe escala",
    description:
      "Tenha mais previsibilidade, menos retrabalho e uma gestão muito mais profissional.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-widest text-lime-300 uppercase">
            Como funciona
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Um fluxo simples para transformar sua gestão
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-lime-400 font-bold text-black">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 leading-7 text-white/70">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
