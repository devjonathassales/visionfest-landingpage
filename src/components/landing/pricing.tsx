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
    name: "Essencial",
    subtitle: "Mais econômico para começar",
    price: "R$ 179",
    badge: "Mais econômico",
    icon: ShieldIcon,
    users: "5 usuários",
    items: [
      "Contratos, OS, Agenda e alertas",
      "Estoque alugável + matéria-prima",
      "Relatórios essenciais",
      "App de ponto (básico)",
      "Evolução 2h/mês • Triagem 5d • Entrega até 30d",
      "Melhorias da comunidade após 60 dias",
    ],
  },
  {
    name: "Operação",
    subtitle: "Básico + fluxo diário",
    price: "R$ 200",
    icon: BoltIcon,
    users: "15 usuários",
    items: [
      "Tudo do Essencial + CRM & Leads",
      "Relatórios completos & permissões avançadas",
      "Automações básicas",
      "Evolução: 5h/mês • Triagem 3d • Entrega até 15d",
      "Fast-track: 1 solicitação/trimestre",
      "Melhorias da comunidade após 30 dias",
    ],
  },
  {
    name: "Full",
    subtitle: "Parceria de produto",
    price: "R$ 259",
    badge: "Recomendado",
    icon: CrownIcon,
    users: "Usuários ilimitados",
    featured: true,
    items: [
      "Todos os módulos atuais e futuros",
      "FeatureSync: recebe melhorias da comunidade imediatamente",
      "Evolução: 12h/mês (acúmulo até 24h)",
      "Triagem 1d • Entrega 5–10d • Fast-track ilimitado",
      "Sucesso do cliente dedicado • Acompanhamento mensal",
    ],
  },
];

export function Pricing() {
  return (
    <section id="planos" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-[0.24em] text-[#7ed957] uppercase">
            Planos e preços
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Escolha a estrutura ideal para o momento do seu negócio
          </h2>
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <article
                key={plan.name}
                className={`rounded-[1.8rem] border p-7 transition duration-300 hover:-translate-y-1 ${
                  plan.featured
                    ? "border-[#5c2c6f]/45 bg-[linear-gradient(180deg,rgba(92,44,111,0.18),rgba(126,217,87,0.10))] shadow-[0_20px_80px_rgba(0,0,0,0.22)]"
                    : "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(92,44,111,0.04))]"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-[#7ed957]">
                    <Icon />
                  </div>

                  {plan.badge ? (
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-[#C0C0C0]">
                      {plan.badge}
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-5 text-2xl font-bold text-white">
                  {plan.name}
                </h3>
                <p className="mt-2 text-lg text-[#C0C0C0]/84">
                  {plan.subtitle}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-sm text-[#C0C0C0]">
                  <UsersIcon />
                  {plan.users}
                </div>

                <div className="mt-6">
                  <p className="text-sm text-[#C0C0C0]/72">A partir de</p>
                  <p className="mt-1 text-5xl font-black tracking-tight text-white">
                    {plan.price}
                    <span className="ml-2 text-base font-medium text-[#C0C0C0]/78">
                      /mês
                    </span>
                  </p>
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[#C0C0C0]/84">
                      <span className="mt-1 text-[#7ed957]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#lead-form"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 font-semibold transition ${
                    plan.featured
                      ? "bg-[#7ed957] text-black hover:scale-[1.02]"
                      : "bg-[#7ed957] text-black hover:scale-[1.02]"
                  }`}
                >
                  Agendar demonstração
                </a>

                <p className="mt-4 text-center text-xs text-[#C0C0C0]/68">
                  Eventos ilimitados em todos os planos.
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(92,44,111,0.05))] p-6 md:p-8">
          <div className="grid gap-6 xl:grid-cols-[0.22fr_0.53fr_0.25fr] xl:items-start">
            <div>
              <p className="text-3xl font-bold text-white">Enterprise</p>
              <p className="mt-2 text-xl text-[#C0C0C0]/82">Sob medida</p>
              <span className="mt-4 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-[#C0C0C0]">
                Escopo customizado
              </span>
            </div>

            <div className="grid gap-3 text-[#C0C0C0]/84 md:grid-cols-2">
              <p>• Usuários/filiais sob demanda</p>
              <p>• Integrações, SSO e governança</p>
              <p>• SLAs customizados e priorização por contrato</p>
              <p>• Treinamento e migração de dados</p>
            </div>

            <div className="xl:text-right">
              <a
                href="#lead-form"
                className="inline-flex rounded-full bg-[#7ed957] px-6 py-3.5 font-semibold text-black transition hover:scale-[1.02]"
              >
                Falar com vendas
              </a>
              <p className="mt-3 text-sm text-[#C0C0C0]/72">
                Projeto e SLA sob medida
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-2 text-sm text-[#C0C0C0]/72">
            <p>
              • Créditos de melhoria incluídos variam por plano; pedidos que
              fizerem sentido para todos podem virar parte do produto.
            </p>
            <p>
              • Add-ons: usuário extra, empresa extra e armazenamento podem ser
              contratados à parte.
            </p>
            <p>
              • Integrações especiais e módulos adicionais podem ser contratados
              à parte. App Planner do Cliente e pagamentos diretos na
              plataforma: em breve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
