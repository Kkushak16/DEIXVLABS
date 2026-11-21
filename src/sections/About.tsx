import { site } from '../config/site.config';

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      {/* SVG Filters for Chromatic Aberration Glitch */}
      <svg className="sr-only" aria-hidden="true">
        <defs>
          <filter id="glitchRed">
            <feColorMatrix mode="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" />
          </filter>
          <filter id="glitchGreen">
            <feColorMatrix mode="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" />
          </filter>
          <filter id="glitchBlue">
            <feColorMatrix mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" />
          </filter>
        </defs>
      </svg>

      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* About Virtual Labs */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/40 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span className="text-[10px] font-display font-bold uppercase tracking-widest text-secondary">
                National Initiative
              </span>
            </div>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-5">
              What is Virtual Labs?
            </h2>

            <p className="text-text-secondary leading-relaxed mb-4 text-sm">
              Virtual Labs is an initiative of the Ministry of Education, Govt of India, under the
              National Mission on Education through ICT. It provides fully interactive, anytime-anywhere
              access to simulated science and engineering experiments for college students nationwide.
            </p>

            <p className="text-text-secondary leading-relaxed mb-6 text-sm">
              Coordinated centrally by IIT Delhi with a consortium of premier partner institutes including
              Dayalbagh Educational Institute (DEI), Agra.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { value: site.stats.labs, label: 'Virtual Labs' },
                { value: site.stats.experiments, label: 'Experiments' },
                { value: site.stats.participatingInstitutes, label: 'Institutes' },
              ].map(({ value, label }) => (
                <div key={label} className="p-3.5 bg-bg-elevated border border-bg-recessed rounded text-center hud-corners">
                  <div className="font-display font-bold text-xl text-secondary">{value}</div>
                  <div className="text-[10px] font-display uppercase tracking-wider text-text-secondary mt-1">{label}</div>
                </div>
              ))}
            </div>

            <a
              href="https://www.vlab.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-display font-semibold uppercase tracking-wider text-secondary hover:text-tertiary-light transition-colors"
            >
              Visit Official Virtual Labs Portal
              <span className="sr-only">(opens in new tab)</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>

          {/* About DEI with Cyber Glitch Frame */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/40 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[10px] font-display font-bold uppercase tracking-widest text-primary">
                Host Institute · Round 2 Venue
              </span>
            </div>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-5">
              Hosted at DEI, Agra
            </h2>

            <p className="text-text-secondary leading-relaxed mb-6 text-sm">
              Dayalbagh Educational Institute (DEI), Agra, is a premier Deemed University recognized for
              pioneering value-based modular education, scientific research, and innovative distance learning.
              As a core partner in Virtual Labs, DEI welcomes shortlisted teams on-campus for Round 2.
            </p>

            {/* Cyber Glitch Image Container */}
            <div className="relative group w-full aspect-video rounded-lg overflow-hidden border border-border-strong bg-bg-elevated">
              {/* Fallback pattern / image layers for chromatic aberration on hover */}
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center select-none">
                <div className="space-y-2">
                  <div className="font-display font-bold text-lg text-secondary tracking-widest uppercase">
                    DEI Campus · Agra
                  </div>
                  <p className="text-xs text-text-secondary">
                    Physical venue for Round 2 offline presentations & jury evaluation
                  </p>
                  <div className="text-[10px] font-display text-text-placeholder uppercase tracking-widest pt-2">
                    [ Interactive Stage Preview ]
                  </div>
                </div>
              </div>

              {/* Red shift channel */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity duration-200 mix-blend-screen bg-danger/20"
                style={{ transform: 'translate(-2px, -1px)' }}
                aria-hidden="true"
              />

              {/* Cyan shift channel */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-50 transition-opacity duration-200 mix-blend-screen bg-secondary/20"
                style={{ transform: 'translate(2px, 1px)' }}
                aria-hidden="true"
              />

              {/* Scanline overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                  backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%)',
                  backgroundSize: '100% 4px',
                }}
                aria-hidden="true"
              />

              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-secondary" aria-hidden="true" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-secondary" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
