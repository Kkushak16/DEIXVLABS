import { useEffect, useState } from "react";
import { LiquidButton } from "../components/ui/liquid-glass-button";
import { ParticleHero } from "../components/ui/animated-hero";
import { ThemeWarpCarousel } from "../components/ThemeWarpCarousel";
import faq from "../content/faq.json";

const modules = [
  {
    label: "THEME 01",
    tone: "gold",
    title: "VIRTUAL LABS",
    meta: "SYSTEM: REMOTE ACCESS",
    text: "Explore remote-access science and engineering experiments built for the next generation of learners.",
  },
  {
    label: "THEME 02",
    tone: "cyan",
    title: "ENGINEERED SIMULATIONS",
    meta: "ENGINE: NEXT-GEN",
    text: "Build working MVPs and prototypes that make complex concepts tangible, visual, and interactive.",
  },
  {
    label: "THEME 03",
    tone: "pink",
    title: "COLLECTIVE IMPACT",
    meta: "NETWORK: DEI × VLABS",
    text: "Connect student creativity with societal needs through value-based education and innovation.",
  },
  { label: "THEME 04", tone: "gold", title: "", meta: "", text: "" },
  { label: "THEME 05", tone: "cyan", title: "", meta: "", text: "" },
  { label: "THEME 06", tone: "pink", title: "", meta: "", text: "" },
];

const rules = [
  {
    title: "Team Size",
    text: "1 - 4 Members per team.",
  },
  {
    title: "Eligibility",
    text: "Engineering & Science Students (UG / PG / Diploma).",
  },
  {
    title: "Submission Requirement",
    text: "Submission must be a working MVP (Minimum Viable Product) or Prototype.",
  },
  {
    title: "Final Round",
    text: "Offline Final Round at Dayalbagh Educational Institute, Agra.",
  },
];

const judgingCriteria = [
  { title: "Innovation & Creativity", percentage: 30 },
  { title: "Technical Complexity", percentage: 30 },
  { title: "UX & Interactivity", percentage: 25 },
  { title: "Alignment to Theme", percentage: 15 },
];

const roadmap = [
  {
    date: "18 JAN",
    title: "Registration Starts",
    text: "Create your team (1-4 members). Start brainstorming ideas.",
  },
  {
    date: "30 JAN",
    title: "Submission Deadline",
    text: "Last date to submit your Presentation & MVP prototype.",
  },
  {
    date: "02 FEB",
    title: "Shortlist Teams Announcement",
    text: "10 Teams selected for the Final Round.",
  },
  {
    date: "07 FEB",
    title: "FINAL ROUND",
    text: "Offline Hackathon @ Dayalbagh Educational Institute, Agra.",
  },
];

export function MainSubpage() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const updateWhatsAppVisibility = () => {
      const about = document.getElementById("about");
      setShowWhatsApp(Boolean(about && window.scrollY >= about.offsetTop - window.innerHeight * 0.45));
    };

    updateWhatsAppVisibility();
    window.addEventListener("scroll", updateWhatsAppVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateWhatsAppVisibility);
  }, []);

  return (
    <ParticleHero particleCount={18} className="subpage-particle-hero">
    <div id="about" className="main-subpage">
      {showWhatsApp && (
        <a
          className="whatsapp-float"
          href="https://chat.whatsapp.com/FsOx0xuBo1Q5Ww0u9N9czq"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join the DEI x VLABS WhatsApp community"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.2 1.7 6L.2 24l6.4-1.7a11.8 11.8 0 0 0 5.5 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.5-8.4Zm-8.4 18.1h-.1c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 0 1-1.5-5.2C2.4 6.4 6.7 2 12.1 2c2.6 0 5.1 1 6.9 2.9a9.8 9.8 0 0 1 2.9 7c0 5.3-4.4 9.7-9.8 9.7Zm5.3-7.3c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.7 1-.8 1.2-.2.2-.3.2-.6.1-1.6-.8-2.7-1.4-3.8-3.2-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6-.1-.2-.7-1.6-1-2.2-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.3.2-.6.2-1.2.1-1.3Z" />
          </svg>
          <span>Join community</span>
        </a>
      )}
      <section className="subpage-intro">
        <div className="subpage-grid" aria-hidden="true" />
        <div className="subpage-intro-copy">
           <h2><span>READY FOR</span><strong>VLABS HACKATHON 2026?</strong></h2>
          <div className="subpage-about-grid">
            <article className="subpage-about-card">
              <p className="subpage-eyebrow">ABOUT DAYALBAGH EDUCATIONAL INSTITUTE</p>
               <p className="typewriter-reveal">Dayalbagh Educational Institute (Deemed to be University) is a pioneer in value-based education and innovation. Renowned for its unique work-study ethos and excellence in engineering and science, Dayalbagh Educational Institute stands as a beacon of holistic education in India.</p>
               <p className="typewriter-reveal">Hosting this hackathon, Dayalbagh Educational Institute continues its legacy of integrating technology with societal needs, fostering a culture of &quot;Excellence with Relevance.&quot;</p>
              <LiquidButton
                size="default"
                type="button"
                onClick={() => window.open("https://www.dei.ac.in/dei/", "_blank", "noopener,noreferrer")}
              >
                KNOW MORE ↗
              </LiquidButton>
            </article>
            <article className="subpage-about-card">
              <p className="subpage-eyebrow">ABOUT VIRTUAL LABS</p>
               <p className="typewriter-reveal">An initiative of the Ministry of Education (MoE), Govt. of India, under the National Mission on Education through ICT.</p>
               <p className="typewriter-reveal">Virtual Labs provide remote-access to Labs in various disciplines of Science and Engineering. This hackathon aims to expand this repository with student-driven, next-gen simulations.</p>
              <LiquidButton
                size="default"
                type="button"
                onClick={() => window.open("https://www.vlab.co.in/participating-institute-dayalbagh", "_blank", "noopener,noreferrer")}
              >
                VISIT VIRTUAL LABS ↗
              </LiquidButton>
            </article>
          </div>
        </div>
      </section>

      <section id="rules" className="rules-criteria" aria-label="Rules and judging criteria">
        <div className="rules-panel">
          <p className="subpage-eyebrow">EVENT FRAMEWORK</p>
           <h2 className="typewriter-reveal">RULES &amp; REGULATIONS</h2>
          <div className="rules-list">
            {rules.map((rule, index) => (
              <article className="rule-item" key={rule.title}>
                <span className="rule-number">0{index + 1}</span>
                <div>
                   <h3 className="typewriter-reveal">{rule.title}</h3>
                   <p className="typewriter-reveal">{rule.text}</p>
                  {rule.title === "Submission Requirement" && (
                    <LiquidButton
                      size="default"
                      type="button"
                      onClick={() => window.open("https://docs.google.com/presentation/d/1xsGpDGqBC6Et0Otsl-jSV17u2p3wk4jfxN6bo7CoYSA/edit?slide=id.g3ba9b95d69f_0_0#slide=id.g3ba9b95d69f_0_0", "_blank", "noopener,noreferrer")}
                    >
                      Download PPT Template ↗
                    </LiquidButton>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="criteria-panel">
          <p className="subpage-eyebrow">EVALUATION MATRIX</p>
          <h2>JUDGING CRITERIA</h2>
          <div className="criteria-list">
            {judgingCriteria.map((criterion) => (
              <div className="criterion" key={criterion.title}>
                <div className="criterion-label">
                  <span>{criterion.title}</span>
                  <strong>{criterion.percentage}%</strong>
                </div>
                <div className="criterion-track" aria-hidden="true">
                  <span style={{ width: `${criterion.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="roadmap-section" aria-labelledby="roadmap-title">
        <div className="roadmap-heading">
          <p className="subpage-eyebrow typewriter-reveal">YOUR EVENT JOURNEY</p>
          <h2 id="roadmap-title" className="typewriter-reveal">EVENT ROADMAP</h2>
        </div>
        <div className="roadmap-3d">
          {roadmap.map((step, index) => (
            <article className="roadmap-step-3d" key={step.title}>
              <span className="roadmap-date typewriter-reveal">{step.date}</span>
              <div className="roadmap-node" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
              <h3 className="typewriter-reveal">{step.title}</h3>
              <p className="typewriter-reveal">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="modules" className="module-deck">
        <div className="module-heading">
          <div>
            <p className="subpage-eyebrow">&nbsp;</p>
            <h2>THEMES</h2>
          </div>
          <p>Deploy your strongest ideas into an evolving ecosystem of science, technology, and student-led innovation.</p>
        </div>
        <ThemeWarpCarousel cards={modules.filter((module) => module.title)} />
      </section>
      <section className="rewards-section" aria-labelledby="rewards-title">
        <div className="rewards-heading">
          <p className="subpage-eyebrow">RECOGNITION // OPPORTUNITY</p>
          <h2 id="rewards-title">REWARDS</h2>
        </div>
        <div className="rewards-grid">
          <article className="reward-card reward-feature">
            <p className="reward-label">TOP 3 TEAMS</p>
            <h3>Prestigious Internship Opportunity in VLabs</h3>
            <p className="reward-muted">Stipend Per Month</p>
            <strong>₹15,000</strong>
            <p className="reward-muted">at</p>
            <p><b>Vlabs (MoE, India)</b><br />For Each Student in the Top 3 Teams</p>
          </article>
          <article className="reward-card">
            <p className="reward-label">CERTIFICATES</p>
            <h3>For all Shortlisted Teams</h3>
            <p className="reward-muted">Elite Finalists</p>
            <div className="reward-stat">10 Teams Shortlisted for Final Round</div>
          </article>
          <article className="reward-card">
            <p className="reward-label">NETWORKING</p>
            <h3>Connect with like minded people.</h3>
            <div className="reward-network-lines" aria-hidden="true"><span /><span /><span /></div>
          </article>
        </div>
      </section>
      <section id="faq" className="faq-section" aria-labelledby="faq-title">
        <div className="faq-heading">
          <p className="subpage-eyebrow">QUESTIONS // ANSWERS</p>
          <h2 id="faq-title">FAQ</h2>
        </div>
        <div className="faq-list">
          {faq.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="hall-of-fame" aria-labelledby="hall-of-fame-title">
        <p className="subpage-eyebrow">ARCHIVE // COMING SOON</p>
        <h2 id="hall-of-fame-title">HALL OF FAME</h2>
      </section>
    </div>
    </ParticleHero>
  );
}
