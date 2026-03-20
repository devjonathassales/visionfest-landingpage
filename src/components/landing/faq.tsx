import { faqItems } from "../../data/site";

export function FAQ() {
  return (
    <section id="faq" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-widest text-lime-300 uppercase">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Dúvidas frequentes
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqItems.map((item) => (
            <article
              key={item.question}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold text-white">
                {item.question}
              </h3>
              <p className="mt-3 leading-7 text-white/70">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
