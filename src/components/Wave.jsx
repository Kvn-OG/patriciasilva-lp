/**
 * Borda ondulada de seção. O SVG tem o dobro da largura e um padrão periódico,
 * então o GSAP o desloca em loop contínuo sem emendas. Cor via --wave-fill.
 */
export default function Wave({ position = 'top' }) {
  return (
    <div className={`wave wave--${position}`} aria-hidden="true">
      <svg className="wave__svg" viewBox="0 0 2880 80" preserveAspectRatio="none" data-wave>
        <path d="M0 40 C240 0 480 80 720 40 C960 0 1200 80 1440 40 C1680 0 1920 80 2160 40 C2400 0 2640 80 2880 40 V80 H0 Z" />
      </svg>
    </div>
  )
}
