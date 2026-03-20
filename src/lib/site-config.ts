export const siteConfig = {
  name: "VisionFest",
  title: "VisionFest | Sistema para fornecedores de festas e eventos",
  description:
    "Organize orçamentos, contratos, agenda, financeiro, estoque e atendimento em um só lugar com o VisionFest.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: "/og-cover.png",
  locale: "pt_BR",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5585000000000",
  keywords: [
    "sistema para eventos",
    "software para fornecedores de festas",
    "gestão de eventos",
    "gestão financeira para eventos",
    "controle de estoque para locação",
    "crm para fornecedores de festas",
    "sistema para buffets",
    "sistema para decoradores",
    "visionfest",
  ],
} as const;
