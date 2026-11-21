import { Link } from 'react-router-dom';
import tracks from '../content/tracks.json';

export function ThemesPreview() {
  const previewTracks = tracks.slice(0, 4);

  return (
    <section id="themes" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/40 shadow-[0_0_12px_rgba(56,189,248,0.3)] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-300">
              Innovation Cohorts
            </span>
          </div>

          <h2
            className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-wide text-white uppercase"
            style={{
              textShadow: '0 0 24px rgba(56, 189, 248, 0.6)',
            }}
          >
            HACKATHON THEMES
          </h2>

          <p className="mt-3 text-slate-300 text-xs sm:text-sm max-w-lg mx-auto font-body">
            Explore cutting-edge domains and build next-generation simulated experiments.
          </p>

          <div className="flex items-center justify-center gap-3 mt-4" aria-hidden="true">
            <div className="w-16 h-px bg-cyan-500/40" />
            <div className="w-2 h-2 rotate-45 border border-cyan-400 bg-cyan-950" />
            <div className="w-16 h-px bg-cyan-500/40" />
          </div>
        </div>

        {/* 4 Cards Preview matching Image 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {previewTracks.map((track) => {
            const trackNum = track.code.split('-')[1];

            return (
              <Link
                key={track.slug}
                to={`/themes?track=${track.slug}`}
                className="relative p-5 rounded-xl text-center flex flex-col items-center justify-between min-h-[170px] bg-[#0a1224]/85 hover:bg-[#0d1933] border border-cyan-500/30 hover:border-cyan-400 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300 group hover:-translate-y-1"
              >
                {/* 4 Corner Screws / Rivets */}
                <span className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-cyan-400/50 group-hover:bg-cyan-300" aria-hidden="true" />
                <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-cyan-400/50 group-hover:bg-cyan-300" aria-hidden="true" />
                <span className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-cyan-400/50 group-hover:bg-cyan-300" aria-hidden="true" />
                <span className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-cyan-400/50 group-hover:bg-cyan-300" aria-hidden="true" />

                {/* Track Code */}
                <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400/90 pt-1">
                  TRACK // {trackNum}
                </div>

                {/* Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-[#070e1c] border border-cyan-500/25 group-hover:border-cyan-400/50 flex items-center justify-center my-2">
                  <span className="material-symbols-outlined text-cyan-300 text-2xl">
                    {track.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xs uppercase tracking-wider text-slate-300 group-hover:text-white pb-1">
                  {track.title}
                </h3>
              </Link>
            );
          })}
        </div>

        {/* View All Themes CTA */}
        <div className="mt-10 text-center">
          <Link
            to="/themes"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[#0d1527] hover:bg-[#15223e] text-cyan-300 hover:text-white text-xs font-display font-bold uppercase tracking-wider border border-cyan-500/40 shadow-[0_0_15px_rgba(56,189,248,0.25)] transition-all duration-200"
          >
            <span>View All 8 Themes</span>
            <span className="text-sm">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
