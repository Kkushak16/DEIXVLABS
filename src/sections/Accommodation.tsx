export function Accommodation() {
  return (
    <section id="accommodation" className="py-20 md:py-28 bg-bg-elevated">
      <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-16 text-center">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-6">
          Accommodation
        </h2>
        <p className="text-text-secondary leading-relaxed mb-8">
          Accommodation for Round 2 participants is provided by the college at no extra cost.
          Shortlisted teams will receive details about check-in, campus facilities, and what to bring.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: '🏨', title: 'On Campus', desc: 'Stay at DEI, Agra campus' },
            { icon: '🍽️', title: 'Meals', desc: 'Details to be confirmed' },
            { icon: '📧', title: 'Contact', desc: 'Reach out to organisers' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="p-6 bg-bg-base border border-bg-recessed rounded-lg">
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-text-primary mb-1">{title}</h3>
              <p className="text-xs text-text-secondary">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
