import { HandHeart, Leaf, UserRound, MessageCircle } from 'lucide-react'
import Button from './Button'
import { bookingUrl } from '../config/links'

const BENEFITS = [
  {
    icon: HandHeart,
    title: 'Cuidado especializado',
    text: 'Atenção dedicada à saúde dos seus pés.',
  },
  {
    icon: UserRound,
    title: 'Atendimento individualizado',
    text: 'Um olhar atento às suas necessidades.',
  },
  {
    icon: Leaf,
    title: 'Ambiente acolhedor',
    text: 'Um espaço preparado para receber você com conforto.',
  },
]

export default function Services() {
  return (
    <section className="section services" id="atendimento" aria-labelledby="services-title">
      <div className="container">
        <header className="services__head">
          <h2 id="services-title" className="title" data-reveal>
            Um cuidado especial, <em>pensado para você.</em>
          </h2>
          <div className="prose" data-reveal>
            <p>Cada pessoa tem suas próprias necessidades, e o cuidado com os pés merece atenção.</p>
            <p>
              Durante o atendimento, meu compromisso é oferecer uma experiência acolhedora, com dedicação e atenção ao
              cuidado podal.
            </p>
          </div>
        </header>

        <ul className="cards">
          {BENEFITS.map(({ icon: Icon, title, text }) => (
            <li className="card" key={title} data-card>
              <span className="card__icon">
                <Icon size={26} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3 className="card__title">{title}</h3>
              <p className="card__text">{text}</p>
            </li>
          ))}
        </ul>

        <div className="services__close" data-reveal>
          <p className="quote">Você merece se sentir bem cuidado(a) em cada visita.</p>
          <Button href={bookingUrl} external icon={MessageCircle}>
            Agendar pelo WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
