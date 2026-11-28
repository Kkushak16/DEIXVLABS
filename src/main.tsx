import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/globals.css';

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Production pages are prerendered by scripts/prerender.mjs, which tags the
// root with the route it rendered. Hydrate only when that route is the one in
// the address bar; otherwise (dev server, SPA fallback, 404 page) render fresh.
const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
if (container.hasChildNodes() && container.dataset.route === currentPath) {
  hydrateRoot(container, app);
} else {
  container.replaceChildren();
  createRoot(container).render(app);
}
