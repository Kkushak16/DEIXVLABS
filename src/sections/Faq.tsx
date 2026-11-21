import { useState } from 'react';
import faqData from '../content/faq.json';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary text-center mb-4">
          FAQ
        </h2>
        <p className="text-text-secondary text-center mb-12">
          Quick answers to common questions.
        </p>

        <div className="space-y-3">
          {faqData.map((item, index) => (
            <div key={index} className="border border-bg-recessed rounded-lg overflow-hidden">
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-bg-elevated/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-display font-semibold text-sm text-text-primary">
                  {item.q}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`flex-shrink-0 text-text-secondary transition-transform duration-200
                    ${openIndex === index ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
