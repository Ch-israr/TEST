import { LinkButton } from '@/components/Buttons'
import { Reveal } from '@/components/Reveal'

const IMG = 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=900&q=70'

const options = [
  {
    num: '01',
    title: 'Small Storage',
    text: 'Suitable for personal belongings, boxes and small inventory.',
    points: ['Personal items & boxes', 'Seasonal items', 'Student & family storage'],
  },
  {
    num: '02',
    title: 'Business Storage',
    text: 'Ideal for businesses, retailers, e-commerce sellers and stock inventory.',
    points: ['Retail & e-commerce stock', 'Office overflow', 'Document storage'],
  },
  {
    num: '03',
    title: 'Large Storage',
    text: 'Flexible space for larger quantities of furniture, equipment and commercial inventory.',
    points: ['Furniture & appliances', 'Commercial equipment', 'Bulk inventory'],
  },
]

const benefits = [
  'Flexible storage sizes',
  'Secure warehouse',
  'Easy access',
  'Short-term and long-term options',
  'Competitive pricing',
]

export function StorageSection() {
  return (
    <section id="storage" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="section-eyebrow">Storage Solutions</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
              Storage Solutions That Fit Your Needs
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 text-[15.5px] leading-relaxed text-ink-soft">
              Whether you need space for a few boxes, a growing online store or a full office
              move, Glink Int offers flexible storage sized to what you actually need — for as
              long as you need it.
            </p>
          </Reveal>
        </div>

        {/* Asymmetric cards: stacked rows with alternating alignment */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {options.map((o, i) => (
            <Reveal
              key={o.title}
              delay={i * 110}
              className={`group relative overflow-hidden rounded-2xl border border-navy-100 bg-mist p-7 transition-all duration-300 hover:-translate-y-1 hover:border-navy-300 hover:shadow-[0_20px_45px_-24px_rgba(10,21,38,0.4)] sm:p-8 ${
                i === 1 ? 'lg:-translate-y-3 lg:hover:-translate-y-4' : ''
              }`}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-6 -right-3 text-[92px] leading-none font-extrabold text-navy-900/[0.05] select-none"
              >
                {o.num}
              </span>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-950 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-navy-950">
                <Icon index={i} />
              </div>
              <h3 className="mt-6 text-lg font-bold text-navy-950">{o.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{o.text}</p>
              <ul className="mt-5 space-y-2 border-t border-navy-200/60 pt-4">
                {o.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-[13.5px] font-medium text-navy-900">
                    <CheckIcon />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        {/* Benefits + image row */}
        <Reveal delay={120} className="mt-6 grid overflow-hidden rounded-2xl border border-navy-100 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[260px]">
            <img
              src={IMG}
              alt="Staff member organising boxes inside a secure Glink Int storage facility in the UAE"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="bg-navy-950 p-8 sm:p-10">
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Everything included with your space
            </h3>
            <ul className="mt-6 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-sm font-medium text-navy-100/90">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <CheckIcon />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <LinkButton href="/#contact" variant="accent" size="lg">
                Find Your Storage Space
              </LinkButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Icon({ index }: { index: number }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  if (index === 0)
    return (
      <svg {...common}>
        <path d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5v-7Z" />
        <path d="M4 8.5 12 13l8-4.5M12 13v7" />
      </svg>
    )
  if (index === 1)
    return (
      <svg {...common}>
        <path d="M3 21V7l7-4 7 4" />
        <path d="M3 21h18M21 21V11h-8v10" />
        <path d="M7 9h1M7 13h1M7 17h1" />
      </svg>
    )
  return (
    <svg {...common}>
      <path d="M2 20V8h9v12M11 12h11v8M2 20h20" />
      <path d="M5.5 8V5h3v3M15 12v-2h3v2" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}