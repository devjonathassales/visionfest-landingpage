"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  whatsapp: string;
  company: string;
  segment: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  whatsapp: "",
  company: "",
  segment: "",
  message: "",
};

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-current"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.15 1.6 5.95L0 24l6.35-1.66a11.86 11.86 0 0 0 5.71 1.46h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.16-3.44-8.43ZM12.06 21.8h-.01a9.83 9.83 0 0 1-5-1.37l-.36-.21-3.77.99 1.01-3.68-.23-.38a9.84 9.84 0 0 1-1.52-5.26C2.18 6.44 6.61 2 12.06 2c2.63 0 5.1 1.02 6.95 2.88a9.75 9.75 0 0 1 2.87 6.94c0 5.45-4.43 9.88-9.88 9.88Zm5.42-7.41c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.49-.9-.8-1.5-1.8-1.68-2.1-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.61-.92-2.21-.24-.57-.49-.49-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.48s1.08 2.86 1.23 3.06c.15.2 2.13 3.25 5.16 4.55.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.28-.2-.58-.35Z" />
    </svg>
  );
}

export function LeadForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Não foi possível enviar agora.");
      }

      setFeedback("Recebemos seu contato com sucesso.");
      setForm(initialState);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Erro ao enviar seus dados. Tente novamente.";
      setFeedback(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="lead-form" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.44fr_0.56fr]">
        <div>
          <p className="text-sm font-semibold tracking-[0.24em] text-[#7ed957] uppercase">
            Solicite uma demonstração
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Descubra como o VisionFest pode organizar sua operação
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#C0C0C0]/86">
            Preencha seus dados e nossa equipe entrará em contato para
            apresentar a melhor estrutura para o seu negócio.
          </p>

          <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(92,44,111,0.08))] p-6">
            <p className="text-sm tracking-[0.22em] text-[#C0C0C0]/68 uppercase">
              Atendimento comercial
            </p>
            <p className="mt-2 text-xl font-semibold text-white">
              Fale agora pelo WhatsApp
            </p>
            <a
              href="https://wa.me/5585920077106"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#5c2c6f]/35 bg-[rgba(92,44,111,0.12)] px-5 py-3 font-semibold text-white transition hover:bg-[rgba(92,44,111,0.18)]"
            >
              <WhatsAppIcon />
              Falar agora no WhatsApp
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(92,44,111,0.08))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl md:p-8"
        >
          <div className="grid gap-4">
            <input
              value={form.name}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, name: event.target.value }))
              }
              placeholder="Seu nome"
              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none placeholder:text-[#C0C0C0]/38"
              required
            />
            <input
              type="email"
              value={form.email}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, email: event.target.value }))
              }
              placeholder="Seu e-mail"
              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none placeholder:text-[#C0C0C0]/38"
              required
            />
            <input
              value={form.whatsapp}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, whatsapp: event.target.value }))
              }
              placeholder="Seu WhatsApp"
              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none placeholder:text-[#C0C0C0]/38"
              required
            />
            <input
              value={form.company}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, company: event.target.value }))
              }
              placeholder="Nome da empresa"
              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none placeholder:text-[#C0C0C0]/38"
            />
            <input
              value={form.segment}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, segment: event.target.value }))
              }
              placeholder="Seu segmento"
              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none placeholder:text-[#C0C0C0]/38"
            />
            <textarea
              value={form.message}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, message: event.target.value }))
              }
              placeholder="Conte um pouco do seu negócio"
              rows={5}
              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none placeholder:text-[#C0C0C0]/38"
            />

            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-[#7ed957] px-6 py-3.5 font-semibold text-black shadow-[0_0_35px_rgba(126,217,87,0.16)] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Enviando..." : "Quero uma demonstração"}
            </button>

            {feedback ? (
              <p className="text-sm text-[#C0C0C0]/88">{feedback}</p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
