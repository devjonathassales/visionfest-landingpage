const modules = [
  "Agenda e operação",
  "Orçamentos e propostas",
  "Contratos",
  "Cadastro de clientes",
  "Financeiro",
  "Contas a pagar e receber",
  "Estoque e locação",
  "CRM e acompanhamento",
  "Relatórios gerenciais",
  "Configurações e permissões",
];

export function Modules() {
  return (
    <section className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-8 shadow-2xl backdrop-blur-xl md:p-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.25em] text-lime-300 uppercase">
            Módulos do sistema
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Uma estrutura pensada para acompanhar a operação real do seu negócio
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/70">
            O VisionFest reúne os principais pilares da gestão em um só
            ambiente, reduzindo retrabalho, falhas de comunicação e dependência
            de controles isolados.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {modules.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-[#07101d] px-5 py-4 text-sm font-medium text-white/85 transition hover:border-lime-400/25 hover:bg-[#0a1525]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
