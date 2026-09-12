import { site } from '@/config/site'

const size = 30

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect x="1.5" y="1.5" width="29" height="29" rx="7" fill="#0a1526" />
        <path
          d="M9 11.5 L16 6 L23 11.5 V23.5 H18.6 V17.2 H13.4 V23.5 H9 Z"
          fill="#d9a441"
        />
        <path
          d="M9 11.5 L16 6 L23 11.5 V13.5 L16 8.4 L9 13.5 Z"
          fill="#f0c063"
        />
      </svg>
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