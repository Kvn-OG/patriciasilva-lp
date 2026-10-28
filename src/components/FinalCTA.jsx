import { MessageCircle } from 'lucide-react'
import Button from './Button'
import { bookingUrl } from '../config/links'

export default function FinalCTA() {
  return (
    <section className="final" id="contato" aria-labelledby="final-title">
      <span className="final__ring final__ring--a" aria-hidden="true" />
      <span className="final__ring final__ring--b" aria-hidden="true" />
      <div className="final__inner container">
        <h2 id="final-title" className="title" data-reveal>
          Que tal dar aos seus pés o cuidado que eles <em>merecem?</em>
        </h2>
        <div className="prose" data-reveal>
          <p>Você não precisa deixar esse cuidado para depois.</p>
          <p>
            Entre em contato comigo, consulte os horários disponíveis e vamos encontrar o melhor momento para o seu
            atendimento.
          </p>
          <p className="prose__strong">Vou adorar receber você!</p>
        </div>
        <div data-reveal>
          <Button href={bookingUrl} external variant="light" icon={MessageCircle}>
            Falar comigo pelo WhatsApp
          </Button>
          {!bookingUrl && <p className="final__pending">Canal de contato em breve.</p>}
        </div>
      </div>
    </section>
  )
}
