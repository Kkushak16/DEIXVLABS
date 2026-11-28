import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { site, hasRegistrationLink } from '../config/site.config';

export function Nav() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-nav ${location.pathname === '/themes' ? 'nav-on-themes' : ''} ${isScrolled ? 'is-scrolled' : ''}`}>
      <Link to="/" className="brand-mark">
        <span>DEI</span><b aria-hidden="true">×</b><span className="sr-only"> x </span><span>VLABS</span><span className="sr-only"> Hackathon &apos;26 home</span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link to="/">Home</Link>
        <Link className={location.pathname === '/themes' ? 'active' : ''} to="/themes">Themes</Link>
        <a href="/#about">About</a>
      </nav>
      {hasRegistrationLink && (
        <a className="nav-register" href={site.registrationUrl} target="_blank" rel="noopener noreferrer">
          Register<span className="sr-only"> (opens in new tab)</span>
        </a>
      )}
    </header>
  );
}
