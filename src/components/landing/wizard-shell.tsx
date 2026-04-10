import { WizardEntry } from "@/components/wizard/WizardEntry";

export function WizardShell() {
  return (
    <section id="wizard" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-[0.24em] text-[#7ed957] uppercase">
              Comece agora
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Ative sua empresa no VisionFest com um fluxo simples e guiado
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#C0C0C0]/86">
              Cadastre sua empresa, crie o superadmin, escolha o plano e siga
              para a ativação com o mesmo fluxo já validado no VisionFest SaaS.
            </p>

            <div className="mt-8 rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(92,44,111,0.08))] p-6">
              <p className="text-sm tracking-[0.22em] text-[#C0C0C0]/70 uppercase">
                Fluxo previsto
              </p>

              <ul className="mt-4 space-y-3 text-[#C0C0C0]/88">
                <li>• Cadastro da empresa</li>
                <li>• Criação do superadmin</li>
                <li>• Seleção do plano</li>
                <li>• Pagamento e ativação</li>
              </ul>
            </div>
          </div>

          <div>
            <WizardEntry />
          </div>
        </div>
      </div>
    </section>
  );
}
