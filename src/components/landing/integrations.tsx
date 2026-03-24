function PaymentIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
      <path d="M3 6a3 3 0 0 1 3-3h12a2 2 0 0 1 0 4H7a1 1 0 0 0 0 2h13a2 2 0 0 1 2 2v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V6Z" />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
      <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm5 17a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 12 19ZM7 5v12h10V5H7Z" />
    </svg>
  );
}

const integrations = [
  {
    title: "Pagamentos na plataforma",
    description:
      "Integração para que as empresas recebam pagamentos diretamente no VisionFest por cartão, Pix e boleto conforme suporte.",
    badge: "Em breve",
    icon: PaymentIcon,
  },
  {
    title: "App Planner do Cliente",
    description:
      "O cliente final poderá visualizar catálogo, acompanhar o planejamento e contratar diretamente pelo app.",
    badge: "Em breve",
    icon: MobileIcon,
  },
];

export function Integrations() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(92,44,111,0.08))] p-6 md:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-[0.24em] text-[#7ed957] uppercase">
            Integrações
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Evolução planejada para ampliar o poder da plataforma
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#C0C0C0]/86">
            Começamos simples e sólidos. A evolução do produto já considera
            integrações estratégicas para aumentar valor e conveniência.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {integrations.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[1.6rem] border border-white/10 bg-black/20 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#5c2c6f]/35 hover:bg-[rgba(92,44,111,0.08)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(126,217,87,0.12),rgba(92,44,111,0.18))] text-[#7ed957]">
                    <Icon />
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-[#C0C0C0]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-xl leading-8 text-[#C0C0C0]/84">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-[#C0C0C0]/72">
          *No lançamento, não há integração de pagamento. Estudando gateway para
          recebimento direto no sistema.
        </p>
      </div>
    </section>
  );
}
