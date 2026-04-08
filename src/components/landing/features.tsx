function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M7 2h2v2h6V2h2v2h3a2 2 0 0 1 2 2v13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a2 2 0 0 1 2-2h3V2Zm13 8H4v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9Z" />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M3 6a3 3 0 0 1 3-3h12a2 2 0 0 1 0 4H7a1 1 0 0 0 0 2h13a2 2 0 0 1 2 2v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V6Zm15 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M16 11a4 4 0 1 0-3.999-4A4 4 0 0 0 16 11ZM8 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm8 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4ZM8 14c-.29 0-.62.01-.97.04C4.6 14.28 0 15.38 0 18v2h6v-2c0-1.41.78-2.56 2.24-3.44A8.17 8.17 0 0 0 8 14Z" />
    </svg>
  );
}

function BoxesIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="m12 2 8 4v12l-8 4-8-4V6l8-4Zm0 2.24L6.47 7 12 9.76 17.53 7 12 4.24ZM4 8.62v8.15l7 3.5v-8.15l-7-3.5Zm9 11.65 7-3.5V8.62l-7 3.5v8.15Z" />
    </svg>
  );
}

function FileTextIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm7 1.5V9h5.5L13 3.5ZM8 12h8v2H8v-2Zm0 4h8v2H8v-2Z" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M4 20h16v2H2V4h2v16Zm3-3H5v-5h2v5Zm6 0h-2V7h2v10Zm6 0h-2v-8h2v8Z" />
    </svg>
  );
}

const features = [
  {
    title: "Agenda centralizada",
    description:
      "Tenha visão clara dos eventos, entregas, compromissos e demandas operacionais em um único ambiente.",
    icon: CalendarIcon,
  },
  {
    title: "Financeiro mais seguro",
    description:
      "Acompanhe entradas, recebimentos e pendências sem depender de controles espalhados.",
    icon: WalletIcon,
  },
  {
    title: "Clientes e relacionamento",
    description:
      "Centralize informações estratégicas dos clientes e acompanhe melhor cada oportunidade.",
    icon: UsersIcon,
  },
  {
    title: "Estoque e locação",
    description:
      "Controle itens, movimentações e produtos alugados com mais clareza operacional.",
    icon: BoxesIcon,
  },
  {
    title: "Orçamentos e contratos",
    description:
      "Estruture sua jornada comercial com mais padrão, mais agilidade e menos retrabalho.",
    icon: FileTextIcon,
  },
  {
    title: "Relatórios e visão gerencial",
    description:
      "Tenha uma visão mais profissional do seu negócio para acompanhar evolução e desempenho.",
    icon: ChartIcon,
  },
];

export function Features() {
  return (
    <section id="recursos" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-12">
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-[0.24em] text-[#7ed957] uppercase">
              Recursos principais
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Tudo o que sua empresa precisa para operar com mais clareza
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#C0C0C0]/86">
              O VisionFest foi pensado para organizar a rotina, reduzir
              retrabalho e transformar a gestão em uma vantagem competitiva.
            </p>

            <div className="mt-8 rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(92,44,111,0.10))] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
              <p className="text-sm tracking-[0.22em] text-[#C0C0C0]/70 uppercase">
                Resultado esperado
              </p>
              <ul className="mt-4 space-y-3 text-[#C0C0C0]/88">
                <li>• operação mais organizada</li>
                <li>• atendimento mais profissional</li>
                <li>• mais controle financeiro e operacional</li>
                <li>• menos dependência de processos soltos</li>
              </ul>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(92,44,111,0.08))] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#5c2c6f]/35 hover:shadow-[0_20px_50px_rgba(0,0,0,0.24)]"
                >
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(126,217,87,0.12),rgba(92,44,111,0.18))] text-[#7ed957]">
                    <Icon />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#C0C0C0]/82">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
