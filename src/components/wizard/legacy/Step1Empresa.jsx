import React, { useEffect, useState } from "react";

function onlyDigits(value) {
  return String(value || "").replace(/\D/g, "");
}

function maskCpfCnpj(value) {
  const digits = onlyDigits(value).slice(0, 14);

  if (digits.length <= 11) {
    return digits
      .replace(/^(\d{3})(\d)/, "$1.$2")
      .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1-$2");
  }

  return digits
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
}

function maskPhone(value) {
  const digits = onlyDigits(value).slice(0, 11);

  if (digits.length <= 10) {
    return digits
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }

  return digits
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
}

function maskCep(value) {
  const digits = onlyDigits(value).slice(0, 8);
  return digits.replace(/^(\d{5})(\d)/, "$1-$2");
}

export default function Step1Empresa({ empresa, setEmpresa }) {
  const [buscandoCep, setBuscandoCep] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    let nextValue = value;

    if (name === "cpfCnpj") nextValue = maskCpfCnpj(value);
    if (name === "whatsapp") nextValue = maskPhone(value);
    if (name === "cep") nextValue = maskCep(value);
    if (name === "uf")
      nextValue = String(value || "")
        .toUpperCase()
        .slice(0, 2);
    if (name === "dominio") {
      nextValue = String(value || "")
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/[^a-z0-9-]/g, "");
    }

    setEmpresa((prev) => ({ ...prev, [name]: nextValue }));
  }

  useEffect(() => {
    const cepDigits = onlyDigits(empresa.cep);
    if (cepDigits.length !== 8) return;

    let active = true;

    async function fetchCep() {
      try {
        setBuscandoCep(true);
        const res = await fetch(`https://viacep.com.br/ws/${cepDigits}/json/`);
        const data = await res.json();

        if (!active || data?.erro) return;

        setEmpresa((prev) => ({
          ...prev,
          endereco: prev.endereco || data.logradouro || "",
          bairro: prev.bairro || data.bairro || "",
          cidade: prev.cidade || data.localidade || "",
          uf: prev.uf || data.uf || "",
        }));
      } catch (error) {
        console.warn("Erro ao buscar CEP:", error);
      } finally {
        if (active) setBuscandoCep(false);
      }
    }

    fetchCep();

    return () => {
      active = false;
    };
  }, [empresa.cep, setEmpresa]);

  const inputClass =
    "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-[#7ED957] focus:ring-4 focus:ring-[#7ED957]/20";

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold text-white">Dados da sua empresa</h2>
        <p className="mt-1 text-slate-400">
          Informe os dados principais para criar seu ambiente com segurança e
          deixar sua operação pronta para começar.
        </p>
      </div>

      <input
        name="nome"
        placeholder="Nome da empresa *"
        value={empresa.nome}
        onChange={handleChange}
        className={inputClass}
        required
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          name="cpfCnpj"
          placeholder="CPF ou CNPJ *"
          value={empresa.cpfCnpj}
          onChange={handleChange}
          className={inputClass}
          required
        />

        <input
          name="dominio"
          placeholder="Domínio da empresa (ex: minhaempresa) *"
          value={empresa.dominio}
          onChange={handleChange}
          className={inputClass}
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          name="whatsapp"
          placeholder="WhatsApp *"
          value={empresa.whatsapp}
          onChange={handleChange}
          className={inputClass}
          required
        />

        <input
          name="emailContato"
          placeholder="E-mail de contato *"
          type="email"
          value={empresa.emailContato}
          onChange={handleChange}
          className={inputClass}
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="md:col-span-1">
          <input
            name="cep"
            placeholder="CEP"
            value={empresa.cep}
            onChange={handleChange}
            className={inputClass}
          />
          {buscandoCep && (
            <p className="mt-2 text-xs text-slate-400">Buscando endereço...</p>
          )}
        </div>

        <input
          name="uf"
          placeholder="UF"
          value={empresa.uf}
          onChange={handleChange}
          className={inputClass}
          maxLength={2}
        />

        <input
          name="cidade"
          placeholder="Cidade"
          value={empresa.cidade}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <input
        name="endereco"
        placeholder="Endereço"
        value={empresa.endereco}
        onChange={handleChange}
        className={inputClass}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          name="numero"
          placeholder="Número"
          value={empresa.numero}
          onChange={handleChange}
          className={inputClass}
        />

        <input
          name="bairro"
          placeholder="Bairro"
          value={empresa.bairro}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <input
        name="instagram"
        placeholder="Instagram (opcional)"
        value={empresa.instagram}
        onChange={handleChange}
        className={inputClass}
      />

      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
        Depois da ativação, você poderá personalizar sua empresa com logo,
        configurações e ajustes visuais diretamente no sistema.
      </div>
    </div>
  );
}
