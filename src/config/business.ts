import type { BusinessConfig } from "@/types/business";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  CLIENT CONFIGURATION — the only file you normally edit for a new client.
 *  Brand assets live in /public/brand/. See docs/configuration.md.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const businessConfig: BusinessConfig = {
  name: "The Healing Touch",
  slug: "the-healing-touch",

  // Any string works: "salon", "gym", "dental-clinic", "car-service", ...
  category: "dental-and-ent-clinic",

  logo: "/brand/logo.png",

  // Replace with the client's real Google review link (see README → Google Review URL).
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJ__dxHwALGToRDAqEpWNspUA",

  primaryColor: "#1A4FB5",
  secondaryColor: "#EEF3FC",

  positiveCategories: [
    "Dr. Jayashree Nayak",
    "Dr. Sidharth Pradhan",
    "Treatment",
    "Explanation",
    "Staff",
    "Comfort",
    "Cleanliness",
    "Pricing",
  ],

  negativeCategories: [
    "Waiting Time",
    "Appointment",
    "Treatment",
    "Explanation",
    "Staff",
    "Comfort",
    "Cleanliness",
    "Billing",
  ],

  tagline: "Dental and ENT, Head & Neck Clinic",

  timezone: "Asia/Kolkata",

  offerGoogleReviewAfterPrivateFeedback: true,
};
