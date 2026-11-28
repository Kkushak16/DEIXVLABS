import { useEffect } from 'react';

// Spline scene: a Pokeball that follows the mouse and a Gastly that follows
// the Pokeball (Follow / LookAt events authored in the scene). Self-hosted
// copy of https://prod.spline.design/Wb8cYDF0sSCy-3kP/scene.splinecode.
const SCENE_URL = '/gastly.splinecode';

/**
 * Full-screen, click-through overlay that plays the Gastly scene as the
 * mouse cursor. Desktop mice only: touch devices and users who prefer
 * reduced motion keep the normal cursor and never download the runtime.
 * The native cursor is hidden only once the scene has loaded.
 */
export function GastlyCursor() {
  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!finePointer.matches || reducedMotion.matches) return;

    let disposed = false;
    let app: { dispose(): void } | null = null;
    const canvas = document.createElement('canvas');
    canvas.className = 'gastly-cursor-canvas';
    canvas.setAttribute('aria-hidden', 'true');

    const start = async () => {
      const { Application } = await import('@splinetool/runtime');
      if (disposed) return;
      document.body.appendChild(canvas);
      const spline = new Application(canvas);
      app = spline;
      await spline.load(SCENE_URL);
      if (disposed) return;
      // The scene is exported with a black backdrop; clear it so the site shows through.
      spline.setBackgroundColor('rgba(0, 0, 0, 0)');
      spline.setGlobalEvents(true);
      document.documentElement.classList.add('gastly-cursor-active');
    };

    // Wait until the page is idle so the 3D runtime never competes with first paint.
    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1500));
    const cancelIdle = window.cancelIdleCallback ?? window.clearTimeout;
    const handle = idle(() => {
      start().catch(() => {
        // If the scene fails to load, keep the normal cursor.
        document.documentElement.classList.remove('gastly-cursor-active');
        canvas.remove();
      });
    });

    return () => {
      disposed = true;
      cancelIdle(handle);
      app?.dispose();
      canvas.remove();
      document.documentElement.classList.remove('gastly-cursor-active');
    };
  }, []);

  return null;
}
