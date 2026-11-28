import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { GastlyCursor } from './components/GastlyCursor';
import { SmoothScroll } from './components/SmoothScroll';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const Themes = lazy(() => import('./pages/Themes'));

export default function App() {
  // The home page has its own hero navigation, so the site nav bar is only shown on other pages.
  const { pathname } = useLocation();
  const showNav = pathname !== '/';

  return (
    <div className="app-shell">
      {showNav && <Nav />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/themes" element={
            <Suspense fallback={<div className="min-h-screen grid place-items-center text-cyan-300 font-display">Loading themes…</div>}>
              <Themes />
            </Suspense>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <GastlyCursor />
      <SmoothScroll />
    </div>
  );
}
