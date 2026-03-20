const beforeItems = [
  "Agenda e compromissos espalhados",
  "Orçamentos sem padrão",
  "Informações de clientes descentralizadas",
  "Financeiro confuso",
  "Estoque sem visão clara",
];

const afterItems = [
  "Operação centralizada",
  "Fluxos mais organizados",
  "Atendimento com mais clareza",
  "Financeiro mais previsível",
  "Gestão preparada para crescer",
];

export function Comparison() {
  return (
    <section className="px-6 py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-red-400/10 bg-white/[0.04] p-8">
          <p className="text-sm font-semibold tracking-[0.25em] text-white/45 uppercase">
            Antes
          </p>
          <h3 className="mt-4 text-2xl font-bold text-white">
            Rotina pesada, desorganizada e difícil de escalar
          </h3>

          <div className="mt-8 space-y-4">
            {beforeItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/8 bg-black/20 px-4 py-4 text-white/70"
              >
                {item}
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[2rem] border border-lime-400/20 bg-lime-400/[0.08] p-8 shadow-[0_0_50px_rgba(126,217,87,0.08)]">
          <p className="text-sm font-semibold tracking-[0.25em] text-lime-300 uppercase">
            Depois
          </p>
          <h3 className="mt-4 text-2xl font-bold text-white">
            Gestão mais profissional, clara e preparada para crescer
          </h3>

          <div className="mt-8 space-y-4">
            {afterItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-lime-400/10 bg-black/20 px-4 py-4 text-white/85"
              >
                {item}
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
