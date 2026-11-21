type GlitchImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function GlitchImage({ src, alt, className = '' }: GlitchImageProps) {
  return (
    <div className={`glitch-image ${className}`}>
      <svg className="glitch-filters" aria-hidden="true">
        <filter id="alphaRed"><feColorMatrix values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" /></filter>
        <filter id="alphaGreen"><feColorMatrix values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" /></filter>
        <filter id="alphaBlue"><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" /></filter>
      </svg>
      <img src={src} alt={alt} />
      <img className="glitch-channel glitch-red" src={src} alt="" aria-hidden="true" />
      <img className="glitch-channel glitch-green" src={src} alt="" aria-hidden="true" />
      <img className="glitch-channel glitch-blue" src={src} alt="" aria-hidden="true" />
    </div>
  );
}
