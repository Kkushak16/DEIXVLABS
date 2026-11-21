import { useEffect, useRef, type PointerEvent, type ReactNode } from "react";

interface ParticleHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  interactiveHint?: string;
  className?: string;
  particleCount?: number;
  children?: ReactNode;
}

export function ParticleHero({
  title = "FLUX",
  subtitle = "Digital Inferno",
  description = "Experience the mesmerizing dance of light and motion.",
  interactiveHint = "Move to Create",
  className = "",
  particleCount = 15,
  children,
}: ParticleHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const autoModeRef = useRef(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles: HTMLDivElement[] = [];
    const rows = Math.max(6, particleCount);
    const totalParticles = rows * rows;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < totalParticles; i += 1) {
      const particle = document.createElement("div");
      const row = Math.floor(i / rows);
      const col = i % rows;
      const center = (rows - 1) / 2;
      const distance = Math.hypot(row - center, col - center);
      const scale = Math.max(0.1, 1.2 - distance * 0.12);
      const opacity = Math.max(0.05, 1 - distance * 0.1);

      particle.className = "particle";
      particle.style.left = `${col * 1.8}rem`;
      particle.style.top = `${row * 1.8}rem`;
      particle.style.opacity = `${opacity}`;
      particle.style.transform = `scale(${scale})`;
      particle.style.zIndex = `${Math.round(totalParticles - distance * 5)}`;
      fragment.appendChild(particle);
      particles.push(particle);
    }

    container.replaceChildren(fragment);
    let animationFrame = 0;
    const startTime = performance.now();

    const animate = (now: number) => {
      const time = (now - startTime) / 1000;
      const autoCursor = {
        x: Math.sin(time * 0.3) * 110 + Math.sin(time * 0.17) * 55,
        y: Math.cos(time * 0.2) * 85 + Math.cos(time * 0.23) * 45,
      };
      const cursor = autoModeRef.current ? autoCursor : pointerRef.current;

      particles.forEach((particle, index) => {
        const row = Math.floor(index / rows);
        const col = index % rows;
        const distance = Math.hypot(row - (rows - 1) / 2, col - (rows - 1) / 2);
        const dampening = Math.max(0.3, 1 - distance * 0.08);
        const scale = Math.max(0.1, 1.2 - distance * 0.12);
        particle.style.transform = `translate(${cursor.x * dampening}px, ${cursor.y * dampening}px) scale(${scale})`;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationFrame);
      container.replaceChildren();
    };
  }, [particleCount]);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    pointerRef.current = {
      x: (event.clientX - window.innerWidth / 2) * 0.55,
      y: (event.clientY - window.innerHeight / 2) * 0.55,
    };
    autoModeRef.current = false;
  };

  return (
    <section className={`particle-hero ${className}`} onPointerMove={handlePointerMove}>
      <div className="particle-hero-field" aria-hidden="true">
        <div
          ref={containerRef}
          className="particle-grid"
          style={{ width: `${particleCount * 1.8}rem`, height: `${particleCount * 1.8}rem` }}
        />
      </div>
      <div className="particle-hero-content">
        {children ?? (
          <div className="particle-hero-default">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{description}</p>
            <span>{interactiveHint}</span>
          </div>
        )}
      </div>
      <div className="particle-hero-glow particle-hero-glow-one" aria-hidden="true" />
      <div className="particle-hero-glow particle-hero-glow-two" aria-hidden="true" />
    </section>
  );
}
