import { whatsappHref } from '@/config/site'
import { WhatsAppIcon } from '@/components/Header'

export function FloatingWhatsApp() {
  if (!whatsappHref) return null

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Glink Int on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-wa text-white shadow-[0_12px_30px_-10px_rgba(37,211,102,0.65)] transition-transform duration-200 hover:scale-105 md:bottom-7 md:right-7"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
        <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-white" />
      </span>
    </a>
  )
}