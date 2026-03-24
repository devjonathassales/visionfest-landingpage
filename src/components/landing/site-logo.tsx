import Image from "next/image";
import Link from "next/link";

type SiteLogoProps = {
  compact?: boolean;
};

export function SiteLogo({ compact = false }: SiteLogoProps) {
  return (
    <Link href="/" className="flex items-center gap-3">
      {compact ? (
        <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-white/5">
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
        <div className="relative h-10 w-[170px] md:h-11 md:w-[190px]">
          <Image
            src="/brand/visionfest-logo-full.png"
            alt="VisionFest"
            fill
            sizes="(max-width: 768px) 170px, 190px"
            className="object-contain object-left"
            priority
          />
        </div>
      )}
    </Link>
  );
}
