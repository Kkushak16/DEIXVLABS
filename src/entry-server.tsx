// Build-time prerender entry. `scripts/prerender.mjs` calls `render()` for each
// route and writes the HTML into dist/, so crawlers and AI answer engines that
// do not run JavaScript still see the full page content.
import { StrictMode } from 'react';
import { prerender } from 'react-dom/static';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import faq from './content/faq.json';

export { faq };

export async function render(url: string): Promise<string> {
  const { prelude } = await prerender(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
  return new Response(prelude).text();
}
