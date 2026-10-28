import { MapPin, MessageCircle } from 'lucide-react'
import Button from './Button'
import Photo from './Photo'
import SplitWords from './SplitWords'
import { IMAGES } from '../config/siteConfig'
import { bookingUrl } from '../config/links'

export default function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title" data-hero>
      <div className="hero__inner container">
        <div className="hero__copy">
          <p className="eyebrow" data-hero-item>
            Terapia podal
          </p>
          <h1 id="hero-title" className="hero__title">
            <SplitWords text="Seus pés merecem cuidado. Você merece esse momento." emphasis="esse momento" />
          </h1>
          <p className="hero__lead" data-hero-item>
            Dedique um tempo a você e cuide da saúde dos seus pés com atenção, carinho e um atendimento especializado.
          </p>
          <p className="hero__text" data-hero-item>
            Há mais de 8 anos, trabalho com terapia podal, oferecendo cuidado e atenção para quem busca mais bem-estar
            no dia a dia.
          </p>
          <div className="hero__actions" data-hero-item>
            <Button href={bookingUrl} external icon={MessageCircle}>
              Quero agendar meu atendimento
            </Button>
            <p className="hero__place">
              <MapPin size={16} aria-hidden="true" />
              Atendimento presencial em Cariacica — ES.
            </p>
          </div>
        </div>

        <div className="hero__visual" data-hero-visual>
          <span className="hero__frame" aria-hidden="true" />
          <div className="hero__photo" data-reveal-photo>
            <Photo image={IMAGES.hero} priority sizes="(min-width: 900px) 40vw, 90vw" />
          </div>
        </div>
      </div>
    </section>
  )
}
