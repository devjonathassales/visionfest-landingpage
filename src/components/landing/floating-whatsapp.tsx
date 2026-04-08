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

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5585996451221"
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-5 bottom-5 z-[60] inline-flex items-center gap-3 rounded-full border border-[#5c2c6f]/35 bg-[rgba(4,8,22,0.88)] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-200 hover:scale-[1.02] hover:border-[#7ed957]/30"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7ed957] text-black shadow-[0_0_18px_rgba(126,217,87,0.18)]">
        <WhatsAppIcon />
      </span>
      <span className="hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
}
