import { site, telHref, whatsappHref } from '@/config/site'
import { Logo } from '@/components/Logo'
import { WhatsAppIcon } from '@/components/Header'

function LogoFooter() {
  return <Logo dark />
}

const nav = [
  { label: 'Home', href: '/#home' },
  { label: 'Storage', href: '/#storage' },
  { label: 'Moving Services', href: '/#moving' },
  { label: 'About Us', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

const legal = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-navy-100/75">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
          {/* Brand */}
          <div>
            <div className="[&_span]:!text-white [&_.text-navy-950]:!text-white [&_.text-navy-500]:!text-white/55">
              <LogoFooter />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              {site.name} — {site.tagline} in the {site.location}. Secure storage for homes and
              businesses, plus professional moving services.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {whatsappHref && (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-wa/15 px-3.5 py-2 text-[13px] font-semibold text-wa transition-colors hover:bg-wa hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </a>
              )}
              {telHref && (
                <a
                  href={telHref}
                  className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3.5 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                  Phone
                </a>
              )}
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3.5 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
                Email
              </a>
              <span className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3.5 py-2 text-[13px] font-semibold text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {site.location}
              </span>
            </div>
          </div>

          {/* Company links */}
          <nav aria-label="Footer navigation">
            <p className="text-[11px] font-bold tracking-[0.16em] text-white/40 uppercase">
              Company
            </p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal">
            <p className="text-[11px] font-bold tracking-[0.16em] text-white/40 uppercase">
              Legal
            </p>
            <ul className="mt-4 space-y-2.5">
              {legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[11px] font-bold tracking-[0.16em] text-white/40 uppercase">
              Storage From
            </p>
            <p className="mt-2 text-sm font-semibold text-white">
              AED {site.pricing.pricePerSqFt} {site.pricing.vatNote} / sq. ft.
            </p>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-[13px]">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-[13px] text-white/45">
            Self Storage &amp; Moving Services · {site.location}
          </p>
        </div>
      </div>
    </footer>
  )
}