import Image from "next/image";
import Link from "next/link";

type SiteLogoProps = {
  compact?: boolean;
};

export function SiteLogo({ compact = false }: SiteLogoProps) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3 transition-opacity hover:opacity-95"
      aria-label="VisionFest"
    >
      {compact ? (
        <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(92,44,111,0.34),rgba(126,217,87,0.14))] shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
          <Image
            src="/brand/visionfest-mark.png"
            alt="VisionFest"
            fill
            sizes="40px"
            className="object-contain p-1"
            priority
          />
        </div>
      ) : (
        <div className="relative h-10 w-[176px] md:h-11 md:w-[196px]">
          <Image
            src="/brand/visionfest-logo-full.svg"
            alt="VisionFest"
            fill
            sizes="(max-width: 768px) 176px, 196px"
            className="object-contain object-left"
            priority
          />
        </div>
      )}
    </Link>
  );
}
