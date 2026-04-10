declare module "@/components/wizard/legacy/CadastroWizard" {
  import * as React from "react";

  export interface CadastroWizardProps {
    onSuccess?: (data: unknown) => void;
    initialPlanId?: string | number;
    initialFormaPagamento?: "pix" | "cartao" | "boleto";
  }

  const CadastroWizard: React.ComponentType<CadastroWizardProps>;
  export default CadastroWizard;
}
