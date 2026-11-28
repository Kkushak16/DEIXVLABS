import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import tracks from '../content/tracks.json';
import { Modal } from '../components/Modal';
import { site, hasRegistrationLink } from '../config/site.config';

type Track = (typeof tracks)[number];

/** Set page title for this route (improves SEO for SPAs) */
function usePageTitle(title: string) {
  useEffect(() => {
    const prev = document.title;
    document.title = title;
    return () => { document.title = prev; };
  }, [title]);
}

function TrackIcon({ index }: { index: number }) {
  return (
    <svg className="track-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      {index === 0 && <><rect x="4" y="8" width="16" height="11" rx="3" /><path d="M8 8V5h8v3M8 13h.01M16 13h.01M12 2v3" /></>}
      {index === 1 && <><path d="M4 17c5-10 9-13 16-14-1 7-4 11-14 16l-2-2Z" /><path d="m10 14 4 4" /></>}
      {index === 2 && <><rect x="6" y="6" width="12" height="12" rx="2" /><rect x="10" y="10" width="4" height="4" /><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M18 9h4M2 15h4M18 15h4" /></>}
      {index === 3 && <><path d="M12 21s7-3.4 7-9V5l-7-3-7 3v7c0 5.6 7 9 7 9Z" /><path d="m9 12 2 2 4-5" /></>}
      {index === 4 && <><path d="M18 3C9 4 5 8 5 14a6 6 0 0 0 6 6c6 0 8-7 7-17Z" /><path d="M3 21c3-5 6-7 11-9" /></>}
      {index === 5 && <><path d="M8 3h6v5l3 3v4H7v-4l3-3V3M6 21h12M4 18h16" /></>}
      {index === 6 && <><path d="m12 3 8 5v8l-8 5-8-5V8l8-5Z" /><path d="m8 10 4 2 4-2M12 12v6" /></>}
      {index === 7 && <><rect x="3" y="7" width="18" height="11" rx="4" /><path d="M8 10v5M5.5 12.5h5M16 12h.01M19 14h.01" /></>}
    </svg>
  );
}

export default function Themes() {
  usePageTitle("Themes | DEI x VLABS Hackathon '26 Innovation Tracks");
  const [params, setParams] = useSearchParams();
  const [selectedSlug, setSelectedSlug] = useState(params.get('track') || tracks[0].slug);
  const [modalTrack, setModalTrack] = useState<Track | null>(null);
  const selected = tracks.find((track) => track.slug === selectedSlug) || tracks[0];

  useEffect(() => {
    setParams({ track: selectedSlug }, { replace: true });
  }, [selectedSlug, setParams]);

  return (
    <section className="themes-page" aria-labelledby="themes-title">
      <div className="themes-grid-bg" aria-hidden="true" />
      <div className="themes-content">
        <header className="themes-heading">
          <p className="themes-badge"><span /> DEI X VLABS HACKATHON '26 // TRACKS</p>
          <h1 id="themes-title">THEMES</h1>
          <p>Select a domain to explore keynote sessions, technical competitions, and hands-on innovation tracks.</p>
          <div className="diamond-divider"><i /><b /><i /></div>
        </header>
        <div className="track-grid" role="group" aria-label="Hackathon innovation tracks">
          {tracks.map((track, index) => {
            const active = track.slug === selectedSlug;
            return (
              <button
                key={track.slug}
                className={`track-card ${active ? 'selected' : ''}`}
                type="button"
                aria-pressed={active}
                onClick={() => setSelectedSlug(track.slug)}
              >
                <span className="card-code">TRACK //<br />{String(index + 1).padStart(2, '0')}</span>
                <span className="icon-box"><TrackIcon index={index} /></span>
                <strong>{track.title}</strong>
              </button>
            );
          })}
        </div>
        <div className="detail-plaque">
          <div className="plaque-icon"><TrackIcon index={tracks.findIndex((track) => track.slug === selected.slug)} /></div>
          <div className="plaque-copy">
            <p>{selected.code} <span>//</span></p>
            <h2>{selected.title}</h2>
            <div>{selected.summary}</div>
          </div>
          <button className="explore-button" type="button" onClick={() => setModalTrack(selected)}>EXPLORE TRACK <span>→</span></button>
        </div>
      </div>
      <p className="tracks-note">Tracks are provisional and may change before Round 1.</p>
      <Modal isOpen={Boolean(modalTrack)} onClose={() => setModalTrack(null)} title={modalTrack?.title}>
        {modalTrack && <div className="track-modal">
          <p>{modalTrack.brief}</p>
          {hasRegistrationLink && (
            <a href={site.registrationUrl} target="_blank" rel="noopener noreferrer">
              Register for this track ↗<span className="sr-only"> (opens in new tab)</span>
            </a>
          )}
        </div>}
      </Modal>
    </section>
  );
}
