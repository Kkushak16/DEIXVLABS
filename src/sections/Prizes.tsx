import prizesData from '../content/prizes.json';

export function Prizes() {
  return (
    <section id="prizes" className="py-20 md:py-28 bg-bg-elevated/70 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/40 rounded-full mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span className="text-[10px] font-display font-bold uppercase tracking-widest text-secondary">
              Recognition & Rewards
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary tracking-tight">
            What You Can Win
          </h2>
          <p className="mt-3 text-text-secondary text-sm max-w-md mx-auto">
            Competitive prize pool, direct internship opportunities, and national platform recognition.
          </p>
        </div>

        {/* Prize Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prizesData.map((prize, idx) => (
            <div
              key={prize.rank}
              className={`relative p-6 bg-bg-base border rounded-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${prize.colorClass} hud-corners`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-display font-bold uppercase tracking-widest text-tertiary">
                    Tier 0{idx + 1}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-secondary pulse-dot" />
                </div>

                <h3 className="font-display font-bold text-xl text-text-primary mb-2">
                  {prize.title}
                </h3>
                <p className="text-xs font-display font-semibold uppercase tracking-wider text-secondary mb-4">
                  {prize.rank}
                </p>

                <div className="w-full h-px bg-bg-recessed my-4" />

                {/* Perks List */}
                <ul className="space-y-2.5 text-left mb-6">
                  {prize.perks.map((perk, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs text-text-secondary leading-relaxed">
                      <svg
                        className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-bg-recessed/60 text-center">
                <span className="text-[11px] font-display uppercase tracking-widest text-text-placeholder">
                  Round 2 Finalist Perk
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-8 text-center text-xs text-text-placeholder">
          * Certificates will be provided to all shortlisted teams participating in Round 2 offline.
        </p>
      </div>
    </section>
  );
}
