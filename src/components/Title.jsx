import SplitWords from './SplitWords'

/** Título de seção: palavras mascaradas animadas pelo GSAP ao entrar na tela. */
export default function Title({ id, text, emphasis = '', className = '' }) {
  return (
    <h2 id={id} className={`title ${className}`.trim()} data-title>
      <SplitWords text={text} emphasis={emphasis} />
    </h2>
  )
}
