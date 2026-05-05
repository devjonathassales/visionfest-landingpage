const pains = [
  "Orçamentos ficam perdidos no WhatsApp",
  "Clientes somem porque o retorno demora",
  "Datas de eventos ficam espalhadas em agenda, papel e conversa",
  "Cobranças são esquecidas ou feitas sem controle",
  "Itens alugados e estoque viram confusão na semana do evento",
  "Você trabalha muito, mas não sabe exatamente quanto lucrou",
];

export function PainSection() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(92,44,111,0.06))] p-6 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.24em] text-[#7ed957] uppercase">
              O problema não é vender pouco
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
              Você pode estar perdendo dinheiro por falta de organização.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#C0C0C0]/84">
              Quem trabalha com festas vive no ritmo rápido: cliente chama,
              orçamento muda, data precisa ser reservada, pagamento precisa ser
              lembrado e o estoque precisa estar certo. Quando tudo fica solto,
              o prejuízo aparece.
            </p>
          </div>

          <div className="grid gap-3">
            {pains.map((pain) => (
              <div
                key={pain}
                className="flex gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-[#C0C0C0]"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-sm font-bold text-red-300">
                  !
                </span>
                <span>{pain}</span>
              </div>
            ))}

            <div className="mt-3 rounded-2xl border border-[#7ed957]/20 bg-[#7ed957]/10 p-5">
              <p className="text-lg font-bold text-white">
                O VisionFest centraliza sua operação para você parar de depender
                de memória, papel, planilha e conversa perdida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
