export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5585996451221"
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-5 bottom-5 z-[60] inline-flex items-center gap-3 rounded-full border border-lime-400/20 bg-[#0b1523]/90 px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition hover:scale-[1.02] hover:border-lime-400/35"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-400 text-black">
        W
      </span>
      <span className="hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
}
