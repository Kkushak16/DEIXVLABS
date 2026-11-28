import { CyberButton } from '../components/CyberButton';

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <title>Page not found | DEI x VLABS Hackathon &apos;26</title>
      <meta name="robots" content="noindex, follow" />
      {/* Neon SIGNAL LOST headline */}
      <h1
        className="font-display font-bold text-5xl md:text-7xl text-secondary tracking-tight"
        style={{
          textShadow: '0 0 20px rgba(56,189,248,0.6), 0 0 40px rgba(56,189,248,0.3)',
        }}
      >
        SIGNAL LOST
      </h1>

      <p className="mt-6 text-text-secondary text-base md:text-lg max-w-md">
        The frequency you tuned into does not exist or has been relocated.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
        <CyberButton
          label="Return to Home"
          href="/"
          variant="primary"
          size="lg"
        />
        <CyberButton
          label="Explore Themes"
          href="/themes"
          variant="secondary"
          size="lg"
        />
      </div>
    </section>
  );
}
