import { useState } from 'react'

import { Reveal } from '@/components/Reveal'

const faqs = [
  {
    q: 'What storage sizes are available?',
    a: 'We offer flexible storage sizes, from small units for a few boxes and personal belongings up to large spaces for furniture, equipment and commercial inventory. Tell us what you need to store and we will recommend the right size.',
  },
  {
    q: 'How much does storage cost?',
    a: 'Storage starts from AED 9 + VAT per sq. ft. per month. The final price depends on the unit size, how long you need it and current availability. Request a quote and we will confirm an exact price with no hidden costs.',
  },
  {
    q: 'Do you offer short-term storage?',
    a: 'Yes. You can store with us for as little as a few weeks — useful during a move, renovation or between travels.',
  },
  {
    q: 'Do you offer long-term storage?',
    a: 'Yes. Many customers store with us for months or longer. Long-term arrangements can be agreed when you book, and you keep access to your items while they are stored.',
  },
  {
    q: 'Can businesses store inventory?',
    a: 'Absolutely. We regularly store stock for retailers, e-commerce sellers, traders and companies — including inventory, office equipment, documents and seasonal stock.',
  },
  {
    q: 'Do you provide moving services?',
    a: 'Yes. Alongside storage we provide professional moving services: home, office and commercial moving, packing and unpacking, loading and unloading, and furniture transportation.',
  },
  {
    q: 'Is VAT included in the price?',
    a: 'Our listed rates are shown plus VAT (e.g. storage from AED 9 + VAT per sq. ft.). VAT is added at the standard UAE rate and always clearly stated in your quote.',
  },
  {
    q: 'How can I reserve a storage unit?',
    a: 'Simply send an enquiry through the contact form, message us on WhatsApp or call us. We confirm availability, recommend the right size and reserve your space.',
  },
  {
    q: 'Can I increase my storage space later?',
    a: 'Yes. If you need more or less space, we can adjust your storage arrangement. Just contact our team and we will arrange a suitable size.',
  },
  {
    q: 'How can I contact Glink Int?',
    a: 'You can reach us through the enquiry form on this page, on WhatsApp, by phone or by email. Our full contact details are listed in the Contact section below.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="section-eyebrow">FAQ</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                Everything you need to know about storing with Glink Int. Cannot find your
                question? Message us on WhatsApp — we usually reply within minutes on working
                days.
              </p>
            </Reveal>
          </div>

          <Reveal delay={140} className="divide-y divide-navy-200/60 border-y border-navy-200/60">
            {faqs.map((f, i) => {
              const isOpen = open === i
              return (
                <div key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-[15px] font-bold text-navy-950">{f.q}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? 'rotate-45 border-navy-950 bg-navy-950 text-accent'
                          : 'border-navy-200 text-navy-700'
                      }`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                    role="region"
                    hidden={!isOpen}
                  >
                    <div className="overflow-hidden">
                      <p className="pr-10 pb-5 text-sm leading-relaxed text-ink-soft">{f.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </Reveal>
        </div>
      </div>
    </section>
  )
}