import { useEffect } from 'react';

// Spline scene: a Pokeball that follows the mouse and a Gastly that follows
// the Pokeball (Follow / LookAt events authored in the scene). Self-hosted
// copy of https://prod.spline.design/Wb8cYDF0sSCy-3kP/scene.splinecode.
const SCENE_URL = '/gastly.splinecode';

// Never start the 3D runtime sooner than this after the page has loaded, so
// the hero video and intro animations get the main thread to themselves.
const MIN_DELAY_AFTER_LOAD_MS = 1200;

/**
 * Full-screen, click-through overlay that plays the Gastly scene as the
 * mouse cursor. Desktop mice only: touch devices and users who prefer
 * reduced motion keep the normal cursor and never download the runtime.
 *
 * To keep the opening smooth, the runtime starts only after the page has
 * loaded, the browser is idle, and the visitor has moved the mouse. The
 * canvas stays invisible until the scene is ready (no black flash), then
 * fades in and takes over from the native cursor.
 */
export function GastlyCursor() {
  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!finePointer.matches || reducedMotion.matches) return;

    let disposed = false;
    let app: { dispose(): void; stop(): void; play(): void } | null = null;
    const timers: number[] = [];
    const canvas = document.createElement('canvas');
    canvas.className = 'gastly-cursor-canvas';
    canvas.setAttribute('aria-hidden', 'true');

    const fail = () => {
      document.documentElement.classList.remove('gastly-cursor-active');
      canvas.remove();
    };

    const start = async () => {
      // WebGPU only. On the WebGL backend this scene's shaders compile
      // synchronously and freeze the page for 2-3 s (measured); WebGPU
      // compiles them with stalls of ~0.2 s. Browsers without a WebGPU
      // adapter keep the normal cursor instead of freezing.
      const gpu = (navigator as Navigator & { gpu?: { requestAdapter(): Promise<unknown> } }).gpu;
      const adapter = gpu ? await gpu.requestAdapter().catch(() => null) : null;
      if (!adapter || disposed) return;

      const { Application } = await import('@splinetool/runtime');
      if (disposed) return;
      document.body.appendChild(canvas);
      const spline = new Application(canvas, { renderer: 'webgpu' });
      app = spline;
      await spline.load(SCENE_URL);
      if (disposed) return;
      // The scene is exported with a black backdrop; clear it so the site shows through.
      spline.setBackgroundColor('rgba(0, 0, 0, 0)');
      spline.setGlobalEvents(true);
      // Reveal on the next frame, once the transparent background has rendered.
      requestAnimationFrame(() => {
        if (disposed) return;
        canvas.classList.add('is-ready');
        document.documentElement.classList.add('gastly-cursor-active');
      });
    };

    const idle = (cb: () => void) => {
      if (typeof window.requestIdleCallback === 'function') window.requestIdleCallback(cb, { timeout: 3000 });
      else setTimeout(cb, 300);
    };

    // Start on the first mouse movement after load + a short settle delay.
    const onFirstMove = () => {
      window.removeEventListener('pointermove', onFirstMove);
      idle(() => { if (!disposed) start().catch(fail); });
    };
    const arm = () => {
      timers.push(window.setTimeout(() => {
        if (!disposed) window.addEventListener('pointermove', onFirstMove, { passive: true });
      }, MIN_DELAY_AFTER_LOAD_MS));
    };
    if (document.readyState === 'complete') arm();
    else window.addEventListener('load', arm, { once: true });

    // Stop rendering while the tab is hidden.
    const onVisibility = () => {
      if (!app) return;
      if (document.hidden) app.stop();
      else app.play();
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      disposed = true;
      timers.forEach((t) => window.clearTimeout(t));
      window.removeEventListener('load', arm);
      window.removeEventListener('pointermove', onFirstMove);
      document.removeEventListener('visibilitychange', onVisibility);
      app?.dispose();
      fail();
    };
  }, []);

  return null;
}
