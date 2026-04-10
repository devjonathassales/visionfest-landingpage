import React, { useState } from "react";

export default function Step2SuperAdmin({
  superAdmin,
  setSuperAdmin,
  emailContato,
}) {
  const [showSenha, setShowSenha] = useState(false);
  const [showConfirmar, setShowConfirmar] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setSuperAdmin((prev) => ({ ...prev, [name]: value }));
  }

  const inputClass =
    "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-[#7ED957] focus:ring-4 focus:ring-[#7ED957]/20";

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold text-white">
          Crie seu acesso principal
        </h2>
        <p className="mt-1 text-slate-400">
          Esse será o acesso administrativo da sua empresa dentro do VisionFest.
        </p>
      </div>

      <div className="rounded-2xl border border-[#7ED957]/20 bg-[#7ED957]/10 p-4 text-sm text-slate-100">
        Seu login principal será:
        <div className="mt-2 font-semibold text-[#7ED957]">
          {emailContato || "—"}
        </div>
        <p className="mt-2 text-slate-200">
          Guarde essa informação. É com esse acesso que você administrará sua
          empresa dentro da plataforma.
        </p>
      </div>

      <div className="relative">
        <input
          name="senha"
          placeholder="Senha *"
          type={showSenha ? "text" : "password"}
          value={superAdmin.senha}
          onChange={handleChange}
          className={`${inputClass} pr-24`}
          required
        />
        <button
          type="button"
          onClick={() => setShowSenha((v) => !v)}
          className="absolute top-1/2 right-3 -translate-y-1/2 text-sm text-slate-300 hover:text-white"
        >
          {showSenha ? "Ocultar" : "Mostrar"}
        </button>
      </div>

      <div className="relative">
        <input
          name="confirmarSenha"
          placeholder="Confirmar senha *"
          type={showConfirmar ? "text" : "password"}
          value={superAdmin.confirmarSenha}
          onChange={handleChange}
          className={`${inputClass} pr-24`}
          required
        />
        <button
          type="button"
          onClick={() => setShowConfirmar((v) => !v)}
          className="absolute top-1/2 right-3 -translate-y-1/2 text-sm text-slate-300 hover:text-white"
        >
          {showConfirmar ? "Ocultar" : "Mostrar"}
        </button>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
        Escolha uma senha segura para proteger o acesso principal da sua empresa
        e garantir mais tranquilidade na gestão.
      </div>
    </div>
  );
}
