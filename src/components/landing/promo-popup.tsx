"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "visionfest_promo_popup_closed";
const WHATSAPP_URL =
  "https://wa.me/5585996451221?text=Olá! Quero garantir minha vaga no Plano Premium do VisionFest por R$79,90.";

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

  const handleClose = useCallback(() => {
    setOpen(false);
    window.localStorage.setItem(STORAGE_KEY, "true");
  }, []);

  useEffect(() => {
    const wasClosed = window.localStorage.getItem(STORAGE_KEY);
    if (wasClosed === "true") return;

    const timer = window.setTimeout(() => {
      setOpen(true);
    }, 7500);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, handleClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-end justify-center bg-black/70 px-3 py-3 backdrop-blur-sm sm:items-center sm:px-4 sm:py-6">
      <div className="relative max-h-[92dvh] w-full max-w-[420px] overflow-y-auto rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,16,27,0.98),rgba(92,44,111,0.2))] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:max-w-xl sm:rounded-[1.8rem] sm:p-7 md:p-8">
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition hover:bg-white/[0.06] sm:top-4 sm:right-4 sm:h-10 sm:w-10"
          aria-label="Fechar oferta"
        >
          <CloseIcon />
        </button>

        <div className="max-w-md pr-8 sm:pr-10">
          <span className="inline-flex rounded-full border border-[#7ed957]/20 bg-[#7ed957]/10 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-[#7ed957] uppercase sm:text-xs">
            Oferta fundador
          </span>

          <h3 className="mt-4 text-2xl font-black tracking-tight text-white sm:mt-5 sm:text-3xl md:text-4xl">
            Premium por R$79,90/mês para as primeiras 10 empresas.
          </h3>

          <p className="mt-3 text-sm leading-6 text-[#C0C0C0]/86 sm:mt-4 sm:text-base sm:leading-7">
            Depois do lote fundador, o Plano Premium volta para R$99,90/mês.
            Garanta agora sua vaga e organize clientes, contratos, agenda,
            estoque e financeiro em um só lugar.
          </p>

          <div className="mt-5 flex flex-wrap items-end gap-2 sm:mt-6 sm:gap-3">
            <span className="text-base text-[#C0C0C0]/52 line-through sm:text-lg">
              R$ 99,90
            </span>
            <span className="text-3xl font-black tracking-tight text-[#7ed957] sm:text-4xl">
              R$ 79,90
            </span>
            <span className="mb-1 text-xs text-[#C0C0C0]/78 sm:text-sm">
              /mês
            </span>
          </div>

          <ul className="mt-5 space-y-2 text-sm text-[#C0C0C0]/88 sm:mt-6 sm:space-y-3">
            <li>• Eventos ilimitados</li>
            <li>• Sem taxa por evento</li>
            <li>• Todos os módulos principais liberados</li>
            <li>• Condição especial para clientes fundadores</li>
          </ul>

          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              onClick={handleClose}
              className="inline-flex items-center justify-center rounded-full bg-[#7ed957] px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] sm:px-6 sm:py-3.5 sm:text-base"
            >
              Garantir minha vaga
            </a>

            <a
              href="#planos"
              onClick={handleClose}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.06] sm:px-6 sm:py-3.5 sm:text-base"
            >
              Ver planos
            </a>
          </div>

          <p className="mt-4 text-[11px] leading-5 text-[#C0C0C0]/62 sm:text-xs">
            Oferta limitada aos primeiros clientes da fase de lançamento.
          </p>
        </div>
      </div>
    </div>
  );
}
