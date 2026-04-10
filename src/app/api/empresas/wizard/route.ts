import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.VISIONFEST_ADMIN_API_URL;

export async function GET() {
  return NextResponse.json({
    ok: true,
    route: "/api/empresas/wizard",
    method: "GET",
  });
}

export async function POST(request: NextRequest) {
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

    const body = await request.json();
    const targetUrl = `${API_URL.replace(/\/$/, "")}/empresas/wizard`;

    const response = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
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
        mensagem: "Resposta inválida ao enviar cadastro do wizard.",
        raw,
        upstreamUrl: targetUrl,
      },
      { status: response.status },
    );
  } catch (error) {
    return NextResponse.json(
      {
        mensagem: "Erro ao enviar cadastro do wizard.",
        error: error instanceof Error ? error.message : "unknown_error",
      },
      { status: 500 },
    );
  }
}
