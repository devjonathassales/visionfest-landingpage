import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-bold text-white">VisionFest</p>
          <p className="mt-1 text-sm text-white/58">
            Sistema para fornecedores de festas e eventos.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-white/70">
          <Link href="/termos">Termos</Link>
          <Link href="/privacidade">Privacidade</Link>
          <a
            href="https://wa.me/5585996451221"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
