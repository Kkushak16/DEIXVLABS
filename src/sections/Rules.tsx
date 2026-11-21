import rulesData from '../content/rules.json';

export function Rules() {
  return (
    <section id="rules" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/40 rounded-full mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span className="text-[10px] font-display font-bold uppercase tracking-widest text-secondary">
              Guidelines & Ethics
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary tracking-tight">
            Hackathon Rules
          </h2>
          <p className="mt-3 text-text-secondary text-sm max-w-md mx-auto">
            Essential guidelines for participating teams across Round 1 and Round 2.
          </p>
        </div>

        {/* Rules Grid - 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {rulesData.map((rule) => (
            <div
              key={rule.id}
              className="p-5 bg-bg-elevated border border-bg-recessed rounded-lg hover:border-border-strong transition-all duration-200 flex items-start gap-4 hud-corners"
            >
              <div className="w-10 h-10 rounded bg-bg-recessed border border-border-strong flex items-center justify-center flex-shrink-0">
                <span className="font-display font-bold text-xs text-secondary">
                  {rule.id}
                </span>
              </div>
              <div>
                <h3 className="font-display font-semibold text-sm text-text-primary uppercase tracking-wider mb-1.5">
                  {rule.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {rule.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
