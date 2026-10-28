import { useEffect, useRef, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import Button from './Button'
import { NAV_LINKS, PROFESSIONAL } from '../config/siteConfig'
import { bookingUrl } from '../config/links'
import { startScroll, stopScroll } from '../animations/smoothScroll'

export default function Header() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const menuRef = useRef(null)

  // Esc fecha o menu, bloqueia a rolagem do fundo e devolve o foco ao botão.
  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    stopScroll()
    menuRef.current?.querySelector('a')?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      startScroll()
    }
  }, [open])

  // Fecha o menu se a janela crescer para o layout desktop.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 900px)')
    const onChange = (event) => event.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className="header" data-header>
      <div className="header__bar container">
        <a className="brand" href="#inicio" onClick={close} aria-label={`${PROFESSIONAL.name}, ${PROFESSIONAL.role} — início`}>
          <span className="brand__name">{PROFESSIONAL.name}</span>
          <span className="brand__role">{PROFESSIONAL.role}</span>
        </a>

        <nav className="nav" aria-label="Principal">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a className="nav__link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <Button href={bookingUrl} external variant="primary" className="header__cta">
            Agendar atendimento
          </Button>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        ref={menuRef}
        className={`mobile-menu ${open ? 'is-open' : ''}`}
        inert={!open}
      >
        <nav aria-label="Menu móvel">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button href={bookingUrl} external icon={MessageCircle} onClick={close}>
          Agendar atendimento
        </Button>
      </div>
    </header>
  )
}
