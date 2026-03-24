import Link from "next/link";

const navItems = [
  { label: "Recursos", href: "#recursos" },
  { label: "Módulos", href: "#modulos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#040816]/72 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lime-400 font-black text-black shadow-[0_0_30px_rgba(126,217,87,0.28)]">
            V
          </div>
          <div>
            <p className="text-lg font-bold tracking-tight text-white">
              VisionFest
            </p>
            <p className="text-xs text-white/45">
              Gestão para eventos e festas
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/72 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://wa.me/5585996451221"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/5"
          >
            WhatsApp
          </a>
          <a
            href="#lead-form"
            className="rounded-full bg-lime-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02]"
          >
            Agendar demonstração
          </a>
        </div>
      </div>
    </header>
  );
}
