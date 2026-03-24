function DecorIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M12 2 4 9h3v10h10V9h3l-8-7Zm-3 9h6v6H9v-6Z" />
    </svg>
  );
}

function BuffetIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M7 2h2v8a3 3 0 1 1-6 0V2h2v8a1 1 0 0 0 2 0V2Zm8 0c2.76 0 5 2.24 5 5v5a4 4 0 0 1-3 3.87V22h-2v-6H13V7c0-2.76 2.24-5 5-5Z" />
    </svg>
  );
}

function RentalIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="m12 2 8 4v12l-8 4-8-4V6l8-4Zm0 2.24L6.47 7 12 9.76 17.53 7 12 4.24ZM4 8.62v8.15l7 3.5v-8.15l-7-3.5Zm9 11.65 7-3.5V8.62l-7 3.5v8.15Z" />
    </svg>
  );
}

function CeremonyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M12 2a5 5 0 0 1 5 5c0 1.93-1.09 3.6-2.68 4.44A7 7 0 0 1 19 18v2H5v-2a7 7 0 0 1 4.68-6.56A4.98 4.98 0 0 1 7 7a5 5 0 0 1 5-5Z" />
    </svg>
  );
}

const audiences = [
  {
    title: "Decoradores",
    description:
      "Organize demandas, agenda, clientes, itens e processos com mais previsibilidade e menos retrabalho.",
    icon: DecorIcon,
  },
  {
    title: "Buffets",
    description:
      "Centralize a rotina operacional e financeira para ter mais controle da operação e das entregas.",
    icon: BuffetIcon,
  },
  {
    title: "Locadores",
    description:
      "Tenha visão melhor do estoque, locações, movimentações e compromissos da empresa.",
    icon: RentalIcon,
  },
  {
    title: "Cerimonialistas",
    description:
      "Acompanhe clientes, eventos, agenda e fluxos importantes sem depender de processos soltos.",
    icon: CeremonyIcon,
  },
];

export function Audience() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.24em] text-[#7ed957] uppercase">
            Para quem é o VisionFest
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Feito para empresas que vivem a rotina intensa do mercado de festas
            e eventos
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#C0C0C0]/86">
            O VisionFest foi pensado para negócios que precisam vender melhor,
            organizar a operação e profissionalizar a gestão sem complicação.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {audiences.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(92,44,111,0.06))] p-7 shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[#5c2c6f]/35 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(92,44,111,0.10))]"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(126,217,87,0.14),rgba(92,44,111,0.18))] text-[#7ed957]">
                  <Icon />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-[#C0C0C0]/82">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
