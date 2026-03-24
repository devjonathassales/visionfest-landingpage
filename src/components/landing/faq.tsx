import { faqItems } from "@/data/site";

export function FAQ() {
  return (
    <section id="faq" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.24em] text-[#7ed957] uppercase">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Dúvidas frequentes
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqItems.map((item) => (
            <article
              key={item.question}
              className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(92,44,111,0.05))] p-6 md:p-7"
            >
              <h3 className="text-lg font-semibold text-white">
                {item.question}
              </h3>
              <p className="mt-3 leading-7 text-[#C0C0C0]/82">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
