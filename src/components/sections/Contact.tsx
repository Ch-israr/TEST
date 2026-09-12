import { useState } from 'react'

import { site, telHref, whatsappHref } from '@/config/site'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/Reveal'
import { WhatsAppIcon } from '@/components/Header'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')

    try {
      const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>)
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })

      if (!response.ok) throw new Error('Submission failed')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const inputBase =
    'w-full rounded-lg border border-navy-200 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-ink-soft/60 transition-colors focus:border-navy-600 focus:outline-none focus:ring-2 focus:ring-navy-600/20'

  return (
    <section id="contact" className="relative overflow-hidden bg-navy-950 py-20 lg:py-28">
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: info */}
          <div>
            <Reveal>
              <p className="section-eyebrow text-accent">Contact</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Get Your Storage Quote Today
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 max-w-lg text-[15.5px] leading-relaxed text-navy-100/75">
                Tell us what you need to store or move and we will get back to you with a clear,
                no-obligation quote.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <ul className="mt-9 space-y-4">
                <ContactRow label="Phone">
                  {telHref ? (
                    <a href={telHref} className="text-sm font-semibold text-white transition-colors hover:text-accent">
                      {site.phone}
                    </a>
                  ) : (
                    <span className="text-sm font-semibold text-white">{site.phone}</span>
                  )}
                </ContactRow>
                <ContactRow label="WhatsApp">
                  {whatsappHref ? (
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white transition-colors hover:text-accent">
                      {site.whatsapp as string}
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-navy-100/70">
                      Add your WhatsApp number in src/config/site.ts
                    </span>
                  )}
                </ContactRow>
                <ContactRow label="Email">
                  <a href={`mailto:${site.email}`} className="text-sm font-semibold text-white transition-colors hover:text-accent">
                    {site.email}
                  </a>
                </ContactRow>
                <ContactRow label="Location">
                  <span className="text-sm font-semibold text-white">{site.address}</span>
                </ContactRow>
              </ul>
            </Reveal>

            {/* Google Maps placeholder */}
            <Reveal delay={220}>
              <div className="mt-9 overflow-hidden rounded-2xl border border-white/15">
                {site.mapsEmbedSrc ? (
                  <iframe
                    src={site.mapsEmbedSrc}
                    title="Glink Int location on Google Maps"
                    className="h-[260px] w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                ) : (
                  <a
                    href={site.mapsLink || undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-[220px] flex-col items-center justify-center gap-3 bg-navy-900/70 text-center transition-colors ${site.mapsLink ? 'hover:bg-navy-900' : 'cursor-default'}`}
                  >
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-accent" aria-hidden="true">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <p className="text-sm font-semibold text-white">Google Maps location</p>
                    <p className="max-w-[240px] text-xs text-navy-100/60">
                      Add your Google Maps embed link in src/config/site.ts to display the map here.
                    </p>
                  </a>
                )}
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={140}>
            <div className="rounded-2xl bg-white p-7 shadow-2xl sm:p-9">
              <h3 className="text-xl font-extrabold tracking-tight text-navy-950">
                Request a Free Quote
              </h3>
              <p className="mt-1.5 text-sm text-ink-soft">
                Fill in the form and our team will contact you shortly.
              </p>

              <form
                name="glink-enquiry"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="mt-7 grid gap-4 sm:grid-cols-2"
              >
                <input type="hidden" name="form-name" value="glink-enquiry" />
                <p className="hidden">
                  <label>
                    Do not fill this out: <input name="bot-field" />
                  </label>
                </p>

                <Field label="Name" htmlFor="cf-name">
                  <input id="cf-name" name="name" type="text" required autoComplete="name" placeholder="Your full name" className={inputBase} />
                </Field>

                <Field label="Phone Number" htmlFor="cf-phone">
                  <input id="cf-phone" name="phone" type="tel" required autoComplete="tel" placeholder="+971 5X XXX XXXX" className={inputBase} />
                </Field>

                <Field label="Email" htmlFor="cf-email" className="sm:col-span-2">
                  <input id="cf-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={inputBase} />
                </Field>

                <Field label="Required Storage Size" htmlFor="cf-size">
                  <select id="cf-size" name="storage_size" required defaultValue="" className={cn(inputBase, 'appearance-none bg-[url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2346536b%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22/%3E%3C/svg%3E")] bg-[length:16px] bg-[position:right_0.9rem_center] bg-no-repeat pr-10')}>
                    <option value="" disabled>
                      Select a size…
                    </option>
                    <option value="Small (up to 50 sq. ft.)">Up to 50 sq. ft.</option>
                    <option value="Medium (50-100 sq. ft.)">50 – 100 sq. ft.</option>
                    <option value="Large (100+ sq. ft.)">100+ sq. ft.</option>
                    <option value="Not sure yet">Not sure yet — advise me</option>
                  </select>
                </Field>

                <Field label="Service Required" htmlFor="cf-service">
                  <select id="cf-service" name="service" required defaultValue="" className={cn(inputBase, 'appearance-none bg-[url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2346536b%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22/%3E%3C/svg%3E")] bg-[length:16px] bg-[position:right_0.9rem_center] bg-no-repeat pr-10')}>
                    <option value="" disabled>
                      Select a service…
                    </option>
                    <option value="Self Storage">Self Storage</option>
                    <option value="Business Storage">Business Storage</option>
                    <option value="Home Moving">Home Moving</option>
                    <option value="Office / Commercial Moving">Office / Commercial Moving</option>
                    <option value="Packing & Moving + Storage">Packing &amp; Moving + Storage</option>
                    <option value="Other">Other</option>
                  </select>
                </Field>

                <Field label="Message" htmlFor="cf-message" className="sm:col-span-2">
                  <textarea
                    id="cf-message"
                    name="message"
                    rows={4}
                    placeholder="Tell us briefly what you need to store or move, and for how long…"
                    className={cn(inputBase, 'resize-y')}
                  />
                </Field>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-[15px] font-bold tracking-tight text-navy-950 transition-colors duration-200 hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === 'sending' ? (
                      <>
                        <Spinner />
                        Sending…
                      </>
                    ) : (
                      'Submit Enquiry'
                    )}
                  </button>

                  {whatsappHref && (
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-wa px-7 py-3.5 text-[15px] font-bold tracking-tight text-white transition-colors duration-200 hover:bg-wa-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wa-dark"
                    >
                      <WhatsAppIcon className="h-[18px] w-[18px]" />
                      WhatsApp Us
                    </a>
                  )}

                  {status === 'success' && (
                    <p role="status" className="mt-4 rounded-lg border border-wa/40 bg-wa/10 px-4 py-3 text-sm font-semibold text-wa-dark">
                      Thank you — your enquiry has been received. Our team will contact you shortly.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="mt-4 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                      Something went wrong sending your enquiry. Please try again, or reach us
                      directly on WhatsApp.
                    </p>
                  )}
                  <p className="mt-4 text-center text-xs text-ink-soft/80">
                    We use your details only to respond to your enquiry.
                  </p>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent">
        <RowIcon label={label} />
      </span>
      <div className="pt-1">
        <p className="text-[11px] font-bold tracking-[0.14em] text-navy-100/50 uppercase">{label}</p>
        <div className="mt-0.5">{children}</div>
      </div>
    </li>
  )
}

function RowIcon({ label }: { label: string }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  if (label === 'Phone')
    return (
      <svg {...common}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
      </svg>
    )
  if (label === 'WhatsApp')
    return <WhatsAppIcon className="h-[18px] w-[18px]" />
  if (label === 'Email')
    return (
      <svg {...common}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    )
  return (
    <svg {...common}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function Field({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-[13px] font-bold text-navy-950">
        {label}
      </label>
      {children}
    </div>
  )
}

function Spinner() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="animate-spin">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" opacity="0.25" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}