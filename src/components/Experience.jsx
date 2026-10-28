import Photo from './Photo'
import { IMAGES } from '../config/siteConfig'

export default function Experience() {
  return (
    <section className="section experience" aria-labelledby="experience-title">
      <div className="experience__inner container">
        <div className="experience__copy">
          <p className="experience__badge" data-reveal>
            <span className="experience__plus" aria-hidden="true">
              8+
            </span>
            <span>
              <strong>Mais de 8 anos</strong>
              <span className="experience__badge-sub">de terapia podal</span>
            </span>
          </p>
          <h2 id="experience-title" className="title" data-reveal>
            Mais de 8 anos dedicados ao <em>cuidado dos pés.</em>
          </h2>
          <div className="prose" data-reveal>
            <p>
              Ao longo da minha trajetória na terapia podal, venho dedicando meu trabalho ao cuidado dos pés e à
              experiência de cada pessoa que chega até mim.
            </p>
            <p>
              Acredito que um bom atendimento começa com atenção, respeito e dedicação. Por isso, quero que você
              encontre aqui um espaço onde possa cuidar de si com tranquilidade e confiança.
            </p>
            <p className="prose__strong">Será um prazer receber você!</p>
          </div>
        </div>

        <div className="experience__visual">
          <div className="experience__photo" data-reveal-photo>
            <Photo image={IMAGES.ambiente} sizes="(min-width: 900px) 50vw, 92vw" />
          </div>
        </div>
      </div>
    </section>
  )
}
