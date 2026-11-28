import { ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";
import { LiquidButton } from "./liquid-glass-button";

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: CSSProperties;
}

/**
 * Word-by-word pull-up reveal, done in CSS (`.pull-up-word` in globals.css)
 * so the hero needs no animation library. Real spaces sit between the words,
 * so the heading reads "DEI X VLABS" to search engines and screen readers.
 */
export const WordsPullUp = ({ text, className = "", showAsterisk = false, style }: WordsPullUpProps) => {
  const words = text.split(" ");

  return (
    <span className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <span key={`${word}-${i}`} className="contents">
            <span className="pull-up-word relative inline-block" style={{ animationDelay: `${i * 0.08}s` }}>
              {word}
              {showAsterisk && isLast && (
                <span className="absolute -right-[0.3em] top-[0.65em] text-[0.31em]" aria-hidden="true">*</span>
              )}
            </span>
            {!isLast && <span className="inline-block w-[0.25em]"> </span>}
          </span>
        );
      })}
    </span>
  );
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Rules & Regulations", href: "#rules" },
  { label: "Themes", href: "#modules" },
  { label: "Inquiries", href: "#contact" },
];

const PrismaHero = () => {
  return (
    <section className="prisma-hero h-screen w-full" aria-labelledby="prisma-title">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        <div className="hero-logo-box">
          <img src="/dei-logo.jpeg" alt="Dayalbagh Educational Institute logo" width="225" height="225" decoding="async" />
          <span className="hero-logo-x" aria-hidden="true">×</span>
          <img src="/vlabs-logo.png" alt="Virtual Labs, an MoE Govt of India initiative logo" width="287" height="176" decoding="async" />
        </div>

        <nav className="absolute left-1/2 top-0 z-20 -translate-x-1/2" aria-label="Hero navigation">
          <div className="flex items-center gap-3 rounded-b-2xl bg-black px-4 py-2 sm:gap-6 md:gap-12 md:rounded-b-3xl md:px-8 lg:gap-14">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[10px] text-[#e1e0cc]/80 transition-colors hover:text-[#e1e0cc] sm:text-xs md:text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 px-4 pb-2 sm:px-6 md:px-10">
          <div className="grid grid-cols-12 items-end gap-4">
            <div className="col-span-12 lg:col-span-8">
              <h1
                id="prisma-title"
                className="prisma-title text-[22vw] font-medium leading-[0.85] tracking-[-0.07em] text-[#e1e0cc] sm:text-[20vw] md:text-[19vw] lg:text-[17vw] xl:text-[16vw] 2xl:text-[17vw]"
              >
                <WordsPullUp text="DEI X VLABS" showAsterisk />
              </h1>
            </div>
            <div className="col-span-12 flex flex-col gap-5 pb-6 lg:col-span-4 lg:pb-10">
              <p
                className="pull-up-block text-xs leading-[1.2] text-[#e1e0cc]/70 sm:text-sm md:text-base"
                style={{ animationDelay: "0.5s" }}
              >
                DEI x VLABS is a national student hackathon connecting creative problem-solving, engineering, and next-generation virtual laboratories.
              </p>
              <div className="pull-up-block" style={{ animationDelay: "0.7s" }}>
                <LiquidButton
                  size="xl"
                  type="button"
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Explore the event
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </LiquidButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PrismaHero };
