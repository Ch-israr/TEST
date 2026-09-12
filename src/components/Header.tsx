import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'

import { site, telHref, whatsappHref } from '@/config/site'
import { cn } from '@/lib/utils'
import { LinkButton } from '@/components/Buttons'
import { Logo } from '@/components/Logo'

const links = [
  { label: 'Home', href: '/#home' },
  { label: 'Storage', href: '/#storage' },
  { label: 'Moving Services', href: '/#moving' },
  { label: 'Why Choose Us', href: '/#why-us' },
  { label: 'About Us', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.05 2.5a9.4 9.4 0 0 0-8.1 14.15L2.5 21.5l4.98-1.4A9.4 9.4 0 1 0 12.05 2.5Zm0 17.05a7.6 7.6 0 0 1-3.88-1.06l-.28-.17-2.95.83.83-2.87-.18-.3a7.65 7.65 0 1 1 6.46 3.57Zm4.28-5.6c-.23-.12-1.38-.68-1.6-.76-.21-.08-.37-.12-.52.12-.15.23-.6.76-.73.92-.13.15-.27.17-.5.05a6.2 6.2 0 0 1-1.83-1.13 6.9 6.9 0 0 1-1.27-1.58c-.13-.23-.01-.36.1-.48.11-.11.25-.28.37-.43.11-.14.15-.24.23-.4.07-.15.03-.28-.03-.4-.06-.11-.53-1.27-.72-1.74-.19-.45-.39-.39-.53-.4h-.45c-.15 0-.4.06-.6.29-.21.23-.8.77-.8 1.88s.81 2.19.93 2.34c.11.15 1.6 2.55 3.95 3.48 1.96.77 2.36.62 2.79.58.42-.03 1.37-.56 1.57-1.1.19-.55.19-1.01.14-1.11-.06-.1-.22-.16-.45-.28Z" />
    </svg>
  )
}

export { WhatsAppIcon }

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow duration-300',
        scrolled ? 'border-navy-100 shadow-[0_10px_30px_-18px_rgba(10,21,38,0.35)]' : 'border-transparent',
      )}
    >
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        <Link to="/" aria-label="Glink Int home" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 xl:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13.5px] font-semibold tracking-tight text-ink-soft transition-colors hover:text-navy-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          {telHref && (
            <LinkButton href={telHref} variant="outline" size="md" className="!px-4">
              <PhoneIcon />
              Call
            </LinkButton>
          )}
          {whatsappHref && (
            <LinkButton href={whatsappHref} variant="whatsapp" size="md" external>
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </LinkButton>
          )}
          <LinkButton href="/#contact" variant="accent" size="md">
            Get a Quote
          </LinkButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-navy-200 text-navy-900 xl:hidden"
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 4l10 10M14 4L4 14" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M2.5 5h13M2.5 9h13M2.5 13h13" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-x-0 top-[68px] bottom-0 z-40 flex flex-col overflow-y-auto bg-white transition-all duration-300 xl:hidden',
          open ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col gap-1 px-5 py-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3.5 text-[15px] font-semibold text-navy-900 transition-colors hover:bg-navy-50"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-2.5 border-t border-navy-100 px-5 py-6">
          {whatsappHref && (
            <LinkButton href={whatsappHref} variant="whatsapp" size="lg" external>
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Us
            </LinkButton>
          )}
          <LinkButton href="/#contact" variant="accent" size="lg" onClick={() => setOpen(false)}>
            Get a Quote
          </LinkButton>
          {telHref && (
            <a href={telHref} className="mt-1 text-center text-sm font-semibold text-navy-700">
              Call {site.phone}
            </a>
          )}
        </div>
      </div>
    </header>
  )
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  )
}