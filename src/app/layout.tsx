import type { Metadata } from "next";
import "./globals.css";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "VisionFest",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Sistema para fornecedores de festas e eventos com foco em gestão, operação, financeiro, agenda e atendimento.",
  };

  return (
    <html lang="pt-BR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
