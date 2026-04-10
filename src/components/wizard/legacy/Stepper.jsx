import React from "react";

const stepsLabels = ["Empresa", "Acesso", "Plano", "Pagamento"];

export default function Stepper({ currentStep, totalSteps }) {
  const items = stepsLabels.slice(0, totalSteps);

  return (
    <div className="mx-auto mb-10 w-full max-w-3xl">
      <ul
        aria-label="Etapas do cadastro"
        className="items-start font-medium text-slate-300 md:flex"
      >
        {items.map((item, idx) => {
          const stepNum = idx + 1;
          const isCurrent = currentStep === stepNum;
          const isCompleted = currentStep > stepNum;

          return (
            <li
              key={stepNum}
              aria-current={isCurrent ? "step" : undefined}
              className="flex gap-x-3 md:flex-1 md:flex-col md:gap-x-0"
            >
              <div className="flex flex-col items-center md:flex-1 md:flex-row">
                <hr
                  className={`hidden w-full border md:block ${
                    idx === 0
                      ? "border-none"
                      : isCompleted || isCurrent
                        ? "border-[#7ED957]"
                        : "border-white/10"
                  }`}
                />

                <div
                  className={`flex h-11 w-11 flex-none items-center justify-center rounded-full border transition-all duration-300 ${
                    isCompleted
                      ? "border-[#7ED957] bg-[#7ED957] text-slate-900"
                      : isCurrent
                        ? "border-[#7ED957] bg-[#7ED957]/10 text-[#7ED957]"
                        : "border-white/15 bg-white/5 text-slate-400"
                  }`}
                >
                  {isCompleted ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  ) : (
                    <span className="text-sm font-semibold">{stepNum}</span>
                  )}
                </div>

                <hr
                  className={`h-12 border md:h-auto md:w-full ${
                    stepNum === items.length
                      ? "border-none"
                      : isCompleted
                        ? "border-[#7ED957]"
                        : "border-white/10"
                  }`}
                />
              </div>

              <div className="flex h-10 items-center justify-center md:mt-3 md:h-auto">
                <h3
                  className={`text-sm transition-colors ${
                    isCurrent || isCompleted ? "text-white" : "text-slate-400"
                  }`}
                >
                  {item}
                </h3>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
