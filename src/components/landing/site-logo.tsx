import Image from "next/image";
import Link from "next/link";

type SiteLogoProps = {
  compact?: boolean;
};

export function SiteLogo({ compact = false }: SiteLogoProps) {
  return (
    <Link href="/" className="flex items-center gap-3">
      {compact ? (
        <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <Image
            src="/brand/visionfest-mark.png"
            alt="VisionFest"
            fill
            className="object-contain p-1.5"
            priority
          />
        </div>
      ) : (
        <div className="relative h-11 w-[190px]">
          <Image
            src="/brand/visionfest-logo-full.png"
            alt="VisionFest"
            fill
            className="object-contain object-left"
            priority
          />
        </div>
      )}
    </Link>
  );
}
