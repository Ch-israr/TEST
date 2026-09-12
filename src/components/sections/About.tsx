import { Reveal } from '@/components/Reveal'

export function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad06dd91cecb?auto=format&fit=crop&w=1000&q=70"
              alt="Glink Int team member organising stored household items in a UAE storage facility"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
              loading="lazy"
            />
            <div className="absolute right-5 bottom-5 rounded-xl bg-navy-950 px-5 py-4 shadow-xl">
              <p className="text-sm font-bold text-white">Self Storage &amp; Moving</p>
              <p className="mt-0.5 text-xs font-medium text-navy-100/75">United Arab Emirates</p>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="section-eyebrow">About Us</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
                About Glink Int
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-5 text-[15.5px] leading-relaxed text-ink-soft">
                Glink Int provides reliable self-storage and moving solutions in the UAE for both
                individuals and businesses. Whether you are clearing space at home, storing stock
                for your business or moving between properties, we offer secure storage space and
                a professional moving team to get your items where they need to be.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-4 text-[15.5px] leading-relaxed text-ink-soft">
                We keep things simple: clear pricing, storage sized to what you actually need, and
                a team that is easy to reach on WhatsApp or by phone whenever you have a question.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  ['Secure warehouse', 'Storage inside an access-controlled facility'],
                  ['Flexible terms', 'Short-term and long-term options available'],
                  ['Storage + moving', 'One team for packing, moving and storage'],
                  ['Business friendly', 'Space for stock, documents and equipment'],
                ].map(([t, d]) => (
                  <div key={t} className="rounded-xl border border-navy-100 bg-mist p-4">
                    <p className="text-sm font-bold text-navy-950">{t}</p>
                    <p className="mt-1 text-[13px] leading-snug text-ink-soft">{d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}