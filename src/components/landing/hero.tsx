export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(126,217,87,0.12),transparent_18%),radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.07),transparent_15%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-1 text-sm font-medium text-lime-300">
            Mais organização. Mais controle. Mais vendas.
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl leading-tight font-black tracking-tight text-white md:text-6xl">
            O sistema que ajuda fornecedores de festas e eventos a crescer com
            gestão profissional.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
            Centralize agenda, orçamentos, contratos, clientes, estoque e
            financeiro em um só lugar e pare de depender de processos soltos.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#lead-form"
              className="rounded-full bg-lime-400 px-7 py-3.5 text-center font-semibold text-black shadow-[0_0_40px_rgba(126,217,87,0.22)] transition hover:scale-[1.02]"
            >
              Solicitar demonstração
            </a>

            <a
              href="https://wa.me/5585996451221"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/12 px-7 py-3.5 text-center font-semibold text-white transition hover:bg-white/5"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
            {[
              { value: "Agenda", label: "controle operacional" },
              { value: "Financeiro", label: "mais organizado" },
              { value: "Estoque", label: "sob mais controle" },
            ].map((item) => (
              <div
                key={item.value}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
              >
                <p className="text-lg font-bold text-white">{item.value}</p>
                <p className="mt-1 text-sm text-white/60">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-lime-400/10 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#07101f] p-5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
              </div>

              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                  <p className="text-xs tracking-[0.2em] text-lime-300 uppercase">
                    Resumo do dia
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-xl bg-black/20 p-3">
                      <p className="text-sm text-white/55">Eventos</p>
                      <p className="mt-1 text-2xl font-bold text-white">12</p>
                    </div>
                    <div className="rounded-xl bg-black/20 p-3">
                      <p className="text-sm text-white/55">Recebimentos</p>
                      <p className="mt-1 text-2xl font-bold text-white">
                        R$ 8,4k
                      </p>
                    </div>
                    <div className="rounded-xl bg-black/20 p-3">
                      <p className="text-sm text-white/55">Pendências</p>
                      <p className="mt-1 text-2xl font-bold text-white">03</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    "Orçamentos e contratos",
                    "Fluxo financeiro",
                    "Cadastro de clientes",
                    "Controle de locação",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/8 bg-white/5 p-4 text-sm text-white/85"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
