import { site, type Plan } from '@/config/site'
import { LinkButton } from '@/components/Buttons'
import { Reveal } from '@/components/Reveal'

export function Pricing() {
  const { plans, pricePerSqFt, currency, vatNote } = site.pricing

  return (
    <section id="pricing" className="bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="section-eyebrow">Pricing</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
              Simple, Transparent Pricing
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Storage from{' '}
              <span className="font-bold text-navy-950">
                {currency} {pricePerSqFt} {vatNote}
              </span>{' '}
              / sq. ft. — pay only for the space you need, for exactly as long as you need it.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.size} delay={i * 110}>
              <PlanCard plan={plan} currency={currency} vatNote={vatNote} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="mt-10">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-navy-200 bg-white px-6 py-6 text-center sm:flex-row sm:text-left">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-accent">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v8M8.5 10.5h7M8.5 13.5h7" />
              </svg>
            </span>
            <p className="flex-1 text-sm leading-relaxed text-ink-soft">
              <span className="font-semibold text-navy-950">Need more space?</span>{' '}
              Larger storage areas can be arranged according to your requirements — just tell us
              what you need to store and for how long.
            </p>
            <LinkButton href="/#contact" variant="outline" size="md" className="shrink-0">
              Ask About Larger Spaces
            </LinkButton>
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-10 text-center">
          <LinkButton href="/#contact" variant="accent" size="lg">
            Request a Storage Quote
          </LinkButton>
          <p className="mt-4 text-xs font-medium text-ink-soft/80">
            Indicative rates shown; final pricing depends on unit size, duration and current
            availability. {vatNote} applies.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function PlanCard({
  plan,
  currency,
  vatNote,
}: {
  plan: Plan
  currency: string
  vatNote: string
}) {
  const popular = plan.popular

  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-7 sm:p-8 ${
        popular
          ? 'border-navy-950 bg-navy-950 text-white shadow-[0_24px_50px_-24px_rgba(10,21,38,0.55)]'
          : 'border-navy-200 bg-white'
      }`}
    >
      {popular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3.5 py-1 text-[11px] font-extrabold tracking-wide text-navy-950 uppercase">
          Most Popular
        </span>
      )}

      <p className={`text-sm font-bold tracking-wide ${popular ? 'text-accent' : 'text-navy-600'}`}>
        {plan.size}
      </p>

      <div className="mt-3 flex items-baseline gap-1.5">
        {plan.price != null ? (
          <>
            <span className={`text-3xl font-extrabold tracking-tight ${popular ? 'text-white' : 'text-navy-950'}`}>
              {currency} {plan.price}
            </span>
            <span className={`text-sm font-medium ${popular ? 'text-navy-100/70' : 'text-ink-soft'}`}>
              {vatNote} {plan.unit}
            </span>
          </>
        ) : (
          <span className={`text-2xl font-extrabold tracking-tight ${popular ? 'text-white' : 'text-navy-950'}`}>
            {plan.unit}
          </span>
        )}
      </div>

      <p className={`mt-3 text-sm leading-relaxed ${popular ? 'text-navy-100/75' : 'text-ink-soft'}`}>
        {plan.description}
      </p>

      <ul className={`mt-6 space-y-3 border-t pt-6 ${popular ? 'border-white/10' : 'border-navy-100'}`}>
        {plan.features.map((f) => (
          <li key={f} className={`flex items-start gap-2.5 text-sm ${popular ? 'text-navy-100/90' : 'text-navy-900'}`}>
            <CheckIcon dark={popular} />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <LinkButton
          href="/#contact"
          variant={popular ? 'accent' : 'outline'}
          size="md"
          className="w-full"
        >
          Get This Space
        </LinkButton>
      </div>
    </div>
  )
}

function CheckIcon({ dark }: { dark?: boolean }) {
  return (
    <span
      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
        dark ? 'bg-accent/20 text-accent' : 'bg-navy-100 text-navy-700'
      }`}
    >
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  )
}