import { createFileRoute } from '@tanstack/react-router'
import { site } from '@/config/site'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/terms')({
  head: () => ({
    meta: [
      {
        title: 'Terms & Conditions | Glink Int – Self Storage & Moving Services UAE',
      },
      {
        name: 'description',
        content:
          'Terms and conditions for storage and moving services provided by Glink Int in the United Arab Emirates.',
      },
      { name: 'robots', content: 'noindex, follow' },
    ],
  }),
  component: Terms,
})

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-extrabold tracking-tight text-navy-950">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-soft">{children}</div>
    </div>
  )
}

function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
        <p className="text-[11px] font-bold tracking-[0.16em] text-navy-500 uppercase">Legal</p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-3 text-sm text-ink-soft">Last updated: September 2026</p>

        <div className="mt-8">
          <p className="text-sm leading-relaxed text-ink-soft">
            These terms apply to the storage and moving services provided by {site.name} in the{' '}
            {site.location}. By requesting a quote or using our services, you agree to the terms
            below.
          </p>
        </div>

        <Section title="Quotes and pricing">
          <p>
            Prices displayed on this website — including storage rates from AED{' '}
            {site.pricing.pricePerSqFt} {site.pricing.vatNote} per sq. ft. — are indicative and
            shown plus VAT where applicable. Final pricing depends on unit size, duration,
            services required and current availability, and is always confirmed in your written
            quote before any payment.
          </p>
        </Section>

        <Section title="Storage agreements">
          <p>
            Storage terms, access arrangements and payment schedules are agreed in your storage
            contract before goods are stored. Goods stored must be lawful and must not include
            hazardous, perishable, illegal or prohibited items.
          </p>
        </Section>

        <Section title="Moving services">
          <p>
            Moving services are provided subject to a separate service agreement covering scope,
            schedule, insurance and liability. Please inform us in advance of any fragile,
            high-value or unusually heavy items.
          </p>
        </Section>

        <Section title="Cancellations">
          <p>
            Cancellation and rescheduling terms are set out in your service agreement. We ask
            for reasonable notice so we can adjust schedules and crew allocations.
          </p>
        </Section>

        <Section title="Liability">
          <p>
            Our liability for stored or transported goods is limited as set out in your
            agreement. We recommend discussing insurance options with our team for high-value
            items.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            For questions about these terms, contact {site.name} at {site.email} or{' '}
            {site.phone}.
          </p>
        </Section>
      </main>
      <Footer />
    </div>
  )
}