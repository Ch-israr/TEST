import { Reveal } from '@/components/Reveal'

const features = [
  {
    title: 'Secure & Reliable Storage',
    text: 'Your belongings are stored in a secure, access-controlled warehouse — handled with care and professionalism.',
  },
  {
    title: 'Flexible Storage Sizes',
    text: 'Store a few boxes or an entire office of furniture. Adjust your space as your needs change.',
  },
  {
    title: 'Competitive Pricing',
    text: 'Straightforward rates from AED 9 + VAT per sq. ft., with short-term and long-term options.',
  },
  {
    title: 'Professional Moving Services',
    text: 'Packing, loading, transport and re-delivery handled by an experienced moving team.',
  },
  {
    title: 'Easy Access',
    text: 'Simple, convenient access to your items during working hours whenever you need them back.',
  },
  {
    title: 'Business & Personal Storage',
    text: 'One partner for family storage, e-commerce stock, documents and commercial inventory.',
  },
]

const icons = [
  <path key="f1" d="M12 3l7 3v5c0 4.6-3 8.4-7 10-4-1.6-7-5.4-7-10V6l7-3Z" />,
  <path key="f2" d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5v-7Zm0 0 8 4.5 8-4.5M12 13v7" />,
  <path key="f3" d="M12 3v18M16.5 6.5h-6a2.25 2.25 0 0 0 0 4.5h3a2.25 2.25 0 0 1 0 4.5H7" />,
  <path key="f4" d="M1 6h13v10H1zM14 9h4l4 4v3h-8M5.5 19a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Zm12 0a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z" />,
  <path key="f5" d="M14 3v6h6M14 3H5v18h14V3h-5ZM8.5 12h7M8.5 16h7" />,
  <path key="f6" d="M3 21h18M5 21V8l7-5 7 5v13M9.5 21v-4h5v4M9.5 11h1m3 0h1M9.5 15h1m3 0h1" />,
]

export function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-navy-950 py-20 lg:py-28">
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <p className="section-eyebrow text-accent">Why Choose Glink Int</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Storage You Can Trust, Service You Can Rely On
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="max-w-md text-[15px] leading-relaxed text-navy-100/75">
              From your first enquiry to the day you move your items back out, we keep storage
              simple: clear pricing, secure space and people who answer when you call.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal
              as="li"
              key={f.title}
              delay={(i % 3) * 100}
              className="group bg-navy-950 p-7 transition-colors duration-300 hover:bg-navy-900 sm:p-8"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-navy-950">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {icons[i]}
                </svg>
              </span>
              <h3 className="mt-5 text-[15.5px] font-bold text-white">{f.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-navy-100/65">{f.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}