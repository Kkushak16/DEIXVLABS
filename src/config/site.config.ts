// src/config/site.config.ts
// Single source of truth for site-wide configuration.
// Organisers: change values here, commit, and the site redeploys.

export const site = {
  name: "DEI x VLABS Hackathon '26",
  tagline: "Build the next generation of interactive virtual laboratories",
  // External Google Form link (No href="#" allowed in codebase)
  registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc-PLACEHOLDER/viewform",
  contactEmail: "hackathon@dei.ac.in",
  flags: {
    REGISTRATION_OPEN: true,
    PROBLEMS_RELEASED: false,
    RESULTS_PUBLISHED: false,
    SHOW_GALLERY: true,
  },
  dates: {
    registrationClose: "2026-12-15T23:59:59+05:30",
    round1Start: "2026-12-20T09:00:00+05:30",
    round1End: "2026-12-22T18:00:00+05:30",
    shortlistAnnounce: "2026-12-28T12:00:00+05:30",
    round2Start: "2027-01-10T09:00:00+05:30",
    resultsAnnounce: "2027-01-12T18:00:00+05:30",
  },
  social: {
    instagram: "https://instagram.com/dei_vlabs_hackathon",
    linkedin: "https://linkedin.com/company/virtual-labs-mhrd",
    youtube: "https://youtube.com/@VirtualLabsIITDelhi",
  },
  stats: {
    labs: "100+",
    experiments: "700+",
    participatingInstitutes: "15+",
  },
} as const;
