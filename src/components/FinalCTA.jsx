import { MessageCircle } from 'lucide-react'
import Botanical from './Botanical'
import Button from './Button'
import Title from './Title'
import Wave from './Wave'
import { bookingUrl } from '../config/links'

export default function FinalCTA() {
  return (
    <section className="band final" id="contato" aria-labelledby="final-title">
      <Wave position="top" />
      <div className="final__bg" aria-hidden="true">
        <span className="final__ring final__ring--a" />
        <span className="final__ring final__ring--b" />
        <Botanical className="final__leaf final__leaf--l" />
        <Botanical className="final__leaf final__leaf--r" />
      </div>

      <div className="final__inner container">
        <Title
          id="final-title"
          text="Que tal dar aos seus pés o cuidado que eles merecem?"
          emphasis="merecem"
        />
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
