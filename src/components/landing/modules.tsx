const moduleGroups = [
  {
    title: "Comercial",
    description: "Organize relacionamento, propostas e acompanhamento.",
    items: ["Clientes", "CRM", "Orçamentos", "Contratos"],
  },
  {
    title: "Operação",
    description: "Tenha visão clara da rotina e das entregas da empresa.",
    items: ["Agenda", "Cadastros", "Produtos/Serviços", "Estoque"],
  },
  {
    title: "Financeiro",
    description: "Acompanhe contas, centro de custo e movimentações.",
    items: ["Caixa", "Contas a pagar", "Contas a receber", "Contas bancárias"],
  },
  {
    title: "Gestão",
    description: "Mais estrutura para acompanhar a evolução do negócio.",
    items: ["Relatórios", "Configurações", "Permissões", "Dashboard"],
  },
];

function GroupIcon({ index }: { index: number }) {
  const baseClass =
    "inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-[#7ed957]";

  if (index === 0) {
    return (
      <div className={baseClass}>
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M4 4h16v4H4V4Zm0 6h10v4H4v-4Zm0 6h16v4H4v-4Z" />
        </svg>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className={baseClass}>
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M12 2 3 7l9 5 9-5-9-5Zm-9 8 9 5 9-5v7l-9 5-9-5v-7Z" />
        </svg>
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className={baseClass}>
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M3 6a3 3 0 0 1 3-3h12a2 2 0 0 1 0 4H7a1 1 0 0 0 0 2h13a2 2 0 0 1 2 2v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V6Z" />
        </svg>
      </div>
    );
  }

  return (
    <div className={baseClass}>
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M4 20h16v2H2V4h2v16Zm3-3H5v-5h2v5Zm6 0h-2V7h2v10Zm6 0h-2v-8h2v8Z" />
      </svg>
    </div>
  );
}

export function Modules() {
  return (
    <section id="modulos" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(92,44,111,0.08))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.22)] md:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.24em] text-[#7ed957] uppercase">
            Módulos do sistema
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Uma estrutura organizada para acompanhar a operação real do seu
            negócio
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#C0C0C0]/86">
            O VisionFest reúne as áreas mais importantes da gestão em um só
            ambiente, reduzindo falhas, retrabalho e dependência de controles
            isolados.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {moduleGroups.map((group, index) => (
            <article
              key={group.title}
              className="rounded-[1.6rem] border border-white/10 bg-black/20 p-6"
            >
              <div className="flex items-start gap-4">
                <GroupIcon index={index} />

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {group.title}
                  </h3>
                  <p className="mt-2 leading-7 text-[#C0C0C0]/80">
                    {group.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/8 bg-[rgba(92,44,111,0.12)] px-3.5 py-1.5 text-sm text-[#C0C0C0]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
