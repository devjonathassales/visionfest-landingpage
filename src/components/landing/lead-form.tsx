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
    <section id="lead-form" className="px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold tracking-widest text-lime-300 uppercase">
            Demonstração
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Fale com a gente e veja o VisionFest na prática
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Preencha seus dados e entraremos em contato para apresentar a melhor
            estrutura para o seu negócio.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-white/5 p-6"
        >
          <div className="grid gap-4">
            <input
              value={form.name}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, name: event.target.value }))
              }
              placeholder="Seu nome"
              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/40"
              required
            />
            <input
              type="email"
              value={form.email}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, email: event.target.value }))
              }
              placeholder="Seu e-mail"
              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/40"
              required
            />
            <input
              value={form.whatsapp}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, whatsapp: event.target.value }))
              }
              placeholder="Seu WhatsApp"
              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/40"
              required
            />
            <input
              value={form.company}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, company: event.target.value }))
              }
              placeholder="Nome da empresa"
              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/40"
            />
            <input
              value={form.segment}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, segment: event.target.value }))
              }
              placeholder="Segmento"
              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/40"
            />
            <textarea
              value={form.message}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, message: event.target.value }))
              }
              placeholder="Conte um pouco do seu negócio"
              rows={5}
              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/40"
            />

            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-lime-400 px-6 py-3 font-semibold text-black transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Enviando..." : "Quero uma demonstração"}
            </button>

            {feedback ? (
              <p className="text-sm text-white/80">{feedback}</p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
