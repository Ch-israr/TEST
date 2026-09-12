// ============================================================
// Glink Int — Site configuration
// Edit company details, prices, phone numbers and contact
// details here. Every section of the website reads from
// this single file, so nothing needs to be hunted down
// elsewhere in the codebase.
// ============================================================

export const site = {
  name: "Glink Int",
  tagline: "Self Storage & Moving Services",
  location: "United Arab Emirates",
  description:
    "Flexible, secure and affordable self-storage solutions in the UAE, with professional moving services when you need them.",

  // ---- Contact details (placeholders — replace with real details) ----
  phone: "+971 52 923 1913",
  phoneHref: "+971529231913", // e.g. "+971501234567" — used for tel: links. Leave "" to disable the call button.
  whatsapp: "+971529231913", // e.g. "971501234567" — international format, no "+". Leave "" to hide WhatsApp buttons.
  email: "info@glinkint.com",
  address: "Glink Int, United Arab Emirates", // e.g. "Warehouse 12, Al Quoz Industrial Area 3, Dubai"

  // Google Maps embed. Replace src with your Google Maps embed URL
  // (Google Maps → Share → Embed a map → copy the src attribute).
  // Leave src as "" to keep the styled placeholder box.
  mapsEmbedSrc: "",
  mapsLink: "", // e.g. "https://maps.google.com/?q=..." — used for the "Open in Google Maps" link.

  // Storage pricing — displayed prices, easy to edit.
  // Prices are shown as "from AED X + VAT" and do not represent a binding quote.
  pricing: {
    pricePerSqFt: 9, // headline rate: "Storage from AED 9 + VAT / sq. ft."
    currency: "AED",
    vatNote: "+ VAT",
    plans: [
      {
        size: "50 sq. ft.",
        price: 450,
        unit: "per month",
        description:
          "Ideal for a few boxes, personal items and small inventory.",
        features: [
          "Personal belongings & boxes",
          "Short-term or long-term",
          "Secure warehouse storage",
        ],
        popular: false,
      },
      {
        size: "100 sq. ft.",
        price: 850,
        unit: "per month",
        description:
          "Fits the contents of a one-bedroom apartment or business stock.",
        features: [
          "Furniture & appliances",
          "Business inventory",
          "Easy access during working hours",
        ],
        popular: true,
      },
      {
        size: "Larger spaces",
        price: null,
        unit: "on request",
        description:
          "Flexible areas from 150 sq. ft. upwards, arranged to your exact requirements.",
        features: [
          "Commercial inventory",
          "Equipment & furniture",
          "Custom space arrangements",
        ],
        popular: false,
      },
    ],
  },
} as const

// ---------- Derived helpers (no need to edit below) ----------

const rawPhone = site.phoneHref as string
const rawWhatsApp = site.whatsapp as string

export const telHref = rawPhone
  ? `tel:${rawPhone.replace(/[^+\d]/g, "")}`
  : ""

export const whatsappHref = rawWhatsApp
  ? `https://wa.me/${rawWhatsApp.replace(/[^\d]/g, "")}?text=${encodeURIComponent(
      "Hello Glink Int, I would like to ask about your storage and moving services.",
    )}`
  : ""

export const movingQuoteHref = whatsappHref
  ? whatsappHref.replace(
      "Hello%20Glink%20Int%2C%20I%20would%20like%20to%20ask%20about%20your%20storage%20and%20moving%20services.",
      "Hello%20Glink%20Int%2C%20I%20would%20like%20a%20moving%20quote.",
    )
  : "#contact"

export const seo = {
  title:
    "Glink Int | Self Storage UAE & Moving Services – Secure Storage Units in Dubai",
  description:
    "Secure self-storage in the UAE. Flexible storage units, business & warehouse storage and professional moving services in Dubai. Storage from AED 9 + VAT / sq. ft. Get a free quote today.",
  keywords:
    "self storage UAE, storage units UAE, self storage Dubai, storage space Dubai, business storage UAE, warehouse storage UAE, furniture storage UAE, moving services UAE, office storage UAE",
} as const

export type Plan = (typeof site.pricing.plans)[number]
