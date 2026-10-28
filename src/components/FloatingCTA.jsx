import { MessageCircle } from 'lucide-react'
import { bookingUrl } from '../config/links'

/** Atalho fixo para o WhatsApp: aparece depois do hero e some no CTA final. */
export default function FloatingCTA() {
  if (!bookingUrl) return null

  return (
    <a
      className="float-cta"
      href={bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar atendimento pelo WhatsApp"
      data-float-cta
    >
      <MessageCircle size={22} aria-hidden="true" />
      <span>Agendar</span>
    </a>
  )
}
