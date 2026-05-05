function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="m12 2 7 3v6c0 5-3.4 9.74-7 11-3.6-1.26-7-6-7-11V5l7-3Zm0 4.18L7 8.3v2.7c0 3.8 2.34 7.5 5 8.7 2.66-1.2 5-4.9 5-8.7V8.3l-5-2.12Z" />
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

function CrownIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="m3 18 2-10 5 4 2-6 2 6 5-4 2 10H3Zm2.5-2h13l-1-5-4.5 3.5L12 10l-1 4.5L6.5 11l-1 5Z" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

const plans = [
  {
    name: "Start",
    subtitle: "Para sair da bagunça do WhatsApp",
    price: "R$ 49,90",
    badge: "Entrada",
    icon: ShieldIcon,
    users: "Até 2 usuários",
    items: [
      "Cadastro de clientes",
      "Agenda de eventos",
      "Orçamentos e contratos",
      "Controle financeiro básico",
      "Eventos ilimitados",
      "Ideal para começar com baixo investimento",
    ],
  },
  {
    name: "Profissional",
    subtitle: "Para organizar vendas e operação",
    price: "R$ 79,90",
    badge: "Custo-benefício",
    icon: BoltIcon,
    users: "Até 5 usuários",
    items: [
      "Tudo do Start",
      "Estoque e itens de locação",
      "Contas a pagar e receber",
      "Relatórios operacionais",
      "Mais controle sobre datas, clientes e pagamentos",
      "Ideal para empresas que já vendem toda semana",
    ],
  },
  {
    name: "Premium",
    subtitle: "Lote fundador por tempo limitado",
    price: "R$ 79,90",
    oldPrice: "R$ 99,90",
    badge: "Mais vendido",
    icon: CrownIcon,
    users: "Usuários ilimitados",
    featured: true,
    items: [
      "Tudo do Profissional",
      "Todos os módulos principais liberados",
      "Eventos ilimitados",
      "Sem taxa por evento",
      "Prioridade no atendimento inicial",
      "Valor especial para as primeiras 10 empresas",
    ],
  },
];

export function Pricing() {
  return (
    <section
      id="planos"
      className="overflow-hidden px-4 py-14 md:px-6 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#7ed957] uppercase sm:text-sm sm:tracking-[0.24em]">
            Oferta de lançamento
          </p>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-5xl">
            Escolha um plano simples para parar de perder dinheiro com
            desorganização
          </h2>

          <p className="mt-4 text-base leading-7 text-[#C0C0C0]/84 sm:text-lg sm:leading-8">
            Preços promocionais para os primeiros clientes VisionFest. Depois da
            fase de lançamento, os valores podem mudar para novos contratos.
          </p>
        </div>

        <div className="mt-7 rounded-[1.2rem] border border-[#7ed957]/20 bg-[#7ed957]/8 px-4 py-4 text-center text-sm leading-6 text-[#C0C0C0] sm:mt-8 sm:rounded-[1.4rem] sm:px-5">
          <strong className="text-white">
            Premium por R$ 79,90/mês no lote fundador:
          </strong>{" "}
          condição limitada para as primeiras 10 empresas. Depois, o Premium
          volta para R$ 99,90/mês.
        </div>

        <div className="mt-10 grid min-w-0 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <article
                key={plan.name}
                className={`min-w-0 rounded-[1.4rem] border p-5 transition duration-300 hover:-translate-y-1 sm:p-6 lg:p-7 ${
                  plan.featured
                    ? "border-[#7ed957]/45 bg-[linear-gradient(180deg,rgba(126,217,87,0.14),rgba(92,44,111,0.12))] shadow-[0_20px_80px_rgba(0,0,0,0.22)]"
                    : "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(92,44,111,0.04))]"
                }`}
              >
                <div className="flex min-w-0 items-start justify-between gap-3">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-[#7ed957] sm:h-11 sm:w-11">
                    <Icon />
                  </div>

                  <span className="min-w-0 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-center text-[11px] font-semibold text-[#C0C0C0] sm:text-xs">
                    {plan.badge}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold break-words text-white sm:text-2xl">
                  {plan.name}
                </h3>

                <p className="mt-2 min-h-[3.25rem] text-base leading-7 text-[#C0C0C0]/84 sm:text-lg">
                  {plan.subtitle}
                </p>

                <div className="mt-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-[#C0C0C0]">
                  <span className="shrink-0">
                    <UsersIcon />
                  </span>
                  <span className="min-w-0 break-words">{plan.users}</span>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-[#C0C0C0]/72">Valor promocional</p>

                  {plan.oldPrice ? (
                    <p className="mt-1 text-base text-[#C0C0C0]/48 line-through">
                      {plan.oldPrice}
                    </p>
                  ) : null}

                  <p className="mt-1 text-4xl font-black tracking-tight break-words text-white sm:text-5xl">
                    {plan.price}
                    <span className="ml-1 text-sm font-medium text-[#C0C0C0]/78 sm:ml-2 sm:text-base">
                      /mês
                    </span>
                  </p>
                </div>

                <ul className="mt-7 space-y-3.5 sm:mt-8 sm:space-y-4">
                  {plan.items.map((item) => (
                    <li
                      key={item}
                      className="flex min-w-0 gap-3 text-sm leading-6 text-[#C0C0C0]/84 sm:text-base"
                    >
                      <span className="mt-1 shrink-0 text-[#7ed957]">•</span>
                      <span className="min-w-0 break-words">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/5585996451221?text=Olá! Quero conhecer o plano do VisionFest."
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-[#7ed957] px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] sm:mt-8 sm:py-3.5 sm:text-base"
                >
                  Quero esse plano
                </a>

                <p className="mt-4 text-center text-xs leading-5 text-[#C0C0C0]/68">
                  Eventos ilimitados em todos os planos.
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(92,44,111,0.05))] p-5 sm:rounded-[1.8rem] sm:p-6 md:p-8">
          <div className="grid min-w-0 gap-6 xl:grid-cols-[0.25fr_0.5fr_0.25fr] xl:items-start">
            <div className="min-w-0">
              <p className="text-2xl font-bold break-words text-white sm:text-3xl">
                Precisa de ajuda?
              </p>

              <p className="mt-2 text-lg text-[#C0C0C0]/82 sm:text-xl">
                Implantação acompanhada
              </p>

              <span className="mt-4 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-[#C0C0C0]">
                Para começar certo
              </span>
            </div>

            <div className="grid min-w-0 gap-3 text-sm leading-6 text-[#C0C0C0]/84 sm:text-base md:grid-cols-2">
              <p>• Tiramos suas dúvidas pelo WhatsApp</p>
              <p>• Ajudamos a escolher o melhor plano</p>
              <p>• Orientamos o primeiro acesso</p>
              <p>• Mostramos como organizar clientes e eventos</p>
            </div>

            <div className="min-w-0 xl:text-right">
              <a
                href="https://wa.me/5585996451221?text=Olá! Quero falar sobre o VisionFest."
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full justify-center rounded-full bg-[#7ed957] px-6 py-3 font-semibold text-black transition hover:scale-[1.02] sm:w-auto sm:py-3.5"
              >
                Falar no WhatsApp
              </a>

              <p className="mt-3 text-sm text-[#C0C0C0]/72">
                Atendimento para novos clientes
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-2 text-xs leading-5 text-[#C0C0C0]/72 sm:text-sm sm:leading-6">
            <p>
              • Os valores são promocionais para lançamento e podem ser
              alterados para novos clientes futuramente.
            </p>
            <p>
              • O VisionFest foi criado para fornecedores de festas e eventos
              que precisam organizar clientes, contratos, agenda, estoque e
              financeiro.
            </p>
            <p>
              • Funcionalidades avançadas e integrações específicas podem ser
              contratadas separadamente conforme necessidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
