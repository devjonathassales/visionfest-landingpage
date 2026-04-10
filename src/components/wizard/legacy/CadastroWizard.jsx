import React, { useEffect, useMemo, useState } from "react";
import Stepper from "./Stepper";
import Step1Empresa from "./Step1Empresa";
import Step2SuperAdmin from "./Step2SuperAdmin";
import Step3PlanoPagamento from "./Step3PlanoPagamento";
import api from "@/utils/api";

function buildClienteAppLoginUrl(statusData, dominioFallback) {
  const appBase =
    statusData?.appUrl ||
    process.env.NEXT_PUBLIC_VISIONFEST_CLIENT_APP_URL ||
    "http://localhost:3000";

  const dominio = statusData?.dominio || dominioFallback;

  if (!dominio) {
    return `${appBase.replace(/\/$/, "")}/login`;
  }

  return `${appBase.replace(/\/$/, "")}/login?dominio=${encodeURIComponent(dominio)}`;
}

export default function CadastroWizard({
  onSuccess,
  initialPlanId,
  initialFormaPagamento = "pix",
}) {
  const [step, setStep] = useState(1);

  const [empresa, setEmpresa] = useState({
    nome: "",
    cpfCnpj: "",
    cep: "",
    endereco: "",
    numero: "",
    bairro: "",
    cidade: "",
    uf: "",
    whatsapp: "",
    instagram: "",
    emailContato: "",
    dominio: "",
  });

  const [superAdmin, setSuperAdmin] = useState({
    senha: "",
    confirmarSenha: "",
  });

  const [planos, setPlanos] = useState([]);
  const [planoSelecionado, setPlanoSelecionado] = useState(
    initialPlanId ? String(initialPlanId) : "",
  );
  const [formaPagamento, setFormaPagamento] = useState(initialFormaPagamento);

  const [loading, setLoading] = useState(false);
  const [cadastroConcluido, setCadastroConcluido] = useState(false);
  const [empresaIdCriada, setEmpresaIdCriada] = useState(null);
  const [paymentLink, setPaymentLink] = useState("");
  const [statusWizard, setStatusWizard] = useState(null);
  const [erro, setErro] = useState("");
  const [checandoStatus, setChecandoStatus] = useState(false);

  useEffect(() => {
    async function fetchPlanos() {
      try {
        const res = await api.get("/planos/publicos");
        setPlanos(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.warn("Erro ao buscar planos públicos.", err);
        setErro("Não foi possível carregar os planos no momento.");
        setPlanos([]);
      }
    }

    fetchPlanos();
  }, []);

  useEffect(() => {
    if (initialPlanId) {
      setPlanoSelecionado(String(initialPlanId));
    }
  }, [initialPlanId]);

  useEffect(() => {
    if (initialFormaPagamento) {
      setFormaPagamento(initialFormaPagamento);
    }
  }, [initialFormaPagamento]);

  const planoAtual = useMemo(() => {
    if (!Array.isArray(planos)) return null;

    return (
      planos.find((p) => String(p.id) === String(planoSelecionado)) || null
    );
  }, [planos, planoSelecionado]);

  function validarStepAtual() {
    if (step === 1) {
      return (
        empresa.nome?.trim() &&
        empresa.cpfCnpj?.trim() &&
        empresa.whatsapp?.trim() &&
        empresa.emailContato?.trim() &&
        empresa.dominio?.trim()
      );
    }

    if (step === 2) {
      return (
        superAdmin.senha?.trim() &&
        superAdmin.confirmarSenha?.trim() &&
        superAdmin.senha === superAdmin.confirmarSenha
      );
    }

    if (step === 3) {
      return planoSelecionado && formaPagamento;
    }

    return true;
  }

  function nextStep() {
    if (!validarStepAtual()) {
      setErro("Preencha corretamente os campos obrigatórios antes de avançar.");
      return;
    }

    setErro("");
    setStep((s) => s + 1);
  }

  function prevStep() {
    setErro("");
    if (step > 1) setStep((s) => s - 1);
  }

  async function consultarStatus(empresaId, silent = false) {
    try {
      if (!silent) setChecandoStatus(true);

      const { data } = await api.get(`/empresas/wizard/status/${empresaId}`);
      setStatusWizard(data);

      if (data?.paymentLink && !paymentLink) {
        setPaymentLink(data.paymentLink);
      }

      return data;
    } catch (error) {
      console.error(error);
      if (!silent) {
        setErro(
          error?.response?.data?.mensagem ||
            "Não foi possível consultar o status da liberação.",
        );
      }
      return null;
    } finally {
      if (!silent) setChecandoStatus(false);
    }
  }

  useEffect(() => {
    if (!cadastroConcluido || !empresaIdCriada) return;

    let intervalId = null;
    let cancelled = false;

    async function startPolling() {
      const first = await consultarStatus(empresaIdCriada, true);

      if (cancelled) return;
      if (first?.liberado) return;

      intervalId = window.setInterval(async () => {
        const current = await consultarStatus(empresaIdCriada, true);
        if (current?.liberado && intervalId) {
          window.clearInterval(intervalId);
        }
      }, 7000);
    }

    startPolling();

    return () => {
      cancelled = true;
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [cadastroConcluido, empresaIdCriada]);

  async function onSubmit() {
    if (!validarStepAtual()) {
      setErro("Preencha corretamente os campos obrigatórios.");
      return;
    }

    setErro("");
    setLoading(true);

    try {
      const payload = {
        nome: empresa.nome,
        cpfCnpj: empresa.cpfCnpj,
        cep: empresa.cep,
        endereco: empresa.endereco,
        numero: empresa.numero,
        bairro: empresa.bairro,
        cidade: empresa.cidade,
        uf: empresa.uf,
        whatsapp: empresa.whatsapp,
        instagram: empresa.instagram,
        emailContato: empresa.emailContato,
        dominio: empresa.dominio,
        senhaSuperAdmin: superAdmin.senha,
        planoId: planoSelecionado,
        formaPagamento,
        preferirAssinatura: formaPagamento === "cartao",
      };

      const { data } = await api.post("/empresas/wizard", payload, {
        headers: { "Content-Type": "application/json" },
      });

      const empresaId = data?.empresaId || data?.empresa?.id || null;
      const cobrancaLink =
        data?.empresa?.asaasPaymentLink ||
        data?.asaas?.billing?.invoiceUrl ||
        "";

      setEmpresaIdCriada(empresaId);
      setPaymentLink(cobrancaLink);
      setCadastroConcluido(true);
      setStep(4);

      if (empresaId) {
        await consultarStatus(empresaId);
      }

      if (typeof onSuccess === "function") {
        onSuccess(data);
      }
    } catch (error) {
      console.error(error);
      setErro(
        error?.response?.data?.mensagem ||
          "Erro ao enviar cadastro. Verifique os dados e tente novamente.",
      );
    } finally {
      setLoading(false);
    }
  }

  function resetWizard() {
    setStep(1);
    setCadastroConcluido(false);
    setEmpresaIdCriada(null);
    setPaymentLink("");
    setStatusWizard(null);
    setErro("");
    setEmpresa({
      nome: "",
      cpfCnpj: "",
      cep: "",
      endereco: "",
      numero: "",
      bairro: "",
      cidade: "",
      uf: "",
      whatsapp: "",
      instagram: "",
      emailContato: "",
      dominio: "",
    });
    setSuperAdmin({
      senha: "",
      confirmarSenha: "",
    });
    setPlanoSelecionado(initialPlanId ? String(initialPlanId) : "");
    setFormaPagamento(initialFormaPagamento || "pix");
  }

  const appLoginUrl = buildClienteAppLoginUrl(statusWizard, empresa.dominio);

  return (
    <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,#1f2430_0%,#0d1016_45%,#07090d_100%)] shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
      <div className="border-b border-white/10 px-6 py-8 md:px-10">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#7ED957] uppercase md:text-sm">
            VisionFest
          </p>
          <h1 className="mt-3 text-3xl leading-tight font-bold text-white md:text-5xl">
            Sua empresa mais organizada, profissional e pronta para crescer
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
            Cadastre sua empresa, escolha o plano ideal e libere seu ambiente
            para centralizar contratos, financeiro, cadastros e operação em um
            só lugar.
          </p>
        </div>
      </div>

      <div className="px-6 py-8 md:px-10 md:py-10">
        <Stepper currentStep={step} totalSteps={4} />

        <div className="mx-auto max-w-3xl">
          {step === 1 && (
            <Step1Empresa empresa={empresa} setEmpresa={setEmpresa} />
          )}

          {step === 2 && (
            <Step2SuperAdmin
              superAdmin={superAdmin}
              setSuperAdmin={setSuperAdmin}
              emailContato={empresa.emailContato}
            />
          )}

          {step === 3 && (
            <Step3PlanoPagamento
              planos={planos}
              planoSelecionado={planoSelecionado}
              setPlanoSelecionado={setPlanoSelecionado}
              formaPagamento={formaPagamento}
              setFormaPagamento={setFormaPagamento}
            />
          )}

          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-white">
                  Falta muito pouco para liberar seu acesso
                </h2>
                <p className="mt-2 leading-relaxed text-slate-300">
                  Seu ambiente já foi preparado com sucesso. Agora basta
                  concluir o pagamento para ativar sua empresa e entrar no
                  VisionFest imediatamente.
                </p>
              </div>

              <div className="space-y-3 rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6">
                <p className="text-slate-200">
                  Plano selecionado:{" "}
                  <strong className="text-white">
                    {planoAtual?.nome || "Plano VisionFest"}
                  </strong>
                </p>
                <p className="text-slate-200">
                  Forma de pagamento:{" "}
                  <strong className="text-white">
                    {formaPagamento === "cartao"
                      ? "Cartão de crédito recorrente"
                      : formaPagamento === "boleto"
                        ? "Boleto"
                        : "Pix"}
                  </strong>
                </p>
                <p className="text-slate-200">
                  Login do superadmin:{" "}
                  <strong className="text-white">{empresa.emailContato}</strong>
                </p>
              </div>

              <div className="rounded-3xl border border-[#7ED957]/20 bg-gradient-to-r from-[#7ED957]/12 to-white/5 p-6">
                <p className="text-xs font-semibold tracking-[0.18em] text-[#7ED957] uppercase">
                  Ativação do acesso
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                  Conclua seu pagamento e entre no VisionFest
                </h3>
                <p className="mt-3 leading-relaxed text-slate-200">
                  Assim que o pagamento for confirmado, sua empresa será
                  liberada automaticamente e você já poderá acessar o sistema
                  com o e-mail e a senha cadastrados.
                </p>
              </div>

              {statusWizard && (
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6">
                  <p className="mb-2 text-sm text-slate-400">
                    Status da liberação
                  </p>
                  <p className="text-lg font-semibold text-white">
                    {statusWizard.mensagem}
                  </p>
                  <p className="mt-3 text-sm text-slate-300">
                    Status da empresa:{" "}
                    <strong className="text-white">
                      {statusWizard.status}
                    </strong>
                  </p>
                  <p className="text-sm text-slate-300">
                    Status no Asaas:{" "}
                    <strong className="text-white">
                      {statusWizard.asaasStatus || "—"}
                    </strong>
                  </p>
                </div>
              )}

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-slate-300">
                Seu acesso será liberado automaticamente após a confirmação do
                pagamento. Você não precisa refazer o cadastro.
              </div>

              {!statusWizard?.liberado && (
                <div className="flex flex-wrap gap-3">
                  {paymentLink && (
                    <button
                      type="button"
                      onClick={() => window.open(paymentLink, "_blank")}
                      className="rounded-2xl bg-[#7ED957] px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-[#7ED957]/20 transition hover:brightness-95"
                    >
                      Finalizar pagamento
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => consultarStatus(empresaIdCriada)}
                    disabled={checandoStatus || !empresaIdCriada}
                    className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-white transition hover:bg-white/10 disabled:opacity-60"
                  >
                    {checandoStatus
                      ? "Verificando..."
                      : "Já conclui o pagamento"}
                  </button>
                </div>
              )}

              {statusWizard?.liberado && (
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => window.open(appLoginUrl, "_blank")}
                    className="rounded-2xl bg-[#7ED957] px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-[#7ED957]/20 transition hover:brightness-95"
                  >
                    Entrar no meu sistema
                  </button>
                </div>
              )}

              <div className="pt-1">
                <button
                  type="button"
                  onClick={resetWizard}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white transition hover:bg-white/10"
                >
                  Novo cadastro
                </button>
              </div>
            </div>
          )}

          {erro && (
            <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-200">
              {erro}
            </div>
          )}

          {step < 4 && (
            <div className="mt-10 flex justify-between">
              {step > 1 ? (
                <button
                  onClick={prevStep}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white transition hover:bg-white/10"
                >
                  Voltar
                </button>
              ) : (
                <div />
              )}

              {step < 3 && (
                <button
                  onClick={nextStep}
                  className="rounded-2xl bg-[#7ED957] px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-[#7ED957]/20 transition hover:brightness-95"
                >
                  Próximo
                </button>
              )}

              {step === 3 && (
                <button
                  onClick={onSubmit}
                  disabled={loading || !planos.length}
                  className={`rounded-2xl px-6 py-3 font-semibold transition ${
                    loading || !planos.length
                      ? "cursor-not-allowed bg-slate-600 text-slate-300"
                      : "bg-[#7ED957] text-slate-900 shadow-lg shadow-[#7ED957]/20 hover:brightness-95"
                  }`}
                >
                  {loading ? "Enviando..." : "Finalizar Cadastro"}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
