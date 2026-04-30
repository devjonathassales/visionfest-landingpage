import type { Metadata } from "next";
import "./globals.css";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata(),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
};

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
      <body className="bg-[rgb(var(--vf-background))] text-[rgb(var(--vf-text))] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
