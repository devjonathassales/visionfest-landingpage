"use client";

import { useEffect, useState } from "react";
import { SiteLogo } from "@/components/landing/site-logo";

const navItems = [
  { label: "Recursos", href: "#recursos" },
  { label: "Módulos", href: "#modulos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
];

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

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-current"
    >
      <path d="M4 7h16v2H4V7Zm0 4h16v2H4v-2Zm0 4h16v2H4v-2Z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-current"
    >
      <path d="m18.3 5.71-1.41-1.42L12 9.17 7.11 4.29 5.7 5.71 10.59 10.6 5.7 15.49l1.41 1.41L12 12l4.89 4.9 1.41-1.41-4.89-4.89 4.89-4.89Z" />
    </svg>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/8 bg-[rgb(var(--vf-background))] backdrop-blur-2xl">
        <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-4 md:px-6">
          <div className="justify-self-start">
            <div className="hidden md:block">
              <SiteLogo />
            </div>
            <div className="md:hidden">
              <SiteLogo compact />
            </div>
          </div>

          <nav className="hidden items-center justify-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#C0C0C0]/88 transition duration-200 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="justify-self-end">
            <div className="hidden items-center gap-3 md:flex">
              <a
                href="https://wa.me/5585920077106"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#5c2c6f]/40 bg-white/[0.02] px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-[#5c2c6f]/12"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>

              <a
                href="#lead-form"
                className="rounded-full bg-[#7ed957] px-5 py-2.5 text-sm font-semibold text-black transition duration-200 hover:scale-[1.02]"
              >
                Agendar demonstração
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-full border border-[#5c2c6f]/40 bg-white/[0.02] p-2.5 text-white transition hover:bg-[#5c2c6f]/12 md:hidden"
              aria-label="Abrir menu"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[70] md:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 h-full w-[88%] max-w-[360px] border-l border-white/10 bg-[#07101d] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <SiteLogo compact />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.02] p-2.5 text-white"
              aria-label="Fechar menu"
            >
              <CloseIcon />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-3 text-sm font-medium text-[#C0C0C0] transition hover:bg-[rgba(92,44,111,0.14)] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href="https://wa.me/5585996451221"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#5c2c6f]/40 bg-[rgba(92,44,111,0.10)] px-5 py-3.5 font-semibold text-white"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>

            <a
              href="#lead-form"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-[#7ed957] px-5 py-3.5 font-semibold text-black"
            >
              Agendar demonstração
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
