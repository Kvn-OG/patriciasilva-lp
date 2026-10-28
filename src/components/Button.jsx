import { ArrowUpRight } from 'lucide-react'

/**
 * Botão/link de ação. Sem `href` (contato pendente) vira um botão desativado,
 * para nunca publicar um link quebrado.
 */
export default function Button({
  href,
  variant = 'primary',
  icon: Icon = ArrowUpRight,
  external = false,
  className: extraClass = '',
  children,
  ...rest
}) {
  const className = `btn btn--${variant} ${extraClass}`.trim()
  const content = (
    <>
      <span className="btn__fill" aria-hidden="true" />
      <span className="btn__label">{children}</span>
      <Icon className="btn__icon" size={18} strokeWidth={1.75} aria-hidden="true" />
    </>
  )

  if (!href) {
    return (
      <button
        type="button"
        className={`${className} is-pending`}
        disabled
        title="Canal de contato em breve"
        {...rest}
      >
        {content}
      </button>
    )
  }

  return (
    <a
      className={className}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {content}
    </a>
  )
}
