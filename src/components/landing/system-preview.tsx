export function SystemPreview() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-lime-400/10 blur-3xl" />
      <div className="relative rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-5">
        <div className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#07101d]">
          <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-green-400/70" />
            </div>

            <div className="rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-lime-300">
              VisionFest Dashboard
            </div>
          </div>

          <div className="grid min-h-[480px] md:grid-cols-[220px_1fr]">
            <aside className="border-r border-white/8 bg-[#060d18] p-4">
              <div className="rounded-2xl border border-lime-400/15 bg-lime-400/8 p-4">
                <p className="text-xs tracking-[0.2em] text-lime-300 uppercase">
                  Painel
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Gestão centralizada
                </p>
              </div>

              <div className="mt-4 space-y-2">
                {[
                  "Dashboard",
                  "Cadastros",
                  "Clientes",
                  "Agenda",
                  "Financeiro",
                  "Estoque",
                  "Relatórios",
                ].map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-xl px-4 py-3 text-sm ${
                      index === 4
                        ? "bg-lime-400 text-black"
                        : "bg-white/[0.04] text-white/70"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </aside>

            <div className="p-5 md:p-6">
              <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-5">
                  <p className="text-xs tracking-[0.25em] text-lime-300 uppercase">
                    Contas a receber
                  </p>

                  <div className="mt-5 grid gap-3 md:grid-cols-3">
                    <div className="rounded-xl bg-black/20 p-4">
                      <p className="text-sm text-white/50">Em aberto</p>
                      <p className="mt-1 text-2xl font-bold text-white">
                        R$ 12,8k
                      </p>
                    </div>
                    <div className="rounded-xl bg-black/20 p-4">
                      <p className="text-sm text-white/50">Recebido</p>
                      <p className="mt-1 text-2xl font-bold text-white">
                        R$ 8,4k
                      </p>
                    </div>
                    <div className="rounded-xl bg-black/20 p-4">
                      <p className="text-sm text-white/50">Pendências</p>
                      <p className="mt-1 text-2xl font-bold text-white">03</p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      "Entrada proporcional do plano Premium",
                      "Parcela de evento corporativo",
                      "Saldo de contrato de locação",
                      "Recebimento de buffet social",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-xl border border-white/8 bg-black/15 px-4 py-3"
                      >
                        <span className="text-sm text-white/78">{item}</span>
                        <span className="text-sm font-semibold text-white">
                          R$ 650,00
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-5">
                    <p className="text-xs tracking-[0.25em] text-lime-300 uppercase">
                      Agenda
                    </p>
                    <div className="mt-4 space-y-3">
                      {[
                        "Montagem • Casamento",
                        "Reunião • Cliente premium",
                        "Entrega • Peças de locação",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-xl bg-black/20 px-4 py-3 text-sm text-white/78"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-5">
                    <p className="text-xs tracking-[0.25em] text-lime-300 uppercase">
                      Módulos ativos
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {[
                        "Financeiro",
                        "Clientes",
                        "Agenda",
                        "Estoque",
                        "CRM",
                        "Relatórios",
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/8 bg-black/20 px-3 py-2 text-xs text-white/72"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
