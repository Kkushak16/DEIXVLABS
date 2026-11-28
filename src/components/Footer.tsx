export function Footer() {
  return (
    <footer className="site-footer">
      <section id="contact" className="coordinator-section" aria-labelledby="coordinator-title">
        <div className="contact-intro">
          <p className="subpage-eyebrow typewriter-reveal">FOR QUERIES AND DOUBTS</p>
          <h2 id="coordinator-title" className="typewriter-reveal">REACH US</h2>
          <p className="typewriter-reveal">Reach us at <a href="mailto:deivlabshackathon@gmail.com">deivlabshackathon@gmail.com</a></p>
          <div className="contact-links">
            <a href="https://www.linkedin.com/school/dayalbagh-educational-institute/" target="_blank" rel="noopener noreferrer" aria-label="Dayalbagh Educational Institute on LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 8a2.2 2.2 0 0 1 0-4.5ZM3.4 9.7h3.6V21H3.4V9.7Zm5.8 0h3.4v1.5h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.5V21H17v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9.2V9.7Z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a href="https://www.dei.ac.in/dei/" target="_blank" rel="noopener noreferrer">DEI website</a>
          </div>
        </div>
        <div>
          <p className="subpage-eyebrow typewriter-reveal">EVENT CONTACTS</p>
          <h2 className="typewriter-reveal">FACULTY COORDINATOR</h2>
          <p className="typewriter-reveal"><strong>Prof. Rahul Swaroop Sharma</strong></p>
          <p className="typewriter-reveal">Dept. of Mechanical Engineering<br />Dayalbagh Educational Institute, Agra</p>
        </div>
        <div>
          <p className="subpage-eyebrow typewriter-reveal">STUDENT COORDINATORS</p>
          <h2 className="typewriter-reveal">STUDENT COORDINATORS</h2>
          <p className="typewriter-reveal"><strong>Kushak Dohare</strong></p>
          <p className="typewriter-reveal"><a href="mailto:kushakdohare16@gmail.com">kushakdohare16@gmail.com</a><br /><a href="tel:+917819952826">+91 7819952826</a></p>
        </div>
      </section>
      <p className="spline-credit">
        Cursor animation{" "}
        <a href="https://spline.design" target="_blank" rel="noopener noreferrer">
          made with Spline<span className="sr-only"> (opens in new tab)</span>
        </a>
      </p>
      <div className="footer-marquee" aria-hidden="true">
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
