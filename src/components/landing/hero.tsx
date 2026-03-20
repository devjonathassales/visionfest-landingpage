export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-1 text-sm text-lime-300">
            Gestão inteligente para eventos
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-balance text-white md:text-6xl">
            Organize sua empresa de eventos em um só lugar.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Controle orçamentos, contratos, agenda, financeiro, estoque e
            atendimento com mais clareza, profissionalismo e velocidade.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#lead-form"
              className="rounded-full bg-lime-400 px-6 py-3 text-center font-semibold text-black transition hover:scale-[1.02]"
            >
              Solicitar demonstração
            </a>

            <a
              href="#planos"
              className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/5"
            >
              Ver planos
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Agenda e operação",
              "Orçamentos e contratos",
              "Financeiro organizado",
              "Controle de estoque",
              "Cadastro de clientes",
              "Visão gerencial",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/85"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
