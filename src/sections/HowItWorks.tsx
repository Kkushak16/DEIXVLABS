import timeline from '../content/timeline.json';

export function HowItWorks() {
  return (
    <section id="format" className="py-20 md:py-28 bg-bg-elevated">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary text-center mb-4">
          How It Works
        </h2>
        <p className="text-text-secondary text-center mb-12 max-w-lg mx-auto">
          From registration to results — your hackathon journey.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-bg-recessed -translate-y-1/2" aria-hidden="true" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
            {timeline.map((step, index) => (
              <div key={step.id} className="relative flex flex-col items-center text-center">
                {/* Node */}
                <div
                  className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center border-2 mb-4
                    ${step.mode === 'online'
                      ? 'bg-primary/20 border-primary text-primary'
                      : 'bg-secondary/20 border-secondary text-secondary'
                    }`}
                >
                  <span className="font-display font-bold text-sm">{index + 1}</span>
                </div>

                {/* Label */}
                <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-text-primary mb-1 whitespace-nowrap">
                  {step.label}
                </h3>
                <p className="text-xs text-text-secondary mb-1">{step.description}</p>

                {/* Mode chip */}
                <span className={`text-[10px] font-display font-bold uppercase tracking-widest px-2 py-0.5 rounded-full
                  ${step.mode === 'online'
                    ? 'bg-primary/10 text-primary'
                    : 'bg-secondary/10 text-secondary'
                  }`}
                >
                  {step.mode}
                </span>

                {/* Accommodation tag for Round 2 */}
                {step.id === 'round2' && (
                  <span className="mt-2 text-[10px] font-display text-success uppercase tracking-wider">
                    Stay provided by college
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
