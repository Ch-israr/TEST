import { whatsappHref } from '@/config/site'
import { LinkButton } from '@/components/Buttons'
import { Reveal } from '@/components/Reveal'

const IMG =
  'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1000&q=70'

const points = [
  'Inventory storage for retailers and traders',
  'E-commerce stock, packed and picked when you need it',
  'Office equipment and furniture between premises',
  'Documents and business items stored securely',
  'Seasonal inventory kept out of your workspace',
  'Flexible storage space that grows with your business',
]

export function BusinessStorage() {
  return (
    <section id="business" className="relative overflow-hidden bg-navy-950 py-20 lg:py-28">
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <p className="section-eyebrow text-accent">For Businesses</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Flexible Storage for Growing Businesses
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-navy-100/75">
                Retailers, e-commerce sellers, traders and companies across the UAE use Glink Int
                to keep stock and equipment close by — without paying for bigger offices or
                warehouses.
              </p>
            </Reveal>

            <ul className="mt-8 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
              {points.map((p, i) => (
                <Reveal as="li" key={p} delay={140 + (i % 3) * 60} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-navy-100/90">{p}</span>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap gap-3">
                <LinkButton
                  href={whatsappHref || '/#contact'}
                  variant="whatsapp"
                  size="lg"
                  external={Boolean(whatsappHref)}
                >
                  Talk to Our Storage Team
                </LinkButton>
                <LinkButton href="/#contact" variant="outlineLight" size="lg">
                  Send an Enquiry
                </LinkButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={180} className="relative">
            <div className="absolute -top-4 -right-4 h-full w-full rounded-2xl border border-accent/25" aria-hidden="true" />
            <img
              src={IMG}
              alt="Business inventory and shelved stock stored securely at Glink Int warehouse storage in the UAE"
              className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}