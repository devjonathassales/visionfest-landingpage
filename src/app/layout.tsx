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
    url: "https://visionfest.com.br",
  };

  return (
    <html lang="pt-BR">
      <body className="bg-[#040816] text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
