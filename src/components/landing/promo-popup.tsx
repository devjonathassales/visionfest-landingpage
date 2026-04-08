"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "visionfest_promo_popup_closed";

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

export function PromoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const wasClosed = window.localStorage.getItem(STORAGE_KEY);

    if (wasClosed === "true") return;

    const timer = window.setTimeout(() => {
      setOpen(true);
    }, 6500);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function handleClose() {
    setOpen(false);
    window.localStorage.setItem(STORAGE_KEY, "true");
  }

  function handleGoToWizard() {
    setOpen(false);
    const target = document.getElementById("wizard");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-xl overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,16,27,0.98),rgba(92,44,111,0.18))] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] md:p-8">
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition hover:bg-white/[0.06]"
          aria-label="Fechar oferta"
        >
          <CloseIcon />
        </button>

        <div className="max-w-md">
          <span className="inline-flex rounded-full border border-[#7ed957]/20 bg-[#7ed957]/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-[#7ed957] uppercase">
            Oferta imperdível
          </span>

          <h3 className="mt-5 text-3xl font-black tracking-tight text-white md:text-4xl">
            70% OFF no plano Full
          </h3>

          <p className="mt-4 text-base leading-7 text-[#C0C0C0]/86">
            Garanta agora o plano Full do VisionFest com acesso recorrente por
            cartão de crédito ou Pix recorrente.
          </p>

          <div className="mt-6 flex items-end gap-3">
            <span className="text-lg text-[#C0C0C0]/52 line-through">
              R$ 259,00
            </span>
            <span className="text-4xl font-black tracking-tight text-[#7ed957]">
              R$ 79,90
            </span>
            <span className="mb-1 text-sm text-[#C0C0C0]/78">/mês</span>
          </div>

          <ul className="mt-6 space-y-3 text-sm text-[#C0C0C0]/88">
            <li>• Plano Full com acesso completo</li>
            <li>• Condição especial de lançamento</li>
            <li>• Assinatura recorrente simples e rápida</li>
          </ul>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleGoToWizard}
              className="inline-flex items-center justify-center rounded-full bg-[#7ed957] px-6 py-3.5 font-semibold text-black transition hover:scale-[1.02]"
            >
              Garantir minha vaga
            </button>

            <button
              type="button"
              onClick={handleClose}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 font-semibold text-white transition hover:bg-white/[0.06]"
            >
              Continuar explorando
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
