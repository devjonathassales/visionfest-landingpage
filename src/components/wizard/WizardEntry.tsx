"use client";

import CadastroWizard from "@/components/wizard/legacy/CadastroWizard";

type WizardEntryProps = {
  initialPlanId?: string | number;
  initialFormaPagamento?: "pix" | "cartao" | "boleto";
};

export function WizardEntry({
  initialPlanId,
  initialFormaPagamento = "pix",
}: WizardEntryProps) {
  return (
    <CadastroWizard
      initialPlanId={initialPlanId}
      initialFormaPagamento={initialFormaPagamento}
      onSuccess={(data) => {
        console.log("Wizard finalizado com sucesso:", data);
      }}
    />
  );
}
