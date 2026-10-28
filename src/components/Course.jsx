import Button from './Button'
import Photo from './Photo'
import { IMAGES } from '../config/siteConfig'
import { courseUrl } from '../config/links'

export default function Course() {
  return (
    <section className="course" id="curso" aria-labelledby="course-title">
      <div className="course__inner container">
        <div className="course__visual">
          <div className="course__photo" data-reveal-photo>
            <Photo image={IMAGES.spaPes} sizes="(min-width: 900px) 45vw, 92vw" />
          </div>
        </div>

        <div className="course__copy">
          <p className="eyebrow" data-reveal>
            Curso Spa dos Pés Completo
          </p>
          <h2 id="course-title" className="title" data-reveal>
            Quer conhecer mais sobre o universo do <em>Spa dos Pés?</em>
          </h2>
          <div className="prose" data-reveal>
            <p>
              Além dos meus atendimentos, também compartilho meus conhecimentos por meio do curso Spa dos Pés Completo.
            </p>
            <p>
              Se você tem interesse em aprender sobre esse universo e deseja conhecer melhor a formação, entre em
              contato para receber mais informações.
            </p>
          </div>
          <div className="course__action" data-reveal>
            <Button href={courseUrl} external variant="outline">
              Quero conhecer o curso
            </Button>
            <p className="course__note">Consulte os conteúdos e as condições diretamente comigo.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
