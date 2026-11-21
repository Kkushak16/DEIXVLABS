import { site } from '../config/site.config';
import { Countdown } from '../components/Countdown';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 flex flex-col items-center justify-center overflow-hidden">
      {/* Outer Cybernetic HUD Frame - Exactly as in Image 1 */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Container with Cyber Frame */}
        <div className="relative rounded-2xl p-1 sm:p-2 bg-gradient-to-b from-cyan-500/30 via-purple-500/20 to-cyan-500/40 shadow-[0_0_50px_rgba(37,99,235,0.25)]">
          {/* Inner Frame */}
          <div className="relative rounded-xl overflow-hidden border border-cyan-400/50 bg-[#070b18]">
            
            {/* The Authentic Illustrated Artwork (Image 1) */}
            <div className="relative w-full aspect-[16/9] max-h-[580px] overflow-hidden select-none">
              <img
                src="/images/hero/hero-banner.jpg"
                alt="DEI x VLABS Hackathon '26 Hero Banner"
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle ambient scanline effect */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%)',
                  backgroundSize: '100% 4px',
                }}
                aria-hidden="true"
              />
              {/* Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b18] via-transparent to-transparent opacity-60" />
            </div>

            {/* Glowing Corner Accents */}
            <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400" aria-hidden="true" />
            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400" aria-hidden="true" />
            <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-400" aria-hidden="true" />
            <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-400" aria-hidden="true" />
          </div>
        </div>

        {/* Hero Bottom Interactive Dashboard */}
        <div className="mt-8 flex flex-col items-center text-center">
          
          {/* Status Badge & Format Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/60 shadow-[0_0_12px_rgba(56,189,248,0.4)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 pulse-dot" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
                Registrations Open
              </span>
            </div>

            <div className="px-3.5 py-1 rounded-full bg-[#0d172a] border border-cyan-500/30 text-xs font-mono text-cyan-200">
              Round 1 · Online
            </div>

            <div className="px-3.5 py-1 rounded-full bg-[#0d172a] border border-purple-500/40 text-xs font-mono text-purple-200">
              Round 2 · Offline at DEI Campus
            </div>
          </div>

          {/* One-Line Pitch */}
          <p className="text-slate-300 text-sm md:text-base max-w-xl mb-8 leading-relaxed font-body">
            Build the future of simulated science and engineering experiments in a premier national virtual labs hackathon.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href={site.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-display font-bold uppercase tracking-wider shadow-[0_0_24px_rgba(56,189,248,0.7)] border border-cyan-300/50 flex items-center gap-2 transition-all duration-200 hover:scale-105"
            >
              <span>Register Now</span>
              <svg className="w-4 h-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a
              href="/themes"
              className="px-8 py-3.5 rounded-lg bg-[#0d1527] hover:bg-[#15223e] text-cyan-300 hover:text-white text-sm font-display font-bold uppercase tracking-wider border border-cyan-500/40 shadow-[0_0_15px_rgba(56,189,248,0.2)] flex items-center gap-2 transition-all duration-200"
            >
              <span>Explore Themes</span>
              <span className="text-xs font-mono">→</span>
            </a>
          </div>

          {/* Tabular Countdown Timer */}
          <div className="p-4 rounded-xl bg-[#0a1224]/80 border border-cyan-500/20 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <Countdown targetDate={site.dates.registrationClose} />
          </div>
        </div>
      </div>
    </section>
  );
}
