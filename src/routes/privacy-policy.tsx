import { createFileRoute } from '@tanstack/react-router'
import { site } from '@/config/site'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/privacy-policy')({
  head: () => ({
    meta: [
      {
        title: 'Privacy Policy | Glink Int – Self Storage & Moving Services UAE',
      },
      {
        name: 'description',
        content:
          'How Glink Int collects, uses and protects the personal information you provide through our website enquiry form.',
      },
      { name: 'robots', content: 'noindex, follow' },
    ],
  }),
  component: PrivacyPolicy,
})

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-extrabold tracking-tight text-navy-950">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-soft">{children}</div>
    </div>
  )
}

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
        <p className="text-[11px] font-bold tracking-[0.16em] text-navy-500 uppercase">Legal</p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-ink-soft">Last updated: September 2026</p>

        <div className="mt-8">
          <p className="text-sm leading-relaxed text-ink-soft">
            {site.name} ("we", "us") is a self-storage and moving services company based in the{' '}
            {site.location}. This policy explains what information we collect through this
            website and how we use it.
          </p>
        </div>

        <Section title="Information we collect">
          <p>
            When you submit an enquiry through our website, we collect the details you provide:
            your name, phone number, email address, required storage size, the service you are
            interested in and any information you include in your message.
          </p>
        </Section>

        <Section title="How we use your information">
          <p>
            We use the information you submit solely to respond to your enquiry, prepare quotes
            and contact you about storage or moving services you have requested. We do not sell
            or share your personal information with third parties for marketing purposes.
          </p>
        </Section>

        <Section title="Form submissions">
          <p>
            Enquiries submitted through our website are processed securely and stored by our
            website hosting provider on our behalf so our team can review and respond to them.
          </p>
        </Section>

        <Section title="Retention">
          <p>
            We keep enquiry information only for as long as needed to handle your request and
            any follow-up business that results from it, after which it is deleted.
          </p>
        </Section>

        <Section title="Your rights">
          <p>
            You may ask us at any time to access, correct or delete the personal information we
            hold about you. Contact us at{' '}
            <a href={`mailto:${site.email}`} className="font-semibold text-navy-700 underline underline-offset-2">
              {site.email}
            </a>{' '}
            and we will respond promptly.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions about this policy? Contact {site.name} at {site.email} or {site.phone}.
          </p>
        </Section>
      </main>
      <Footer />
    </div>
  )
}