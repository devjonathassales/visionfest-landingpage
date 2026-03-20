import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">VisionFest</p>
          <p className="text-sm text-white/60">
            Gestão para fornecedores de festas e eventos.
          </p>
        </div>

        <div className="flex gap-4 text-sm text-white/70">
          <Link href="/termos">Termos</Link>
          <Link href="/privacidade">Privacidade</Link>
        </div>
      </div>
    </footer>
  );
}
