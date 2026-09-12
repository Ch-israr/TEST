import { site, whatsappHref } from '@/config/site'
import { LinkButton } from '@/components/Buttons'
import { Reveal } from '@/components/Reveal'
import { WhatsAppIcon } from '@/components/Header'

const HERO_IMG =
  'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1800&q=72'

const trust = [
  {
    title: 'Secure warehouse',
    text: 'Storage inside a monitored, access-controlled facility.',
    icon: (
      <path d="M12 3l7 3v5c0 4.6-3 8.4-7 10-4-1.6-7-5.4-7-10V6l7-3Z" />
    ),
  },
  {
    title: 'Flexible sizes',
    text: 'From a few boxes to full commercial inventory.',
    icon: <path d="M3 9l9-5 9 5-9 5-9-5Zm0 6l9 5 9-5" />,
  },
  {
    title: 'Fair, clear pricing',
    text: 'Storage from AED 9 + VAT per sq. ft. No hidden costs.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M9.5 9.5h4a1.75 1.75 0 1 1 0 3.5h-3a1.75 1.75 0 1 0 0 3.5h4.5" />
      </>
    ),
  },
  {
    title: 'Moving services',
    text: 'Professional packing, transport and relocation support.',
    icon: <path d="M1 5h13v11H1zM14 9h4l4 4v3h-8zM5.5 19a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Zm12 0a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z" />,
  },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-950">
      {/* faint blueprint grid */}
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 pt-14 pb-0 lg:px-8 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="pb-10 lg:pb-24">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-navy-100">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Self Storage &amp; Moving Services in the UAE
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-[2.5rem] leading-[1.06] font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
                Secure Storage Solutions for Your{' '}
                <span className="relative whitespace-nowrap text-accent">
                  Business
                  <svg
                    className="absolute -bottom-2 left-0 w-full text-accent/50"
                    viewBox="0 0 120 8"
                    fill="none"
                    aria-hidden="true"
                    preserveAspectRatio="none"
                  >
                    <path d="M2 6c30-4 60-4 116-2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </span>{' '}
                &amp; Home
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-navy-100/85 sm:text-lg">
                {site.description}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <LinkButton href="/#contact" variant="accent" size="lg">
                  Get a Free Quote
                  <ArrowIcon />
                </LinkButton>
                {whatsappHref && (
                  <LinkButton href={whatsappHref} variant="whatsapp" size="lg" external>
                    <WhatsAppIcon className="h-[18px] w-[18px]" />
                    WhatsApp Us
                  </LinkButton>
                )}
              </div>
            </Reveal>

            <Reveal delay={320}>
              <p className="mt-8 flex items-center gap-2 text-[13px] font-medium text-navy-100/70">
                <ClockIcon />
                Quick response on working days · Short &amp; long-term storage available
              </p>
            </Reveal>
          </div>

          {/* Hero image composition */}
          <Reveal delay={200} className="relative pb-14 lg:pb-24">
            <div className="relative">
              <div className="absolute -top-4 -right-4 h-full w-full rounded-2xl border border-accent/25" aria-hidden="true" />
              <img
                src={HERO_IMG}
                alt="Glink Int secure self-storage warehouse in the UAE with organised storage units"
                className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl shadow-navy-950/60"
                loading="eager"
                fetchPriority={"high" as const}
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 ring-inset" aria-hidden="true" />

              {/* floating stat card */}
              <div className="absolute -bottom-7 left-5 flex items-center gap-3.5 rounded-xl bg-white px-5 py-4 shadow-xl md:left-8">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-950 text-accent">
                  <BoxIcon />
                </span>
                <div>
                  <p className="text-[15px] font-bold text-navy-950">Storage from AED 9</p>
                  <p className="text-xs font-medium text-ink-soft">+ VAT / sq. ft. per month</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Trust bar */}
      <div className="relative border-t border-white/10 bg-navy-900/60">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-navy-800/70 px-5 sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:px-8">
          {trust.map((t, i) => (
            <Reveal
              key={t.title}
              delay={i * 90}
              className="flex items-start gap-3.5 border-b border-white/5 px-1 py-6 sm:px-6 lg:border-b-0"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-accent" aria-hidden="true">
                {t.icon}
              </svg>
              <div>
                <p className="text-sm font-bold text-white">{t.title}</p>
                <p className="mt-1 text-[13px] leading-snug text-navy-100/70">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

function BoxIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 8l-9-5-9 5v8l9 5 9-5V8Z" />
      <path d="M3 8l9 5 9-5M12 13v9" />
    </svg>
  )
}
