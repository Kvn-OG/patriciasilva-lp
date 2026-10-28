import { INSTAGRAM_URL, PROFESSIONAL } from '../config/siteConfig'

const LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Atendimento', href: '#atendimento' },
  { label: 'Curso Spa dos Pés', href: '#curso' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <p className="footer__name">
            {PROFESSIONAL.name} <span aria-hidden="true">|</span> {PROFESSIONAL.role}
          </p>
          <p>Cuidado podal com atenção e dedicação.</p>
          <p>Atendimento presencial em Cariacica — ES.</p>
        </div>

        <nav className="footer__nav" aria-label="Rodapé">
          <ul>
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            {INSTAGRAM_URL.trim() && (
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
      <p className="footer__copy container">
        © {year} {PROFESSIONAL.name}. Todos os direitos reservados.
      </p>
    </footer>
  )
}
