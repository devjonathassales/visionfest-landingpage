import Link from "next/link";
import { SiteLogo } from "@/components/landing/site-logo";

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

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-current"
    >
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm10.25 1.65a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1ZM12 7a5 5 0 1 1-5 5 5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2Z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 px-4 py-10 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <SiteLogo />
            <p className="max-w-sm text-sm text-[#C0C0C0]/74">
              Sistema para fornecedores de festas e eventos com foco em gestão,
              operação, financeiro, agenda e relacionamento.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[#C0C0C0]/82">
            <Link href="/termos">Termos</Link>
            <Link href="/privacidade">Privacidade</Link>

            <a
              href="https://wa.me/5585920077106"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>

            <a
              href="https://www.instagram.com/visionfestapp/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
            >
              <InstagramIcon />
              VisionFest
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/8 pt-6 text-sm text-[#C0C0C0]/72 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} VisionFest. Todos os direitos reservados.</p>

          <p className="flex flex-wrap items-center gap-1">
            <span>Desenvolvido por</span>
            <a
              href="https://www.instagram.com/visionwaresolucoes/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-white transition hover:text-[#7ed957]"
            >
              VisionWare Soluções
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
