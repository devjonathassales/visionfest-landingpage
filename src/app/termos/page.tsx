import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Termos de uso",
  path: "/termos",
});

export default function TermosPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-white">
      <h1 className="text-4xl font-bold">Termos de uso</h1>
      <p className="mt-6 text-white/70">
        Esta página será preenchida com os termos oficiais do VisionFest.
      </p>
    </main>
  );
}
