import Photo from './Photo'
import Title from './Title'
import { BLOBS, blobProps } from '../config/blobs'
import { IMAGES } from '../config/siteConfig'

export default function Experience() {
  return (
    <section className="section experience" aria-labelledby="experience-title">
      <div className="experience__inner container">
        <div className="experience__copy">
          <Title
            id="experience-title"
            text="Mais de 8 anos dedicados ao cuidado dos pés."
            emphasis="cuidado dos pés"
          />
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
          <div className="experience__photo" data-reveal-photo {...blobProps(BLOBS.experience)}>
            <Photo image={IMAGES.ambiente} sizes="(min-width: 900px) 50vw, 92vw" />
          </div>
          <p className="seal" data-chip>
            <span className="seal__num" aria-hidden="true">
              8+
            </span>
            <span className="seal__text">
              <strong>Mais de 8 anos</strong>
              de terapia podal
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
