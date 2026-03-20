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
    <section id="lead-form" className="px-6 py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold tracking-[0.25em] text-lime-300 uppercase">
            Solicite uma demonstração
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Descubra como o VisionFest pode organizar e acelerar sua operação
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/70">
            Preencha seus dados e nossa equipe entrará em contato para
            apresentar a solução ideal para o seu negócio.
          </p>

          <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6">
            <p className="text-sm tracking-wider text-white/45 uppercase">
              Atendimento
            </p>
            <p className="mt-2 text-xl font-semibold text-white">
              WhatsApp comercial
            </p>
            <a
              href="https://wa.me/5585996451221"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-full border border-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/5"
            >
              Falar agora no WhatsApp
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl md:p-8"
        >
          <div className="grid gap-4">
            <input
              value={form.name}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, name: event.target.value }))
              }
              placeholder="Seu nome"
              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none placeholder:text-white/35"
              required
            />
            <input
              type="email"
              value={form.email}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, email: event.target.value }))
              }
              placeholder="Seu e-mail"
              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none placeholder:text-white/35"
              required
            />
            <input
              value={form.whatsapp}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, whatsapp: event.target.value }))
              }
              placeholder="Seu WhatsApp"
              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none placeholder:text-white/35"
              required
            />
            <input
              value={form.company}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, company: event.target.value }))
              }
              placeholder="Nome da empresa"
              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none placeholder:text-white/35"
            />
            <input
              value={form.segment}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, segment: event.target.value }))
              }
              placeholder="Seu segmento"
              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none placeholder:text-white/35"
            />
            <textarea
              value={form.message}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, message: event.target.value }))
              }
              placeholder="Conte um pouco do seu negócio"
              rows={5}
              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none placeholder:text-white/35"
            />

            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-lime-400 px-6 py-3.5 font-semibold text-black shadow-[0_0_35px_rgba(126,217,87,0.18)] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Enviando..." : "Quero uma demonstração"}
            </button>

            {feedback ? (
              <p className="text-sm text-white/78">{feedback}</p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
