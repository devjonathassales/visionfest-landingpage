import { HeroBadges } from "@/components/landing/hero-badges";
import { SystemPreview } from "@/components/landing/system-preview";

export function Hero() {
  return (
    <section className="hero-grid relative overflow-hidden px-6 pt-14 pb-24 md:pt-20 md:pb-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(126,217,87,0.10),transparent_18%),radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.05),transparent_12%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <span className="inline-flex rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-1.5 text-sm font-medium text-lime-300">
            Mais organização. Mais controle. Mais vendas.
          </span>

          <h1 className="mt-6 max-w-[11ch] text-4xl leading-[0.98] font-black tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
            Gestão profissional para fornecedores de festas e eventos.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/72 md:text-xl">
            Centralize agenda, clientes, orçamentos, contratos, estoque e
            financeiro em um único sistema e profissionalize sua operação.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#lead-form"
              className="rounded-full bg-lime-400 px-7 py-3.5 text-center font-semibold text-black shadow-[0_0_40px_rgba(126,217,87,0.22)] transition hover:scale-[1.02]"
            >
              Solicitar demonstração
            </a>

            <a
              href="https://wa.me/5585996451221"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/12 px-7 py-3.5 text-center font-semibold text-white transition hover:bg-white/5"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
            {[
              { value: "Agenda", label: "controle operacional" },
              { value: "Financeiro", label: "mais previsibilidade" },
              { value: "Estoque", label: "mais clareza na operação" },
            ].map((item) => (
              <div
                key={item.value}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
              >
                <p className="text-lg font-bold text-white">{item.value}</p>
                <p className="mt-1 text-sm text-white/60">{item.label}</p>
              </div>
            ))}
          </div>

          <HeroBadges />
        </div>

        <SystemPreview />
      </div>
    </section>
  );
}
