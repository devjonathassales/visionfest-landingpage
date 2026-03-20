import { NextResponse } from "next/server";
import type { LeadPayload } from "@/types/lead";

function isValidLeadPayload(payload: Partial<LeadPayload>) {
  return Boolean(payload.name && payload.email && payload.whatsapp);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<LeadPayload>;

    if (!isValidLeadPayload(body)) {
      return NextResponse.json(
        { message: "Preencha nome, e-mail e WhatsApp." },
        { status: 400 },
      );
    }

    const webhookUrl = process.env.LEADS_WEBHOOK_URL;
    const webhookToken = process.env.LEADS_WEBHOOK_TOKEN;

    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(webhookToken
            ? {
                Authorization: `Bearer ${webhookToken}`,
              }
            : {}),
        },
        body: JSON.stringify({
          ...body,
          source: "visionfest-site",
          createdAt: new Date().toISOString(),
        }),
      });
    }

    return NextResponse.json({
      success: true,
      message: "Lead enviado com sucesso.",
    });
  } catch {
    return NextResponse.json(
      { message: "Erro interno ao processar o lead." },
      { status: 500 },
    );
  }
}
