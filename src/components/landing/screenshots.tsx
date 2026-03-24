import Image from "next/image";

const shots = [
  {
    title: "Dashboard com visão geral",
    description:
      "Acompanhe indicadores, faturamento e visão operacional em um só lugar.",
    src: "/screens/dashboard-overview.png",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  {
    title: "Cadastro de clientes",
    description:
      "Centralize dados importantes e melhore o acompanhamento do relacionamento.",
    src: "/screens/cliente-form.png",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  {
    title: "Financeiro organizado",
    description:
      "Tenha contas e movimentações com mais clareza e acompanhamento.",
    src: "/screens/contas-pagar.png",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
];

export function Screenshots() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.24em] text-[#7ed957] uppercase">
            Veja o VisionFest em ação
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Uma visão mais real da experiência do sistema
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#C0C0C0]/86">
            Cada tela foi pensada para trazer clareza, organização e uma rotina
            mais profissional para o seu negócio.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {shots.map((shot) => (
            <article
              key={shot.title}
              className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(92,44,111,0.06))]"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={shot.src}
                  alt={shot.title}
                  fill
                  sizes={shot.sizes}
                  className="object-cover object-top"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">
                  {shot.title}
                </h3>
                <p className="mt-3 leading-7 text-[#C0C0C0]/82">
                  {shot.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
