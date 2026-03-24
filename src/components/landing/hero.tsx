import Image from "next/image";

const badges = [
  "Orçamentos",
  "Contratos",
  "Agenda",
  "Clientes",
  "Estoque",
  "Financeiro",
];

export function Hero() {
  return (
    <section className="hero-grid relative overflow-hidden px-6 pt-14 pb-24 md:pt-20 md:pb-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_16%,rgba(126,217,87,0.12),transparent_18%),radial-gradient(circle_at_82%_20%,rgba(255,255,255,0.05),transparent_12%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="inline-flex rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-1.5 text-sm font-medium text-lime-300">
            Simples. Profissional. Feito para o mercado real.
          </span>

          <h1 className="mt-6 max-w-[10ch] text-4xl leading-[0.96] font-black tracking-tight text-white sm:text-5xl md:text-6xl xl:text-[5.25rem]">
            Gestão completa para fornecedores de festas e eventos.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
            Orçamentos, contratos, agenda, clientes, estoque e financeiro em um
            único sistema para profissionalizar sua operação e organizar sua
            empresa de ponta a ponta.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#lead-form"
              className="rounded-full bg-lime-400 px-7 py-3.5 text-center font-semibold text-black shadow-[0_0_40px_rgba(126,217,87,0.22)] transition hover:scale-[1.02]"
            >
              Quero conhecer
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

          <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
            {[
              { value: "Agenda", label: "mais controle operacional" },
              { value: "Financeiro", label: "mais previsibilidade" },
              { value: "Clientes", label: "acompanhamento mais claro" },
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

          <div className="mt-10 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/75 backdrop-blur-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 rounded-[2.5rem] bg-lime-400/10 blur-3xl" />

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-3 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-4">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#07101d]">
                <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                    <span className="h-3 w-3 rounded-full bg-green-400/70" />
                  </div>

                  <div className="rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-lime-300">
                    VisionFest em ação
                  </div>
                </div>

                <div className="relative aspect-[16/10] bg-[#07101d]">
                  <Image
                    src="/screens/dashboard-overview.png"
                    alt="Tela do dashboard do VisionFest"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-6 hidden w-[38%] overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#0b1523]/95 shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:block">
              <div className="border-b border-white/8 px-4 py-3">
                <p className="text-xs font-semibold tracking-[0.2em] text-lime-300 uppercase">
                  Cadastro de cliente
                </p>
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src="/screens/cliente-form.png"
                  alt="Tela de cadastro de cliente do VisionFest"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="absolute top-10 -right-6 hidden w-[34%] overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#0b1523]/95 shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl xl:block">
              <div className="border-b border-white/8 px-4 py-3">
                <p className="text-xs font-semibold tracking-[0.2em] text-lime-300 uppercase">
                  Financeiro
                </p>
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src="/screens/contas-pagar.png"
                  alt="Tela de contas a pagar do VisionFest"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
