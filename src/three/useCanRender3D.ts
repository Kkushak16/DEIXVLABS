import { useState, useEffect } from 'react';

export function useCanRender3D(): { canRender: boolean; toggle3D: () => void } {
  const [canRender, setCanRender] = useState<boolean>(() => {
    // Check localStorage preference
    const saved = localStorage.getItem('vlabs_3d_enabled');
    if (saved !== null) {
      return saved === 'true';
    }

    // Check prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return false;
    }

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) return false;
    } catch {
      return false;
    }

    // Check device capabilities if available
    const nav = navigator as unknown as { deviceMemory?: number; hardwareConcurrency?: number; connection?: { saveData?: boolean } };
    if (nav.connection?.saveData === true) return false;
    if (nav.deviceMemory && nav.deviceMemory < 2) return false;
    if (nav.hardwareConcurrency && nav.hardwareConcurrency < 2) return false;

    return true;
  });

  const toggle3D = () => {
    setCanRender((prev) => {
      const next = !prev;
      localStorage.setItem('vlabs_3d_enabled', String(next));
      return next;
    });
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setCanRender(false);
      }
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return { canRender, toggle3D };
}
