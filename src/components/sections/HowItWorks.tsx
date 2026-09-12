import { Reveal } from '@/components/Reveal'

const steps = [
  {
    num: '1',
    title: 'Contact Us',
    text: 'Call or message us on WhatsApp and tell us what you need to store or move.',
  },
  {
    num: '2',
    title: 'Choose Your Storage Size',
    text: 'We recommend the right space for your items and confirm a clear price.',
  },
  {
    num: '3',
    title: 'Move Your Items',
    text: 'Bring your items yourself or let our moving team handle packing and transport.',
  },
  {
    num: '4',
    title: 'Store Securely',
    text: 'Your belongings are stored safely — access them whenever you need, for as long as you need.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="section-eyebrow">How It Works</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
              Four Steps to Secure Storage
            </h2>
          </Reveal>
        </div>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.num} delay={i * 110} className="relative">
              {/* connector (desktop only) */}
              {i < steps.length - 1 && (
                <svg
                  className="absolute top-10 left-[calc(50%+44px)] hidden h-3 w-[calc(100%-88px)] text-navy-300 lg:block"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M0 6h92" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 6" strokeLinecap="round" />
                  <path d="M88 2l8 4-8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              )}

              <div className="flex h-full flex-col rounded-2xl border border-navy-200/70 bg-white p-6 sm:p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 text-lg font-extrabold text-accent">
                  {s.num}
                </span>
                <h3 className="mt-5 text-[15.5px] font-bold text-navy-950">{s.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}