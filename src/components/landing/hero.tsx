import Image from "next/image";

const badges = [
  "Orçamentos",
  "Contratos",
  "Agenda",
  "Clientes",
  "Estoque",
  "Financeiro",
];

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-current"
    >
      <path d="M9.55 18.2 3.8 12.45l1.4-1.4 4.35 4.32 9.25-9.27 1.4 1.42L9.55 18.2Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-current"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.15 1.6 5.95L0 24l6.35-1.66a11.86 11.86 0 0 0 5.71 1.46h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.16-3.44-8.43ZM12.06 21.8h-.01a9.83 9.83 0 0 1-5-1.37l-.36-.21-3.77.99 1.01-3.68-.23-.38a9.84 9.84 0 0 1-1.52-5.26C2.18 6.44 6.61 2 12.06 2c2.63 0 5.1 1.02 6.95 2.88a9.75 9.75 0 0 1 2.87 6.94c0 5.45-4.43 9.88-9.88 9.88Zm5.42-7.41c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.49-.9-.8-1.5-1.8-1.68-2.1-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.61-.92-2.21-.24-.57-.49-.49-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.48s1.08 2.86 1.23 3.06c.15.2 2.13 3.25 5.16 4.55.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.28-.2-.58-.35Z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="hero-grid relative overflow-hidden px-4 pt-10 pb-14 md:px-6 md:pt-12 md:pb-18">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(126,217,87,0.06),transparent_18%),radial-gradient(circle_at_76%_16%,rgba(92,44,111,0.14),transparent_18%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        <div className="max-w-lg">
          <span className="inline-flex rounded-full border border-[#7ed957]/12 bg-[#7ed957]/8 px-4 py-1.5 text-xs font-medium text-[#7ed957] md:text-sm">
            Feito para o mercado real de festas e eventos
          </span>

          <h1 className="mt-5 max-w-[11.5ch] text-[2.2rem] leading-[1.02] font-black tracking-[-0.045em] text-white sm:text-[2.55rem] md:text-[2.95rem] xl:text-[3.35rem]">
            Gestão completa para fornecedores de festas e eventos.
          </h1>

          <p className="mt-5 max-w-lg text-[0.98rem] leading-7 text-[#C0C0C0]/88 md:text-[1.03rem] md:leading-8">
            Orçamentos, contratos, agenda, clientes, estoque e financeiro em um
            único sistema para profissionalizar sua operação e organizar sua
            empresa com mais clareza.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#lead-form"
              className="rounded-full bg-[#7ed957] px-6 py-3.5 text-center font-semibold text-black shadow-[0_0_24px_rgba(126,217,87,0.12)] transition hover:scale-[1.02]"
            >
              Quero conhecer
            </a>

            <a
              href="https://wa.me/5585996451221"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#5c2c6f]/40 bg-[rgba(92,44,111,0.08)] px-6 py-3.5 text-center font-semibold text-white transition hover:bg-[rgba(92,44,111,0.14)]"
            >
              <WhatsAppIcon />
              Falar no WhatsApp
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {[
              "Operação centralizada",
              "Mais controle financeiro",
              "Fluxos mais organizados",
            ].map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(92,44,111,0.05))] px-4 py-2 text-sm text-[#C0C0C0]"
              >
                <span className="text-[#7ed957]">
                  <CheckIcon />
                </span>
                {item}
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(92,44,111,0.06))] px-3.5 py-1.5 text-xs font-medium tracking-[0.02em] text-[#C0C0C0]/82 backdrop-blur-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="relative pt-1 lg:pt-0">
          <div className="absolute -inset-6 rounded-[2.2rem] bg-[radial-gradient(circle,rgba(92,44,111,0.18),transparent_60%)] blur-3xl" />

          <div className="relative">
            <div className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(92,44,111,0.06))] p-2.5 shadow-[0_20px_80px_rgba(0,0,0,0.42)] backdrop-blur-xl md:p-3">
              <div className="overflow-hidden rounded-[1.3rem] border border-white/10 bg-[#07101d]">
                <div className="flex items-center justify-between border-b border-white/8 px-4 py-3 md:px-5 md:py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                  </div>

                  <div className="rounded-full border border-[#5c2c6f]/35 bg-[#5c2c6f]/14 px-3 py-1 text-[10px] font-semibold tracking-wide text-[#C0C0C0] md:text-xs">
                    VisionFest em ação
                  </div>
                </div>

                <div className="relative aspect-[16/9] bg-[#07101d]">
                  <Image
                    src="/screens/dashboard-overview.png"
                    alt="Tela do dashboard do VisionFest"
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 left-3 hidden w-[34%] overflow-hidden rounded-[1.1rem] border border-white/10 bg-[#0b1523]/95 shadow-[0_16px_40px_rgba(0,0,0,0.32)] backdrop-blur-xl lg:block">
              <div className="border-b border-white/8 px-3 py-2.5">
                <p className="text-[10px] font-semibold tracking-[0.18em] text-[#C0C0C0] uppercase">
                  Cadastro de cliente
                </p>
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src="/screens/cliente-form.png"
                  alt="Tela de cadastro de cliente do VisionFest"
                  fill
                  sizes="(max-width: 1279px) 28vw, 22vw"
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="absolute top-5 right-3 hidden w-[30%] overflow-hidden rounded-[1.1rem] border border-white/10 bg-[#0b1523]/95 shadow-[0_16px_40px_rgba(0,0,0,0.32)] backdrop-blur-xl xl:block">
              <div className="border-b border-white/8 px-3 py-2.5">
                <p className="text-[10px] font-semibold tracking-[0.18em] text-[#C0C0C0] uppercase">
                  Financeiro
                </p>
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src="/screens/contas-pagar.png"
                  alt="Tela de contas a pagar do VisionFest"
                  fill
                  sizes="22vw"
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:hidden">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b1523]/95">
                <div className="border-b border-white/8 px-4 py-3">
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-[#C0C0C0] uppercase">
                    Cadastro de cliente
                  </p>
                </div>
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/screens/cliente-form.png"
                    alt="Tela de cadastro de cliente do VisionFest"
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b1523]/95">
                <div className="border-b border-white/8 px-4 py-3">
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-[#C0C0C0] uppercase">
                    Financeiro
                  </p>
                </div>
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/screens/contas-pagar.png"
                    alt="Tela de contas a pagar do VisionFest"
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
