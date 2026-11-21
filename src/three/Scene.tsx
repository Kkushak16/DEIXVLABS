import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ParticleField } from './ParticleField';
import { HeroObject } from './HeroObject';
import { useCanRender3D } from './useCanRender3D';

export function Scene() {
  const { canRender } = useCanRender3D();

  if (!canRender) {
    // Static poster fallback
    return (
      <div
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-25"
        style={{
          background: 'radial-gradient(ellipse at 50% 20%, rgba(37,99,235,0.25) 0%, rgba(10,15,29,0.9) 70%)',
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: 'radial-gradient(ellipse at 50% 15%, rgba(15,23,42,0.85) 0%, #0a0f1d 75%)',
      }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#38bdf8" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#2563eb" />
        <Suspense fallback={null}>
          <ParticleField count={250} />
          <HeroObject />
        </Suspense>
      </Canvas>
    </div>
  );
}
