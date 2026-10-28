import { useState } from 'react'

/**
 * Imagem com proporção reservada (evita layout shift), lazy loading e
 * tratamento visual quando o arquivo não carrega.
 */
export default function Photo({ image, priority = false, className = '', sizes }) {
  const [failed, setFailed] = useState(false)

  return (
    <div
      className={`photo ${failed ? 'is-broken' : ''} ${className}`}
      style={{ aspectRatio: `${image.width} / ${image.height}` }}
      data-photo
    >
      {!failed && (
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}
