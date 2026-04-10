import React from "react";

function getPlanoValor(p) {
  return Number(p?.valorMensal ?? p?.valor ?? p?.valorTotal ?? 0);
}

function PaymentOption({ title, description, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border p-4 text-left transition ${
        active
          ? "border-[#7ED957] bg-[#7ED957]/10"
          : "border-white/10 bg-white/5 hover:bg-white/10"
      }`}
    >
      <p className="font-semibold text-white">{title}</p>
      <p className="mt-1 text-sm text-slate-300">{description}</p>
    </button>
  );
}

export default function Step3PlanoPagamento({
  planos,
  planoSelecionado,
  setPlanoSelecionado,
  formaPagamento,
  setFormaPagamento,
}) {
  const fieldClass =
    "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[#7ED957] focus:ring-4 focus:ring-[#7ED957]/20";

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold text-white">Escolha seu plano</h2>
        <p className="mt-1 text-slate-400">
          Selecione o plano ideal para o momento da sua empresa e finalize a
          ativação do seu ambiente.
        </p>
      </div>

      <select
        value={planoSelecionado}
        onChange={(e) => setPlanoSelecionado(e.target.value)}
        className={fieldClass}
        required
      >
        <option value="" className="text-slate-900">
          Selecione um plano
        </option>
        {planos.map((p) => (
          <option key={p.id} value={p.id} className="text-slate-900">
            {p.nome} - R$ {getPlanoValor(p).toFixed(2)}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <PaymentOption
          title="Pix"
          description="Ativação rápida após a confirmação do pagamento."
          active={formaPagamento === "pix"}
          onClick={() => setFormaPagamento("pix")}
        />

        <PaymentOption
          title="Cartão recorrente"
          description="Mais praticidade com renovação automática mensal."
          active={formaPagamento === "cartao"}
          onClick={() => setFormaPagamento("cartao")}
        />

        <PaymentOption
          title="Boleto"
          description="Opção tradicional para empresas com fluxo mais formal."
          active={formaPagamento === "boleto"}
          onClick={() => setFormaPagamento("boleto")}
        />
      </div>

      <div className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300">
        <p>
          <strong className="text-white">Pix:</strong> ideal para ativação
          rápida, com confirmação prática e objetiva.
        </p>
        <p>
          <strong className="text-white">Cartão:</strong> melhor opção para
          manter sua assinatura ativa com recorrência automática.
        </p>
        <p>
          <strong className="text-white">Boleto:</strong> opção tradicional para
          empresas que preferem fluxo financeiro mais formal.
        </p>
      </div>
    </div>
  );
}
