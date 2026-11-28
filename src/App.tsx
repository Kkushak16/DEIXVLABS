import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { GastlyCursor } from './components/GastlyCursor';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const Themes = lazy(() => import('./pages/Themes'));

export default function App() {
  return (
    <div className="app-shell">
      <Nav />
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
    </div>
  );
}
