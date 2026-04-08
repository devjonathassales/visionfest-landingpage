export function WizardShell() {
  return (
    <section id="wizard" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-[0.24em] text-[#7ed957] uppercase">
              Comece agora
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Ative sua empresa no VisionFest com um fluxo simples e guiado
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#C0C0C0]/86">
              O wizard vai permitir cadastrar empresa, criar o superadmin,
              escolher o plano e seguir para o pagamento em um processo claro e
              rápido.
            </p>

            <div className="mt-8 rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(92,44,111,0.08))] p-6">
              <p className="text-sm tracking-[0.22em] text-[#C0C0C0]/70 uppercase">
                Fluxo previsto
              </p>

              <ul className="mt-4 space-y-3 text-[#C0C0C0]/88">
                <li>• Cadastro da empresa</li>
                <li>• Criação do superadmin</li>
                <li>• Seleção do plano e condição promocional</li>
                <li>• Pagamento e ativação</li>
              </ul>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(92,44,111,0.10))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.22)] md:p-8">
            <div className="rounded-[1.4rem] border border-dashed border-white/12 bg-black/20 p-8 text-center">
              <p className="text-sm font-semibold tracking-[0.22em] text-[#7ed957] uppercase">
                Área pronta para o wizard
              </p>

              <h3 className="mt-4 text-2xl font-bold text-white">
                Vamos embutir aqui o fluxo real de cadastro
              </h3>

              <p className="mx-auto mt-4 max-w-lg leading-7 text-[#C0C0C0]/82">
                Essa seção já está preparada para receber o wizard reutilizado
                do VisionFest SaaS, mantendo a identidade visual da landing.
              </p>

              <div className="mt-6 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-[#C0C0C0]">
                Próximo passo: plugar o wizard real
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
