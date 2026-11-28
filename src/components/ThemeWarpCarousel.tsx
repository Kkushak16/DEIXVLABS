import { useEffect, useState, type CSSProperties } from "react";

export interface ThemeWarpCard {
  label: string;
  tone: string;
  title: string;
  meta: string;
  text: string;
}

interface ThemeWarpCarouselProps {
  cards: ThemeWarpCard[];
}

export function ThemeWarpCarousel({ cards }: ThemeWarpCarouselProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (cards.length < 2 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % cards.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [cards.length, paused]);

  const move = (direction: number) => {
    setActive((current) => (current + direction + cards.length) % cards.length);
  };

  return (
    <div
      className="theme-warp"
      role="region"
      aria-roledescription="carousel"
      aria-label="Hackathon themes"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <button className="theme-warp-control theme-warp-prev" type="button" onClick={() => move(-1)} aria-label="Previous theme">
        ‹
      </button>
      <div className="theme-warp-stage">
        {cards.map((card, index) => {
          const offset = (index - active + cards.length) % cards.length;
          const signedOffset = offset > cards.length / 2 ? offset - cards.length : offset;
          const isActive = signedOffset === 0;
          return (
            <button
              type="button"
              className={`module-card theme-card-button module-${card.tone} ${isActive ? "theme-warp-active" : ""}`}
              key={card.label}
              style={{ "--theme-offset": signedOffset, "--theme-distance": Math.min(Math.abs(signedOffset), 2) } as CSSProperties}
              onClick={() => setActive(index)}
              aria-current={isActive ? "true" : undefined}
            >
              <div className="module-card-top">
                <span>{card.label}</span>
                <span aria-hidden="true">✦</span>
              </div>
              <div className="module-visual">
                <div className="module-lines" aria-hidden="true" />
                <span>{card.meta}</span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </button>
          );
        })}
      </div>
      <button className="theme-warp-control theme-warp-next" type="button" onClick={() => move(1)} aria-label="Next theme">
        ›
      </button>
      <div className="theme-warp-dots" aria-hidden="true">
        {cards.map((card, index) => <span className={index === active ? "is-active" : ""} key={card.label} />)}
      </div>
    </div>
  );
}
