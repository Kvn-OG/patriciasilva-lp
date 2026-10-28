import { useState } from 'react'
import { MapPin, MessageCircle } from 'lucide-react'
import Button from './Button'
import Title from './Title'
import { ADDRESS } from '../config/siteConfig'
import { bookingUrl, mapEmbedUrl, mapsUrl } from '../config/links'

export default function Location() {
  const [mapActive, setMapActive] = useState(false)

  return (
    <section className="section location" id="localizacao" aria-labelledby="location-title">
      <span className="ghost ghost--right" aria-hidden="true" data-ghost>
        Cariacica
      </span>
      <div className="location__inner container">
        <div className="location__copy">
          <Title id="location-title" text="Estou esperando você em Cariacica!" emphasis="Cariacica" />
          <p className="prose" data-reveal>
            Meu espaço está localizado na Avenida Expedito Garcia, em Cariacica — ES, preparado para receber você para
            o seu momento de cuidado.
          </p>

          <div className="address-card" data-reveal>
            <span className="address-card__pin">
              <MapPin size={22} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <address className="address-card__text">
              {ADDRESS.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
            <div className="address-card__actions">
              <Button href={bookingUrl} external icon={MessageCircle}>
                Quero agendar meu horário
              </Button>
              <Button href={mapsUrl} external variant="outline" icon={MapPin}>
                Abrir no Google Maps
              </Button>
            </div>
          </div>
        </div>

        <div
          className={`map ${mapActive ? 'is-active' : ''}`}
          data-reveal-photo
          onClick={() => setMapActive(true)}
          onMouseLeave={() => setMapActive(false)}
        >
          <p className="map__hint" aria-hidden="true">
            Clique para interagir com o mapa
          </p>
          <iframe
            title="Mapa com a localização do atendimento: Avenida Expedito Garcia, 1453, Cariacica — ES"
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
