import {
  ADDRESS,
  COURSE_URL,
  GOOGLE_MAPS_URL,
  WHATSAPP_BOOKING_MESSAGE,
  WHATSAPP_COURSE_MESSAGE,
  WHATSAPP_NUMBER,
} from './siteConfig'

const onlyDigits = (value) => String(value ?? '').replace(/\D/g, '')

function whatsappUrl(message) {
  const number = onlyDigits(WHATSAPP_NUMBER)
  if (number.length < 12) return null // DDI + DDD + número
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

/** Link de agendamento (null enquanto o WhatsApp estiver pendente). */
export const bookingUrl = whatsappUrl(WHATSAPP_BOOKING_MESSAGE)

/** Link do curso: URL própria > WhatsApp com mensagem do curso > null. */
export const courseUrl = COURSE_URL.trim() || whatsappUrl(WHATSAPP_COURSE_MESSAGE)

export const mapsUrl =
  GOOGLE_MAPS_URL.trim() ||
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS.searchQuery)}`

if (import.meta.env.DEV) {
  const pending = []
  if (!bookingUrl) pending.push('WHATSAPP_NUMBER')
  if (!courseUrl) pending.push('COURSE_URL ou WHATSAPP_NUMBER (curso)')
  if (pending.length) {
    console.warn(`[siteConfig] Pendente: ${pending.join(', ')}. Botões correspondentes ficam desativados.`)
  }
}
