// [x, y, espelhar, escala] ao longo do caule
const LEAVES = [
  [38, 238, false, 0.9],
  [46, 214, true, 1],
  [58, 186, false, 1.05],
  [72, 160, true, 1],
  [86, 130, false, 0.95],
  [100, 100, true, 0.9],
  [112, 70, false, 0.8],
  [122, 42, true, 0.65],
  [128, 16, false, 0.5],
]

/** Ramo decorativo em traço fino; o GSAP o "desenha" ao entrar na tela. */
export default function Botanical({ className = '' }) {
  return (
    <svg
      className={`botanical ${className}`}
      viewBox="0 0 200 280"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      data-botanical
    >
      <path d="M30 278 C52 212 74 150 128 10" />
      {LEAVES.map(([x, y, mirror, scale]) => (
        <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${mirror ? -scale : scale} ${scale}) rotate(-30)`}>
          <path d="M0 0 C8 -16 30 -22 46 -12 C36 6 14 12 0 0 Z" />
          <path d="M2 -1 L38 -10" />
        </g>
      ))}
    </svg>
  )
}
