export function FinalCTA() {
  return (
    <section className="px-6 pt-10 pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="section-glow overflow-hidden rounded-[2rem] border border-lime-400/20 bg-[linear-gradient(135deg,rgba(126,217,87,0.10),rgba(255,255,255,0.04))] p-8 shadow-[0_0_60px_rgba(126,217,87,0.08)] md:p-12">
          <div className="relative z-10 max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.25em] text-lime-300 uppercase">
              Pronto para evoluir sua gestão?
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Dê ao seu negócio uma estrutura mais profissional, organizada e
              preparada para crescer
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/72">
              Solicite uma demonstração e veja como o VisionFest pode ajudar sua
              empresa a vender melhor, operar com mais clareza e ganhar controle
              real da rotina.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#lead-form"
                className="rounded-full bg-lime-400 px-7 py-3.5 text-center font-semibold text-black transition hover:scale-[1.02]"
              >
                Agendar demonstração
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
          </div>
        </div>
      </div>
    </section>
  );
}
