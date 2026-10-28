import Button from './Button'
import Photo from './Photo'
import Title from './Title'
import { IMAGES } from '../config/siteConfig'
import { bookingUrl } from '../config/links'

export default function About() {
  return (
    <section className="section about" id="sobre" aria-labelledby="about-title">
      <span className="ghost ghost--left" aria-hidden="true" data-ghost>
        Cuidado
      </span>

      <div className="about__inner container">
        <div className="about__visual">
          <div className="capsule capsule--tall" data-reveal-photo>
            <Photo image={IMAGES.cuidado} sizes="(min-width: 900px) 20vw, 44vw" />
          </div>
          <div className="capsule capsule--short" data-reveal-photo>
            <Photo image={IMAGES.detalhes} sizes="(min-width: 900px) 20vw, 44vw" />
          </div>
        </div>

        <div className="about__copy">
          <Title id="about-title" text="Cuidar dos seus pés também é uma forma de cuidar de você." emphasis="você" />
          <div className="prose" data-reveal>
            <p>
              Sei que, na correria do dia a dia, muitas vezes deixamos o cuidado com os nossos pés para depois. Mas
              eles nos acompanham em cada passo e também merecem atenção.
            </p>
            <p>
              Meu trabalho é dedicado à terapia podal, com um olhar atento às suas necessidades e cuidado em cada
              atendimento.
            </p>
            <p>
              Quero que você se sinta acolhido(a), confortável e seguro(a) ao reservar esse momento para cuidar de si.
            </p>
          </div>
          <div data-reveal>
            <Button href={bookingUrl} external variant="outline">
              Vamos cuidar dos seus pés?
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
