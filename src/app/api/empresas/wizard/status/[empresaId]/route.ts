import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.VISIONFEST_ADMIN_API_URL;

type Context = {
  params: Promise<{
    empresaId: string;
  }>;
};

export async function GET(_request: NextRequest, context: Context) {
  try {
    if (!API_URL) {
      return NextResponse.json(
        {
          mensagem:
            "VISIONFEST_ADMIN_API_URL não está definida no .env.local da landing.",
        },
        { status: 500 },
      );
    }

    const { empresaId } = await context.params;
    const targetUrl = `${API_URL.replace(/\/$/, "")}/empresas/wizard/status/${empresaId}`;

    const response = await fetch(targetUrl, {
      method: "GET",
      cache: "no-store",
    });

    const contentType = response.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      const data = await response.json();
      return NextResponse.json(data, { status: response.status });
    }

    const raw = await response.text();

    return NextResponse.json(
      {
        mensagem: "Resposta inválida ao consultar status do wizard.",
        raw,
        upstreamUrl: targetUrl,
      },
      { status: response.status },
    );
  } catch (error) {
    return NextResponse.json(
      {
        mensagem: "Erro ao consultar status do wizard.",
        error: error instanceof Error ? error.message : "unknown_error",
      },
      { status: 500 },
    );
  }
}
