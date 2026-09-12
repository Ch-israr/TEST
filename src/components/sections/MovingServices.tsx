import { movingQuoteHref } from '@/config/site'
import { LinkButton } from '@/components/Buttons'
import { Reveal } from '@/components/Reveal'

const IMG =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=70'

const services = [
  { title: 'Home Moving', text: 'Apartments and villas moved carefully from door to door.' },
  { title: 'Office Moving', text: 'Desks, chairs, IT equipment and files relocated with minimal downtime.' },
  { title: 'Commercial Moving', text: 'Shop, warehouse and inventory relocations planned end to end.' },
  { title: 'Packing & Unpacking', text: 'Proper materials and careful packing so items arrive intact.' },
  { title: 'Loading & Unloading', text: 'Trained crews handle the heavy lifting safely and efficiently.' },
  { title: 'Furniture Transportation', text: 'Disassembly, protective wrapping and secure transport of furniture.' },
]

export function MovingServices() {
  return (
    <section id="moving" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left: copy + image */}
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="section-eyebrow">Moving Services</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
                Moving Made Simple
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 text-[15.5px] leading-relaxed text-ink-soft">
                Moving home, office or stock? Our moving team handles the packing, loading and
                transport — and if you need somewhere to keep things afterwards, your items can
                go straight into secure storage.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-8">
                <LinkButton href={movingQuoteHref} variant="accent" size="lg" external={movingQuoteHref.startsWith('http')}>
                  Request Moving Quote
                </LinkButton>
              </div>
            </Reveal>
            <Reveal delay={220} className="relative mt-10">
              <div className="absolute -top-4 -left-4 h-full w-full rounded-2xl border border-navy-200" aria-hidden="true" />
              <img
                src={IMG}
                alt="Professional movers from Glink Int carrying boxes during a home move in the UAE"
                className="relative aspect-[16/10] w-full rounded-2xl object-cover shadow-lg"
                loading="lazy"
              />
            </Reveal>
          </div>

          {/* Right: service rows */}
          <ul className="flex flex-col gap-3">
            {services.map((s, i) => (
              <Reveal
                as="li"
                key={s.title}
                delay={i * 80}
                className="group flex items-start gap-5 rounded-2xl border border-navy-100 bg-mist p-5 transition-all duration-300 hover:border-navy-300 hover:bg-white hover:shadow-[0_16px_36px_-22px_rgba(10,21,38,0.45)] sm:p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-navy-950">
                  <ServiceIcon index={i} />
                </span>
                <div>
                  <h3 className="text-[15px] font-bold text-navy-950">{s.title}</h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function ServiceIcon({ index }: { index: number }) {
  const common = {
    width: 21,
    height: 21,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  const icons = [
    <path key="m0" d="M3 10.5 12 3l9 7.5M5.5 9v11h13V9M9.5 20v-6h5v6" />,
    <path key="m1" d="M2 20V7h9v13M11 11h11v9M2 20h20M6 10.5h1M6 14h1" />,
    <path key="m2" d="M21 8.5 12 13 3 8.5 12 4l9 4.5ZM12 13v7M5 10.5v5c0 1.5 3.1 3 7 3s7-1.5 7-3v-5" />,
    <path key="m3" d="M21 8 12 3 3 8v8l9 5 9-5V8ZM3 8l9 5 9-5M12 13v8" />,
    <path key="m4" d="M12 3v12M7.5 10.5 12 15l4.5-4.5M4 19h16" />,
    <path key="m5" d="M3 21V8l7-5 7 5v13M3 21h18M9.5 21v-4h5v4" />,
  ]
  return <svg {...common}>{icons[index]}</svg>
}