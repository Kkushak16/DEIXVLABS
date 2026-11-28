import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

// Elements that play the typewriter reveal (see `typewriter-reveal` in globals.css).
const REVEAL_SELECTOR = [
  '.typewriter-reveal',
  '.main-subpage h2',
  '.main-subpage h3',
  '.main-subpage p',
  '.main-subpage .module-card-top',
  '.main-subpage .reward-label',
  '.main-subpage .reward-muted',
  '.main-subpage .reward-stat',
].join(', ');

/**
 * Site-wide motion polish:
 * - Lenis smooth (inertial) wheel scrolling, including #anchor links.
 * - Typewriter text reveals play when their section scrolls into view
 *   instead of all at once on page load.
 * Both are skipped for visitors who prefer reduced motion.
 */
export function SmoothScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ autoRaf: true, anchors: true, lerp: 0.12 });
    return () => lenis.destroy();
  }, []);

  // Re-run per route so text on a newly rendered page is observed too.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const root = document.documentElement;
    root.classList.add('reveal-on-scroll');
    // Hidden reveal targets are clipped to zero width, which can stop them
    // ever counting as visible, so observe each one's parent box instead.
    const byParent = new Map<Element, Element[]>();
    document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
      const parent = el.parentElement;
      if (!parent) return el.classList.add('is-revealed');
      byParent.set(parent, [...(byParent.get(parent) ?? []), el]);
    });
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // Also reveal anything already scrolled past (fast scrolls, anchor jumps).
          if (!entry.isIntersecting && entry.boundingClientRect.top > 0) continue;
          byParent.get(entry.target)?.forEach((el) => el.classList.add('is-revealed'));
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    byParent.forEach((_, parent) => observer.observe(parent));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
