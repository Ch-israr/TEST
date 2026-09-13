import { site } from '@/config/site'

const size = 42

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      <img
        src={dark ? '/logo-light.png' : '/logo.png'}
        alt=""
        width={size}
        height={Math.round((size * 62) / 95)}
        className="shrink-0"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`text-[17px] font-extrabold tracking-tight ${
            dark ? 'text-white' : 'text-navy-950'
          }`}
        >
          Glink&nbsp;Int
        </span>
        <span
          className={`mt-1 text-[9.5px] font-semibold uppercase tracking-[0.18em] ${
            dark ? 'text-white/55' : 'text-navy-500'
          }`}
        >
          {site.tagline}
        </span>
      </span>
    </span>
  )
}
