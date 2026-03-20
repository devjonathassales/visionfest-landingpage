import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Política de privacidade",
  path: "/privacidade",
});

export default function PrivacidadePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-white">
      <h1 className="text-4xl font-bold">Política de privacidade</h1>
      <p className="mt-6 text-white/70">
        Esta página será preenchida com a política oficial de privacidade do
        VisionFest.
      </p>
    </main>
  );
}
