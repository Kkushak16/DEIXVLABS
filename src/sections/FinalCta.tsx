import { CyberRegisterButton } from '../components/CyberButton';

export function FinalCta() {
  return (
    <section className="py-20 md:py-28 bg-bg-elevated/80 relative">
      <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-16 text-center">
        <h2
          className="font-display font-bold text-3xl md:text-5xl text-secondary mb-6"
          style={{
            textShadow: '0 0 20px rgba(56,189,248,0.4), 0 0 40px rgba(56,189,248,0.2)',
          }}
        >
          Ready to Build?
        </h2>
        <p className="text-text-secondary mb-8 text-sm md:text-base">
          Join passionate student developers from across India to build the future of virtual laboratories.
        </p>
        <CyberRegisterButton size="lg" />
      </div>
    </section>
  );
}
