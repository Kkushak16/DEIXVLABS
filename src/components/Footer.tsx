export function Footer() {
  return (
    <footer className="site-footer">
      <section className="coordinator-section" aria-labelledby="coordinator-title">
        <div>
          <p className="subpage-eyebrow">EVENT CONTACTS</p>
          <h2 id="coordinator-title">FACULTY COORDINATOR</h2>
          <p><strong>Prof. Rahul Swaroop Sharma</strong></p>
          <p>Dept. of Mechanical Engineering<br />Dayalbagh Educational Institute, Agra</p>
        </div>
        <div>
          <p className="subpage-eyebrow">STUDENT COORDINATORS</p>
          <h2>STUDENT COORDINATORS</h2>
          <p><strong>Kushak Dohare</strong></p>
          <p><a href="mailto:kushakdohare16@gmail.com">kushakdohare16@gmail.com</a><br /><a href="tel:+917819952826">+91 7819952826</a></p>
        </div>
      </section>
      <div className="footer-marquee" aria-label="DEI X VLABS 2026">
        <div className="footer-marquee-track">
          <div className="footer-marquee-group">
            <span>DEI X VLABS 2026</span><span>DEI X VLABS 2026</span><span>DEI X VLABS 2026</span><span>DEI X VLABS 2026</span>
          </div>
          <div className="footer-marquee-group" aria-hidden="true">
            <span>DEI X VLABS 2026</span><span>DEI X VLABS 2026</span><span>DEI X VLABS 2026</span><span>DEI X VLABS 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
