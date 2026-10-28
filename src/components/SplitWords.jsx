import { Fragment } from 'react'

/**
 * Divide um texto em palavras mascaradas para a animação de entrada de títulos.
 * O texto continua completo e legível no DOM (leitores de tela e sem JS).
 * `emphasis` recebe as palavras (separadas por espaço) que ficam em itálico.
 */
export default function SplitWords({ text, emphasis = '' }) {
  const emWords = new Set(emphasis.split(' ').filter(Boolean))
  const words = text.split(' ')

  return words.map((word, i) => (
    <Fragment key={`${word}-${i}`}>
      <span className="word">
        <span className="word__inner" data-word>
          {emWords.has(word.replace(/[.,!?]/g, '')) ? <em>{word}</em> : word}
        </span>
      </span>
      {i < words.length - 1 ? ' ' : null}
    </Fragment>
  ))
}
