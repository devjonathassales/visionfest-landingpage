import { faqItems } from "@/data/site";

export function FAQ() {
  return (
    <section id="faq" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.25em] text-lime-300 uppercase">
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
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 md:p-7"
            >
              <h3 className="text-lg font-semibold text-white">
                {item.question}
              </h3>
              <p className="mt-3 leading-7 text-white/68">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
